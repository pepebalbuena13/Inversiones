export interface SiteRoute {
  href: string;
  label: string;
}

export const PRIMARY_ROUTES: SiteRoute[] = [
  { href: "/calculadora", label: "Calculadora" },
  { href: "/interes-compuesto", label: "Interés compuesto" },
  { href: "/mercados", label: "Mercados" },
  { href: "/otros-activos", label: "Oro y cripto" },
  { href: "/plataformas", label: "Plataformas" },
  { href: "/errores-comunes", label: "Errores comunes" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
];

export const LEGAL_ROUTES: SiteRoute[] = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];
