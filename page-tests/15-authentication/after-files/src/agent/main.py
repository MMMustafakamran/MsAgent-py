from __future__ import annotations
import os
import uvicorn
from agent_framework import Agent
from agent_framework.openai import OpenAIChatClient
from agent_framework.ag_ui import add_agent_framework_fastapi_endpoint
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI(title="CopilotKit + Microsoft Agent Framework (Python)")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# [!code highlight:13]
REQUIRED_BEARER_TOKEN = os.getenv("AUTH_BEARER_TOKEN", "sample-test-auth-token")

@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if REQUIRED_BEARER_TOKEN and request.url.path == "/":
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing bearer token")
        token = auth_header.split(" ", 1)[1].strip()
        if token != REQUIRED_BEARER_TOKEN:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    return await call_next(request)

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

add_agent_framework_fastapi_endpoint(app=app, agent=agent, path="/")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
