import type { Metadata } from "next";
import OtherAssetsSection from "@/components/sections/OtherAssetsSection";

export const metadata: Metadata = {
  title: "Oro y criptomonedas como parte de tu cartera",
  description:
    "Qué son el oro y las criptomonedas, cómo comparan en riesgo con la bolsa tradicional y por qué se suelen usar solo como una parte pequeña de una cartera diversificada.",
  alternates: { canonical: "/otros-activos" },
};

export default function OtrosActivosPage() {
  return <OtherAssetsSection />;
}
