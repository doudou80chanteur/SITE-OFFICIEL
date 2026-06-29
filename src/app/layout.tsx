import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterPopup } from "@/components/layout/NewsletterPopup";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { RouteTheme } from "@/components/layout/RouteTheme";
import { site } from "@/config/site.config";

// Polices auto-hébergées via next/font (woff2) - cf. §4.3
const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Site officiel`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} - Site officiel`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main">
          <RouteTheme>{children}</RouteTheme>
        </main>
        <Footer />
        <NewsletterPopup />
        <CookieConsent />
      </body>
    </html>
  );
}
