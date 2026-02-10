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
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
