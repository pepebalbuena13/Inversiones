"use client";

import { useEffect, useRef } from "react";
import { useCookieConsent } from "@/lib/useCookieConsent";
import { ADSENSE_CLIENT_ID } from "@/components/AdSenseLoader";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSlotProps {
  /** Ad unit slot ID from the AdSense dashboard (data-ad-slot). */
  slot: string;
  className?: string;
}

/**
 * A single AdSense ad unit. Renders nothing until NEXT_PUBLIC_ADSENSE_CLIENT_ID
 * is set and the visitor has accepted cookies (see CookieConsent.tsx).
 */
export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  const consentGiven = useCookieConsent();
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!consentGiven || !ADSENSE_CLIENT_ID || pushedRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch {
      // El script de AdSense aún no ha cargado; se reintentará si el
      // componente vuelve a montarse.
    }
  }, [consentGiven]);

  if (!ADSENSE_CLIENT_ID || !consentGiven) return null;

  return (
    <div className={`my-8 ${className}`}>
      <p className="mb-1 text-center text-[10px] uppercase tracking-wide text-navy-300">
        Publicidad
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
