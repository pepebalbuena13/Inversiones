interface Market {
  name: string;
  description: string;
  risk: "Bajo" | "Medio" | "Medio-alto" | "Alto";
  historicalReturn: string;
}

const MARKETS: Market[] = [
  {
    name: "S&P 500",
    description:
      "Índice que agrupa a las 500 mayores empresas cotizadas de Estados Unidos (Apple, Microsoft, Amazon, etc.). Es el termómetro más seguido de la economía estadounidense y una de las opciones más populares para invertir a largo plazo a través de fondos indexados o ETFs.",
    risk: "Medio",
    historicalReturn: "~10% anual de media histórica (en USD, antes de inflación)",
  },
  {
    name: "Nasdaq 100",
    description:
      "Índice centrado en las 100 mayores empresas no financieras que cotizan en el mercado Nasdaq, con gran peso del sector tecnológico (Apple, Nvidia, Google, Meta...). Suele tener más potencial de crecimiento, pero también más volatilidad que el S&P 500.",
    risk: "Medio-alto",
    historicalReturn: "~11-13% anual de media histórica, con mayores oscilaciones",
  },
  {
    name: "Mercados emergentes",
    description:
      "Incluyen países como China, India, Brasil o Indonesia, con economías en crecimiento pero menos estables que las desarrolladas. Ofrecen potencial de crecimiento adicional a cambio de más riesgo: inestabilidad política, divisas más volátiles y menor liquidez.",
    risk: "Alto",
    historicalReturn: "Muy variable, entre el 4% y el 10% anual según el periodo",
  },
  {
    name: "Fondos indexados globales",
    description:
      "Fondos que replican un índice muy amplio (como el MSCI World o el FTSE All-World), invirtiendo en miles de empresas de todo el mundo a la vez. Son la opción preferida de muchos inversores principiantes por su diversificación automática y bajo coste.",
    risk: "Medio",
    historicalReturn: "~7-8% anual de media histórica a largo plazo",
  },
  {
    name: "Renta fija",
    description:
      "Bonos y letras emitidos por gobiernos o empresas. A cambio de tu dinero, te pagan un interés fijo o variable durante un periodo determinado. Se considera más segura que la renta variable (acciones), aunque su rentabilidad también es menor.",
    risk: "Bajo",
    historicalReturn: "~2-4% anual en bonos de calidad, según tipos de interés",
  },
];

const RISK_STYLES: Record<Market["risk"], string> = {
  Bajo: "bg-emerald-100 text-emerald-800",
  Medio: "bg-amber-100 text-amber-800",
  "Medio-alto": "bg-orange-100 text-orange-800",
  Alto: "bg-red-100 text-red-800",
};

export default function MarketsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <h1 className="section-heading">Principales mercados donde invertir</h1>
        <p className="section-subheading">
          Cada mercado tiene un perfil distinto de riesgo y rentabilidad. Conocerlos
          es el primer paso para construir una cartera acorde a tus objetivos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {MARKETS.map((market) => (
            <article key={market.name} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-navy-800">{market.name}</h3>
                <span className={`badge ${RISK_STYLES[market.risk]}`}>
                  Riesgo {market.risk}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">
                {market.description}
              </p>
              <p className="mt-4 border-t border-navy-100 pt-3 text-xs font-medium text-navy-500">
                Rentabilidad histórica orientativa: {market.historicalReturn}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs text-navy-400">
          Las rentabilidades históricas se muestran con fines educativos y no
          garantizan resultados futuros. El riesgo indicado es una aproximación
          general y puede variar según el instrumento concreto, la divisa y el
          periodo analizado.
        </p>
      </div>
    </section>
  );
}
