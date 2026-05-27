"use client";

import Script from "next/script";
import { useEffect, useState, useCallback } from "react";
import { Mic, MicOff, Loader2 } from "lucide-react";
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
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSignedUrl() {
      try {
        const response = await fetch("/api/elevenlabs/signed-url");
        const data = await response.json();
        if (response.ok && data.signed_url) {
          setSignedUrl(data.signed_url);
        } else {
          setError(data.error || `Failed: ${response.status}`);
        }
      } catch (err) {
        console.error("[v0] Failed to fetch signed URL:", err);
        setError("Network error");
      } finally {
        setLoading(false);
      }
    }
    fetchSignedUrl();
  }, []);

  return (
    <>
      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="afterInteractive"
      />
      {signedUrl && <elevenlabs-convai signed-url={signedUrl} />}
    </>
  );
}

export function TalkToAIButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    // Find the ElevenLabs widget and trigger it
    const widget = document.querySelector("elevenlabs-convai");
    if (widget) {
      // Try to find the button inside the shadow DOM or trigger the widget
      const shadowRoot = (widget as HTMLElement).shadowRoot;
      if (shadowRoot) {
        const button = shadowRoot.querySelector("button");
        if (button) {
          button.click();
          setIsActive(true);
          return;
        }
      }
      // Fallback: dispatch a click event on the widget itself
      widget.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      setIsActive(true);
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
