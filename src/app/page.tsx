"use client";

import dynamic from "next/dynamic";

const WidgetBot = dynamic(
  () => import("@widgetbot/react-embed"),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="bg-slate-950 flex min-h-screen flex-col items-center justify-between p-24">
      <WidgetBot
        server="299881420891881473"
        channel="355719584830980096"
        width={800}
        height={600}
      />
    </main>
  );
}
