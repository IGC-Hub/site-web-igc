import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | IGC Gestion immobilière",
  description:
    "Contactez IGC pour une consultation gratuite. 7040 Hutchison, Montréal. Tél: 514-329-3034.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-semibold text-igc-blue-light uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Parlons de
            <br />
            <span className="text-igc-blue-light">votre projet</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Contactez-nous pour une consultation sans engagement. Nous évaluerons
            vos besoins et vous proposerons une solution adaptée à votre réalité.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-slate-100">
                <h2 className="font-bold text-xl text-igc-dark mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-igc-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-igc-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-igc-dark">
                        Adresse
                      </p>
                      <p className="text-sm text-slate-500">
                        7040 Hutchison, Montréal (Québec)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-igc-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-igc-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-igc-dark">
                        Téléphone
                      </p>
                      <a
                        href="tel:514-329-3034"
                        className="text-sm text-igc-blue hover:underline"
                      >
                        514-329-3034
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-igc-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-igc-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-igc-dark">
                        Courriel
                      </p>
                      <a
                        href="mailto:igc@ongere.com"
                        className="text-sm text-igc-blue hover:underline"
                      >
                        igc@ongere.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-igc-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-igc-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-igc-dark">
                        Heures d&apos;ouverture
                      </p>
                      <p className="text-sm text-slate-500">
                        Lundi au vendredi : 9h à 17h
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Service d&apos;urgence 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-igc-dark rounded-2xl p-7">
                <h3 className="font-bold text-white mb-2">
                  Consultation gratuite
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Nous offrons une première consultation sans frais ni engagement.
                  Décrivez-nous votre situation et nous vous proposerons une
                  solution sur mesure.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100">
                <h2 className="font-bold text-xl text-igc-dark mb-6">
                  Demander une soumission
                </h2>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Courriel *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all"
                        placeholder="votre@courriel.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all"
                        placeholder="514-000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Type d&apos;organisation *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all text-slate-600"
                    >
                      <option value="">Sélectionnez</option>
                      <option>Coopérative d&apos;habitation</option>
                      <option>OBNL d&apos;habitation</option>
                      <option>Syndicat de copropriété</option>
                      <option>Résidence pour aînés</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Nombre de logements
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all"
                      placeholder="ex: 24"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-igc-blue/20 focus:border-igc-blue transition-all resize-none"
                      placeholder="Décrivez-nous votre situation et vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-igc-blue text-white font-semibold rounded-xl hover:bg-igc-blue-dark transition-colors shadow-sm hover:shadow-md text-base"
                  >
                    Envoyer la demande
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a
                      href="/politique-confidentialite"
                      className="text-igc-blue hover:underline"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
