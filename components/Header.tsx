"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_ROUTES } from "@/lib/routes";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-navy-800">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-700 text-emerald-300">
            IC
          </span>
          <span className="text-lg">InvierteDesdeCero</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-navy-600 xl:flex">
          {PRIMARY_ROUTES.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={`transition hover:text-emerald-700 ${
                  active ? "text-emerald-700" : ""
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/calculadora"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:inline-block"
          >
            Calcular ahora
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Abrir menú de navegación"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 text-navy-700 xl:hidden"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-navy-100 bg-white xl:hidden">
          <div className="container-page flex flex-col py-3">
            {PRIMARY_ROUTES.map((route) => {
              const active = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-sm font-medium ${
                    active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-navy-700 hover:bg-navy-50"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}
            <Link
              href="/calculadora"
              className="mt-2 rounded-lg bg-emerald-600 px-3 py-3 text-center text-sm font-semibold text-white sm:hidden"
            >
              Calcular ahora
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
