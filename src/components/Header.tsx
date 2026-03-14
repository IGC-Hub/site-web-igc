"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-igc-darker text-white/80 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <p className="flex items-center gap-1 text-xs tracking-wide">
            Membre de l&apos;Ordre des administrateurs agréés du Québec
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:514-329-3034"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} />
              514-329-3034
            </a>
            <a
              href="mailto:igc@ongere.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} />
              igc@ongere.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="IGC"
              width={44}
              height={44}
              className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-igc-dark text-base leading-tight">
                IGC
              </p>
              <p className="text-[11px] text-slate-500 leading-tight tracking-wide">
                Gestion immobilière
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-igc-blue rounded-lg hover:bg-slate-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-igc-blue text-white text-sm font-semibold rounded-lg hover:bg-igc-blue-dark transition-colors shadow-sm hover:shadow-md"
            >
              Soumission gratuite
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-igc-blue text-white text-sm font-semibold rounded-lg text-center"
              >
                Soumission gratuite
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
