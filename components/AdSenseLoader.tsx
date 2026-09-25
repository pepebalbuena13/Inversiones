// El ID de editor de AdSense no es un dato sensible (queda visible en el
// HTML público de cualquier página con anuncios), así que se deja aquí por
// defecto para que los anuncios funcionen sin configurar nada en Vercel.
// La variable de entorno, si se define, tiene prioridad.
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7190127104678764";

/**
 * Carga el script base de AdSense en todas las páginas.
 *
 * Deliberadamente NO usa el componente <Script> de next/script: Next.js
 * optimiza los scripts con strategy="beforeInteractive" convirtiéndolos en
 * un <link rel="preload"> más un bootstrap inyectado por JS, en vez de un
 * <script> literal. Eso funciona perfectamente en el navegador, pero el
 * verificador de Google AdSense ("Fragmento de código de AdSense") busca
 * textualmente una etiqueta <script src="..."> tal cual en el HTML servido
 * y no encontraba ninguna, así que la verificación fallaba siempre. Una
 * etiqueta <script> normal, renderizada como JSX plano, sí aparece
 * literalmente en el HTML.
 */
export default function AdSenseLoader() {
  if (!ADSENSE_CLIENT_ID) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}
