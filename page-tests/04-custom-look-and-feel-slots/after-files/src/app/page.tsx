import { CopilotChat } from "@copilotkit/react-core/v2";

const CustomMessageView = ({ messages, isRunning }: any) => (
  <div className="space-y-4 p-6">
    {messages?.map((msg: any) => (
      <div
        key={msg.id}
        className={msg.role === "user" ? "text-right" : "text-left"}
      >
        {msg.content}
      </div>
    ))}
    {isRunning && <div className="animate-pulse">Thinking...</div>}
  </div>
);

export default function Page() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8">Slots UI Test</h1>
      <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg">
        <CopilotChat 
          messageView={CustomMessageView}
          input="border-2 border-blue-400 rounded-xl m-2"
          labels={{
            chatInputPlaceholder: "Ask your agent anything...",
            welcomeMessageText: "How can I help you today?",
            chatDisclaimerText: "AI responses may be inaccurate.",
          }}
        />
      </div>
    </main>
  );
}
