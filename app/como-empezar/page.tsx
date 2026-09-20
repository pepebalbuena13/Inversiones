import type { Metadata } from "next";
import GettingStartedSection from "@/components/sections/GettingStartedSection";

export const metadata: Metadata = {
  title: "Cómo empezar a invertir y cómo dividir tu cartera",
  description:
    "Guía paso a paso para empezar a invertir desde cero: qué hacer antes de invertir, cómo elegir plataforma y activos, y cómo dividir tu cartera según tu perfil de riesgo.",
  alternates: { canonical: "/como-empezar" },
};

export default function ComoEmpezarPage() {
  return <GettingStartedSection />;
}
