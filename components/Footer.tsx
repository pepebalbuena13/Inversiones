import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-900 text-navy-200">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              IC
            </span>
            InvierteDesdeCero
          </p>
          <p className="mt-3 text-sm text-navy-300">
            Educación financiera clara y sin humo para aprender a invertir paso a paso.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-100">
            Contenido
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-navy-300">
            <li><Link href="/#calculadora" className="hover:text-emerald-300">Calculadora de interés compuesto</Link></li>
            <li><Link href="/#mercados" className="hover:text-emerald-300">Mercados y fondos indexados</Link></li>
            <li><Link href="/#otros-activos" className="hover:text-emerald-300">Oro y criptomonedas</Link></li>
            <li><Link href="/#plataformas" className="hover:text-emerald-300">Comparativa de brokers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-100">
            Aprende
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-navy-300">
            <li><Link href="/#errores-comunes" className="hover:text-emerald-300">Errores del principiante</Link></li>
            <li><Link href="/#preguntas-frecuentes" className="hover:text-emerald-300">Preguntas frecuentes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-100">
            Legal
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-navy-300">
            <li><Link href="/privacidad" className="hover:text-emerald-300">Política de privacidad</Link></li>
            <li><Link href="/cookies" className="hover:text-emerald-300">Política de cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} InvierteDesdeCero. Todos los derechos reservados.</p>
          <p className="max-w-2xl">
            Contenido con fines educativos. No constituye asesoramiento financiero,
            fiscal ni recomendación de inversión personalizada. Invertir conlleva riesgo,
            incluida la pérdida del capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
