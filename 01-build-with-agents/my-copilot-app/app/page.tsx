"use client";

import { CopilotChat } from "@copilotkit/react-core/v2";

// [!code highlight:13]
const CustomMessageView = ({ messages, isRunning }: any) => (
  <div className="space-y-4 p-6">
    {messages?.map((msg: any) => (
      <div
        key={msg.id}
        className={msg.role === "user" ? "text-right" : "text-left"}
      >
        <span className="inline-block bg-gray-100 p-3 rounded-lg">
          {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
        </span>
      </div>
    ))}
    {isRunning && <div className="animate-pulse text-gray-500">Thinking...</div>}
  </div>
);

export default function Page() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Slots UI Test</h1>
      
      <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg bg-white">
        {/* [!code highlight:21] */}
        <CopilotChat
          messageView={CustomMessageView as any}
          input={{
            autoFocus: true,
            className: "border-2 border-blue-400 rounded-xl m-2",
          }}
          labels={{
            chatInputPlaceholder: "Ask your agent anything...",
            welcomeMessageText: "How can I help you today?",
            chatDisclaimerText: "AI responses may be inaccurate.",
          }}
        >
          {/* [!code highlight:7] */}
          {({ messageView, input, scrollView }) => (
            <div className="flex flex-col h-full">
              <header className="p-4 border-b font-semibold bg-gray-100">My Agent (Slots Test)</header>
              <div className="flex-1 overflow-y-auto">{scrollView || messageView}</div>
              <div className="border-t p-2">{input}</div>
            </div>
          )}
        </CopilotChat>
      </div>
    </main>
  );
}
