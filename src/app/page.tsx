"use client";

import DiscordWidget from "@/components/DiscordWidget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [seconds, setSeconds] = useState("30");
  const [reRenderIntervalInSeconds, setReRenderIntervalInSeconds] =
    useState(30);

  const [serverInput, setServerInput] = useState("1276075295287545856");
  const [server, setServer] = useState("1276075295287545856");

  const [channelInput, setChannelInput] = useState("1279834466965258270");
  const [channel, setChannel] = useState("1279834466965258270");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReRenderIntervalInSeconds(Number(seconds));
    setServer(serverInput);
    setChannel(channelInput);
    toast("Widget settings updated successfully.");
  };

  return (
    <main className="bg-black flex flex-col md:flex-row  min-h-screen w-screen items-center justify-center gap-32 py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <Label className="text-white" htmlFor="interval">
            Widget re-render time interval (seconds)
          </Label>
          <Input
            className="text-center text-white"
            type="number"
            id="interval"
            value={seconds}
            placeholder="Enter time in seconds"
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>

        <div>
          <Label className="text-white" htmlFor="server">
            Server ID
          </Label>
          <Input
            className="text-center text-white"
            type="string"
            id="server"
            value={serverInput}
            placeholder="Enter server ID"
            onChange={(e) => setServerInput(e.target.value)}
          />
        </div>

        <div>
          <Label className="text-white" htmlFor="channel">
            Channel ID
          </Label>
          <Input
            className="text-center text-white"
            type="string"
            id="channel"
            value={channelInput}
            placeholder="Enter channel ID"
            onChange={(e) => setChannelInput(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full font-bold tracking-wide">
          Update Widget Settings
        </Button>
      </form>

      <div className="w-full max-w-3xl">
        <DiscordWidget
          server={server}
          channel={channel}
          reRenderIntervalInSeconds={reRenderIntervalInSeconds}
        />
      </div>
    </main>
  );
}
