"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/useCookieConsent";

// El ID de editor de AdSense no es un dato sensible (queda visible en el
// HTML público de cualquier página con anuncios), así que se deja aquí por
// defecto para que los anuncios funcionen sin configurar nada en Vercel.
// La variable de entorno, si se define, tiene prioridad.
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7190127104678764";

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
