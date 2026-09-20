const FAQS = [
  {
    question: "¿Cuánto dinero mínimo se necesita para empezar a invertir?",
    answer:
      "Hoy en día se puede empezar a invertir con muy poco dinero, incluso desde 1€ en algunos brókeres o fondos indexados que permiten aportaciones fraccionadas. Lo importante no es la cantidad inicial, sino la constancia: aportar una cantidad pequeña cada mes suele ser más efectivo a largo plazo que esperar a tener una gran suma para empezar.",
  },
  {
    question: "¿Es seguro invertir en el S&P 500?",
    answer:
      "Ningún mercado está exento de riesgo, y el S&P 500 puede sufrir caídas importantes en el corto plazo. Sin embargo, a largo plazo (10-20 años o más), ha mostrado una tendencia alcista sostenida y una recuperación consistente tras las crisis. \"Seguro\" no significa \"sin oscilaciones\", sino que el riesgo se reduce cuanto mayor es el horizonte temporal.",
  },
  {
    question: "¿Qué pasa si el mercado cae justo cuando necesito el dinero?",
    answer:
      "Por eso es fundamental invertir con un horizonte temporal acorde a cuándo necesitarás el dinero. Si sabes que necesitarás una cantidad en 1-2 años, no debería estar en renta variable. Cuanto más te acerques a la fecha en la que necesitas el dinero, más recomendable es ir reduciendo el riesgo de la cartera (por ejemplo, moviendo parte a renta fija o efectivo).",
  },
  {
    question: "¿Cada cuánto tiempo debo revisar mi inversión?",
    answer:
      "Para una cartera de largo plazo basada en fondos indexados, revisar la evolución una o dos veces al año suele ser suficiente. Mirar la cartera todos los días solo genera ansiedad y aumenta la probabilidad de tomar decisiones impulsivas ante la volatilidad normal del mercado.",
  },
  {
    question: "¿Es mejor invertir de golpe o poco a poco?",
    answer:
      "Estadísticamente, invertir una suma grande de golpe (lump sum) suele batir a la inversión escalonada en la mayoría de periodos históricos, porque el dinero pasa más tiempo invertido. Sin embargo, invertir poco a poco (aportaciones periódicas) reduce el impacto emocional de las caídas y es la forma más habitual de invertir para quien ahorra de su nómina cada mes. Ambas estrategias son válidas: la mejor es la que puedas mantener con disciplina.",
  },
  {
    question: "¿Cuál es la diferencia entre ahorrar e invertir?",
    answer:
      "Ahorrar es guardar dinero sin asumir riesgo, normalmente en una cuenta bancaria, priorizando la disponibilidad inmediata. Invertir implica asumir cierto riesgo con el objetivo de que el dinero crezca por encima de la inflación a largo plazo, comprando activos como acciones, fondos o bonos. Ambas son complementarias: primero se suele construir un colchón de ahorro (fondo de emergencia) y después se invierte el excedente con un horizonte más largo.",
  },
];

export default function FAQSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="container-page py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="section-heading">Preguntas frecuentes</h1>
      <p className="section-subheading">
        Resolvemos las dudas más habituales de quienes empiezan a invertir.
      </p>

      <div className="mt-10 divide-y divide-navy-100 rounded-xl border border-navy-100 bg-white">
        {FAQS.map((faq) => (
          <details key={faq.question} className="group p-6 open:bg-navy-50/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-800">
              <h3 className="text-base">{faq.question}</h3>
              <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
