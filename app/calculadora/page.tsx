import type { Metadata } from "next";
import CompoundInterestCalculator from "@/components/calculator/CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "Calculadora de interés compuesto",
  description:
    "Calcula cuánto puede crecer tu dinero con el interés compuesto: introduce tu inversión inicial, aportación mensual, años y rentabilidad esperada, con simulación opcional del IRPF español.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20">
      <div className="container-page">
        <h1 className="section-heading">Calculadora de interés compuesto</h1>
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
  );
}
