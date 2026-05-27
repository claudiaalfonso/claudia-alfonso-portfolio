"use client";

import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TalkToAIButton() {
  const handleClick = () => {
    const widget = document.querySelector("elevenlabs-convai");
    if (widget) {
      (widget as HTMLElement).click();
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-fit gap-2 border-primary/30 hover:bg-primary/5"
      onClick={handleClick}
    >
      <Mic className="w-4 h-4" />
      Talk to my AI clone
    </Button>
  );
}
