import Link from "next/link";
import {
  ClipboardList,
  DollarSign,
  Key,
  MessageSquare,
  Wrench,
  HardHat,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Nos services | IGC Gestion immobilière",
  description:
    "Services complets de gestion immobilière : administration, location, comptabilité, communication, entretien et gestion des travaux.",
};

const services = [
  {
    icon: ClipboardList,
    title: "Administration",
    color: "bg-blue-50 text-blue-600",
    items: [
      "Gestion des assemblées générales et rédaction des procès-verbaux",
      "Suivi des décisions du conseil d'administration",
      "Conformité légale et réglementaire",
      "Préparation et suivi des budgets annuels",
      "Gestion des assurances et réclamations",
      "Rédaction et mise à jour des règlements d'immeuble",
    ],
  },
  {
    icon: Key,
    title: "Location",
    color: "bg-emerald-50 text-emerald-600",
    items: [
      "Affichage des logements disponibles",
      "Sélection rigoureuse des locataires",
      "Enquêtes de crédit et vérification des références",
      "Rédaction et renouvellement des baux",
      "États des lieux d'entrée et de sortie",
      "Gestion des avis légaux (TAL)",
    ],
  },
  {
    icon: DollarSign,
    title: "Comptabilité",
    color: "bg-amber-50 text-amber-600",
    items: [
      "Préparation des budgets et prévisions financières",
      "Production des états financiers mensuels",
      "Perception et suivi des loyers",
      "Gestion des comptes fournisseurs",
      "Préparation des dossiers d'audit",
      "Rapport financier pour les bailleurs de fonds (SCHL, SHQ)",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    color: "bg-purple-50 text-purple-600",
    items: [
      "Portail locataires en ligne",
      "Gestion des avis et communications",
      "Traitement des plaintes et demandes",
      "Relations avec les résidents",
      "Organisation de rencontres communautaires",
      "Envoi de SMS et courriels automatisés",
    ],
  },
  {
    icon: Wrench,
    title: "Entretien",
    color: "bg-rose-50 text-rose-600",
    items: [
      "Coordination des travaux d'entretien courant",
      "Gestion des contrats d'entretien (déneigement, pelouse, ménage)",
      "Inspections régulières des bâtiments",
      "Gestion des urgences 24/7",
      "Suivi des garanties et déficiences",
      "Programme d'entretien préventif",
    ],
  },
  {
    icon: HardHat,
    title: "Gestion des travaux",
    color: "bg-teal-50 text-teal-600",
    items: [
      "Appels d'offres et sélection des entrepreneurs",
      "Suivi de chantier et contrôle de qualité",
      "Gestion des fonds de prévoyance",
      "Études de fonds de prévoyance (carnet d'entretien)",
      "Coordination des projets majeurs de rénovation",
      "Conformité aux normes et réglementations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
            Nos services
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Une prise en charge complète
            <br />
            <span className="text-igc-blue-light">de votre immeuble</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            De l&apos;administration quotidienne aux projets majeurs, notre équipe
            couvre tous les aspects de la gestion immobilière pour que vous puissiez
            vous concentrer sur l&apos;essentiel.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center shrink-0`}
                    >
                      <s.icon size={26} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-igc-dark">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 ml-0 md:ml-19">
                    {s.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-igc-blue mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-igc-blue-dark to-igc-blue">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Besoin d&apos;un service sur mesure?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Chaque immeuble est unique. Contactez-nous pour discuter de vos
            besoins spécifiques et obtenir une offre personnalisée.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-igc-blue-dark font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg"
          >
            Contactez-nous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
