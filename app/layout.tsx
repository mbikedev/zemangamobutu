import type { Metadata } from "next";
import { Playfair_Display, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ebGaramond = EB_Garamond({
  variable: "--font-motto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Mobutu Zemanga | Chef d'Entreprises & Consultant International",
  description:
    "Site officiel de Mobutu Zemanga - Chef d'Entreprises, Dirigeant d'ONGs, Directeur de Centres de Recherches et Consultant International.",
  keywords: [
    "Mobutu Zemanga",
    "consultant international",
    "entrepreneur",
    "ONG",
    "recherche",
  ],
  authors: [{ name: "Mobutu Zemanga" }],
  openGraph: {
    title: "Mobutu Zemanga",
    description: "Chef d'Entreprises & Consultant International",
    url: "https://mobutuzemanga.com",
    siteName: "Mobutu Zemanga",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
