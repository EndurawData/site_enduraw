import type { Config } from "tailwindcss";

/* Les tokens de couleur sont ceux de `src/styles/brand.css`, exposés en canaux
   RVB (`site.css`) pour que les modificateurs d'opacité fonctionnent :
   `bg-ep-sky/10`, `border-ep-sky/40`. Aucune autre couleur de marque.

   Le blanc et le noir restent ceux de Tailwind (#fff, #000), identiques à la
   charte. Les opacités de blanc de la charte s'écrivent `text-white/[0.62]`
   (dim), `text-white/[0.55]` (faint), `border-white/10` (ligne). */
const rgb = (name: string) => `rgb(var(--ep-${name}-rgb) / <alpha-value>)`;

/* Repli des deux familles. Les deux polices de la charte n'ont pas de glyphes
   japonais : sans pile dédiée, le navigateur choisirait une police système au
   hasard. */
const JA_FALLBACK = ['"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', '"Yu Gothic"', '"Noto Sans JP"'];

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    /* ─── Charte : la palette de Tailwind est remplacée, pas étendue ────────
       `text-gray-400`, `bg-blue-500`… n'existent plus : la classe ne génère
       aucun CSS. Seules restent les couleurs de la charte. La garde ESLint
       refuse en plus de les écrire. */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      black: "#000000",
      white: "#ffffff",
      "ep-sky": rgb("sky"),
      "ep-deep": rgb("deep"),
      "ep-mid": rgb("mid"),
      "ep-s1": rgb("s1"),
      "ep-s2": rgb("s2"),
      "ep-s3": rgb("s3"),
    },
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", ...JA_FALLBACK, "sans-serif"],
        display: ['"Inter Tight"', "system-ui", ...JA_FALLBACK, "sans-serif"],
      },
      // ─── Charte : angles droits ─────────────────────────────────────────
      // Toutes les échelles tombent à 0. `full` est préservé : la charte
      // tolère les éléments circulaires.
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
      // ─── Charte : aucune ombre portée ───────────────────────────────────
      boxShadow: {
        none: "none",
        sm: "none",
        DEFAULT: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
      },
      transitionTimingFunction: {
        ep: "cubic-bezier(0.2, 0.7, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
