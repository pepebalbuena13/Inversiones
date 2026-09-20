import type { Metadata } from "next";
import CommonMistakes from "@/components/sections/CommonMistakes";

export const metadata: Metadata = {
  title: "Errores comunes del principiante al invertir",
  description:
    "Los errores más habituales de quien empieza a invertir: intentar acertar el timing del mercado, no diversificar, vender por pánico, ignorar comisiones y más.",
  alternates: { canonical: "/errores-comunes" },
};

export default function ErroresComunesPage() {
  return <CommonMistakes />;
}
