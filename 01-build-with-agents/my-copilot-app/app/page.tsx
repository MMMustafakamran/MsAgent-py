"use client";

import { useState, useEffect } from "react";
import { useAgent, CopilotChat } from "@copilotkit/react-core/v2";

type AgentState = {
  searches?: {
    query: string;
    done: boolean;
  }[];
};

function StateRenderingDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:4]
  const { agent } = useAgent({
    agentId: "my_agent",
  });
  const state = agent.state as AgentState | undefined;

  // [!code highlight:11]
  const renderedState = (
    <div className="bg-gray-100 p-3 rounded-lg border text-sm my-2 text-gray-900">
      <h3 className="font-semibold text-gray-900 mb-1">Agent Searches State:</h3>
      {state?.searches && state.searches.length > 0 ? (
        state.searches.map((search: { query: string; done: boolean }, index: number) => (
          <div key={index} className="text-gray-900">
            {search.done ? "✅ " : "⏳ "} {search.query}
          </div>
        ))
      ) : (
        <span className="text-gray-500 text-xs italic">No searches in state yet.</span>
      )}
    </div>
  );

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl border rounded-xl overflow-hidden shadow-lg bg-white p-4">
      {renderedState}
      <div className="h-[450px] border-t">
        <CopilotChat
          labels={{
            welcomeMessageText: "State Rendering Demo: Ask me to search for something!",
          }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">State Rendering Test</h1>
      <StateRenderingDemo />
    </main>
  );
}
