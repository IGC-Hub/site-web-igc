import Link from "next/link";
import {
  Building2,
  ClipboardList,
  DollarSign,
  Key,
  MessageSquare,
  Wrench,
  HardHat,
  ShieldCheck,
  RotateCcw,
  Users,
  BadgeCheck,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "275+", label: "Logements gérés" },
  { value: "16", label: "Immeubles" },
  { value: "17", label: "Années d'expérience" },
  { value: "100%", label: "Taux de rétention" },
];

const services = [
  {
    icon: ClipboardList,
    title: "Administration",
    desc: "Gestion des assemblées, procès-verbaux, suivi des décisions du CA et conformité légale.",
  },
  {
    icon: Key,
    title: "Location",
    desc: "Affichage, sélection des locataires, baux, enquête de crédit et états des lieux.",
  },
  {
    icon: DollarSign,
    title: "Comptabilité",
    desc: "Budget, états financiers, perception des loyers, comptes fournisseurs et préparation d'audit.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Portail locataires, avis, gestion des plaintes et relations avec les résidents.",
  },
  {
    icon: Wrench,
    title: "Entretien",
    desc: "Coordination des travaux courants, contrats d'entretien et inspections régulières.",
  },
  {
    icon: HardHat,
    title: "Travaux",
    desc: "Appels d'offres, suivi de chantier et gestion des fonds de prévoyance.",
  },
];

const clienteles = [
  {
    icon: Users,
    title: "Coopératives d'habitation",
    desc: "Parts sociales, assemblées générales, conformité SCHL et accompagnement des CA.",
  },
  {
    icon: Building2,
    title: "OBNL d'habitation",
    desc: "Gestion rigoureuse adaptée aux organismes à but non lucratif et au logement social.",
  },
  {
    icon: ShieldCheck,
    title: "Syndics de copropriétés",
    desc: "Administration, finances, entretien et conformité au Code civil.",
  },
  {
    icon: Award,
    title: "Résidences pour aînés",
    desc: "Services adaptés, certification RPA et suivi personnalisé.",
  },
];

const advantages = [
  {
    icon: BadgeCheck,
    title: "Membre ADMA",
    desc: "Administrateurs agréés du Québec. Garantie de professionnalisme et d'éthique.",
  },
  {
    icon: RotateCcw,
    title: "Redressement de projets",
    desc: "Spécialistes des projets en difficulté. Nous reprenons et redressons des immeubles mal gérés.",
  },
  {
    icon: Users,
    title: "Proximité et réactivité",
    desc: "Une équipe accessible qui répond rapidement. Vous n'êtes pas un numéro de dossier.",
  },
  {
    icon: Award,
    title: "Fidélité absolue",
    desc: "100% de rétention client. Aucun projet ne nous a quittés en 17 ans.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-igc-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-igc-darker via-igc-dark to-igc-blue-dark opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-igc-blue)_0%,_transparent_60%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <CheckCircle2 size={14} className="text-igc-blue-light" />
              <span className="text-xs font-medium text-white/80 tracking-wide">
                Membre de l&apos;Ordre des administrateurs agréés du Québec
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Gestion immobilière
              <br />
              <span className="text-igc-blue-light">spécialisée au Québec</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Expertise reconnue en copropriétés, coopératives d&apos;habitation,
              OBNL et résidences pour aînés. Une équipe réactive qui accompagne
              les conseils d&apos;administration depuis 17 ans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-igc-blue text-white font-semibold rounded-xl hover:bg-igc-blue-light transition-all shadow-lg hover:shadow-xl text-base"
              >
                Demander une soumission
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/15 text-base"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-igc-blue mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-igc-blue uppercase tracking-widest mb-3">
              Nos services
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-igc-dark mb-4">
              Une prise en charge complète
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              De l&apos;administration à l&apos;entretien, nous couvrons tous
              les aspects de la gestion de votre immeuble.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-igc-blue/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-igc-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-igc-blue/20 transition-colors">
                  <s.icon size={22} className="text-igc-blue" />
                </div>
                <h3 className="font-bold text-lg text-igc-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-igc-blue font-semibold hover:gap-3 transition-all"
            >
              Voir tous nos services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTELES */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
              Notre expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Adaptée à chaque clientèle
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Nous comprenons les besoins spécifiques de chaque type
              d&apos;organisation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clienteles.map((c) => (
              <div
                key={c.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-igc-blue/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-igc-blue/30 transition-colors">
                  <c.icon size={22} className="text-igc-blue-light" />
                </div>
                <h3 className="font-bold text-base text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI IGC */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-igc-blue uppercase tracking-widest mb-3">
              Nos engagements
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-igc-dark mb-4">
              Pourquoi choisir IGC?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="text-center">
                <div className="w-14 h-14 bg-igc-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <a.icon size={24} className="text-igc-blue" />
                </div>
                <h3 className="font-bold text-base text-igc-dark mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-igc-blue-dark to-igc-blue">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Prêt à simplifier la gestion de vos immeubles?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation sans engagement. Nous
            évaluerons vos besoins et vous proposerons une solution adaptée à
            votre réalité.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-igc-blue-dark font-bold rounded-xl hover:bg-slate-50 transition-all shadow-lg text-base"
          >
            Demander une consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
