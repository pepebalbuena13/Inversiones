export default function OtherAssetsSection() {
  return (
    <section id="otros-activos" className="container-page py-16 sm:py-20">
      <h2 className="section-heading">Otros activos: oro y criptomonedas</h2>
      <p className="section-subheading">
        Fuera de la renta variable y la renta fija tradicionales existen otros
        activos que algunos inversores usan como complemento de su cartera.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              Au
            </span>
            <h3 className="text-lg font-semibold text-navy-800">Oro</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-600">
            El oro es un metal precioso que se usa desde hace siglos como reserva
            de valor. No genera dividendos ni intereses: su rentabilidad depende
            únicamente de que su precio suba. Se le considera un activo{" "}
            <strong>refugio</strong>, porque tiende a mantener o incluso ganar
            valor en momentos de crisis económica, inflación alta o incertidumbre
            geopolítica.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-600">
            Comparado con la bolsa, su riesgo suele considerarse{" "}
            <strong>menor en volatilidad extrema</strong>, pero también ofrece
            menor rentabilidad esperada a largo plazo que la renta variable. Se
            puede invertir a través de ETFs sobre oro físico, sin necesidad de
            comprar y custodiar el metal.
          </p>
        </article>

        <article className="card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700">
              ₿
            </span>
            <h3 className="text-lg font-semibold text-navy-800">Criptomonedas</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy-600">
            Las criptomonedas (Bitcoin, Ethereum y miles más) son activos digitales
            que funcionan sobre tecnología blockchain, sin depender de un banco
            central. Son un mercado joven, con alta capacidad de innovación pero
            también con una <strong>volatilidad mucho mayor</strong> que la bolsa
            tradicional: no es raro ver subidas o caídas de doble dígito en pocos
            días.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-600">
            Su riesgo es sensiblemente superior al de acciones o fondos indexados:
            mayor volatilidad, regulación aún en desarrollo y menor histórico de
            datos para evaluar su comportamiento a largo plazo. Por eso muchos
            expertos recomiendan que, si se invierte en ellas, sea con una{" "}
            <strong>proporción muy pequeña</strong> del total de la cartera.
          </p>
        </article>
      </div>

      <div className="mt-8 rounded-xl border border-navy-100 bg-navy-50 p-6">
        <h3 className="text-base font-semibold text-navy-800">
          ¿Por qué usarlos solo como una parte pequeña de la cartera?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          La diversificación busca equilibrar activos con comportamientos
          distintos. El oro puede amortiguar caídas en momentos de crisis, y las
          criptomonedas pueden aportar potencial de crecimiento adicional, pero
          ambos son más impredecibles que una cartera bien diversificada de
          acciones y bonos. Por eso suelen recomendarse como un complemento
          (a menudo entre un 1&nbsp;% y un 10&nbsp;% de la cartera total) y no como el
          núcleo principal de la inversión, especialmente para quien empieza.
        </p>
      </div>
    </section>
  );
}
