import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de InvierteDesdeCero: qué cookies utilizamos, con qué finalidad y cómo puedes gestionarlas.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

const COOKIE_TABLE = [
  {
    type: "Técnicas / necesarias",
    purpose: "Permiten el funcionamiento básico del sitio (navegación, preferencias de sesión).",
    duration: "Sesión o hasta 1 año",
  },
  {
    type: "Analíticas",
    purpose:
      "Nos permiten conocer cómo se usa el sitio (páginas más visitadas, tiempo de permanencia) para mejorarlo.",
    duration: "Hasta 2 años",
  },
  {
    type: "Publicitarias (Google AdSense)",
    purpose: "Permiten mostrar anuncios relevantes y medir su rendimiento.",
    duration: "Hasta 13 meses, según el proveedor",
  },
];

export default function CookiesPolicyPage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <h1 className="section-heading">Política de cookies</h1>
      <p className="mt-2 text-sm text-navy-400">Última actualización: septiembre de 2026</p>

      <div className="prose-content mt-8 max-w-3xl">
        <h3>1. Qué son las cookies</h3>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          navegador cuando visitas un sitio web. Permiten que el sitio recuerde
          tus acciones y preferencias durante un periodo de tiempo, para que no
          tengas que volver a introducirlas cada vez que lo visitas o navegas
          entre páginas.
        </p>

        <h3>2. Tipos de cookies que utilizamos</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-navy-100 not-prose">
          <table className="min-w-full divide-y divide-navy-100 text-left text-sm">
            <thead className="bg-navy-800 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Tipo</th>
                <th className="px-4 py-3 font-semibold">Finalidad</th>
                <th className="px-4 py-3 font-semibold">Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 bg-white">
              {COOKIE_TABLE.map((row) => (
                <tr key={row.type}>
                  <td className="px-4 py-3 font-medium text-navy-800">{row.type}</td>
                  <td className="px-4 py-3 text-navy-600">{row.purpose}</td>
                  <td className="px-4 py-3 text-navy-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>3. Cookies de terceros</h3>
        <p>
          Este sitio puede utilizar servicios de terceros, como Google Analytics
          (analítica) y Google AdSense (publicidad), que instalan sus propias
          cookies para ofrecer sus servicios. Estos terceros tienen sus propias
          políticas de privacidad y cookies, independientes de la nuestra.
        </p>

        <h3>4. Cómo gestionar o desactivar las cookies</h3>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu
          equipo mediante la configuración de tu navegador:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/proteccion-mejorada-contra-el-rastreo-firefox-escritorio"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que desactivar determinadas cookies puede afectar al
          funcionamiento de algunas partes del sitio.
        </p>

        <h3>5. Más información</h3>
        <p>
          Para más información sobre cómo tratamos tus datos personales,
          consulta nuestra{" "}
          <a href="/privacidad" className="link-underline">
            política de privacidad
          </a>
          .
        </p>
      </div>
    </section>
  );
}
