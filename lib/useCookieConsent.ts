"use client";

import { useEffect, useState } from "react";
import { CONSENT_CHANGED_EVENT } from "@/components/CookieConsent";

const CONSENT_KEY = "cookie-consent";

/**
 * Tracks whether the visitor has accepted cookies, so ads/analytics only
 * load/run after explicit consent (see CookieConsent.tsx).
 */
export function useCookieConsent(): boolean {
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
