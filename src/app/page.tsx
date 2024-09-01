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
        server="1276075295287545856"
        channel="1279834466965258270"
        width={800}
        height={600}
      />
    </main>
  );
}
