from __future__ import annotations
import os
import uvicorn
from typing import Annotated
from pydantic import BaseModel, Field
from agent_framework import Agent, tool
from agent_framework.openai import OpenAIChatClient
from agent_framework.ag_ui import AgentFrameworkAgent, add_agent_framework_fastapi_endpoint
from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv()

class SearchItem(BaseModel):
    query: str
    done: bool

# [!code highlight:15]
STATE_SCHEMA: dict[str, object] = {
    "searches": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "query": {"type": "string"},
                "done": {"type": "boolean"},
            },
            "required": ["query", "done"],
            "additionalProperties": False,
        },
        "description": "List of searches and whether each is done.",
    }
}

# [!code highlight:8]
PREDICT_STATE_CONFIG: dict[str, dict[str, str]] = {
    "searches": {
        "tool": "update_searches",
        "tool_argument": "searches",
    }
}

# [!code highlight:6]
@tool
def update_searches(
    searches: Annotated[list[SearchItem], Field(description="The complete list of user's searches.")],
) -> str:
    return f"Searches updated. Tracking {len(searches)} item(s)."

def _build_chat_client():
    if os.getenv("AZURE_OPENAI_ENDPOINT"):
        return OpenAIChatClient(
            model=os.getenv("AZURE_OPENAI_CHAT_DEPLOYMENT_NAME", "gpt-4o-mini"),
            api_key=os.getenv("AZURE_OPENAI_API_KEY"),
            azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
        )
    if os.getenv("OPENAI_API_KEY"):
        return OpenAIChatClient(
            model=os.getenv("OPENAI_CHAT_MODEL_ID", "gpt-4o-mini"),
            api_key=os.getenv("OPENAI_API_KEY"),
        )
    raise RuntimeError(
        "Set either AZURE_OPENAI_ENDPOINT + AZURE_OPENAI_API_KEY, or OPENAI_API_KEY."
    )

chat_client = _build_chat_client()

base_agent = Agent(
    name="search_agent",
    instructions=(
        "You help users create and run searches.\n\n"
        "State sync rules:\n"
        "- Maintain a list of searches: each item has { query, done }.\n"
        "- When adding a new search, call `update_searches` with the FULL list, including the new item with done=true.\n"
        "- All searches in the list should have done=true unless explicitly in progress.\n"
    ),
    client=chat_client,
    tools=[update_searches],
)

# [!code highlight:7]
agent = AgentFrameworkAgent(
    agent=base_agent,
    name="my_agent",
    description="Maintains a list of searches and streams state to the UI.",
    state_schema=STATE_SCHEMA,
    predict_state_config=PREDICT_STATE_CONFIG,
)

app = FastAPI(title="Microsoft Agent Framework - Quickstart")
add_agent_framework_fastapi_endpoint(app=app, agent=agent, path="/")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
