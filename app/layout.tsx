import type { Metadata } from "next";
import "./globals.css";

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
    "conseil stratégique",
    "partenariats internationaux",
    "développement",
  ],
  authors: [{ name: "Mobutu Zemanga" }],
  metadataBase: new URL("https://mobutuzemanga.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mobutu Zemanga | Chef d'Entreprises & Consultant International",
    description:
      "Site officiel de Mobutu Zemanga - Chef d'Entreprises, Dirigeant d'ONGs, Directeur de Centres de Recherches et Consultant International.",
    url: "https://mobutuzemanga.com",
    siteName: "Mobutu Zemanga",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/ad-majoribus.webp",
        width: 400,
        height: 500,
        alt: "Blason de Mobutu Zemanga - Chef d'Entreprises & Consultant International",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mobutu Zemanga | Chef d'Entreprises & Consultant International",
    description:
      "Chef d'Entreprises, Dirigeant d'ONGs, Directeur de Centres de Recherches et Consultant International.",
    images: ["/images/ad-majoribus.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mobutu Zemanga",
  url: "https://mobutuzemanga.com",
  jobTitle: "Chef d'Entreprises & Consultant International",
  description:
    "Chef d'Entreprises, Dirigeant d'ONGs, Directeur de Centres de Recherches et Consultant International.",
  image: "https://mobutuzemanga.com/images/ad-majoribus.webp",
  email: "info@mobutuzemanga.com",
  knowsLanguage: ["fr", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
