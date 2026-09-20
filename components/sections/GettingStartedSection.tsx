import Link from "next/link";
import PortfolioProfilesChart from "@/components/charts/PortfolioProfilesChart";

const CHECKLIST = [
  {
    title: "Ten un fondo de emergencia",
    detail:
      "Entre 3 y 6 meses de gastos en algo líquido y seguro (cuenta remunerada, por ejemplo), antes de invertir nada.",
  },
  {
    title: "Sin deudas caras pendientes",
    detail:
      "Si tienes deudas a tipos altos (tarjetas, préstamos al consumo), suele compensar más amortizarlas primero.",
  },
  {
    title: "Solo dinero que no necesitas a corto plazo",
    detail:
      "El dinero que inviertas debería poder quedarse invertido varios años sin que te suponga un problema.",
  },
];

const STEPS = [
  {
    title: "Define tu objetivo y horizonte temporal",
    detail:
      "¿Para qué inviertes: jubilación, una entrada de vivienda, hacer crecer tus ahorros? ¿Y en cuánto tiempo lo necesitas? El horizonte determina cuánto riesgo puedes asumir.",
  },
  {
    title: "Calcula cuánto puedes aportar cada mes",
    detail: null,
    link: { href: "/calculadora", label: "Prueba la calculadora de interés compuesto" },
  },
  {
    title: "Elige dónde vas a invertir",
    detail: null,
    link: { href: "/plataformas", label: "Compara plataformas de inversión en España" },
  },
  {
    title: "Decide en qué vas a invertir",
    detail: null,
    link: { href: "/mercados", label: "Repasa los principales mercados" },
  },
  {
    title: "Diversifica tu cartera",
    detail: "No pongas todo el dinero en un único activo. Más abajo tienes ejemplos de reparto según tu perfil.",
  },
  {
    title: "Automatiza tus aportaciones y revisa con calma",
    detail: null,
    link: { href: "/errores-comunes", label: "Evita los errores más comunes del principiante" },
  },
];

export default function GettingStartedSection() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h1 className="section-heading">Cómo empezar a invertir paso a paso</h1>
      <p className="section-subheading">
        No hace falta ser un experto ni tener mucho dinero para dar el primer
        paso. Esta es una hoja de ruta sencilla, en orden.
      </p>

      <div className="prose-content mt-8 max-w-3xl">
        <h3>Antes de invertir</h3>
      </div>
      <div className="mt-4 grid max-w-3xl gap-4 sm:grid-cols-3">
        {CHECKLIST.map((item) => (
          <div key={item.title} className="rounded-lg border border-navy-100 bg-navy-50 p-4">
            <p className="text-sm font-semibold text-navy-800">{item.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-navy-500">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="prose-content mt-10 max-w-3xl">
        <h3>Los pasos, en orden</h3>
      </div>
      <ol className="mt-4 grid max-w-3xl gap-4">
        {STEPS.map((step, index) => (
          <li key={step.title} className="card flex gap-4 p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-navy-800">{step.title}</p>
              {step.detail && (
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{step.detail}</p>
              )}
              {step.link && (
                <Link href={step.link.href} className="link-underline mt-1 inline-block text-sm">
                  {step.link.label} →
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 max-w-3xl border-t border-navy-100 pt-10">
        <h2 className="section-heading">Cómo dividir tus inversiones</h2>
        <div className="prose-content">
          <p>
            Diversificar significa repartir tu dinero entre distintos tipos de
            activos, para que el mal comportamiento de uno no arrastre a toda tu
            cartera. La proporción entre renta variable (más riesgo, más
            potencial) y renta fija (más estable, menos potencial) suele ser la
            decisión más importante.
          </p>
          <p>
            Una regla orientativa muy usada es: <strong>110 menos tu edad</strong> =
            porcentaje aproximado que podrías destinar a renta variable. Por
            ejemplo, con 30 años, un 80&nbsp;% en renta variable y un 20&nbsp;% en
            renta fija; con 55 años, más bien un 55&nbsp;%/45&nbsp;%. Es solo un
            punto de partida, no una fórmula exacta: tu situación personal manda.
          </p>
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <PortfolioProfilesChart />
      </div>

      <div className="prose-content mt-8 max-w-3xl">
        <p>
          Dentro de la renta variable, también conviene diversificar: entre
          distintos mercados (<Link href="/mercados" className="link-underline">S&amp;P 500, mercados emergentes, fondos indexados globales</Link>)
          en vez de apostar todo a un único país o sector. Y si añades{" "}
          <Link href="/otros-activos" className="link-underline">oro o criptomonedas</Link>,
          hazlo como un complemento pequeño, no como el núcleo de tu cartera.
        </p>
      </div>
    </section>
  );
}
