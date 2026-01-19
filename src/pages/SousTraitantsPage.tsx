import React from 'react';
import '../styles/fancy.css';

const SousTraitantsPage: React.FC = () => {
  return (
    <div className="bg-dark-bg text-white min-h-screen pt-16 relative overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with gradient */}
        <div className="mb-12 text-center">
          <h1 className="text-title bg-clip-text text-transparent bg-custom-gradient mb-8">
            SOUS-TRAITANTS & TRAITEMENTS DES DONNÉES
          </h1>
          <p className="text-white/60 text-sm mt-4 text-body-uppercase">
            Dernière mise à jour : 27 octobre 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-paragraph">
          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              1. Objet de cette page
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Conformément à l'article 28 du Règlement Général sur la Protection des Données (RGPD), Enduraw informe ses utilisateurs des sous-traitants impliqués dans le traitement de leurs données personnelles.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Cette page présente :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>les sous-traitants actuellement utilisés par Enduraw,</li>
              <li>la nature des prestations qu'ils fournissent,</li>
              <li>les mesures mises en place pour assurer la sécurité et la confidentialité des données.</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Elle est mise à jour régulièrement afin de refléter tout changement dans notre écosystème technique.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              2. Principes généraux
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw ne partage jamais vos données personnelles avec des tiers non autorisés.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Tous les sous-traitants listés ci-dessous :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>agissent uniquement sur instruction d'Enduraw,</li>
              <li>sont liés par un contrat conforme à l'article 28 du RGPD,</li>
              <li>mettent en œuvre des mesures de sécurité adaptées,</li>
              <li>ne peuvent pas sous-traiter eux-mêmes sans l'autorisation d'Enduraw.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              3. Liste des sous-traitants actuels
            </h2>

            {/* Hébergement applicatif */}
            <h3 className="text-2xl text-subtitle mb-4 text-cyan-400 mt-8">
              Hébergement applicatif
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Render (Render.com)</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>Service :</strong> hébergement de l'application, exécution des services backend</p>
                <p><strong>Localisation :</strong> États-Unis</p>
                <p><strong>Garanties :</strong> mesures de sécurité techniques et organisationnelles (certifications, isolation, chiffrement)</p>
              </div>
            </div>

            {/* Hébergement du site web et DNS */}
            <h3 className="text-2xl text-subtitle mb-4 text-cyan-400 mt-8">
              Hébergement du site web et DNS
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Porkbun LLC</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>Service :</strong> hébergement du site vitrine, gestion DNS et domaine</p>
                <p><strong>Localisation :</strong> États-Unis</p>
                <p><strong>Garanties :</strong> mesures de sécurité conformes aux standards du secteur</p>
              </div>
            </div>

            {/* Base de données */}
            <h3 className="text-2xl text-subtitle mb-4 text-cyan-400 mt-8">
              Base de données
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">MongoDB Atlas (MongoDB Inc.)</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>Service :</strong> base de données cloud (MongoDB Atlas)</p>
                <p><strong>Localisation :</strong> États-Unis</p>
                <p><strong>Garanties :</strong> chiffrement des données, certifications de sécurité (ISO, SOC)</p>
              </div>
            </div>

            {/* Paiements */}
            <h3 className="text-2xl text-subtitle mb-4 text-cyan-400 mt-8">
              Paiements
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Shopify / Shopify Payments</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>Service :</strong> traitement des paiements et gestion des commandes</p>
                <p><strong>Localisation :</strong> Canada / États-Unis</p>
                <p><strong>Garanties :</strong> conformité PCI-DSS, chiffrement, sécurité renforcée</p>
              </div>
            </div>

            {/* Communication & mailing automatique */}
            <h3 className="text-2xl text-subtitle mb-4 text-cyan-400 mt-8">
              Communication & mailing automatique
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-xl font-semibold text-white mb-3">Mailjet (Sinch France)</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>Service :</strong> envoi d'emails transactionnels et marketing</p>
                <p><strong>Localisation :</strong> France / UE</p>
                <p><strong>Garanties :</strong> infrastructure certifiée ISO 27001, chiffrement, conformité RGPD</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              4. Sécurité et durée de conservation
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">
              Chaque sous-traitant s'engage contractuellement à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
              <li>protéger les données personnelles confiées,</li>
              <li>limiter leur utilisation à la seule exécution de sa prestation,</li>
              <li>conserver les données uniquement pendant la durée nécessaire,</li>
              <li>notifier immédiatement Enduraw en cas d'incident de sécurité,</li>
              <li>supprimer ou restituer les données à la fin du contrat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              5. Évolutions de cette liste
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Enduraw pourra modifier cette liste afin d'intégrer de nouveaux prestataires ou d'adapter ses outils internes.
            </p>
            <p className="text-white/80 leading-relaxed">
              En cas de modification significative (nouveau prestataire, changement de finalité de traitement, etc.), les utilisateurs seront informés via l'application ou par email avant la mise en œuvre.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              6. Contact
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Pour toute question relative à nos sous-traitants :
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

export default SousTraitantsPage;
