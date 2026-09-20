import Link from "next/link";

interface GlossaryTerm {
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

const TERMS: GlossaryTerm[] = [
  {
    term: "Aportación periódica",
    definition:
      "Cantidad fija que se invierte de forma recurrente (normalmente cada mes), en vez de invertir todo el dinero de golpe. También se conoce como dollar-cost averaging o promediado del coste.",
    link: { href: "/interes-compuesto", label: "Ver el efecto en el interés compuesto" },
  },
  {
    term: "Base del ahorro (IRPF)",
    definition:
      "Parte de la declaración de la renta donde tributan en España las ganancias por inversiones (dividendos, venta de fondos o acciones), con tramos distintos a los del salario.",
    link: { href: "/calculadora", label: "Simular impuestos en la calculadora" },
  },
  {
    term: "Bróker",
    definition:
      "Plataforma o intermediario a través del cual compras y vendes activos financieros (acciones, ETFs, fondos). Cobra comisiones por sus servicios, que varían mucho de uno a otro.",
    link: { href: "/plataformas", label: "Comparar brókeres en España" },
  },
  {
    term: "Capitalización bursátil",
    definition:
      "Valor total de una empresa en bolsa, calculado multiplicando el precio de cada acción por el número total de acciones en circulación.",
  },
  {
    term: "Cartera de inversión",
    definition:
      "Conjunto de todos los activos en los que tienes invertido tu dinero (acciones, fondos, bonos, oro...), considerados como un todo.",
    link: { href: "/como-empezar", label: "Cómo dividir tu cartera" },
  },
  {
    term: "Comisión de gestión (TER)",
    definition:
      "Porcentaje anual que cobra un fondo o ETF por gestionarlo, descontado automáticamente del valor de tu inversión. Un TER más bajo deja más rentabilidad para ti a largo plazo.",
    link: { href: "/errores-comunes", label: "Por qué importan las comisiones" },
  },
  {
    term: "Diversificación",
    definition:
      "Estrategia de repartir el dinero entre distintos activos, sectores o países para reducir el impacto de que uno de ellos vaya mal, en vez de concentrarlo todo en un único lugar.",
    link: { href: "/como-empezar", label: "Ver ejemplos de cartera diversificada" },
  },
  {
    term: "Dividendo",
    definition:
      "Parte del beneficio que una empresa reparte entre sus accionistas, normalmente de forma periódica. No todas las empresas pagan dividendos: algunas reinvierten el beneficio en crecer.",
  },
  {
    term: "ETF (fondo cotizado)",
    definition:
      "Fondo de inversión que cotiza en bolsa como si fuera una acción, y que normalmente replica un índice (como el S&P 500). Combina la diversificación de un fondo con la flexibilidad de comprar y vender en cualquier momento del día.",
    link: { href: "/mercados", label: "Ver mercados donde invertir con ETFs" },
  },
  {
    term: "Fondo indexado",
    definition:
      "Fondo de inversión que replica automáticamente un índice bursátil (como el MSCI World), sin que un gestor elija qué comprar. Suele tener comisiones muy bajas y es una opción popular para principiantes.",
    link: { href: "/mercados", label: "Comparar fondos indexados con otros mercados" },
  },
  {
    term: "Horizonte temporal",
    definition:
      "Tiempo que planeas mantener tu dinero invertido antes de necesitarlo. Cuanto más largo sea, más riesgo puedes permitirte asumir en tu cartera.",
    link: { href: "/preguntas-frecuentes", label: "Ver preguntas frecuentes" },
  },
  {
    term: "Índice bursátil",
    definition:
      "Medida que agrupa un conjunto de empresas cotizadas (como el S&P 500 o el Ibex 35) para reflejar la evolución conjunta de un mercado, sector o región.",
    link: { href: "/mercados", label: "Ver los principales índices" },
  },
  {
    term: "Inflación",
    definition:
      "Subida general de los precios con el tiempo, que reduce el poder adquisitivo del dinero. Invertir busca, entre otras cosas, que tus ahorros crezcan por encima de la inflación.",
  },
  {
    term: "Interés compuesto",
    definition:
      "Efecto por el cual los intereses que genera tu dinero se suman al capital y, a partir de ahí, también generan sus propios intereses. Es el motor del crecimiento a largo plazo.",
    link: { href: "/interes-compuesto", label: "Ver la explicación completa" },
  },
  {
    term: "Liquidez",
    definition:
      "Facilidad con la que un activo puede convertirse en dinero disponible sin perder valor. El efectivo es totalmente líquido; un inmueble, por ejemplo, mucho menos.",
  },
  {
    term: "Market timing",
    definition:
      "Intentar predecir el momento exacto para comprar barato y vender caro. Es extremadamente difícil de acertar de forma consistente, incluso para profesionales.",
    link: { href: "/errores-comunes", label: "Ver por qué es un error común" },
  },
  {
    term: "Perfil de riesgo",
    definition:
      "Nivel de volatilidad y posibles pérdidas que estás dispuesto a asumir a cambio de una mayor rentabilidad potencial. Depende de tu situación financiera, tu horizonte temporal y tu tolerancia personal.",
    link: { href: "/como-empezar", label: "Ver perfiles de cartera" },
  },
  {
    term: "Plusvalía / minusvalía",
    definition:
      "Ganancia (plusvalía) o pérdida (minusvalía) que obtienes al vender un activo por un precio distinto al que pagaste. Solo tributa cuando se materializa, es decir, cuando vendes.",
    link: { href: "/calculadora", label: "Simular impuestos sobre la ganancia" },
  },
  {
    term: "Rebalanceo de cartera",
    definition:
      "Ajustar periódicamente los pesos de cada activo en tu cartera para que vuelvan a la proporción original, después de que el mercado los haya movido con el tiempo.",
  },
  {
    term: "Renta fija",
    definition:
      "Bonos y letras emitidos por gobiernos o empresas que pagan un interés fijo o variable durante un periodo determinado. Se considera menos arriesgada que la renta variable.",
    link: { href: "/mercados", label: "Ver renta fija junto a otros mercados" },
  },
  {
    term: "Renta variable",
    definition:
      "Acciones y activos cuyo valor fluctúa según la oferta y la demanda, sin una rentabilidad garantizada. Incluye las acciones individuales, los fondos y los ETFs de bolsa.",
    link: { href: "/mercados", label: "Ver mercados de renta variable" },
  },
  {
    term: "Rentabilidad histórica",
    definition:
      "Rendimiento que ha tenido un activo en el pasado. Es una referencia orientativa, pero no garantiza que se vaya a repetir en el futuro.",
  },
  {
    term: "Volatilidad",
    definition:
      "Grado en que el precio de un activo sube y baja en periodos cortos de tiempo. Una alta volatilidad implica más incertidumbre a corto plazo, aunque no necesariamente peor rentabilidad a largo plazo.",
    link: { href: "/otros-activos", label: "Ver un ejemplo con criptomonedas" },
  },
];

export default function GlossarySection() {
  const glossaryJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glosario financiero para principiantes",
    hasDefinedTerm: TERMS.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
    })),
  };

  return (
    <section className="container-page py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }}
      />
      <h1 className="section-heading">Glosario financiero</h1>
      <p className="section-subheading">
        Los términos que más vas a encontrarte al empezar a invertir, explicados
        en lenguaje sencillo.
      </p>

      <dl className="mt-10 max-w-3xl divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
        {TERMS.map((item) => (
          <div key={item.term} id={slugify(item.term)} className="scroll-mt-24 p-6">
            <dt className="text-base font-semibold text-navy-800">{item.term}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-navy-600">
              {item.definition}
            </dd>
            {item.link && (
              <Link href={item.link.href} className="link-underline mt-2 inline-block text-sm">
                {item.link.label} →
              </Link>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
