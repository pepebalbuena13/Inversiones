interface Platform {
  name: string;
  url: string;
  fees: string;
  easeOfUse: string;
  bestFor: string;
}

const PLATFORMS: Platform[] = [
  {
    name: "MyInvestor",
    url: "https://www.myinvestor.es",
    fees: "0% de comisión en compra de fondos indexados; ETFs y acciones con comisión reducida",
    easeOfUse: "Muy sencilla, en español, pensada para el público generalista",
    bestFor: "Principiantes que quieren invertir en fondos indexados sin complicarse",
  },
  {
    name: "Trade Republic",
    url: "https://www.traderepublic.com/es-es",
    fees: "1€ por operación en acciones/ETFs; sin custodia; planes de inversión periódica gratuitos",
    easeOfUse: "App muy intuitiva y moderna, enfocada a móvil",
    bestFor: "Quien quiere invertir poco a poco en ETFs y acciones desde el móvil",
  },
  {
    name: "Degiro",
    url: "https://www.degiro.es",
    fees: "Comisiones bajas por operación; algunos ETFs sin comisión (con condiciones)",
    easeOfUse: "Interfaz algo más técnica, pero completa y en español",
    bestFor: "Inversores con algo más de experiencia que buscan operar en varios mercados",
  },
  {
    name: "Interactive Brokers",
    url: "https://www.interactivebrokers.com",
    fees: "Comisiones muy competitivas, especialmente en grandes volúmenes; estructura de precios compleja",
    easeOfUse: "Plataforma potente pero con curva de aprendizaje más alta",
    bestFor: "Inversores avanzados que buscan acceso a múltiples mercados globales y productos",
  },
];

export default function PlatformsComparison() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <h1 className="section-heading">
          Comparativa de plataformas de inversión en España
        </h1>
        <p className="section-subheading">
          No existe el bróker perfecto: la mejor opción depende de tu perfil, tu
          nivel de experiencia y el tipo de activos en los que quieras invertir.
        </p>

        <div className="mt-10 overflow-x-auto rounded-xl border border-navy-100">
          <table className="min-w-full divide-y divide-navy-100 text-left text-sm">
            <thead className="bg-navy-800 text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                  Plataforma
                </th>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                  Comisiones
                </th>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                  Facilidad de uso
                </th>
                <th scope="col" className="px-4 py-3 font-semibold sm:px-6">
                  Perfil recomendado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 bg-white">
              {PLATFORMS.map((platform, i) => (
                <tr key={platform.name} className={i % 2 === 1 ? "bg-navy-50/50" : ""}>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-4 font-semibold text-navy-800 sm:px-6"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-emerald-700"
                    >
                      {platform.name}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H9M17 7V15"
                        />
                      </svg>
                      <span className="sr-only">(se abre en una pestaña nueva)</span>
                    </a>
                  </th>
                  <td className="px-4 py-4 text-navy-600 sm:px-6">{platform.fees}</td>
                  <td className="px-4 py-4 text-navy-600 sm:px-6">
                    {platform.easeOfUse}
                  </td>
                  <td className="px-4 py-4 text-navy-600 sm:px-6">{platform.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-xs text-navy-400">
          Pulsa el nombre de cada plataforma para ir a su web oficial. Las
          comisiones y condiciones de los brókeres cambian con el tiempo:
          consulta siempre la información actualizada y las condiciones legales
          antes de invertir.
        </p>
      </div>
    </section>
  );
}
