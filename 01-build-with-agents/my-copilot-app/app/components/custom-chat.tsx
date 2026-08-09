"use client";

import { useAgent, useCopilotKit } from "@copilotkit/react-core/v2";
import { randomUUID } from "@copilotkit/shared";
import { useState, useCallback } from "react";

export function CustomChat() {
  const { agent } = useAgent();
  const { copilotkit } = useCopilotKit();
  const [input, setInput] = useState("");

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    agent.addMessage({
      id: randomUUID(),
      role: "user",
      content: input,
    });

    setInput("");

    await copilotkit.runAgent({ agent });
  }, [input, agent, copilotkit]);

  const stopAgent = useCallback(() => {
    copilotkit.stopAgent({ agent });
  }, [agent, copilotkit]);

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl border rounded-xl shadow-lg bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {agent.messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.role === "user"
                ? "ml-auto bg-blue-100 rounded-lg p-3 max-w-md text-blue-900"
                : "bg-gray-100 rounded-lg p-3 max-w-md text-gray-900"
            }
          >
            <p className="text-xs font-semibold uppercase text-gray-500 mb-1">{msg.role}</p>
            <p>{typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}</p>
          </div>
        ))}
        {agent.isRunning && <div className="text-gray-400 italic animate-pulse">Thinking...</div>}
        {agent.isRunning && (
          <button
            onClick={stopAgent}
            className="text-red-500 text-sm font-medium hover:underline mt-2"
          >
            Stop Generation
          </button>
        )}
      </div>

      <form
        className="border-t p-4 flex gap-2 bg-gray-50"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={agent.isRunning}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
