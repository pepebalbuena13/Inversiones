import type { Metadata } from "next";
import GoalCalculator from "@/components/calculator/GoalCalculator";

export const metadata: Metadata = {
  title: "Calculadora: cuánto ahorrar al mes para un objetivo",
  description:
    "Calcula cuánto necesitas aportar cada mes para alcanzar una cantidad objetivo, según tus años disponibles y la rentabilidad esperada, con gráfico de evolución año a año.",
  alternates: { canonical: "/calculadora-objetivo" },
};

export default function CalculadoraObjetivoPage() {
  return (
    <section className="bg-navy-50 py-16 sm:py-20">
      <div className="container-page">
        <h1 className="section-heading">
          Calculadora de objetivo de ahorro
        </h1>
        <p className="section-subheading">
          Al revés que la calculadora de interés compuesto: aquí fijas la meta y
          calculamos cuánto necesitas aportar cada mes para alcanzarla.
        </p>
        <div className="mt-10">
          <GoalCalculator />
        </div>
      </div>
    </section>
  );
}
