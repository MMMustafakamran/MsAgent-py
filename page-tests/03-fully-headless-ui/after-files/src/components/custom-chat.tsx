import { useAgent } from "@copilotkit/react-core/v2";
import { useCopilotKit } from "@copilotkit/react-core/v2";
import { randomUUID } from "@copilotkit/shared";
import { useState, useCallback } from "react";

export function CustomChat() {
  //highlighted
  const { agent } = useAgent();
  const { copilotkit } = useCopilotKit();
  const [input, setInput] = useState("");

  //highlighted
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
    //highlighted
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {agent.messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.role === "user"
                ? "ml-auto bg-blue-100 rounded-lg p-3 max-w-md"
                : "bg-gray-100 rounded-lg p-3 max-w-md"
            }
          >
            <p className="text-sm font-medium">{msg.role}</p>
            <p>{msg.content}</p>
          </div>
        ))}
        {agent.isRunning && <div className="text-gray-400">Thinking...</div>}
        {agent.isRunning && (
            <button onClick={stopAgent} className="text-red-500">
            Stop
            </button>
        )}
      </div>

      <form
        className="border-t p-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button type="submit" disabled={agent.isRunning}>
          Send
        </button>
      </form>
    </div>
  );
}
