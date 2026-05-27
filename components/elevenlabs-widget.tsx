"use client";

import Script from "next/script";
import { useEffect, useState, useCallback } from "react";

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
  const [mounted, setMounted] = useState(false);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const fetchSignedUrl = useCallback(async () => {
    try {
      const response = await fetch("/api/elevenlabs/signed-url");
      if (response.ok) {
        const data = await response.json();
        setSignedUrl(data.signed_url);
      }
    } catch (error) {
      console.error("[v0] Failed to fetch signed URL:", error);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && scriptLoaded) {
      fetchSignedUrl();
    }
  }, [mounted, scriptLoaded, fetchSignedUrl]);

  if (!mounted) return null;

  return (
    <>
      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      {signedUrl && <elevenlabs-convai signed-url={signedUrl} />}
    </>
  );
}
