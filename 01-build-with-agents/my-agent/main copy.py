from __future__ import annotations
import os
import uvicorn
from agent_framework import Agent
from agent_framework.openai import OpenAIChatClient
from agent_framework.ag_ui import add_agent_framework_fastapi_endpoint
from dotenv import load_dotenv
from fastapi import FastAPI

load_dotenv()

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

agent = Agent(
    name="MyAgent",
    instructions="You are a helpful assistant.",
    client=chat_client,
)

app = FastAPI(title="Microsoft Agent Framework - Quickstart")
add_agent_framework_fastapi_endpoint(app=app, agent=agent, path="/")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
