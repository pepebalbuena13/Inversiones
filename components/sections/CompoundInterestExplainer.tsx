import Link from "next/link";

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
          Imagina que inviertes 10.000&nbsp;€ a una rentabilidad anual del 7&nbsp;%.
        </p>
        <ul>
          <li>
            <strong>Año 1:</strong> generas 700&nbsp;€ de intereses. Tu capital pasa a
            ser 10.700&nbsp;€.
          </li>
          <li>
            <strong>Año 2:</strong> el 7&nbsp;% ya no se calcula sobre 10.000&nbsp;€, sino
            sobre 10.700&nbsp;€, es decir, 749&nbsp;€ de intereses. Tu capital sube a
            11.449&nbsp;€.
          </li>
          <li>
            <strong>Año 10:</strong> sin aportar ni un euro más, tu capital rondaría
            los 19.672&nbsp;€: casi el doble, solo por el efecto del interés compuesto.
          </li>
        </ul>

        <h3>Por qué el tiempo importa más que el dinero</h3>
        <p>
          El interés compuesto no es lineal, es exponencial. Al principio la curva
          crece despacio, pero con el paso de los años se acelera de forma muy
          notable. Por eso, <strong>empezar antes</strong>, aunque sea con
          aportaciones pequeñas, suele generar mejores resultados que empezar tarde
          con aportaciones grandes. Cada año que esperas para empezar a invertir es
          un año de crecimiento exponencial que pierdes para siempre.
        </p>

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
