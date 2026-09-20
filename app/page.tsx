import type { Metadata } from "next";
import Link from "next/link";
import MiniGrowthSpark from "@/components/charts/MiniGrowthSpark";

export const metadata: Metadata = {
  title: "Aprende a invertir desde cero con calculadora de interés compuesto",
  description:
    "Guía educativa gratuita para aprender a invertir desde cero: calculadora de interés compuesto, mercados (S&P 500, Nasdaq, fondos indexados), oro, criptomonedas y comparativa de brokers en España.",
  alternates: { canonical: "/" },
};

const NAV_CARDS = [
  {
    href: "/calculadora",
    title: "Calculadora de interés compuesto",
    description:
      "Simula cuánto puede crecer tu dinero, con gráfico año a año y simulación opcional del IRPF.",
  },
  {
    href: "/calculadora-objetivo",
    title: "Calculadora de objetivo de ahorro",
    description: "Fija una meta y calcula cuánto necesitas aportar cada mes para llegar a ella.",
  },
  {
    href: "/interes-compuesto",
    title: "Qué es el interés compuesto",
    description: "La base de toda inversión a largo plazo, explicada con ejemplos.",
  },
  {
    href: "/mercados",
    title: "Principales mercados",
    description: "S&P 500, Nasdaq, mercados emergentes, fondos indexados y renta fija.",
  },
  {
    href: "/otros-activos",
    title: "Oro y criptomonedas",
    description: "Qué son, su riesgo comparado con la bolsa y cómo encajan en una cartera.",
  },
  {
    href: "/como-empezar",
    title: "Cómo empezar a invertir",
    description: "Los pasos, en orden, y cómo dividir tu cartera según tu perfil de riesgo.",
  },
  {
    href: "/plataformas",
    title: "Comparativa de brokers",
    description: "MyInvestor, Trade Republic, Degiro e Interactive Brokers, cara a cara.",
  },
  {
    href: "/errores-comunes",
    title: "Errores comunes del principiante",
    description: "Los fallos más habituales al empezar a invertir, y cómo evitarlos.",
  },
  {
    href: "/glosario",
    title: "Glosario financiero",
    description: "Los términos más habituales al invertir, explicados en lenguaje sencillo.",
  },
  {
    href: "/preguntas-frecuentes",
    title: "Preguntas frecuentes",
    description: "Dudas típicas sobre cuándo, cómo y cuánto invertir.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-800 to-navy-900 text-white">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge bg-emerald-500/20 text-emerald-300">
              Educación financiera, sin humo
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Aprende a invertir desde cero, con calma y sin prisas
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              Entiende el interés compuesto, conoce los principales mercados y
              compara brokers en España para dar tus primeros pasos como
              inversor de forma informada. Sin promesas de riqueza rápida:
              solo educación financiera clara.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/calculadora"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Probar la calculadora
              </Link>
              <Link
                href="/interes-compuesto"
                className="rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-navy-100 transition hover:bg-navy-800"
              >
                Empezar a aprender
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800/60 p-6 text-sm text-navy-200">
            <p className="font-semibold text-white">Así crece el interés compuesto</p>
            <MiniGrowthSpark />
            <ul className="mt-5 space-y-2.5 border-t border-navy-700 pt-4">
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Calculadora de interés compuesto con impuestos IRPF
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Explicación de los principales mercados y activos
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Comparativa de brokers en España
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Errores comunes que debes evitar
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="section-heading">Explora la guía por secciones</h2>
          <p className="section-subheading">
            Cada tema tiene su propia página, para que puedas ir directamente a lo
            que te interesa o recorrerlas en orden.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="card group flex flex-col p-6 transition hover:border-emerald-300 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-navy-800 group-hover:text-emerald-700">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {card.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-emerald-600">
                  Leer más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
