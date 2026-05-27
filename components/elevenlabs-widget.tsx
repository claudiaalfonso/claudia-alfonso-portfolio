"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

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
        console.log("[v0] ElevenLabs API response:", response.status, data);
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
      {loading && (
        <div style={{ position: "fixed", bottom: 20, right: 20, background: "#333", color: "white", padding: 10, borderRadius: 8, zIndex: 9999 }}>
          Loading voice agent...
        </div>
      )}
      {error && (
        <div style={{ position: "fixed", bottom: 20, right: 20, background: "#dc2626", color: "white", padding: 10, borderRadius: 8, zIndex: 9999 }}>
          Voice Agent Error: {error}
        </div>
      )}
      {signedUrl && <elevenlabs-convai signed-url={signedUrl} />}
    </>
  );
}
