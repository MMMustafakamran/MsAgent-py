"use client";

import { useState, useEffect } from "react";
// [!code highlight:1]
import { useAgent, CopilotChat } from "@copilotkit/react-core/v2";

function EventLogDemo() {
  const [mounted, setMounted] = useState(false);
  const [eventLogs, setEventLogs] = useState<string[]>([]);

  // [!code highlight:2]
  const { agent } = useAgent({ agentId: "my_agent" });

  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:15]
  useEffect(() => {
    if (!agent) return;
    const subscription = agent.subscribe({
      onTextMessageContentEvent({ textMessageBuffer }) {
        setEventLogs((prev) => [...prev.slice(-4), `Streaming text: ${textMessageBuffer}`]);
      },
      onToolCallEndEvent({ toolCallName }) {
        setEventLogs((prev) => [...prev.slice(-4), `Tool called: ${toolCallName}`]);
      },
      onStateChanged({ agent }) {
        setEventLogs((prev) => [...prev.slice(-4), `State changed: ${JSON.stringify(agent.state)}`]);
      },
    });
    return () => subscription.unsubscribe();
  }, [agent]);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl border rounded-xl overflow-hidden shadow-lg bg-white p-4">
      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-xs font-mono text-gray-900 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 font-sans">AG-UI Protocol SSE Event Log:</h3>
        {eventLogs.length > 0 ? (
          eventLogs.map((log, index) => (
            <div key={index} className="text-gray-900">
              ➜ {log}
            </div>
          ))
        ) : (
          <span className="text-gray-500 italic font-sans">Send a message to see live SSE protocol events.</span>
        )}
      </div>
      <div className="h-[450px] border-t">
        <CopilotChat
          labels={{
            welcomeMessageText: "AG-UI Protocol Demo: Send a message to stream SSE events!",
          }}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">AG-UI Protocol Test</h1>
      <EventLogDemo />
    </main>
  );
}
