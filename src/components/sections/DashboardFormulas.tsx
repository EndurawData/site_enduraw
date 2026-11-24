import { useId, type HTMLAttributes, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

/**
 * Les modèles du dashboard, écrits en MathML (Baseline, sans bibliothèque).
 * Coefficients repris du code du dashboard :
 *   · allure corrigée de la pente : backend/activities/adjusted_speeds.py
 *   · découplage cardiaque : backend/activities/matrix_updater.py (_intra_session_drift)
 *   · charge : backend/activities/form_fatigue.py (banister_trimp, hr_reserve_ratio)
 */

/* Les types de React ne déclarent pas encore les balises MathML. */
type MathProps = HTMLAttributes<HTMLElement> & {
  display?: "block" | "inline";
  width?: string;
};
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      math: MathProps;
      mrow: MathProps;
      mi: MathProps;
      mn: MathProps;
      mo: MathProps;
      mtext: MathProps;
      msub: MathProps;
      msup: MathProps;
      mfrac: MathProps;
    }
  }
}

const ROWS = ["gap", "drift", "vam", "load"] as const;

/** Séparateur décimal de la langue : 0,0289 en français, 0.0289 en anglais. */
function useNum() {
  const { i18n } = useTranslation();
  const comma = ["fr", "es", "de"].includes(i18n.language);
  return (n: string) => <mn>{comma ? n.replace(".", ",") : n}</mn>;
}

/**
 * Variable d'une lettre. Pas de classe `italic` ni de `mathvariant` : le
 * moteur MathML met déjà un `<mi>` d'une lettre en italique, avec la police
 * mathématique du système (Space Grotesk n'a pas d'italique chargé).
 */
function V({ children }: { children: string }) {
  return <mi>{children}</mi>;
}

/** Une formule ; défile dans son cadre plutôt que la page, à 375 px. */
function Formula({ children, describedBy }: { children: ReactNode; describedBy: string }) {
  return (
    <div className="max-w-full overflow-x-auto">
      <math
        display="block"
        aria-describedby={describedBy}
        className="font-sans text-[20px] text-white [math-style:normal]"
      >
        {children}
      </math>
    </div>
  );
}

export function DashboardFormulas() {
  const { t } = useTranslation();
  const n = useNum();
  const hr = t("dashboardPage.api.symbols.hr");
  const rest = t("dashboardPage.api.symbols.rest");
  const uid = useId();
  const legendId = (key: (typeof ROWS)[number]) => `${uid}-${key}`;

  const formulas: Record<(typeof ROWS)[number], ReactNode> = {
    gap: (
      <>
        <Formula describedBy={legendId("gap")}>
          <mrow>
            <msub>
              <V>v</V>
              <mtext>c</mtext>
            </msub>
            <mo>=</mo>
            <V>v</V>
            <mo>·</mo>
            <mrow>
              <mo>(</mo>
              <mn>1</mn>
              <mo>+</mo>
              {n("0.0289")}
              <V>p</V>
              <mo>+</mo>
              {n("0.00152")}
              <msup>
                <V>p</V>
                <mn>2</mn>
              </msup>
              <mo>)</mo>
            </mrow>
          </mrow>
        </Formula>
      </>
    ),
    drift: (
      <>
        <Formula describedBy={legendId("drift")}>
          <mrow>
            <V>D</V>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msub>
                  <mtext>EF</mtext>
                  <mn>1</mn>
                </msub>
                <mo>−</mo>
                <msub>
                  <mtext>EF</mtext>
                  <mn>3</mn>
                </msub>
              </mrow>
              <msub>
                <mtext>EF</mtext>
                <mn>1</mn>
              </msub>
            </mfrac>
            <mo>×</mo>
            <mn>100</mn>
          </mrow>
        </Formula>
        <Formula describedBy={legendId("drift")}>
          <mrow>
            <mtext>EF</mtext>
            <mo>=</mo>
            <mfrac>
              <V>v</V>
              <mtext>{hr}</mtext>
            </mfrac>
          </mrow>
        </Formula>
      </>
    ),
    vam: (
      <>
        <Formula describedBy={legendId("vam")}>
          <mrow>
            <mtext>VAM</mtext>
            <mo>=</mo>
            <mfrac>
              <msup>
                <V>D</V>
                <mo>+</mo>
              </msup>
              <V>t</V>
            </mfrac>
          </mrow>
        </Formula>
      </>
    ),
    load: (
      <>
        <Formula describedBy={legendId("load")}>
          <mrow>
            <mtext>TRIMP</mtext>
            <mo>=</mo>
            <V>t</V>
            <mo>·</mo>
            <V>Δ</V>
            <mo>·</mo>
            <V>a</V>
            <mo>·</mo>
            <msup>
              <V>e</V>
              <mrow>
                <V>b</V>
                <V>Δ</V>
              </mrow>
            </msup>
          </mrow>
        </Formula>
        <Formula describedBy={legendId("load")}>
          <mrow>
            <V>Δ</V>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mtext>{hr}</mtext>
                <mo>−</mo>
                <msub>
                  <mtext>{hr}</mtext>
                  <mtext>{rest}</mtext>
                </msub>
              </mrow>
              <mrow>
                <msub>
                  <mtext>{hr}</mtext>
                  <mtext>max</mtext>
                </msub>
                <mo>−</mo>
                <msub>
                  <mtext>{hr}</mtext>
                  <mtext>{rest}</mtext>
                </msub>
              </mrow>
            </mfrac>
          </mrow>
        </Formula>
      </>
    ),
  };

  return (
    <ul className="ep-lines">
      {ROWS.map((key) => (
        <li key={key} className="grid gap-5 lg:grid-cols-[4fr_5fr_5fr] lg:items-start lg:gap-10">
          <h3 className="text-[18px] font-medium text-white">{t(`dashboardPage.api.rows.${key}.name`)}</h3>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">{formulas[key]}</div>
            <p id={legendId(key)} className="mt-4 text-[14px] leading-relaxed text-white/[0.55]">
              {t(`dashboardPage.api.rows.${key}.legend`)}
            </p>
          </div>
          <p className="ep-body text-[15px] leading-relaxed">{t(`dashboardPage.api.rows.${key}.text`)}</p>
        </li>
      ))}
    </ul>
  );
}
