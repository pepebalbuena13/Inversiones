"use client";

import Script from "next/script";
import { ADSENSE_CLIENT_ID, useAdConsent } from "@/lib/useAdConsent";

/**
 * Loads the Google AdSense script only after the visitor has accepted
 * cookies, and only once NEXT_PUBLIC_ADSENSE_CLIENT_ID is configured.
 * Renders nothing until both conditions are met.
 */
export default function AdSenseLoader() {
  const consentGiven = useAdConsent();

  if (!ADSENSE_CLIENT_ID || !consentGiven) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
