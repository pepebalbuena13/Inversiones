import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de InvierteDesdeCero: qué datos recopilamos, con qué finalidad y cómo puedes ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h1 className="section-heading">Política de privacidad</h1>
      <p className="mt-2 text-sm text-navy-400">Última actualización: septiembre de 2026</p>

      <div className="prose-content mt-8 max-w-3xl">
        <h3>1. Responsable del tratamiento</h3>
        <p>
          InvierteDesdeCero (&ldquo;el sitio&rdquo;, &ldquo;nosotros&rdquo;) es el responsable del
          tratamiento de los datos personales que se recogen a través de este
          sitio web. Puedes contactar con nosotros a través del correo indicado
          en el aviso legal o en la sección de contacto del sitio.
        </p>

        <h3>2. Qué datos recopilamos</h3>
        <ul>
          <li>
            <strong>Datos de navegación:</strong> dirección IP, tipo de
            navegador, páginas visitadas y tiempo de permanencia, recogidos de
            forma automática a través de cookies y herramientas de analítica.
          </li>
          <li>
            <strong>Datos introducidos en la calculadora:</strong> las cifras
            que introduces en la calculadora de interés compuesto (inversión
            inicial, aportación mensual, años, rentabilidad) se procesan
            únicamente en tu propio navegador y no se envían ni almacenan en
            nuestros servidores.
          </li>
          <li>
            <strong>Datos de contacto:</strong> si nos escribes voluntariamente
            (por ejemplo, por correo electrónico), trataremos los datos que nos
            facilites (nombre, email, contenido del mensaje) para responder a
            tu consulta.
          </li>
        </ul>

        <h3>3. Finalidad del tratamiento</h3>
        <p>
          Utilizamos los datos recogidos para: (a) mostrar correctamente el
          contenido del sitio, (b) analizar el uso del sitio con fines
          estadísticos y de mejora, (c) mostrar publicidad relevante a través
          de servicios como Google AdSense, y (d) responder a las consultas que
          nos envíes.
        </p>

        <h3>4. Publicidad y Google AdSense</h3>
        <p>
          Este sitio puede mostrar anuncios gestionados por Google AdSense.
          Google, como tercero, puede utilizar cookies para mostrar anuncios en
          función de tus visitas anteriores a este u otros sitios web. Puedes
          inhabilitar el uso de cookies de personalización de anuncios
          visitando los{" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            ajustes de anuncios de Google
          </a>
          .
        </p>

        <h3>5. Base legal</h3>
        <p>
          El tratamiento de tus datos se basa en tu consentimiento (para
          cookies analíticas y publicitarias), en el interés legítimo (para el
          funcionamiento básico del sitio) y, en su caso, en la ejecución de
          las gestiones que nos solicites al contactarnos.
        </p>

        <h3>6. Conservación de los datos</h3>
        <p>
          Los datos de navegación se conservan durante el tiempo estrictamente
          necesario para las finalidades descritas, de acuerdo con la duración
          de cada cookie (ver{" "}
          <a href="/cookies" className="link-underline">
            política de cookies
          </a>
          ). Los datos de contacto se conservan mientras sea necesario para
          atender tu consulta.
        </p>

        <h3>7. Tus derechos</h3>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación y portabilidad escribiéndonos a través de los
          canales de contacto del sitio, indicando el derecho que deseas
          ejercer y adjuntando, si procede, copia de un documento que acredite
          tu identidad.
        </p>

        <h3>8. Cesión de datos a terceros</h3>
        <p>
          No vendemos tus datos personales. Determinados proveedores
          (analítica web, publicidad) pueden tener acceso a datos de
          navegación en su condición de encargados del tratamiento o
          responsables independientes, conforme a sus propias políticas de
          privacidad.
        </p>

        <h3>9. Cambios en esta política</h3>
        <p>
          Podemos actualizar esta política de privacidad para adaptarla a
          novedades legislativas o cambios en el funcionamiento del sitio. Te
          recomendamos revisarla periódicamente.
        </p>
      </div>
    </section>
  );
}
