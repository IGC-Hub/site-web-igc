import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-igc-darker text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-igc-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IGC</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Votre partenaire de confiance pour la gestion d&apos;immeubles au
              Québec. Coopératives, OBNL, copropriétés et résidences pour
              aînés.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-igc-blue-light">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-igc-blue-light">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Gestion financière",
                "Location",
                "Communication",
                "Entretien",
                "Gestion des travaux",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-igc-blue-light">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-igc-blue-light mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  7040 Hutchison, Montréal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-igc-blue-light shrink-0" />
                <a
                  href="tel:514-329-3034"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  514-329-3034
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-igc-blue-light shrink-0" />
                <a
                  href="mailto:igc@ongere.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  igc@ongere.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} IGC Gestion immobilière. Tous
            droits réservés.
          </p>
          <Link
            href="/politique-confidentialite"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
