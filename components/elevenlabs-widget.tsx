import Script from "next/script";
import type React from "react";

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
      <elevenlabs-convai agent-id="agent_6901kktavnemfmvt9t81437kafg5"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        type="text/javascript"
        strategy="afterInteractive"
      />
    </>
  );
}
