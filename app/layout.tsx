import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import AdSenseLoader from "@/components/AdSenseLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.inviertedesdecero.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "InvierteDesdeCero — Aprende a invertir desde cero",
    template: "%s | InvierteDesdeCero",
  },
  description:
    "Guía educativa gratuita para aprender a invertir desde cero: interés compuesto, S&P 500, fondos indexados, oro, criptomonedas y comparativa de brokers en España (MyInvestor, Trade Republic, Degiro, Interactive Brokers).",
  keywords: [
    "invertir desde cero",
    "interés compuesto",
    "calculadora interés compuesto",
    "invertir en bolsa para principiantes",
    "cómo empezar a invertir",
    "cómo diversificar una cartera",
    "cuánto ahorrar al mes",
    "glosario financiero",
    "fondos indexados",
    "S&P 500",
    "invertir en España",
    "MyInvestor",
    "Trade Republic",
    "Degiro",
    "Interactive Brokers",
  ],
  authors: [{ name: "InvierteDesdeCero" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "InvierteDesdeCero",
    title: "InvierteDesdeCero — Aprende a invertir desde cero",
    description:
      "Educación financiera clara para aprender a invertir: calculadora de interés compuesto, mercados, activos y comparativa de brokers en España.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvierteDesdeCero — Aprende a invertir desde cero",
    description:
      "Educación financiera clara para aprender a invertir: calculadora de interés compuesto, mercados, activos y comparativa de brokers en España.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InvierteDesdeCero",
    url: SITE_URL,
    description:
      "Guía educativa gratuita para aprender a invertir desde cero, con calculadora de interés compuesto y comparativa de brokers.",
    inLanguage: "es-ES",
  };

  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <AdSenseLoader />
      </body>
    </html>
  );
}
