import React from 'react';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl text-title mb-4 bg-clip-text text-transparent bg-custom-gradient uppercase">
            Politique de Confidentialité
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
              1. Qui traite vos données ?
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              La présente politique de confidentialité décrit la manière dont <strong>Enduraw</strong> collecte, utilise et protège vos données personnelles.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              <strong>Responsable du traitement :</strong>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw — SAS au capital de 1 000 €
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Siège social : 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              RCS : 939290722 — TVA intracommunautaire : FR62939290722
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Contact : <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Directeur : Joseph Mestrallet
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Délégué à la protection des données (DPO) : Valentin Templé — contact via <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">privacy@enduraw.com</a> (ou l'adresse ci-dessus)
            </p>
            <p className="text-white/80 leading-relaxed">
              Enduraw est responsable des traitements de données effectués dans le cadre de l'utilisation de ses services et applications.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              2. Quelles données collectons-nous ?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Nous collectons uniquement les données nécessaires à la fourniture, à l'amélioration et à la sécurité de nos services.
            </p>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données de compte <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>Nom, prénom, adresse e-mail, mot de passe (haché), langue, pays.</li>
              <li>Informations relatives à l'abonnement ou au compte utilisateur.</li>
            </ul>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données d'activité <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-2">
              <li>Données brutes issues de capteurs ou d'applications connectées : fréquence cardiaque, variabilité de la fréquence cardiaque (HRV), mouvement, durée et intensité d'entraînement, distance, vitesse, altitude, GPS, sommeil et récupération.</li>
              <li>Métadonnées techniques des appareils utilisés (modèle, OS, version de l'application).</li>
            </ul>
            <p className="text-white/70 leading-relaxed italic mb-6 ml-4">
              Ces données peuvent, dans certains cas, constituer des <strong>données de santé</strong> au sens du RGPD.
            </p>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données complémentaires <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>Âge, taille, poids, sexe, performances sportives, objectifs personnels, état de fatigue ou de bien-être (lorsque vous les renseignez).</li>
              <li>Données issues de connecteurs tiers (ex. Strava), uniquement après votre autorisation explicite.</li>
            </ul>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données pour pacing plans et runner matrix <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>Objectif de temps, habitudes nutritionnelles, archive Strava complète</li>
            </ul>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données techniques <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-6">
              <li>Adresse IP, identifiants d'appareil, logs de connexion, cookies et traceurs. (voir la [Politique cookies])</li>
              <li>Informations relatives à l'utilisation de l'application (crash reports, statistiques anonymisées, navigation).</li>
            </ul>

            <h3 className="text-xl text-subtitle mb-3 text-cyan-400">
              Données de support et communication <span className="text-sm text-white/50"></span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Échanges avec le service client, feedbacks, préférences de communication ou réponses à des enquêtes facultatives.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              3. Finalités et bases légales
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Vos données sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li><strong>Création et gestion du compte utilisateur</strong> : exécution du contrat.</li>
              <li><strong>Collecte et synchronisation des données d'activité</strong> : exécution du contrat et, pour les données de santé, consentement explicite.</li>
              <li><strong>Analyse des entraînements, génération d'indicateurs et de recommandations personnalisées</strong> : consentement explicite (données de santé).</li>
              <li><strong>Amélioration continue du produit, statistiques et recherche</strong> : intérêt légitime d'Enduraw, sous forme agrégée ou anonymisée.</li>
              <li><strong>Assistance, sécurité et prévention de la fraude</strong> : intérêt légitime et obligation légale.</li>
              <li><strong>Communication et prospection</strong> (newsletters, notifications) : consentement ou soft opt-in selon la relation.</li>
              <li><strong>Conformité légale</strong> : respect des obligations comptables, fiscales ou de sécurité imposées par la loi.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Votre consentement peut être retiré à tout moment (voir section 4).
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              4. Consentement et retrait <span className="text-sm text-white/50"></span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Pour les traitements fondés sur le consentement (notamment les <strong>données de santé</strong> et certains cookies ou communications marketing), vous pouvez le <strong>retirer à tout moment</strong>, sans effet rétroactif, via :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>les paramètres de confidentialité de votre compte Enduraw ;</li>
              <li>ou un message à <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a></li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              La suppression ou le retrait du consentement peut limiter certaines fonctionnalités de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              5. Origine des données
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Vos données proviennent :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>de votre saisie directe lors de l'inscription ou de l'utilisation de nos services ;</li>
              <li>de la synchronisation volontaire avec des plateformes ou objets tiers (montres connectées, capteurs, applications…) après votre accord ;</li>
              <li>des logs et interactions automatiques générés par l'utilisation de notre application.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Aucun flux de données n'est collecté sans action ou autorisation explicite de votre part.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              6. Destinataires et sous-traitants <span className="text-sm text-white/50"></span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Vos données sont traitées uniquement par les équipes habilitées d'Enduraw (produit, data science, support, sécurité) et, le cas échéant, par des <strong>sous-traitants</strong> agissant pour notre compte selon des contrats conformes au RGPD.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Les sous-traitants typiques sont :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>Hébergeur cloud (stockage et base de données sécurisés)</li>
              <li>Plateformes d'analyse de performance et d'emailing</li>
              <li>Outils de support et de suivi d'incidents techniques</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              Aucun transfert à des tiers non autorisés n'est effectué sans votre accord explicite.
            </p>
            <p className="text-white/80 leading-relaxed">
              La <strong>liste actualisée</strong> de nos sous-traitants est disponible sur demande à <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
          </section>

{/* Ceci est un commentaire React 
       <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              7. Transferts de données hors Union européenne <span className="text-sm text-white/50">(A MODIFIER)</span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Certaines de nos solutions peuvent impliquer des transferts de données hors de l'Union européenne (par exemple, si un prestataire technique est situé dans un pays tiers).
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Dans ce cas, nous veillons à ce que ces transferts soient encadrés par :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>une <strong>décision d'adéquation</strong> de la Commission européenne, ou</li>
              <li>des <strong>clauses contractuelles types (SCCs)</strong>, accompagnées de garanties supplémentaires (évaluations de risque, chiffrement).</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Aucun transfert non encadré n'est effectué.
            </p>
          </section>
*/}

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              7. Durée de conservation
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Nous conservons vos données pendant des durées strictement nécessaires :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Données de compte et d'activité</strong> : tant que le compte est actif, puis suppression ou anonymisation dans les 12 mois suivant la suppression du compte.</li>
              <li><strong>Logs de sécurité et d'accès</strong> : de 6 mois à 2 ans selon la criticité.</li>
              <li><strong>Données de communication ou support</strong> : 3 ans après le dernier contact.</li>
              <li><strong>Données agrégées ou anonymisées</strong> : conservées sans limite.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              8. Sécurité et protection des données
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw met en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Chiffrement des données au repos et en transit (HTTPS, AES-256)</li>
              <li>Stockage sur serveurs sécurisés AWS US-east</li>
              <li>Contrôles d'accès stricts et journalisation</li>
              <li>Anonymisation et pseudonymisation des données sensibles</li>
              <li>Tests d'intrusion et audits réguliers</li>
              <li>Sauvegardes chiffrées et plan de continuité d'activité</li>
              <li>Notification aux autorités (CNIL) et aux personnes concernées en cas de violation présentant un risque élevé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              9. Vos droits
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Conformément au RGPD et à la loi française Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li><strong>Droit d'accès</strong> à vos données ;</li>
              <li><strong>Droit de rectification</strong> des informations inexactes ;</li>
              <li><strong>Droit à l'effacement</strong> (« droit à l'oubli ») ;</li>
              <li><strong>Droit à la limitation</strong> du traitement ;</li>
              <li><strong>Droit d'opposition</strong>, notamment pour la prospection ;</li>
              <li><strong>Droit de retrait du consentement</strong> à tout moment ;</li>
              <li><strong>Droit de définir le sort de vos données après votre décès</strong> (directive post-mortem en France).</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-4">
              Vous pouvez exercer ces droits en contactant :
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              📧 <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              ou par courrier à : Enduraw, 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc.
            </p>
            <p className="text-white/80 leading-relaxed">
              Vous avez également le droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              10. Données relatives aux mineurs
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Les services Enduraw ne sont pas destinés aux enfants de moins de <strong>15 ans</strong> (âge minimum du consentement numérique en France).
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Si un mineur de moins de 15 ans utilise nos services, le consentement du titulaire de l'autorité parentale est requis.
            </p>
            <p className="text-white/80 leading-relaxed">
              Toute donnée collectée sans cet accord sera supprimée dès détection.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              11. Décisions automatisées et profilage
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw n'effectue <strong>aucune décision automatisée ayant des effets juridiques ou significatifs</strong> sur l'utilisateur.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Les <strong>indicateurs de performance, scores, recommandations d'entraînement et tout autre contenu généré automatiquement</strong> sont fournis <strong>uniquement à titre informatif</strong>. Ils ne constituent en aucun cas un avis médical, un diagnostic ou un conseil personnalisé contraignant.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              L'utilisateur reste <strong>entièrement responsable</strong> de ses choix et de l'application des recommandations, et doit, si nécessaire, consulter un professionnel de santé qualifié avant d'engager toute action basée sur ces informations.
            </p>
            <p className="text-white/80 leading-relaxed">
              Enduraw peut utiliser certaines données à des fins d'analyse ou de profilage <strong>uniquement pour améliorer les services</strong>, <strong>sans prendre de décisions individuelles ayant un impact juridique ou financier</strong> sur l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              12. Modifications de la politique <span className="text-sm text-white/50"></span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Nous pouvons modifier cette politique de confidentialité à tout moment pour l'adapter à nos évolutions techniques, légales ou organisationnelles.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Toute mise à jour sera publiée sur cette page, et une notification sera envoyée aux utilisateurs si les changements sont significatifs.
            </p>
            <p className="text-white/80 leading-relaxed">
              Nous encourageons les utilisateurs à consulter régulièrement cette page pour rester informés des pratiques en matière de protection des données.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              13. Contact
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Pour toute question sur cette politique ou sur la gestion de vos données personnelles :
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              📧 <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              📍 Enduraw — 330 Route du Plagnolet, 74400 Chamonix-Mont-Blanc
            </p>
            <p className="text-white/80 leading-relaxed">
              👤 Délégué à la protection des données : <strong>Valentin Templé</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
