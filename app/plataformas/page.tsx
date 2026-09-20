import type { Metadata } from "next";
import PlatformsComparison from "@/components/sections/PlatformsComparison";

export const metadata: Metadata = {
  title: "Comparativa de brokers en España",
  description:
    "Compara MyInvestor, Trade Republic, Degiro e Interactive Brokers: comisiones, facilidad de uso y qué perfil de inversor le conviene a cada plataforma.",
  alternates: { canonical: "/plataformas" },
};

export default function PlataformasPage() {
  return <PlatformsComparison />;
}
