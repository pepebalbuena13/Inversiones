import Link from "next/link";

const NAV_LINKS = [
  { href: "/#calculadora", label: "Calculadora" },
  { href: "/#interes-compuesto", label: "Interés compuesto" },
  { href: "/#mercados", label: "Mercados" },
  { href: "/#otros-activos", label: "Oro y cripto" },
  { href: "/#plataformas", label: "Brokers" },
  { href: "/#preguntas-frecuentes", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-navy-800">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-700 text-emerald-300">
            IC
          </span>
          <span className="text-lg">InvierteDesdeCero</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-navy-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-emerald-700">
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/#calculadora"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Calcular ahora
        </Link>
      </div>
    </header>
  );
}
