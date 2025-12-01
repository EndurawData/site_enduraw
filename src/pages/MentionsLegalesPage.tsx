import React from 'react';

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl text-title mb-4 bg-clip-text text-transparent bg-custom-gradient uppercase">
            Mentions Légales
          </h1>
          <div className="h-1 w-32 bg-custom-gradient mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-paragraph">
          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Éditeur du site
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">
              Enduraw — SAS au capital de 1000 €
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              Siège : 330 Route du plagnolet, 74400 Chamonix-Mont-Blanc
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
            <p className="text-white/80 leading-relaxed">
              Délégué à la protection des données (DPO) : Valentin Templé
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Hébergeur
            </h2>
            <p className="text-white/80 leading-relaxed mb-2">
              HOSTINGER INTERNATIONAL LTD
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              61 Lordou Vironos Street, 6023 Larnaca, Chypre
            </p>
            <p className="text-white/80 leading-relaxed">
              <a href="https://www.hostinger.fr/contact" target="_blank" rel="noopener noreferrer" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">
                https://www.hostinger.fr/contact
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Propriété intellectuelle
            </h2>
            <p className="text-white/80 leading-relaxed">
              L'ensemble des éléments du site enduraw.co — textes, graphiques, logos, marques, vidéos, logiciels — est protégé. Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation écrite de ENDURAW est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Liens externes
            </h2>
            <p className="text-white/80 leading-relaxed">
              ENDURAW n'est pas responsable du contenu des sites tiers vers lesquels pointent des liens sortants.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Responsabilité
            </h2>
            <p className="text-white/80 leading-relaxed">
              Les informations publiées le sont à titre informatif. ENDURAW ne saurait être tenue responsable d'un dommage lié à l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl text-subtitle mb-4 text-gradient-blue-light">
              Signalement de vulnérabilités
            </h2>
            <p className="text-white/80 leading-relaxed">
              Pour signaler une faille de sécurité : <a href="mailto:contact.enduraw@gmail.com" className="text-gradient-blue-light hover:text-white transition-colors duration-300 underline">contact.enduraw@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
