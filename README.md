# InvierteDesdeCero

Sitio web educativo sobre inversión para principiantes, construido con
[Next.js 14](https://nextjs.org/) (App Router), TypeScript y Tailwind CSS.

## Contenido

- **Calculadora de interés compuesto** interactiva, con gráfico de evolución
  año a año y simulación opcional de impuestos (tramos del IRPF del ahorro
  español).
- **Contenido educativo**: qué es el interés compuesto, principales mercados
  (S&P 500, Nasdaq, mercados emergentes, fondos indexados, renta fija).
- **Otros activos**: oro y criptomonedas.
- **Comparativa de brokers**: MyInvestor, Trade Republic, Degiro e
  Interactive Brokers.
- **Errores comunes del principiante**.
- **Preguntas frecuentes** con datos estructurados `FAQPage` (schema.org)
  para mejorar el SEO.
- **Política de privacidad** y **política de cookies**, con banner de
  consentimiento de cookies.

Diseño responsive (mobile-first), estructura semántica (`h1`/`h2`/`h3`) y
metadatos SEO (Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`)
pensados para maximizar el tráfico orgánico y facilitar la integración
futura de Google AdSense.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub/GitLab/Bitbucket.
2. Entra en [vercel.com](https://vercel.com) e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Next.js: no requiere
   configuración adicional (`Build Command: next build`,
   `Output Directory: .next`).
4. Antes de desplegar a producción, actualiza la constante `SITE_URL` en
   `app/layout.tsx`, `app/sitemap.ts` y `app/robots.ts` con tu dominio real.
5. Pulsa **Deploy**.

También puedes desplegar desde la CLI:

```bash
npm install -g vercel
vercel
```

## Monetización con Google AdSense

La infraestructura de anuncios ya está integrada y lista para activar:

- `components/AdSenseLoader.tsx` carga el script de AdSense en todo el
  sitio, pero **solo** si el visitante ha aceptado las cookies (banner de
  `components/CookieConsent.tsx`) y solo si hay un ID de cliente configurado.
- `components/AdSlot.tsx` es un bloque de anuncio individual reutilizable;
  ya hay dos colocados en `/glosario`
  (`components/sections/GlossarySection.tsx`) como ejemplo.

Para activarlo:

1. Crea una cuenta en [Google AdSense](https://adsense.google.com) y espera
   la aprobación (necesita el sitio ya desplegado y con tráfico real).
2. Copia tu ID de editor (`ca-pub-XXXXXXXXXXXXXXXX`) en la variable de
   entorno `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (ver `.env.example`), tanto en
   local como en las variables de entorno del proyecto en Vercel.
3. Crea unidades de anuncio en el panel de AdSense y sustituye los IDs de
   ejemplo (`"0000000001"`, `"0000000002"`) en los `<AdSlot slot="..." />`
   por los `data-ad-slot` reales.
4. Añade más `<AdSlot slot="..." />` donde quieras en cualquier otra página
   (por ejemplo en `MarketsSection` o `CommonMistakes`), reutilizando el
   mismo componente.

Sin la variable de entorno configurada, los componentes no renderizan nada:
es seguro tenerlos en el código incluso antes de tener la cuenta aprobada.

## Aviso legal

El contenido de este sitio tiene fines exclusivamente educativos y no
constituye asesoramiento financiero, fiscal ni recomendación de inversión
personalizada.
