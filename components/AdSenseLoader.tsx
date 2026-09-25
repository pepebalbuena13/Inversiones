"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/useCookieConsent";

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

/**
 * Loads the Google AdSense script only after the visitor has accepted
 * cookies, and only once NEXT_PUBLIC_ADSENSE_CLIENT_ID is configured.
 * Renders nothing until both conditions are met.
 */
export default function AdSenseLoader() {
  const consentGiven = useCookieConsent();

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
