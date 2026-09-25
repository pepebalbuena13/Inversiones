import Script from "next/script";

// El ID de editor de AdSense no es un dato sensible (queda visible en el
// HTML público de cualquier página con anuncios), así que se deja aquí por
// defecto para que los anuncios funcionen sin configurar nada en Vercel.
// La variable de entorno, si se define, tiene prioridad.
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7190127104678764";

/**
 * Carga el script base de AdSense en el <head> de todas las páginas, tal
 * como exige el verificador de Google (Ajustes del sitio → Verificar por
 * fragmento de código). strategy="beforeInteractive" hace que Next.js lo
 * inyecte en el HTML servido desde el primer momento, sin esperar a que el
 * visitante interactúe con la página ni acepte cookies: si el script solo
 * apareciera tras aceptar el banner, el verificador de Google nunca lo
 * encontraría. Los anuncios en sí (componente AdSlot) sí se muestran solo
 * tras aceptar cookies.
 */
export default function AdSenseLoader() {
  if (!ADSENSE_CLIENT_ID) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
