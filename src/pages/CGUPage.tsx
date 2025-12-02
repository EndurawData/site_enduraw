import React from 'react';

const CGUPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl text-title mb-4 bg-clip-text text-transparent bg-custom-gradient uppercase">
            Conditions Générales d'Utilisation
          </h1>
          <div className="h-1 w-32 bg-custom-gradient mx-auto"></div>
          <p className="text-white/60 text-sm mt-4 text-body-uppercase">
            Dernière mise à jour : 27 octobre 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-paragraph">
          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              1. Objet
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Les présentes <strong>Conditions Générales d'Utilisation (CGU)</strong> ont pour objet de définir les règles d'accès et d'utilisation du site web et des services proposés par <strong>Enduraw</strong>, notamment la collecte, l'analyse et la restitution de données d'activités sportives.
            </p>
            <p className="text-white/80 leading-relaxed">
              L'utilisation du site et du dashboard Enduraw implique l'acceptation pleine et entière des présentes conditions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              2. Identification de l'éditeur
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw — SAS au capital de 1 000 €
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Siège : 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              RCS : 939290722 — TVA intracommunautaire : FR62939290722
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Contact : <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
            <p className="text-white/80 leading-relaxed">
              Directeur de la publication : Joseph Mestrallet
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              3. Accès au service
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              L'accès au site et à l'application nécessite une connexion Internet et un appareil compatible.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Les coûts d'accès au réseau demeurent à la charge de l'utilisateur.
            </p>
            <p className="text-white/80 leading-relaxed">
              Enduraw s'efforce d'assurer une disponibilité continue du service mais ne peut garantir une absence totale d'interruption, notamment pour maintenance ou mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              4. Création de compte
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Certaines fonctionnalités nécessitent la création d'un compte utilisateur.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              L'utilisateur s'engage à fournir des informations exactes, complètes et à jour.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Il est responsable de la confidentialité de son identifiant et de son mot de passe, ainsi que de toute activité effectuée sous son compte.
            </p>
            <p className="text-white/80 leading-relaxed">
              En cas de suspicion d'utilisation frauduleuse, l'utilisateur doit informer immédiatement Enduraw à l'adresse <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              5. Utilisation des services
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              L'utilisateur s'engage à utiliser le site et l'application dans le respect des lois et règlements en vigueur.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Il est interdit notamment :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>de détourner ou modifier les fonctionnalités du site ou de l’application à des fins illégales, malveillantes ou non autorisées ;</li>
              <li>de transmettre, publier ou diffuser des contenus diffamatoires, offensants, illicites ou violant les droits de tiers ;</li>
              <li>de tenter d’accéder, interférer ou altérer les systèmes, comptes, données ou services d’autres utilisateurs ou de la plateforme ;</li>
              <li>de contourner, désactiver ou altérer les dispositifs techniques de sécurité, de protection des droits de propriété intellectuelle ou de contrôle d’accès ;</li>
              <li>de décompiler, désassembler, réaliser du reverse engineering, extraire ou tenter d’extraire le code source, les algorithmes, les données ou tout composant logiciel du site ou de l’application.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Tout manquement à ces obligations pourra entraîner la suspension, la suppression immédiate du compte, et le cas échéant, des poursuites judiciaires conformément à la législation applicable.
              </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              6. Données personnelles
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              La collecte et le traitement des données personnelles sont régis par la <a href="/politique-confidentialite" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">Politique de confidentialité</a> d'Enduraw.
            </p>
            <p className="text-white/80 leading-relaxed">
              Certaines données relatives à votre activité sportive peuvent être considérées comme des données de santé. Leur traitement est effectué uniquement avec votre consentement explicite, conformément aux exigences du RGPD et de la législation applicable.
            </p>

            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw s’engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>collecter et traiter uniquement les données strictement nécessaires à la fourniture des services ;</li>
              <li>garantir la confidentialité et la sécurité de vos données ;</li>
              <li>permettre aux utilisateurs d’exercer leurs droits (accès, rectification, suppression, limitation du traitement, portabilité, opposition) comme détaillé dans la Politique de confidentialité.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              L’utilisateur est invité à consulter régulièrement la Politique de confidentialité pour rester informé des modalités de traitement de ses données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              7. Propriété intellectuelle
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Tous les contenus présents sur le site et l'application (textes, graphismes, logos, marques, algorithmes, interfaces, logiciels) sont protégés par le droit de la propriété intellectuelle et appartiennent exclusivement à Enduraw.
            </p>
            <p className="text-white/80 leading-relaxed">
              Toute reproduction, distribution, ou exploitation, totale ou partielle, sans autorisation écrite d'Enduraw est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              8. Licence d'utilisation
            </h2>
            <p className="text-white/80 leading-relaxed">
              Enduraw accorde à l'utilisateur une <strong>licence personnelle, non exclusive, non transférable et révocable</strong> d'accès et d'utilisation des services pour un usage strictement personnel et non commercial.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              9. Recommandations et limites médicales
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Les analyses, scores ou recommandations fournis par Enduraw ont un <strong>but informatif et éducatif</strong>.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Ils ne constituent <strong>ni un avis médical, ni un diagnostic, ni une prescription</strong>.
            </p>
            <p className="text-white/80 leading-relaxed">
              L'utilisateur reste responsable de sa santé et doit consulter un professionnel avant toute pratique sportive intensive ou en cas de doute sur son état de santé.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              10. Abonnements et paiements <span className="text-sm text-white/50 italic">(si applicable)</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Les services payants ou abonnements sont soumis à des conditions spécifiques présentées au moment de la souscription : durée, renouvellement, rétractation, modalités de paiement, résiliation.
            </p>
            <p className="text-white/80 leading-relaxed">
              Toute résiliation devra être effectuée depuis le compte utilisateur ou par demande à <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              11. Responsabilité
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw met tout en œuvre pour fournir un service fiable et sécurisé.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Cependant, la société ne peut être tenue responsable :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>des dommages résultant d'une utilisation non conforme du service,</li>
              <li>de pertes de données liées à des causes externes (panne, réseau, force majeure),</li>
              <li>ou d'inexactitudes liées à des données issues de capteurs tiers.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              En tout état de cause, la responsabilité d'Enduraw est limitée au montant des sommes versées au titre du service concerné.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              12. Suspension ou suppression de compte
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw se réserve le droit de suspendre ou de supprimer un compte utilisateur en cas de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>violation des présentes CGU,</li>
              <li>fraude ou tentative d'accès non autorisé,</li>
              <li>ou obligation légale ou judiciaire.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              aL'utilisateur peut, de son côté, delier son compte Strava à tout moment depuis les paramètres de son espace personnel.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              13. Sécurité et disponibilité
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw met en œuvre des mesures de sécurité adaptées.
            </p>
            <p className="text-white/80 leading-relaxed">
              Une maintenance planifiée peut occasionner des interruptions temporaires, signalées en amont lorsque possible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              14. Modifications des CGU
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw se réserve le droit de modifier les présentes CGU à tout moment.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Les nouvelles versions seront publiées sur le site et prendront effet dès leur mise en ligne.
            </p>
            <p className="text-white/80 leading-relaxed">
              L'utilisateur est invité à les consulter régulièrement.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              15. Droit applicable et juridiction compétente
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Les présentes CGU sont régies par le <strong>droit français</strong>.
            </p>
            <p className="text-white/80 leading-relaxed">
              Tout litige relatif à leur interprétation ou à leur exécution relève des tribunaux compétents du ressort de <strong>Bonneville</strong> (Haute-Savoie), sauf disposition légale contraire protectrice du consommateur.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              16. Contact
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Pour toute question relative à ces conditions ou au service :
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              📧 <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
            <p className="text-white/80 leading-relaxed">
              📍 Enduraw — 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CGUPage;
