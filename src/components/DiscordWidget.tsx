"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

interface IDiscordWidgetProps {
  reRenderIntervalInSeconds: number;
  server: string;
  channel: string;
}

export default function DiscordWidget({
  server,
  channel,
  reRenderIntervalInSeconds,
}: IDiscordWidgetProps) {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(key);
      setKey(Date.now());
    }, reRenderIntervalInSeconds * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [key, reRenderIntervalInSeconds]);

  return (
    <WidgetBot
      className="w-full shadow-backdrop"
      key={key}
      server={server}
      channel={channel}
      height={600}
      notifications={true}
    />
  );
}
