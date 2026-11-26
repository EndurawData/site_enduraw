import { useEffect, useRef, useState, type HTMLAttributes, type MouseEvent, type PointerEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/**
 * Les modèles du dashboard, écrits en MathML (Baseline, sans bibliothèque),
 * et volontairement illisibles : floutés, sans titre ni légende, cachés aux
 * lecteurs d'écran. Rien ne les annonce. Un appui long (1 s) ou un double-clic
 * sur le bloc les rend nets quelques secondes, puis le flou revient.
 *
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

/** Durée de l'appui long, et durée pendant laquelle les formules restent nettes. */
const HOLD_MS = 900;
const SHOW_MS = 4000;
/** Au-delà de ce déplacement, l'appui est un défilement, pas un appui long. */
const MOVE_TOLERANCE = 10;

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
function Formula({ children }: { children: ReactNode }) {
  return (
    <div tabIndex={-1} className="max-w-full overflow-x-auto">
      <math display="block" className="font-sans text-[17px] text-white sm:text-[20px] [math-style:normal]">
        {children}
      </math>
    </div>
  );
}

/** Appui long ou double-clic : vrai pendant SHOW_MS, puis faux. */
function useHiddenReveal() {
  const [shown, setShown] = useState(false);
  const hold = useRef<number | undefined>(undefined);
  const hide = useRef<number | undefined>(undefined);
  const origin = useRef<{ x: number; y: number } | null>(null);

  const cancelHold = () => {
    window.clearTimeout(hold.current);
    origin.current = null;
  };
  const reveal = () => {
    cancelHold();
    window.clearTimeout(hide.current);
    setShown(true);
    hide.current = window.setTimeout(() => setShown(false), SHOW_MS);
  };

  useEffect(
    () => () => {
      window.clearTimeout(hold.current);
      window.clearTimeout(hide.current);
    },
    [],
  );

  return {
    shown,
    handlers: {
      onPointerDown: (e: PointerEvent) => {
        if (e.button !== 0) return;
        origin.current = { x: e.clientX, y: e.clientY };
        window.clearTimeout(hold.current);
        hold.current = window.setTimeout(reveal, HOLD_MS);
      },
      onPointerMove: (e: PointerEvent) => {
        const o = origin.current;
        if (o && Math.hypot(e.clientX - o.x, e.clientY - o.y) > MOVE_TOLERANCE) cancelHold();
      },
      onPointerUp: cancelHold,
      onPointerCancel: cancelHold,
      onPointerLeave: cancelHold,
      onDoubleClick: reveal,
      // Pas de menu contextuel au bout d'un appui long au doigt.
      onContextMenu: (e: MouseEvent) => {
        if (origin.current) e.preventDefault();
      },
    },
  };
}

export function DashboardFormulas({ className }: { className?: string }) {
  const { t } = useTranslation();
  const n = useNum();
  const hr = t("dashboardPage.api.symbols.hr");
  const rest = t("dashboardPage.api.symbols.rest");
  const { shown, handlers } = useHiddenReveal();

  const formulas: Record<(typeof ROWS)[number], ReactNode> = {
    gap: (
      <>
        <Formula>
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
        <Formula>
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
        <Formula>
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
        <Formula>
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
        <Formula>
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
        <Formula>
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
    <div
      aria-hidden="true"
      {...handlers}
      className={cn(
        "flex select-none flex-nowrap items-center gap-x-14 overflow-hidden whitespace-nowrap [-webkit-touch-callout:none] [mask-image:linear-gradient(90deg,#000_70%,transparent)] [touch-action:manipulation]",
        "transition-[filter,opacity] duration-700 ease-[var(--ep-ease)] motion-reduce:transition-none",
        shown ? "opacity-100 blur-0" : "opacity-40 blur-[3px]",
        className,
      )}
    >
      {ROWS.map((key) => (
        <div key={key} className="flex shrink-0 flex-nowrap items-center gap-x-10">
          {formulas[key]}
        </div>
      ))}
    </div>
  );
}
