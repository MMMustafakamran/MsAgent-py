"use client";

import { useState } from "react";
// [!code highlight:2]
import { useAgent, useCopilotKit } from "@copilotkit/react-core/v2";
import { randomUUID } from "@copilotkit/shared";

export default function Page() {
  // [!code highlight:2]
  const { agent } = useAgent();
  const { copilotkit } = useCopilotKit();
  const [prompt, setPrompt] = useState("");

  const handleProgrammaticRun = async () => {
    if (!prompt.trim()) return;
    
    // [!code highlight:8]
    agent.addMessage({
      id: randomUUID(),
      role: "user",
      content: prompt,
    });
    setPrompt("");

    await copilotkit.runAgent({ agent });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Programmatic Control Test</h1>

      <div className="w-full max-w-2xl bg-white border rounded-xl p-6 shadow-lg space-y-6">
        {/* [!code highlight:8] */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-sm text-gray-900">
          <h2 className="font-semibold text-gray-900">Agent Telemetry</h2>
          <p className="text-gray-900"><strong className="text-gray-900">Agent Name:</strong> {agent.name || "Default"}</p>
          <p className="text-gray-900"><strong className="text-gray-900">Status:</strong> {agent.isRunning ? "Running..." : "Idle"}</p>
          <p className="text-gray-900"><strong className="text-gray-900">Total Messages:</strong> {agent.messages.length}</p>
        </div>

        {/* Message list */}
        <div className="h-64 overflow-y-auto border rounded-lg p-4 space-y-3">
          {/* [!code highlight:10] */}
          {agent.messages.map((msg) => (
            <div key={msg.id} className={msg.role === "user" ? "text-right" : "text-left"}>
              <span className={`inline-block p-2 rounded-lg text-sm ${msg.role === "user" ? "bg-blue-100 text-blue-900" : "bg-gray-200 text-gray-900"}`}>
                <strong>{msg.role}: </strong>
                {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
              </span>
            </div>
          ))}
          {agent.isRunning && <div className="text-gray-400 italic text-sm animate-pulse">Agent is processing...</div>}
        </div>

        {/* Programmatic controls */}
        <div className="flex gap-2">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt for copilotkit.runAgent()..."
            className="flex-1 border rounded-lg px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleProgrammaticRun}
            disabled={agent.isRunning}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            runAgent()
          </button>
        </div>
      </div>
    </main>
  );
}
