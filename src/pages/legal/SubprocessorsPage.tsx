import { LegalLayout, LegalMail } from "@/components/sections/LegalLayout";

/*
 * Texte juridique rédigé en français seulement (comme sur le site en ligne) :
 * la page porte `lang="fr"` pour que la langue annoncée soit la bonne.
 */

const PROCESSORS = [
  {
    category: "Hébergement applicatif",
    name: "Render (Render.com)",
    service: "hébergement de l'application, exécution des services backend",
    location: "États-Unis",
    guarantees: "mesures de sécurité techniques et organisationnelles (certifications, isolation, chiffrement)",
  },
  {
    category: "Hébergement du site web et DNS",
    name: "Porkbun LLC",
    service: "hébergement du site vitrine, gestion DNS et domaine",
    location: "États-Unis",
    guarantees: "mesures de sécurité conformes aux standards du secteur",
  },
  {
    category: "Base de données",
    name: "MongoDB Atlas (MongoDB Inc.)",
    service: "base de données cloud (MongoDB Atlas)",
    location: "États-Unis",
    guarantees: "chiffrement des données, certifications de sécurité (ISO, SOC)",
  },
  {
    category: "Paiements",
    name: "Shopify / Shopify Payments",
    service: "traitement des paiements et gestion des commandes",
    location: "Canada / États-Unis",
    guarantees: "conformité PCI-DSS, chiffrement, sécurité renforcée",
  },
  {
    category: "Communication et mailing automatique",
    name: "Mailjet (Sinch France)",
    service: "envoi d'emails transactionnels et marketing",
    location: "France / UE",
    guarantees: "infrastructure certifiée ISO 27001, chiffrement, conformité RGPD",
  },
];

export default function SubprocessorsPage() {
  return (
    <LegalLayout
      path="/sous-traitants"
      lang="fr"
      title="Sous-traitants et traitements des données"
      updated="Dernière mise à jour : 27 octobre 2025"
      sections={[
        {
          id: "objet",
          title: "1. Objet de cette page",
          body: (
            <>
              <p>
                Conformément à l'article 28 du Règlement Général sur la Protection des Données (RGPD), Enduraw informe
                ses utilisateurs des sous-traitants impliqués dans le traitement de leurs données personnelles.
              </p>
              <p>Cette page présente :</p>
              <ul>
                <li>les sous-traitants actuellement utilisés par Enduraw,</li>
                <li>la nature des prestations qu'ils fournissent,</li>
                <li>les mesures mises en place pour assurer la sécurité et la confidentialité des données.</li>
              </ul>
              <p>Elle est mise à jour régulièrement afin de refléter tout changement dans notre écosystème technique.</p>
            </>
          ),
        },
        {
          id: "principes",
          title: "2. Principes généraux",
          body: (
            <>
              <p>Enduraw ne partage jamais vos données personnelles avec des tiers non autorisés.</p>
              <p>Tous les sous-traitants listés ci-dessous :</p>
              <ul>
                <li>agissent uniquement sur instruction d'Enduraw,</li>
                <li>sont liés par un contrat conforme à l'article 28 du RGPD,</li>
                <li>mettent en œuvre des mesures de sécurité adaptées,</li>
                <li>ne peuvent pas sous-traiter eux-mêmes sans l'autorisation d'Enduraw.</li>
              </ul>
            </>
          ),
        },
        {
          id: "liste",
          title: "3. Liste des sous-traitants actuels",
          body: (
            <div className="mt-4 border-t border-black/[0.12]">
              {PROCESSORS.map((p) => (
                <div key={p.name} className="border-b border-black/[0.12] py-4">
                  <h3 className="!mt-0">{p.name}</h3>
                  <p className="!mb-2 text-[13px] text-black/[0.55]">{p.category}</p>
                  <dl className="grid grid-cols-[96px_minmax(0,1fr)] gap-x-4 gap-y-1 text-[14px] sm:grid-cols-[110px_minmax(0,1fr)]">
                    <dt className="font-medium text-black">Service</dt>
                    <dd>{p.service}</dd>
                    <dt className="font-medium text-black">Localisation</dt>
                    <dd>{p.location}</dd>
                    <dt className="font-medium text-black">Garanties</dt>
                    <dd>{p.guarantees}</dd>
                  </dl>
                </div>
              ))}
            </div>
          ),
        },
        {
          id: "securite",
          title: "4. Sécurité et durée de conservation",
          body: (
            <>
              <p>Chaque sous-traitant s'engage contractuellement à :</p>
              <ul>
                <li>protéger les données personnelles confiées,</li>
                <li>limiter leur utilisation à la seule exécution de sa prestation,</li>
                <li>conserver les données uniquement pendant la durée nécessaire,</li>
                <li>notifier immédiatement Enduraw en cas d'incident de sécurité,</li>
                <li>supprimer ou restituer les données à la fin du contrat.</li>
              </ul>
            </>
          ),
        },
        {
          id: "evolutions",
          title: "5. Évolutions de cette liste",
          body: (
            <>
              <p>
                Enduraw pourra modifier cette liste afin d'intégrer de nouveaux prestataires ou d'adapter ses outils
                internes.
              </p>
              <p>
                En cas de modification significative (nouveau prestataire, changement de finalité de traitement, etc.),
                les utilisateurs seront informés via l'application ou par email avant la mise en œuvre.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          title: "6. Contact",
          body: (
            <p>
              Pour toute question relative à nos sous-traitants :
              <br />
              <LegalMail />
              <br />
              Enduraw — 185 Clos du Tour Noir, 74400 Chamonix-Mont-Blanc
              <br />
              Délégué à la protection des données : Valentin Templé
            </p>
          ),
        },
      ]}
    />
  );
}
