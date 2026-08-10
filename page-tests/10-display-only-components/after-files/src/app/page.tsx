"use client";

import { useState, useEffect } from "react";
import { CopilotChat, useComponent } from "@copilotkit/react-core/v2";
import { z } from "zod";

const weatherSchema = z.object({
  city: z.string().describe("City name"),
  temperature: z.number().describe("Temperature in Fahrenheit"),
  condition: z.string().describe("Weather condition"),
});

// [!code highlight:13]
function WeatherCard({
  city,
  temperature,
  condition,
}: z.infer<typeof weatherSchema>) {
  return (
    <div className="rounded-lg border p-4 bg-blue-50 border-blue-200 text-blue-900 my-2 shadow-sm">
      <h3 className="font-semibold text-lg text-blue-900">{city}</h3>
      <p className="text-2xl font-bold text-blue-950">{temperature}°F</p>
      <p className="text-sm text-blue-700">{condition}</p>
    </div>
  );
}

function DisplayOnlyDemo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // [!code highlight:7]
  useComponent({
    name: "showWeather",
    description: "Display a weather card for a city.",
    parameters: weatherSchema,
    render: WeatherCard as any,
  });

  // [!code highlight:8]
  useComponent({
    name: "showGreeting",
    render: ({ message }: { message: string }) => (
      <div className="rounded border p-3 bg-green-50 border-green-200 text-green-900 my-2">
        <p className="font-medium text-green-900">{message}</p>
      </div>
    ) as any,
  });

  if (!mounted) return null;

  return (
    <div className="w-full max-w-2xl h-[600px] border rounded-xl overflow-hidden shadow-lg bg-white">
      <CopilotChat
        labels={{
          welcomeMessageText: "Display-Only Component Demo: Try asking to show weather or greetings!",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Display-Only Components Test</h1>
      <DisplayOnlyDemo />
    </main>
  );
}
