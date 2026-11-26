import { useTranslation } from "react-i18next";
import { LegalLayout, LegalMail } from "@/components/sections/LegalLayout";

export default function MentionsPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout
      path="/mentions-legales"
      title={t("mentions.title")}
      updated={t("mentions.lastUpdate")}
      sections={[
        {
          id: "editeur",
          title: t("mentions.publisher_title"),
          body: (
            <p>
              {t("mentions.publisher_1")}
              <br />
              {t("mentions.publisher_2")}
              <br />
              {t("mentions.publisher_3")}
              <br />
              {t("mentions.publisher_4")} <LegalMail />
              <br />
              {t("mentions.publisher_5")}
              <br />
              {t("mentions.publisher_6")}
            </p>
          ),
        },
        {
          id: "hebergeur",
          title: t("mentions.hosting_title"),
          body: (
            <p>
              {t("mentions.hosting_1")}
              <br />
              {t("mentions.hosting_2")}
              <br />
              <a href="https://www.hostinger.fr/contact" target="_blank" rel="noopener noreferrer">
                hostinger.fr/contact
              </a>
            </p>
          ),
        },
        { id: "propriete", title: t("mentions.ip_title"), body: <p>{t("mentions.ip_p")}</p> },
        { id: "liens", title: t("mentions.links_title"), body: <p>{t("mentions.links_p")}</p> },
        { id: "responsabilite", title: t("mentions.liability_title"), body: <p>{t("mentions.liability_p")}</p> },
        {
          id: "vulnerabilites",
          title: t("mentions.vuln_title"),
          body: (
            <p>
              {t("mentions.vuln_p")} <LegalMail />
            </p>
          ),
        },
      ]}
    />
  );
}
