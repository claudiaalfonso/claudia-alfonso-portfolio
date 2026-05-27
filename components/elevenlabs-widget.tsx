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
  const [error, setError] = useState<string | null>(null);

  const fetchSignedUrl = useCallback(async () => {
    try {
      console.log("[v0] Fetching signed URL...");
      const response = await fetch("/api/elevenlabs/signed-url");
      const data = await response.json();
      console.log("[v0] Signed URL response:", data);
      if (response.ok && data.signed_url) {
        setSignedUrl(data.signed_url);
      } else {
        setError(data.error || "Failed to get signed URL");
      }
    } catch (err) {
      console.error("[v0] Failed to fetch signed URL:", err);
      setError("Network error");
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
        onLoad={() => {
          console.log("[v0] ElevenLabs script loaded");
          setScriptLoaded(true);
        }}
      />
      {error && (
        <div style={{ position: "fixed", bottom: 20, right: 20, background: "red", color: "white", padding: 10, borderRadius: 8, zIndex: 9999 }}>
          ElevenLabs Error: {error}
        </div>
      )}
      {signedUrl && <elevenlabs-convai signed-url={signedUrl} />}
    </>
  );
}
