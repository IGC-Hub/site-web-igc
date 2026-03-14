import {
  BadgeCheck,
  RotateCcw,
  Users,
  Award,
  Building2,
  Target,
  Heart,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "À propos | IGC Gestion immobilière",
  description:
    "Découvrez IGC, votre partenaire de confiance en gestion immobilière au Québec depuis 17 ans. Membre de l'Ordre des administrateurs agréés.",
};

const values = [
  {
    icon: Target,
    title: "Rigueur",
    desc: "Chaque décision est prise avec soin et transparence pour protéger les intérêts de nos clients.",
  },
  {
    icon: Heart,
    title: "Engagement",
    desc: "Nous traitons chaque immeuble comme s'il était le nôtre, avec passion et dévouement.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    desc: "Éthique professionnelle irréprochable et communication honnête en tout temps.",
  },
  {
    icon: Users,
    title: "Proximité",
    desc: "Une équipe accessible et réactive, à l'écoute des besoins de chaque client.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Fondation d'IGC",
    desc: "Création d'Immo Gestion Conseil inc. avec la mission de redéfinir la gestion immobilière au Québec.",
  },
  {
    year: "2012",
    title: "Expansion des services",
    desc: "Élargissement de notre offre pour couvrir les coopératives d'habitation et les OBNL.",
  },
  {
    year: "2018",
    title: "10 ans d'excellence",
    desc: "Cap des 10 ans avec 100% de rétention client et une réputation solidement établie.",
  },
  {
    year: "2025",
    title: "17 ans d'expertise",
    desc: "Plus de 275 logements gérés, 16 immeubles et une équipe dédiée au service de nos clients.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
            À propos
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Une équipe passionnée
            <br />
            <span className="text-igc-blue-light">à votre service</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Depuis 2008, IGC accompagne les conseils d&apos;administration dans
            la gestion quotidienne et stratégique de leurs immeubles résidentiels
            au Québec.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-igc-dark mb-6">
                Qui sommes-nous?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Immo Gestion Conseil inc. (IGC) est une firme de gestion
                  immobilière spécialisée dans la gestion d&apos;immeubles
                  résidentiels locatifs au Québec. Nous servons les
                  coopératives d&apos;habitation, les OBNL d&apos;habitation,
                  les syndicats de copropriétés et les résidences pour
                  personnes aînées.
                </p>
                <p>
                  Membre de l&apos;Ordre des administrateurs agréés du Québec
                  (ADMA), notre équipe offre une garantie de professionnalisme
                  et d&apos;éthique. Nous sommes reconnus pour notre capacité
                  à redresser des projets en difficulté et à transformer la
                  gestion d&apos;immeubles mal gérés.
                </p>
                <p>
                  Notre fierté : 100% de rétention client depuis notre
                  fondation. Aucun projet ne nous a quittés en 17 ans — la
                  meilleure preuve de la qualité de notre service.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeCheck,
                  title: "Membre ADMA",
                  desc: "Administrateurs agréés du Québec",
                },
                {
                  icon: RotateCcw,
                  title: "Redressement",
                  desc: "Spécialistes des projets en difficulté",
                },
                {
                  icon: Users,
                  title: "Proximité",
                  desc: "Équipe accessible et réactive",
                },
                {
                  icon: Award,
                  title: "100% fidélité",
                  desc: "Rétention client absolue",
                },
              ].map((a) => (
                <div
                  key={a.title}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <a.icon size={24} className="text-igc-blue mb-3" />
                  <h3 className="font-bold text-sm text-igc-dark mb-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-slate-500">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-igc-blue uppercase tracking-widest mb-3">
              Ce qui nous guide
            </p>
            <h2 className="text-3xl font-extrabold text-igc-dark">
              Nos valeurs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-slate-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-igc-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-igc-blue" />
                </div>
                <h3 className="font-bold text-lg text-igc-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-igc-dark">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
              Notre parcours
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              17 ans d&apos;évolution
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex gap-6">
                <div className="w-20 shrink-0 text-right">
                  <span className="text-2xl font-extrabold text-igc-blue-light">
                    {t.year}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-igc-blue-light rounded-full mt-2" />
                  {i < timeline.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-px h-full bg-white/10 -translate-x-1/2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {t.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
