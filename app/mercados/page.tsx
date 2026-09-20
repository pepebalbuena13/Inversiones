import type { Metadata } from "next";
import MarketsSection from "@/components/sections/MarketsSection";

export const metadata: Metadata = {
  title: "Principales mercados donde invertir",
  description:
    "Conoce el S&P 500, el Nasdaq 100, los mercados emergentes, los fondos indexados globales y la renta fija: qué son, su riesgo aproximado y su rentabilidad histórica.",
  alternates: { canonical: "/mercados" },
};

export default function MercadosPage() {
  return <MarketsSection />;
}
