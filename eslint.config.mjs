import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/* ══════════════════════════════════════════════════════════════════════════
   Garde anti-dérive de la direction artistique

   Portée de la garde du dashboard (`dashboard/frontend/eslint.config.js`,
   BRAND_RULES), recopiée à l'identique, plus trois règles propres au site.

   La charte n'autorise que quatre couleurs et deux familles typographiques.
   Sources de vérité autorisées, et elles seules :
     · src/styles/brand.css, src/styles/site.css — tokens CSS
     · src/lib/brandColors.ts                     — miroir JavaScript
   ══════════════════════════════════════════════════════════════════════════ */

/** Les familles de couleurs Tailwind que la charte remplace par des opacités de blanc. */
const OFF_PALETTE =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";

const BRAND_RULES = [
  {
    selector: `Literal[value=/#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?\\b/]`,
    message:
      "Couleur hexadécimale interdite. Charte : 4 couleurs. Utiliser une variable de src/styles/brand.css, ou BRAND/INK de src/lib/brandColors.ts.",
  },
  {
    selector: `TemplateElement[value.raw=/#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?\\b/]`,
    message: "Couleur hexadécimale interdite dans un gabarit. Passer par src/lib/brandColors.ts.",
  },
  {
    selector:
      "Literal[value=/\\brgba?\\(\\s*(?!" +
      [
        "255\\s*,\\s*255\\s*,\\s*255", // blanc
        "0\\s*,\\s*0\\s*,\\s*0", // noir
        "108\\s*,\\s*220\\s*,\\s*255", // --ep-sky
        "32\\s*,\\s*84\\s*,\\s*168", // --ep-deep
        "74\\s*,\\s*147\\s*,\\s*214", // --ep-mid
      ].join("|") +
      ")/]",
    message:
      "rgb()/rgba() hors charte. Admis : blanc, noir, --ep-sky, --ep-deep, --ep-mid, à toute opacité.",
  },
  {
    selector: `Literal[value=/\\b(text|bg|border|ring|from|to|via|fill|stroke|divide|outline|decoration|accent|caret|shadow)-(${OFF_PALETTE})-[0-9]{2,3}\\b/]`,
    message:
      "Classe couleur Tailwind hors charte. Charte : noir, blanc, ep-sky, ep-deep, et des opacités de blanc (white/[0.62], white/[0.55], white/10).",
  },
  {
    selector: `TemplateElement[value.raw=/\\b(text|bg|border|ring|from|to|via|fill|stroke|divide)-(${OFF_PALETTE})-[0-9]{2,3}\\b/]`,
    message: "Classe couleur Tailwind hors charte dans un gabarit.",
  },
  {
    selector: `Literal[value=/\\b(text|bg|border|ring|from|to|via|fill|stroke|divide|outline|decoration)-orange\\b(?!-)/]`,
    message: "`orange` est hors charte. Une annotation ou une valeur se marque en ep-sky.",
  },
  {
    selector: `Literal[value=/\\bfont-(mono|serif|heading|title|subtitle|body)\\b/]`,
    message:
      "Charte : deux familles seulement. Titres et chiffres en font-display (Inter Tight), le reste en font-sans (Space Grotesk). font-mono est proscrit — utiliser tabular-nums.",
  },
  {
    selector: `Property[key.name="fontFamily"] > Literal[value=/^(?!.*(Inter Tight|Space Grotesk))/]`,
    message: 'fontFamily hors charte. Seules "Inter Tight" et "Space Grotesk" sont autorisées.',
  },
  {
    selector: `Literal[value=/\\bshadow-\\[/]`,
    message:
      "Charte : aucune ombre portée. Séparer par une bordure 1px (border-white/10) ou par une bascule de fond s1 → s2.",
  },

  /* ─── propres au site ─────────────────────────────────────────────────── */
  {
    // Les échelles nommées tombent à 0 dans tailwind.config ; on refuse
    // quand même de les écrire, et l'arbitraire `rounded-[…]` passerait.
    selector: `Literal[value=/\\brounded(-(?!full\\b|none\\b)[a-z0-9[\\]-]+)?(?=[\\s"']|$)/]`,
    message: "Charte : angles droits. Seul `rounded-full` (éléments circulaires) est admis.",
  },
  {
    // La barre d'outils d'iOS fait varier `vh` : le contenu saute au défilement.
    selector: `Literal[value=/\\b(min-|max-)?h-screen\\b|\\d+vh\\b/]`,
    message: "Unité `vh` proscrite : utiliser `dvh` ou `svh` (ex. min-h-[100svh]).",
  },
  {
    selector: `Literal[value=/\\b(btn-enduraw|label-enduraw|glass-card|section-fade|text-title|text-subtitle|text-paragraph|text-body-uppercase)\\b/]`,
    message: "Classe héritée d'avant la refonte. Utiliser les primitives de src/components/ui.",
  },
];

/** Chemins sous garde : tout le code du site. */
const MIGRATED = ["src/**/*.{ts,tsx}"];

export default tseslint.config(
  {
    ignores: [
      "build",
      "build-ssr",
      "node_modules",
      "deploy",
      "api",
      "server",
      "scripts/translate.js",
      "post-build.js",
      "deploy.js",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["scripts/**/*.mjs", "*.mjs", "*.mts"],
    languageOptions: { globals: globals.node },
  },
  {
    // La garde DA, sur le périmètre migré.
    files: MIGRATED,
    rules: {
      "no-restricted-syntax": ["error", ...BRAND_RULES],
    },
  },
  {
    // Les sources de vérité ont le droit de contenir des valeurs brutes.
    files: ["src/lib/brandColors.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
);
