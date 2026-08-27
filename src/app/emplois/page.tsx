import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Emplois | IGC Gestion immobilière",
  description:
    "Consultez les offres d'emploi chez Immo Gestion Conseil inc. — gestion d'immeubles résidentiels à Montréal.",
  alternates: {
    canonical: "https://igcpro.com/emplois",
  },
  openGraph: {
    title: "Emplois | IGC Gestion immobilière",
    description:
      "Consultez les offres d'emploi chez Immo Gestion Conseil inc. — gestion d'immeubles résidentiels à Montréal.",
    type: "website",
    locale: "fr_CA",
  },
};

const offres = [
  {
    slug: "technicien-comptabilite-gestion-locative",
    titre:
      "Technicien ou technicienne en comptabilité — gestion locative",
    lieu: "Montréal (Québec)",
    type: "Permanent, temps plein",
    salaire: "36,50 $/h",
    heures: "35 h/semaine",
  },
];

export default function EmploisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
            Carrières
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Nos offres d&apos;emploi
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Joignez-vous à une équipe engagée dans la gestion responsable d&apos;immeubles résidentiels à Montréal.
          </p>
        </div>
      </section>

      {/* Liste des offres */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {offres.length === 0 ? (
            <p className="text-slate-500 text-center py-12">
              Aucune offre d&apos;emploi pour le moment. Revenez bientôt.
            </p>
          ) : (
            <div className="space-y-5">
              {offres.map((offre) => (
                <Link
                  key={offre.slug}
                  href={`/emplois/${offre.slug}`}
                  className="block bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-lg hover:border-igc-blue/20 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-igc-dark group-hover:text-igc-blue transition-colors mb-3">
                        {offre.titre}
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <Briefcase size={14} className="text-igc-blue" />
                          {offre.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <DollarSign size={14} className="text-igc-blue" />
                          {offre.salaire}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <MapPin size={14} className="text-igc-blue" />
                          {offre.lieu}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <Clock size={14} className="text-igc-blue" />
                          {offre.heures}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-igc-blue text-white text-sm font-semibold rounded-lg group-hover:bg-igc-blue-dark transition-colors">
                        Voir l&apos;offre
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
