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

El sitio ya incluye la estructura de contenidos, el aviso de cookies y la
política de privacidad/cookies necesarios para solicitar la aprobación de
Google AdSense. Una vez aprobado, añade el script de AdSense en
`app/layout.tsx` (por ejemplo, dentro de un componente que solo cargue tras
aceptar las cookies publicitarias) y los bloques de anuncios donde
corresponda.

## Aviso legal

El contenido de este sitio tiene fines exclusivamente educativos y no
constituye asesoramiento financiero, fiscal ni recomendación de inversión
personalizada.
