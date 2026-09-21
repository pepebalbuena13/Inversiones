"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";
export const CONSENT_CHANGED_EVENT = "cookie-consent-changed";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // localStorage no disponible; ocultamos el banner igualmente
    }
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy-700 bg-navy-900 px-4 py-4 text-navy-100 shadow-lg sm:px-6">
      <div className="container-page flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-navy-200">
          Usamos cookies propias y de terceros para analizar el uso del sitio y,
          en su caso, mostrar publicidad personalizada. Puedes aceptar todas las
          cookies o rechazar las no esenciales. Más información en nuestra{" "}
          <a href="/cookies" className="link-underline text-emerald-300">
            política de cookies
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="rounded-lg border border-navy-600 px-4 py-2 text-sm font-medium text-navy-100 hover:bg-navy-800"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
