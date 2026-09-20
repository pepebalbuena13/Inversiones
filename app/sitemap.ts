import type { MetadataRoute } from "next";
import { LEGAL_ROUTES, PRIMARY_ROUTES } from "@/lib/routes";

const SITE_URL = "https://www.invertirdesdecero.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PRIMARY_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...LEGAL_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
