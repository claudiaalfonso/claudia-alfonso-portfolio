"use client";

import Script from "next/script";
import { useCallback, useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id"?: string;
          "signed-url"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsWidget() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        type="text/javascript"
      />
      <elevenlabs-convai agent-id="agent_6901kktavnemfmvt9t81437kafg5" />
    </>
  );
}

export function TalkToAIButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    const widget = document.querySelector("elevenlabs-convai");
    if (widget) {
      const shadowRoot = (widget as HTMLElement).shadowRoot;
      if (shadowRoot) {
        const callButton = shadowRoot.querySelector('[aria-label*="call"], [aria-label*="Call"], [aria-label*="Start"], .call-button, .start-button') as HTMLButtonElement;
        if (callButton) {
          callButton.click();
          setIsActive((value) => !value);
          return;
        }

        const orb = shadowRoot.querySelector('.orb, .avatar, [class*="orb"], [class*="avatar"]') as HTMLElement;
        if (orb) {
          orb.click();
          setIsActive((value) => !value);
          return;
        }

        const anyButton = shadowRoot.querySelector('button:not([aria-label*="mute"]):not([aria-label*="Mute"])') as HTMLButtonElement;
        if (anyButton) {
          anyButton.click();
          setIsActive((value) => !value);
          return;
        }
      }

      (widget as HTMLElement).click();
      setIsActive((value) => !value);
    }
  }, []);

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-fit gap-2 border-primary/30 hover:bg-primary/5"
      onClick={handleClick}
    >
      {isActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
      Talk to my AI clone
    </Button>
  );
}
