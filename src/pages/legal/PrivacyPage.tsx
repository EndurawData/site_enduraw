import { useTranslation } from "react-i18next";
import { LegalLayout, LegalMail } from "@/components/sections/LegalLayout";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const ps = (...keys: string[]) => keys.map((k) => <p key={k}>{t(k)}</p>);
  const ul = (...keys: string[]) => (
    <ul>
      {keys.map((k) => (
        <li key={k}>{t(k)}</li>
      ))}
    </ul>
  );
  const range = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => `${prefix}${i + 1}`);

  return (
    <LegalLayout
      path="/politique-confidentialite"
      title={t("privacy.title")}
      updated={t("privacy.lastUpdate")}
      toc
      sections={[
        {
          id: "responsable",
          title: t("privacy.s1_title"),
          body: (
            <>
              <p>{t("privacy.s1_p1")}</p>
              <h3>{t("privacy.s1_controller")}</h3>
              <p>
                {t("privacy.s1_1")}
                <br />
                {t("privacy.s1_2")}
                <br />
                {t("privacy.s1_3")}
                <br />
                {t("privacy.s1_4")} <LegalMail />
                <br />
                {t("privacy.s1_5")}
                <br />
                {t("privacy.s1_6")}
              </p>
              <p>{t("privacy.s1_p2")}</p>
            </>
          ),
        },
        {
          id: "donnees",
          title: t("privacy.s2_title"),
          body: (
            <>
              <p>{t("privacy.s2_intro")}</p>
              <h3>{t("privacy.s2_account_title")}</h3>
              {ul("privacy.s2_account_li1", "privacy.s2_account_li2")}
              <h3>{t("privacy.s2_activity_title")}</h3>
              {ul("privacy.s2_activity_li1", "privacy.s2_activity_li2")}
              <p>{t("privacy.s2_activity_note")}</p>
              <h3>{t("privacy.s2_extra_title")}</h3>
              {ul("privacy.s2_extra_li1", "privacy.s2_extra_li2")}
              <h3>{t("privacy.s2_pacing_title")}</h3>
              {ul("privacy.s2_pacing_li1")}
              <h3>{t("privacy.s2_tech_title")}</h3>
              {ul("privacy.s2_tech_li1", "privacy.s2_tech_li2")}
              <h3>{t("privacy.s2_support_title")}</h3>
              {ul("privacy.s2_support_li1")}
            </>
          ),
        },
        {
          id: "finalites",
          title: t("privacy.s3_title"),
          body: (
            <>
              <p>{t("privacy.s3_intro")}</p>
              {ul(...range("privacy.s3_li", 7))}
              <p>{t("privacy.s3_p2")}</p>
            </>
          ),
        },
        {
          id: "consentement",
          title: t("privacy.s4_title"),
          body: (
            <>
              <p>{t("privacy.s4_p1")}</p>
              {ul("privacy.s4_li1", "privacy.s4_li2")}
              <p>{t("privacy.s4_p2")}</p>
            </>
          ),
        },
        {
          id: "origine",
          title: t("privacy.s5_title"),
          body: (
            <>
              <p>{t("privacy.s5_intro")}</p>
              {ul(...range("privacy.s5_li", 3))}
              <p>{t("privacy.s5_p2")}</p>
            </>
          ),
        },
        {
          id: "destinataires",
          title: t("privacy.s6_title"),
          body: (
            <>
              {ps("privacy.s6_p1", "privacy.s6_p2")}
              {ul(...range("privacy.s6_li", 3))}
              <p>{t("privacy.s6_p3")}</p>
              <p>{t("privacy.s6_p4")}</p>
            </>
          ),
        },
        {
          id: "conservation",
          title: t("privacy.s7_title"),
          body: (
            <>
              <p>{t("privacy.s7_intro")}</p>
              {ul(...range("privacy.s7_li", 4))}
            </>
          ),
        },
        {
          id: "securite",
          title: t("privacy.s8_title"),
          body: (
            <>
              <p>{t("privacy.s8_intro")}</p>
              {ul(...range("privacy.s8_li", 7))}
            </>
          ),
        },
        {
          id: "droits",
          title: t("privacy.s9_title"),
          body: (
            <>
              <p>{t("privacy.s9_intro")}</p>
              {ul(...range("privacy.s9_li", 7))}
              <p>
                {t("privacy.s9_p2")} <LegalMail />
                <br />
                {t("privacy.s9_p3")}
              </p>
              <p>
                {t("privacy.s9_p4")} (
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                  www.cnil.fr
                </a>
                ).
              </p>
            </>
          ),
        },
        { id: "mineurs", title: t("privacy.s10_title"), body: ps(...range("privacy.s10_p", 3)) },
        { id: "profilage", title: t("privacy.s11_title"), body: ps(...range("privacy.s11_p", 4)) },
        { id: "modifications", title: t("privacy.s12_title"), body: ps(...range("privacy.s12_p", 3)) },
        {
          id: "contact",
          title: t("privacy.s13_title"),
          body: (
            <p>
              {t("privacy.s13_p1")}
              <br />
              <LegalMail />
              <br />
              {t("cgu.s16_p2")}
              <br />
              {t("privacy.s13_p3")}
            </p>
          ),
        },
      ]}
    />
  );
}
