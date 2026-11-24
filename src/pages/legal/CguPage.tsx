import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LegalLayout, LegalMail } from "@/components/sections/LegalLayout";

export default function CguPage() {
  const { t } = useTranslation();
  const ps = (...keys: string[]) => keys.map((k) => <p key={k}>{t(k)}</p>);
  const ul = (...keys: string[]) => (
    <ul>
      {keys.map((k) => (
        <li key={k}>{t(k)}</li>
      ))}
    </ul>
  );

  return (
    <LegalLayout
      path="/cgu"
      title={t("cgu.title")}
      updated={t("cgu.lastUpdate")}
      toc
      sections={[
        { id: "objet", title: t("cgu.s1_title"), body: ps("cgu.s1_p1", "cgu.s1_p2") },
        {
          id: "editeur",
          title: t("cgu.s2_title"),
          body: (
            <p>
              {t("cgu.s2_1")}
              <br />
              {t("cgu.s2_2")}
              <br />
              {t("cgu.s2_3")}
              <br />
              {t("cgu.s2_4")} <LegalMail />
              <br />
              {t("cgu.s2_5")}
            </p>
          ),
        },
        { id: "acces", title: t("cgu.s3_title"), body: ps("cgu.s3_p1", "cgu.s3_p2", "cgu.s3_p3") },
        {
          id: "compte",
          title: t("cgu.s4_title"),
          body: (
            <>
              {ps("cgu.s4_p1", "cgu.s4_p2", "cgu.s4_p3")}
              <p>
                {t("cgu.s4_p4")} <LegalMail />.
              </p>
            </>
          ),
        },
        {
          id: "utilisation",
          title: t("cgu.s5_title"),
          body: (
            <>
              {ps("cgu.s5_p1", "cgu.s5_p2")}
              {ul("cgu.s5_li1", "cgu.s5_li2", "cgu.s5_li3", "cgu.s5_li4", "cgu.s5_li5")}
              <p>{t("cgu.s5_p3")}</p>
            </>
          ),
        },
        {
          id: "donnees",
          title: t("cgu.s6_title"),
          body: (
            <>
              <p>
                {t("cgu.s6_p1")} <Link to="/politique-confidentialite">{t("footer.privacy")}</Link>
              </p>
              {ps("cgu.s6_p2", "cgu.s6_p3")}
              {ul("cgu.s6_li1", "cgu.s6_li2", "cgu.s6_li3")}
              <p>{t("cgu.s6_p4")}</p>
            </>
          ),
        },
        { id: "propriete", title: t("cgu.s7_title"), body: ps("cgu.s7_p1", "cgu.s7_p2") },
        { id: "licence", title: t("cgu.s8_title"), body: ps("cgu.s8_p") },
        { id: "medical", title: t("cgu.s9_title"), body: ps("cgu.s9_p1", "cgu.s9_p2", "cgu.s9_p3") },
        {
          id: "paiements",
          title: t("cgu.s10_title"),
          body: (
            <>
              <p>{t("cgu.s10_p1")}</p>
              <p>
                {t("cgu.s10_p2")} <LegalMail />.
              </p>
            </>
          ),
        },
        {
          id: "responsabilite",
          title: t("cgu.s11_title"),
          body: (
            <>
              {ps("cgu.s11_p1", "cgu.s11_p2")}
              {ul("cgu.s11_li1", "cgu.s11_li2", "cgu.s11_li3")}
              <p>{t("cgu.s11_p3")}</p>
            </>
          ),
        },
        {
          id: "suspension",
          title: t("cgu.s12_title"),
          body: (
            <>
              <p>{t("cgu.s12_p1")}</p>
              {ul("cgu.s12_li1", "cgu.s12_li2", "cgu.s12_li3")}
              <p>{t("cgu.s12_p2")}</p>
            </>
          ),
        },
        { id: "securite", title: t("cgu.s13_title"), body: ps("cgu.s13_p1", "cgu.s13_p2") },
        { id: "modifications", title: t("cgu.s14_title"), body: ps("cgu.s14_p1", "cgu.s14_p2", "cgu.s14_p3") },
        { id: "droit", title: t("cgu.s15_title"), body: ps("cgu.s15_p1", "cgu.s15_p2") },
        {
          id: "contact",
          title: t("cgu.s16_title"),
          body: (
            <p>
              {t("cgu.s16_p1")}
              <br />
              <LegalMail />
              <br />
              {t("cgu.s16_p2")}
            </p>
          ),
        },
      ]}
    />
  );
}
