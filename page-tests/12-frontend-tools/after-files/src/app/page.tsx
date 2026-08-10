"use client";

import { useState, useEffect } from "react";
import { CopilotChat, useFrontendTool } from "@copilotkit/react-core/v2";
import { z } from "zod";

function FrontendToolsDemo() {
  const [mounted, setMounted] = useState(false);
  const [lastGreeting, setLastGreeting] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:12]
  useFrontendTool({
    name: "sayHello",
    description: "Say hello to the user",
    parameters: z.object({
      name: z.string().describe("The name of the user to say hello to"),
    }),
    handler: async ({ name }) => {
      setLastGreeting(`Hello, ${name}!`);
      return `Said hello to ${name}!`;
    },
  });

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl border rounded-xl overflow-hidden shadow-lg bg-white p-4">
      {lastGreeting && (
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-900 mb-4 font-medium">
          Frontend Alert: {lastGreeting}
        </div>
      )}
      <div className="h-[500px]">
        <CopilotChat
          labels={{
            welcomeMessageText: "Frontend Tools Demo: Ask me to say hello to someone!",
          }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Frontend Tools Test</h1>
      <FrontendToolsDemo />
    </main>
  );
}
