import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | IGC Gestion immobilière",
  description:
    "Politique de confidentialité d'IGC Gestion immobilière - Immo Gestion Conseil inc.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      {/* Hero */}
      <section className="bg-igc-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Politique de confidentialité
          </h1>
          <p className="text-slate-400">
            Dernière mise à jour : mars 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <div className="prose prose-slate max-w-none prose-headings:text-igc-dark prose-headings:font-bold prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            <h2 className="text-xl font-bold text-igc-dark mt-0 mb-4">
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Immo Gestion Conseil inc. («&nbsp;IGC&nbsp;», «&nbsp;nous&nbsp;»,
              «&nbsp;notre&nbsp;») s&apos;engage à protéger la vie privée de ses
              clients, locataires et visiteurs de son site Web. La présente
              politique de confidentialité explique quels renseignements
              personnels nous collectons, comment nous les utilisons et avec qui
              nous les partageons.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Pour être en conformité avec les politiques des opérateurs, cette
              politique de confidentialité inclut les éléments suivants : les
              renseignements personnels collectés, la façon dont ils sont
              utilisés, et avec qui ils sont partagés.
            </p>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              1. Renseignements personnels collectés
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Nous pouvons collecter les renseignements suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>
                Nom, prénom, adresse courriel, numéro de téléphone et adresse
                postale
              </li>
              <li>
                Informations relatives à votre immeuble ou organisation
                (type, nombre de logements, etc.)
              </li>
              <li>
                Renseignements financiers nécessaires à la gestion des comptes
              </li>
              <li>
                Données de navigation sur notre site Web (cookies, adresse IP,
                pages visitées)
              </li>
              <li>
                Numéro de téléphone cellulaire pour l&apos;envoi de
                communications par SMS
              </li>
            </ul>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              2. Utilisation des renseignements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Vos renseignements personnels sont utilisés pour :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>Fournir nos services de gestion immobilière</li>
              <li>Communiquer avec vous au sujet de votre immeuble</li>
              <li>
                Traiter vos demandes de soumission et de consultation
              </li>
              <li>
                Envoyer des communications importantes par courriel ou SMS
                (rappels, avis, notifications de compte)
              </li>
              <li>
                Améliorer nos services et l&apos;expérience sur notre site Web
              </li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              3. Partage des renseignements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Nous ne vendons ni ne louons vos renseignements personnels à des
              tiers. Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>
                Des fournisseurs de services qui agissent en notre nom
                (entretien, comptabilité, technologies)
              </li>
              <li>
                Les autorités compétentes lorsque la loi l&apos;exige
              </li>
              <li>
                Les organismes de financement (SCHL, SHQ) dans le cadre de nos
                obligations contractuelles
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
              Le consentement SMS n&apos;est pas partagé avec des tiers ou des
              sociétés affiliées.
            </p>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              4. Conditions d&apos;utilisation des SMS
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              En vous inscrivant aux SMS à partir d&apos;un formulaire Web ou
              d&apos;un autre support, vous acceptez de recevoir des SMS de
              Immo Gestion Conseil inc. Cela inclut les SMS pour le service à
              la clientèle. Veuillez noter :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>La fréquence des messages peut varier.</li>
              <li>
                Des frais liés à l&apos;utilisation des messages et des données
                peuvent s&apos;appliquer.
              </li>
              <li>
                Pour vous désinscrire, envoyez <strong>ARRÊT</strong> à tout
                moment.
              </li>
              <li>
                Pour obtenir de l&apos;aide, envoyez <strong>AIDE</strong> ou
                visitez notre site Web.
              </li>
            </ul>
            <div className="bg-igc-blue/5 border border-igc-blue/15 rounded-xl px-6 py-5 mb-6">
              <p className="text-sm text-slate-600">
                Consultez la politique de confidentialité :{" "}
                <a
                  href="https://igc-locataires.igcportail.ca/politique-confidentialite.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-igc-blue font-semibold hover:underline"
                >
                  igc-locataires.igcportail.ca/politique-confidentialite.html
                </a>
              </p>
            </div>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              5. Protection des renseignements
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Nous mettons en place des mesures de sécurité administratives,
              techniques et physiques appropriées pour protéger vos
              renseignements personnels contre tout accès, utilisation ou
              divulgation non autorisés.
            </p>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              6. Vos droits
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Conformément à la Loi sur la protection des renseignements
              personnels dans le secteur privé du Québec (Loi 25), vous avez le
              droit :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li>
                D&apos;accéder aux renseignements personnels que nous détenons
                à votre sujet
              </li>
              <li>
                De demander la rectification de renseignements inexacts
              </li>
              <li>De retirer votre consentement à tout moment</li>
              <li>
                De déposer une plainte auprès de la Commission d&apos;accès à
                l&apos;information du Québec
              </li>
            </ul>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              7. Accessibilité de cette politique
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cette politique de confidentialité est facilement accessible et
              bien mise en évidence sur les formulaires Web du site, notamment
              via un lien à côté du libellé du consentement. Un lien vers cette
              politique est également inclus dans le pied de page de chaque page
              de notre site Web.
            </p>

            <h2 className="text-xl font-bold text-igc-dark mt-10 mb-4">
              8. Nous contacter
            </h2>
            <p className="text-slate-600 leading-relaxed mb-2">
              Pour toute question relative à cette politique ou pour exercer vos
              droits, veuillez nous contacter :
            </p>
            <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-600 mb-6">
              <p className="font-semibold text-igc-dark">
                Immo Gestion Conseil inc.
              </p>
              <p>7040 Hutchison, Montréal (Québec)</p>
              <p>
                Téléphone :{" "}
                <a
                  href="tel:514-329-3034"
                  className="text-igc-blue hover:underline"
                >
                  514-329-3034
                </a>
              </p>
              <p>
                Courriel :{" "}
                <a
                  href="mailto:igc@ongere.com"
                  className="text-igc-blue hover:underline"
                >
                  igc@ongere.com
                </a>
              </p>
              <p>
                Site Web :{" "}
                <a
                  href="https://igc-locataires.igcportail.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-igc-blue hover:underline"
                >
                  igc-locataires.igcportail.ca
                </a>
              </p>
            </div>

            <div className="border-t border-slate-200 pt-8 mt-10">
              <Link
                href="/"
                className="text-igc-blue font-semibold hover:underline text-sm"
              >
                &larr; Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
