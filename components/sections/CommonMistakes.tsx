const MISTAKES = [
  {
    title: "Intentar acertar el momento perfecto de entrada",
    description:
      "Esperar al momento ideal para invertir (market timing) es prácticamente imposible incluso para profesionales. Quien espera la caída perfecta suele quedarse fuera del mercado mientras este sigue subiendo a largo plazo.",
  },
  {
    title: "No diversificar",
    description:
      "Concentrar todo el dinero en una sola empresa, sector o país aumenta mucho el riesgo. Diversificar entre distintos activos y mercados reduce el impacto de que uno de ellos vaya mal.",
  },
  {
    title: "Vender por pánico ante una caída",
    description:
      "Las caídas son parte normal de los mercados. Vender en el peor momento convierte una pérdida temporal (sobre el papel) en una pérdida real y definitiva.",
  },
  {
    title: "Invertir dinero que se necesita a corto plazo",
    description:
      "El dinero destinado a gastos previstos en los próximos meses o a un fondo de emergencia no debería estar invertido en renta variable, ya que podrías verte obligado a vender en un mal momento.",
  },
  {
    title: "Ignorar las comisiones a largo plazo",
    description:
      "Una diferencia de comisión de solo un 1% anual, mantenida durante décadas, puede suponer decenas de miles de euros menos gracias al efecto (negativo) del interés compuesto sobre los costes.",
  },
  {
    title: "Dejarse llevar por modas de redes sociales",
    description:
      "Invertir en un activo solo porque se ha puesto de moda en redes sociales, sin entender qué es ni qué riesgo tiene, es una de las formas más rápidas de perder dinero.",
  },
];

export default function CommonMistakes() {
  return (
    <section className="bg-navy-900 py-16 text-white sm:py-20">
      <div className="container-page">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Errores comunes del principiante
        </h1>
        <p className="mt-3 max-w-2xl text-navy-200">
          Evitar estos errores es, muchas veces, más importante que encontrar la
          inversión &ldquo;perfecta&rdquo;.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MISTAKES.map((mistake, index) => (
            <div
              key={mistake.title}
              className="rounded-xl border border-navy-700 bg-navy-800/60 p-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {mistake.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-300">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
