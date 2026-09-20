import type { Metadata } from "next";
import CompoundInterestCalculator from "@/components/calculator/CompoundInterestCalculator";
import CompoundInterestExplainer from "@/components/sections/CompoundInterestExplainer";
import MarketsSection from "@/components/sections/MarketsSection";
import OtherAssetsSection from "@/components/sections/OtherAssetsSection";
import PlatformsComparison from "@/components/sections/PlatformsComparison";
import CommonMistakes from "@/components/sections/CommonMistakes";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Aprende a invertir desde cero con calculadora de interés compuesto",
  description:
    "Guía educativa gratuita para aprender a invertir desde cero: calculadora de interés compuesto, mercados (S&P 500, Nasdaq, fondos indexados), oro, criptomonedas y comparativa de brokers en España.",
  alternates: { canonical: "/" },
};

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
              <a
                href="#calculadora"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Probar la calculadora
              </a>
              <a
                href="#interes-compuesto"
                className="rounded-lg border border-navy-600 px-6 py-3 text-sm font-semibold text-navy-100 transition hover:bg-navy-800"
              >
                Empezar a aprender
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-800/60 p-6 text-sm text-navy-200">
            <p className="font-semibold text-white">En esta guía encontrarás:</p>
            <ul className="mt-4 space-y-3">
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

      <section id="calculadora" className="bg-navy-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="section-heading">Calculadora de interés compuesto</h2>
          <p className="section-subheading">
            Simula cómo puede crecer tu dinero a lo largo del tiempo según tu
            inversión inicial, tus aportaciones mensuales y la rentabilidad
            esperada.
          </p>
          <div className="mt-10">
            <CompoundInterestCalculator />
          </div>
        </div>
      </section>

      <CompoundInterestExplainer />
      <MarketsSection />
      <OtherAssetsSection />
      <PlatformsComparison />
      <CommonMistakes />
      <FAQSection />
    </>
  );
}
