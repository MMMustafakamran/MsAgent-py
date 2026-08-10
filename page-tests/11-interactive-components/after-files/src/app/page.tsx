"use client";

import { useState, useEffect } from "react";
import { CopilotChat, useHumanInTheLoop } from "@copilotkit/react-core/v2";
import { z } from "zod";

function InteractiveDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:22]
  useHumanInTheLoop({
    name: "humanApprovedCommand",
    description: "Ask human for approval to run a command.",
    parameters: z.object({
      command: z.string().describe("The command to run"),
    }),
    render: ({ args, respond, status }) => {
      if (status !== "executing") return null;
      return (
        <div>
          <pre>{args.command}</pre>
          <button onClick={() => respond?.(`Tell the user the command ran`)}>
            Approve
          </button>
          <button
            onClick={() => respond?.(`Tell the user the command wasn't run`)}
          >
            Deny
          </button>
        </div>
      );
    },
  });

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg bg-white">
      <CopilotChat
        labels={{
          welcomeMessageText: "Interactive Human-in-the-Loop Demo: Ask me to run a command!",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Interactive Components Test</h1>
      <InteractiveDemo />
    </main>
  );
}
