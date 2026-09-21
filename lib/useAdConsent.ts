"use client";

import { useEffect, useState } from "react";
import { CONSENT_CHANGED_EVENT } from "@/components/CookieConsent";

const CONSENT_KEY = "cookie-consent";

/**
 * Tracks whether the visitor has accepted cookies, so ad components only
 * render/request ads after explicit consent (see CookieConsent.tsx).
 */
export function useAdConsent(): boolean {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        setConsentGiven(window.localStorage.getItem(CONSENT_KEY) === "accepted");
      } catch {
        setConsentGiven(false);
      }
    };
    checkConsent();
    window.addEventListener(CONSENT_CHANGED_EVENT, checkConsent);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, checkConsent);
  }, []);

  return consentGiven;
}

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
