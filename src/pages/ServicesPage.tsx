import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Action } from "@/components/ui/Action";
import { Media } from "@/components/ui/Media";
import { EMAILS, mailto } from "@/lib/links";

/* Les trois piliers. Une rangée chacun : photo, titre, une phrase, un lien.
   C'est un aiguillage : le détail vit sur la page du pilier. */
const PILLARS = [
  {
    to: "/services/testing",
    image: "/images/epc/web/A7408201.jpg",
    position: "75% center",
    title: "servicesPage.lab.title",
    description: "servicesPage.lab.text",
    alt: "servicesPage.lab.alt",
    cta: "servicesPage.lab.cta",
  },
  {
    to: "/services/coaching",
    image: "/images/workshop/workshop5.JPG",
    position: "center 40%",
    title: "servicesPage.coaching.title",
    description: "servicesPage.coaching.text",
    alt: "servicesPage.coaching.alt",
    cta: "servicesPage.coaching.cta",
  },
  {
    to: "/services/conferences",
    image: "/images/conferences/web/candriam_chamonix.jpg",
    position: "60% center",
    title: "servicesPage.conferences.title",
    description: "servicesPage.conferences.text",
    alt: "servicesPage.conferences.alt",
    cta: "servicesPage.conferences.cta",
  },
] as const;

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <PhotoHero
        image="/images/workshop/workshop6.jpg"
        alt={t("servicesPage.hero.alt")}
        position="40% center"
        short
        title={t("servicesPage.hero.title")}
        lead={t("servicesPage.hero.lead")}
      />

      {/* Aiguillage : trois rangées à filets, pas de cartes. */}
      <section className="ep-section pt-12">
        <div className="ep-wrap">
          <ul className="ep-lines ep-lines--loose">
            {PILLARS.map((p) => (
              <li
                key={p.to}
                className="grid items-center gap-6 sm:grid-cols-[220px_1fr] sm:gap-10 lg:grid-cols-[280px_1fr] lg:gap-14"
              >
                <Media
                  src={p.image}
                  alt={t(p.alt)}
                  ratio="3 / 2"
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 220px, 100vw"
                  position={p.position}
                />
                <div>
                  <h2 className="ep-display ep-h3">{t(p.title)}</h2>
                  <p className="ep-body mt-3 max-w-[54ch] text-[16px] leading-relaxed">{t(p.description)}</p>
                  <div className="mt-5">
                    <Action to={p.to} variant="link">
                      {t(p.cta)}
                    </Action>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Le dashboard a sa propre page : une ligne y renvoie. */}
          <p className="ep-body mt-10 text-[16px]">
            {t("servicesPage.dashboard.text")}{" "}
            <Link to="/dashboard" className="ep-inline-link">
              {t("servicesPage.dashboard.cta")}
            </Link>
          </p>

          {/* Contact : une adresse par pilier, à la place d'un appel final. */}
          <div className="ep-rule mt-16 pt-10">
            <h2 className="ep-display ep-h3">{t("servicesPage.contact.title")}</h2>
            <ul className="ep-body mt-5 space-y-2 text-[16px]">
              <li>
                {t("servicesPage.contact.lab")}{" "}
                <a href={mailto(EMAILS.performance)} className="ep-inline-link">
                  {EMAILS.performance}
                </a>
              </li>
              <li>
                {t("servicesPage.contact.conferences")}{" "}
                <a href={mailto(EMAILS.communication)} className="ep-inline-link">
                  {EMAILS.communication}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
