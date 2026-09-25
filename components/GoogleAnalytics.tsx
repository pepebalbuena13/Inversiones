"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/useCookieConsent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads Google Analytics (GA4) only after the visitor has accepted cookies,
 * and only once NEXT_PUBLIC_GA_MEASUREMENT_ID is configured. Renders
 * nothing until both conditions are met.
 */
export default function GoogleAnalytics() {
  const consentGiven = useCookieConsent();

  if (!GA_MEASUREMENT_ID || !consentGiven) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
