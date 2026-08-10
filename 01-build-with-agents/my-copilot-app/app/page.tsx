"use client";

import { useState, useEffect } from "react";
import { CopilotChat, useRenderTool, useDefaultRenderTool } from "@copilotkit/react-core/v2";
import { z } from "zod";

function ToolRenderingDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:14]
  useRenderTool({
    name: "get_weather",
    parameters: z.object({ location: z.string() }),
    render: ({ status, parameters }) => {
      return (
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-900 my-2">
          {status !== "complete" && "Calling weather API..."}
          {status === "complete" &&
            `Called the weather API for ${parameters.location}.`}
        </div>
      );
    },
  });

  // [!code highlight:15]
  useDefaultRenderTool({
    render: ({ name, status, result }) => {
      return (
        <div className="bg-gray-100 p-3 rounded-lg text-sm border my-2 text-gray-800">
          <span>
            {status === "complete" ? "✓ " : "⏳ "}
            Tool Call: <strong>{name}</strong>
          </span>
          {status === "complete" && result && (
            <pre className="text-xs bg-gray-200 p-2 rounded mt-1 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      );
    },
  });

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg bg-white">
      <CopilotChat
        labels={{
          welcomeMessageText: "Ask me about the weather or any tool call!",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tool Rendering Test</h1>
      <ToolRenderingDemo />
    </main>
  );
}
