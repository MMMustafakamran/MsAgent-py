"use client";

import { useState } from "react";
import { CopilotChat, CopilotSidebar, CopilotPopup } from "@copilotkit/react-core/v2";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"chat" | "sidebar" | "popup">("chat");

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Prebuilt Components Test</h1>
      
      {/* Component selector buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === "chat" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
        >
          CopilotChat
        </button>
        <button
          onClick={() => setActiveTab("sidebar")}
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === "sidebar" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
        >
          CopilotSidebar
        </button>
        <button
          onClick={() => setActiveTab("popup")}
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === "popup" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
        >
          CopilotPopup
        </button>
      </div>

      <div className="w-full max-w-3xl">
        {activeTab === "chat" && (
          <div className="h-[500px] border rounded-xl overflow-hidden shadow-lg bg-white">
            {/* [!code highlight:11] */}
            <CopilotChat
              labels={{
                welcomeMessageText: "Hi! How can I assist you today?",
              }}
              input={{
                textArea: "text-blue-500",
                sendButton: "bg-blue-600 hover:bg-blue-700",
              }}
            />
          </div>
        )}

        {activeTab === "sidebar" && (
          <div className="h-[500px] border rounded-xl overflow-hidden shadow-lg relative bg-white">
            {/* [!code highlight:8] */}
            <CopilotSidebar
              defaultOpen={true}
              labels={{
                modalHeaderTitle: "Sidebar Assistant",
                welcomeMessageText: "How can I help you today?",
              }}
            />
            <div className="p-8">
              <h2 className="text-xl font-bold">Main Application Content</h2>
            </div>
          </div>
        )}

        {activeTab === "popup" && (
          <div className="h-[500px] border rounded-xl overflow-hidden shadow-lg relative bg-white p-8">
            <h2 className="text-xl font-bold">Main Page Content</h2>
            {/* [!code highlight:7] */}
            <CopilotPopup
              labels={{
                modalHeaderTitle: "Popup Assistant",
                welcomeMessageText: "Need any help?",
              }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
