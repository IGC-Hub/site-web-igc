import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IGC Gestion immobilière | Gestion d'immeubles au Québec",
  description:
    "IGC - Votre partenaire de confiance pour la gestion d'immeubles résidentiels au Québec. Copropriétés, coopératives d'habitation, OBNL et résidences pour aînés. 17 ans d'expérience, 100% de rétention client.",
  keywords:
    "gestion immobilière, Québec, copropriété, coopérative habitation, OBNL, résidences aînés, syndic, administration immeubles",
  openGraph: {
    title: "IGC Gestion immobilière | Gestion d'immeubles au Québec",
    description:
      "Expertise reconnue en copropriétés, coopératives d'habitation, OBNL et résidences pour aînés. Une équipe réactive depuis 17 ans.",
    type: "website",
    locale: "fr_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
