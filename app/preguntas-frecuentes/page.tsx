import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre invertir",
  description:
    "Resolvemos las dudas más habituales de quien empieza a invertir: dinero mínimo necesario, seguridad del S&P 500, cada cuánto revisar la cartera y más.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function PreguntasFrecuentesPage() {
  return <FAQSection />;
}
