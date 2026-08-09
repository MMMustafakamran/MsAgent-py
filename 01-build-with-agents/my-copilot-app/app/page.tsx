"use client";

import { CustomChat } from "./components/custom-chat";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Headless UI Test</h1>
      <CustomChat />
    </main>
  );
}
