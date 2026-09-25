import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/calculadora", label: "Calculadora de interés compuesto" },
  { href: "/mercados", label: "Principales mercados" },
  { href: "/como-empezar", label: "Cómo empezar a invertir" },
  { href: "/glosario", label: "Glosario financiero" },
];

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-20 text-center sm:py-28">
      <Logo className="h-14 w-14" />
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-600">
        Error 404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
        No encontramos esta página
      </h1>
      <p className="mt-4 max-w-md text-navy-500">
        Puede que el enlace esté roto o que la página se haya movido. Prueba
        alguna de estas secciones:
      </p>

      <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card p-5 text-left font-medium text-navy-700 transition hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md"
          >
            {link.label} →
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
