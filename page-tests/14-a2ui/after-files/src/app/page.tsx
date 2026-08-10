"use client";

import { useState, useEffect } from "react";
import { CopilotChat } from "@copilotkit/react-core/v2";

function A2UIDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg bg-white">
      {/* [!code highlight:5] */}
      <CopilotChat
        labels={{
          welcomeMessageText: "A2UI Spec Demo: A2UI renderer activates automatically for declarative streaming UI!",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">A2UI Declarative UI Test</h1>
      <A2UIDemo />
    </main>
  );
}
