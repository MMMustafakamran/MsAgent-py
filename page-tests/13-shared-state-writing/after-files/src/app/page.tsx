"use client";

import { useState, useEffect } from "react";
// [!code highlight:1]
import { useAgent, CopilotChat } from "@copilotkit/react-core/v2";

type AgentState = {
  language: "english" | "spanish";
};

function SharedStateDemo() {
  const [mounted, setMounted] = useState(false);
  
  // [!code highlight:3]
  const { agent } = useAgent({
    agentId: "my_agent",
  });
  const state = agent.state as AgentState | undefined;

  useEffect(() => {
    setMounted(true);
    if (!state?.language) {
      agent.setState({ language: "english" });
    }
  }, []);

  // [!code highlight:3]
  const toggleLanguage = () => {
    agent.setState({ language: state?.language === "english" ? "spanish" : "english" });
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl border rounded-xl overflow-hidden shadow-lg bg-white p-4">
      <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center text-gray-900">
        <div>
          {/* [!code highlight:1] */}
          <p className="font-medium text-gray-900">Language: {state?.language || "english"}</p>
        </div>
        {/* [!code highlight:1] */}
        <button
          onClick={toggleLanguage}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          Toggle Language
        </button>
      </div>
      <div className="h-[450px] border-t">
        <CopilotChat
          labels={{
            welcomeMessageText: "Shared State Demo: Toggle language or ask me to change language!",
          }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Writing Agent State Test</h1>
      <SharedStateDemo />
    </main>
  );
}
