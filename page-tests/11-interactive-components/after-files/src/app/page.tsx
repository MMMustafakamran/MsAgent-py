"use client";

import { CopilotChat, useHumanInTheLoop } from "@copilotkit/react-core/v2";
import { z } from "zod";

function InteractiveDemo() {
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
        <div className="border border-amber-300 bg-amber-50 p-4 rounded-lg my-2 text-amber-900 shadow-sm space-y-3">
          <h3 className="font-semibold text-amber-950">Approval Required</h3>
          <pre className="text-xs bg-amber-100 p-2 rounded text-amber-900 border border-amber-200">{args.command}</pre>
          <div className="flex gap-2">
            <button
              onClick={() => respond?.("APPROVED")}
              className="bg-green-600 text-white text-xs px-3 py-1.5 rounded hover:bg-green-700 font-medium"
            >
              Approve
            </button>
            <button
              onClick={() => respond?.("REJECTED")}
              className="bg-red-600 text-white text-xs px-3 py-1.5 rounded hover:bg-red-700 font-medium"
            >
              Deny
            </button>
          </div>
        </div>
      );
    },
  });

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
