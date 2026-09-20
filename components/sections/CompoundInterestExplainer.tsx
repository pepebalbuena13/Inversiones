import Link from "next/link";
import CompoundVsSimpleChart from "@/components/charts/CompoundVsSimpleChart";
import StartEarlyChart from "@/components/charts/StartEarlyChart";

const EXAMPLE_STEPS = [
  {
    label: "Año 1",
    value: "10.700 €",
    detail: "Generas 700 € de intereses sobre los 10.000 € iniciales.",
  },
  {
    label: "Año 2",
    value: "11.449 €",
    detail: "El 7 % ya se calcula sobre 10.700 €: 749 € de intereses.",
  },
  {
    label: "Año 10",
    value: "19.672 €",
    detail: "Sin aportar más dinero, tu capital casi se duplica.",
  },
];

export default function CompoundInterestExplainer() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h1 className="section-heading">Qué es el interés compuesto</h1>
      <p className="section-subheading">
        El motor que convierte pequeños ahorros constantes en un capital
        considerable a largo plazo.
      </p>

      <div className="prose-content mt-8 max-w-3xl">
        <p>
          El interés compuesto es el proceso por el cual los intereses que genera
          tu dinero se suman al capital inicial, de forma que en el siguiente
          periodo también generan intereses. Dicho de otro modo:{" "}
          <strong>ganas intereses sobre tus intereses</strong>, no solo sobre el
          dinero que invertiste al principio.
        </p>

        <h3>Un ejemplo sencillo</h3>
        <p>
          Imagina que inviertes 10.000&nbsp;€ a una rentabilidad anual del 7&nbsp;%,
          sin tocar el dinero.
        </p>
      </div>

      <div className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
        {EXAMPLE_STEPS.map((step) => (
          <div key={step.label} className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              {step.label}
            </p>
            <p className="mt-1 text-2xl font-bold text-navy-800">{step.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-navy-500">{step.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-3xl">
        <CompoundVsSimpleChart />
      </div>

      <div className="prose-content mt-8 max-w-3xl">
        <h3>Por qué el tiempo importa más que el dinero</h3>
        <p>
          El interés compuesto no es lineal, es exponencial. Al principio la curva
          crece despacio, pero con el paso de los años se acelera de forma muy
          notable. Por eso, <strong>empezar antes</strong>, aunque sea con
          aportaciones pequeñas, suele generar mejores resultados que empezar tarde
          con aportaciones grandes. Cada año que esperas para empezar a invertir es
          un año de crecimiento exponencial que pierdes para siempre.
        </p>
      </div>

      <div className="mt-6 max-w-3xl">
        <StartEarlyChart />
      </div>

      <div className="prose-content mt-8 max-w-3xl">
        <h3>Aportaciones periódicas: el acelerador</h3>
        <p>
          Si además de la inversión inicial aportas una cantidad fija cada mes
          (lo que se conoce como <em>dollar-cost averaging</em> o promediado del
          coste), cada nueva aportación también empieza a generar sus propios
          intereses compuestos. Es la combinación de constancia y tiempo lo que
          realmente marca la diferencia. Prueba a cambiar los números en la{" "}
          <Link href="/calculadora" className="link-underline">
            calculadora de interés compuesto
          </Link>{" "}
          para ver el efecto por ti mismo.
        </p>
      </div>
    </section>
  );
}
