import type { Metadata } from "next";
import CompoundInterestExplainer from "@/components/sections/CompoundInterestExplainer";

export const metadata: Metadata = {
  title: "Qué es el interés compuesto",
  description:
    "Descubre qué es el interés compuesto, cómo funciona con ejemplos numéricos y por qué el tiempo es el factor más importante al invertir.",
  alternates: { canonical: "/interes-compuesto" },
};

export default function InteresCompuestoPage() {
  return <CompoundInterestExplainer />;
}
