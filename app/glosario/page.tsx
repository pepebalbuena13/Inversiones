import type { Metadata } from "next";
import GlossarySection from "@/components/sections/GlossarySection";

export const metadata: Metadata = {
  title: "Glosario financiero para principiantes",
  description:
    "Diccionario de términos financieros explicados en lenguaje sencillo: ETF, diversificación, renta variable, renta fija, volatilidad, IRPF y mucho más.",
  alternates: { canonical: "/glosario" },
};

export default function GlosarioPage() {
  return <GlossarySection />;
}
