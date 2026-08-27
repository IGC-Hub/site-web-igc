import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Calendar,
  Users,
  Mail,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Dates d'affichage                                                  */
/*  L'échéance doit tomber au moins 4 semaines après la mise en ligne  */
/*  pour satisfaire les exigences de l'EIMT (EDSC).                    */
/* ------------------------------------------------------------------ */
const DATE_AFFICHAGE = "2026-08-27"; // Date de mise en ligne
const DATE_ECHEANCE = "2026-09-24"; // Minimum 4 semaines après DATE_AFFICHAGE

const COURRIEL = "igc@ongere.com";
const OBJET_COURRIEL =
  "Candidature — Technicien(ne) en comptabilité — gestion locative";

export const metadata: Metadata = {
  title:
    "Technicien ou technicienne en comptabilité — gestion locative | IGC Gestion immobilière",
  description:
    "Offre d'emploi : Technicien ou technicienne en comptabilité — gestion locative chez Immo Gestion Conseil inc. à Montréal. Poste permanent, temps plein, 36,50 $/h.",
  alternates: {
    canonical:
      "https://igcpro.com/emplois/technicien-comptabilite-gestion-locative",
  },
  openGraph: {
    title:
      "Technicien ou technicienne en comptabilité — gestion locative | IGC",
    description:
      "Offre d'emploi : Technicien ou technicienne en comptabilité — gestion locative chez Immo Gestion Conseil inc. à Montréal. Poste permanent, temps plein, 36,50 $/h.",
    type: "website",
    locale: "fr_CA",
  },
};

const ficheTechnique = [
  { label: "Titre du poste", value: "Technicien ou technicienne en comptabilité — gestion locative" },
  { label: "Code CNP 2021", value: "12200 — Techniciens/techniciennes en comptabilité et teneurs/teneuses de livres (FEER 2)" },
  { label: "Employeur", value: "Immo Gestion Conseil inc. (IGC)" },
  { label: "Lieu de travail", value: "Montréal (Québec) — travail en présentiel, avec possibilité de télétravail partiel" },
  { label: "Type d'emploi", value: "Permanent, temps plein" },
  { label: "Heures", value: "35 heures par semaine. L'horaire régulier comprend environ deux soirées par mois pour les séances des conseils d'administration" },
  { label: "Salaire offert", value: "36,50 $ l'heure (environ 66 430 $ par année)" },
  { label: "Expérience exigée", value: "2 ans et plus" },
  { label: "Scolarité", value: "DEC ou AEC en comptabilité, tenue de livres, administration ou gestion — ou formation en comptabilité assortie d'une expérience équivalente" },
  { label: "Langue de travail", value: "Français" },
  { label: "Postes à pourvoir", value: "1" },
  { label: "Date d'entrée en fonction", value: "Dès que possible" },
];

const responsabilites = [
  "Tenir les livres comptables complets des organismes clients : grand livre, journaux auxiliaires, balances de vérification.",
  "Produire la facturation mensuelle des loyers, incluant le calcul des loyers nets, des suppléments au loyer et des rabais applicables aux membres.",
  "Enregistrer les encaissements, effectuer les allocations aux comptes clients et réaliser les rapprochements bancaires mensuels.",
  "Concilier les comptes, traiter les chèques sans provision et corriger les écarts.",
  "Assurer le suivi des comptes clients : soldes impayés, échéanciers de paiement, dossiers de recouvrement et pièces à l'appui.",
  "Préparer les états de compte, les quittances et les relevés 31 destinés aux locataires.",
  "Préparer et transmettre les formulaires et déclarations gouvernementales applicables : TPS et TVQ, relevés fiscaux, reddition de comptes à la Société d'habitation du Québec.",
  "Produire les états financiers périodiques, les rapports budgétaires et les tableaux de suivi destinés aux conseils d'administration des organismes clients.",
  "Présenter ces états financiers en séance de conseil d'administration, expliquer les écarts et répondre aux questions des administratrices et administrateurs.",
  "Effectuer les calculs et produire les avis d'augmentation de loyer conformément aux critères applicables.",
  "Préparer les dossiers de fin d'exercice et les pièces requises par les vérificateurs externes.",
  "Paramétrer les modules financiers de la plateforme de gestion, contrôler la qualité des données et accompagner les utilisateurs internes.",
  "Produire des rapports statistiques et financiers à la demande de la direction.",
];

const exigences = [
  "Diplôme d'études collégiales (DEC) ou attestation d'études collégiales (AEC) en comptabilité, en tenue de livres, en administration ou en gestion ; ou formation en comptabilité assortie d'une expérience équivalente.",
  "Deux ans et plus d'expérience en tenue de livres ou en comptabilité, incluant la production d'états financiers et le rapprochement bancaire.",
  "Bonne maîtrise d'un logiciel comptable et d'un tableur (fonctions de calcul, tableaux croisés).",
  "Maîtrise du français parlé et écrit.",
  "Rigueur, autonomie et sens de la confidentialité.",
  "Aisance à présenter des résultats financiers devant un conseil d'administration composé de personnes bénévoles, à vulgariser les écarts et à répondre aux questions.",
  "Aisance à communiquer avec des administrateurs bénévoles et des locataires.",
];

const atouts = [
  "Connaissance du milieu de l'habitation communautaire au Québec : coopératives, OBNL d'habitation, programmes de la Société d'habitation du Québec.",
  "Expérience de la facturation récurrente ou de la gestion de comptes clients en volume.",
  "Connaissance des obligations fiscales applicables aux organismes sans but lucratif.",
];

const avantages = [
  "Salaire de 36,50 $ l'heure, soit environ 66 430 $ par année pour 35 heures par semaine.",
  "Poste permanent à temps plein, du lundi au vendredi (voir la section « Horaire » ci-dessous).",
  "Deux semaines de vacances annuelles payées, conformément à la Loi sur les normes du travail, et les jours fériés prévus par la loi.",
  "Possibilité de télétravail partiel.",
  "Formation continue sur la plateforme de gestion et sur les particularités du secteur.",
  "Une petite équipe, un rôle autonome et un contact direct avec la direction.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title:
    "Technicien ou technicienne en comptabilité — gestion locative",
  description:
    "Nous cherchons une personne pour prendre en charge le cycle comptable complet de nos organismes clients : de la facturation mensuelle des loyers jusqu'aux états financiers, qu'elle présentera elle-même devant les conseils d'administration.",
  datePosted: DATE_AFFICHAGE,
  validThrough: DATE_ECHEANCE,
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Immo Gestion Conseil inc.",
    sameAs: "https://igcpro.com",
    logo: "https://igcpro.com/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7040, rue Hutchison, bureau 101",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H3N 1Y7",
      addressCountry: "CA",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "CAD",
    value: {
      "@type": "QuantitativeValue",
      value: 36.5,
      unitText: "HOUR",
    },
  },
  inLanguage: "fr-CA",
  directApply: false,
};

export default function TechnicienComptabilitePage() {
  const mailtoHref = `mailto:${COURRIEL}?subject=${encodeURIComponent(OBJET_COURRIEL)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li>
                <Link href="/emplois" className="hover:text-white transition-colors">
                  Emplois
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li className="text-white" aria-current="page">Technicien(ne) en comptabilité</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Technicien ou technicienne en comptabilité{" "}
            <span className="text-igc-blue-light">— gestion locative</span>
          </h1>
          <p className="text-lg text-slate-300">
            Immo Gestion Conseil inc. — Montréal
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg">
              <Briefcase size={14} />
              Permanent, temps plein
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg">
              <DollarSign size={14} />
              36,50 $/h
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg">
              <MapPin size={14} />
              Montréal (Québec)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg">
              <Clock size={14} />
              35 h/semaine
            </span>
          </div>
        </div>
      </section>

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-10">

              {/* L'entreprise */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  L&apos;entreprise
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Immo Gestion Conseil inc. est une entreprise montréalaise de gestion d&apos;immeubles résidentiels. Nous administrons environ 275 logements répartis dans 16 immeubles, pour le compte d&apos;une dizaine d&apos;organismes clients : coopératives d&apos;habitation, organismes à but non lucratif d&apos;habitation, résidences privées pour aînés et syndicats de copropriété. Nous exploitons notre propre plateforme de gestion immobilière, qui centralise la facturation, les encaissements et la reddition de comptes de nos organismes clients.
                </p>
              </section>

              {/* Le poste */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Le poste
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Nous cherchons une personne pour prendre en charge le cycle comptable complet de nos organismes clients : de la facturation mensuelle des loyers jusqu&apos;aux états financiers, qu&apos;elle présentera elle-même devant les conseils d&apos;administration.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  C&apos;est un poste autonome, appelé à le devenir davantage. La direction d&apos;IGC amorce une transition progressive de ses responsabilités; la personne titulaire sera accompagnée lors de ses premières présentations, puis assumera seule la reddition de comptes financière auprès des organismes clients.
                </p>
              </section>

              {/* Principales responsabilités */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Principales responsabilités
                </h2>
                <ul className="space-y-2.5">
                  {responsabilites.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="text-igc-blue mt-1 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Ce que nous demandons */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Ce que nous demandons
                </h2>
                <ul className="space-y-2.5">
                  {exigences.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="text-igc-blue mt-1 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Atouts */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Atouts
                </h2>
                <ul className="space-y-2.5">
                  {atouts.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="text-igc-blue mt-1 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Ce que nous offrons */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Ce que nous offrons
                </h2>
                <ul className="space-y-2.5">
                  {avantages.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight size={16} className="text-igc-blue mt-1 shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Horaire */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Horaire
                </h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  35 heures par semaine. L&apos;horaire régulier comprend environ deux soirées par mois, consacrées à la présentation des états financiers aux conseils d&apos;administration de nos organismes clients.
                </p>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Ces conseils sont formés d&apos;administratrices et d&apos;administrateurs bénévoles, qui siègent en dehors des heures ouvrables. Le calendrier des séances est établi à l&apos;avance pour l&apos;année.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Les heures travaillées en soirée font partie des 35 heures et sont reprises dans l&apos;horaire de la même semaine. Il ne s&apos;agit pas d&apos;heures supplémentaires ni de disponibilité sur appel.
                </p>
              </section>

              {/* Lieu de travail */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Lieu de travail
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Montréal (Québec). Le poste s&apos;exerce en présentiel, avec possibilité de télétravail partiel.
                </p>
              </section>

              {/* Pour postuler */}
              <section>
                <h2 className="text-2xl font-bold text-igc-dark mb-4">
                  Pour postuler
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Faites parvenir votre curriculum vitæ à l&apos;adresse courriel indiquée dans l&apos;affichage. Nous communiquerons avec les personnes dont la candidature aura été retenue pour une entrevue.
                </p>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-igc-blue text-white font-semibold rounded-lg hover:bg-igc-blue-dark transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-igc-blue focus:ring-offset-2"
                >
                  <Mail size={18} />
                  Envoyer ma candidature
                </a>
              </section>

              {/* Mention finale */}
              <section className="border-t border-slate-200 pt-8">
                <p className="text-sm text-slate-500 leading-relaxed">
                  Immo Gestion Conseil inc. souscrit au principe de l&apos;égalité d&apos;accès à l&apos;emploi. Nous encourageons les candidatures des personnes de tous horizons, notamment des jeunes de 15 à 30 ans, des personnes immigrantes, des Autochtones, des personnes en situation de handicap et des travailleuses et travailleurs expérimentés.
                </p>
              </section>
            </div>

            {/* Barre latérale — Fiche technique */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
                <h2 className="text-lg font-bold text-igc-dark mb-5">
                  Fiche technique
                </h2>
                <dl className="space-y-4">
                  {ficheTechnique.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </dt>
                      <dd className="text-sm text-slate-700">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <a
                    href={mailtoHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-igc-blue text-white font-semibold rounded-lg hover:bg-igc-blue-dark transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-igc-blue focus:ring-offset-2"
                  >
                    <Mail size={16} />
                    Postuler
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Retour */}
          <div className="mt-12">
            <Link
              href="/emplois"
              className="inline-flex items-center gap-2 text-sm text-igc-blue hover:text-igc-blue-dark transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              Voir toutes les offres
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
