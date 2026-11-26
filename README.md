# Enduraw · site vitrine

Site de [enduraw.co](https://enduraw.co), dans la direction artistique du dashboard Enduraw.
React 19, TypeScript, Vite, Tailwind 3, react-i18next (5 langues), prérendu statique, GitHub Pages.

## Démarrer

Node 20.19 ou plus récent.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # images → types → lint → build client → build serveur → prérendu, dans build/
npm run preview    # sert build/
```

| Script | Rôle |
|---|---|
| `npm run lint` | ESLint, dont la garde de la charte (couleurs, polices, angles, ombres, `vh`) |
| `npm run check:i18n` | Vérifie que chaque clé `t("…")` existe dans les 5 langues |
| `npm run images` | Variantes WebP et manifeste des dimensions (lancé par `dev` et `build`) |

## Où sont les choses

```
src/
├── routes/manifest.ts     # LA liste des routes et des redirections d'anciennes URL
├── routes/head.ts         # title, description, canonical, Open Graph, JSON-LD
├── components/layout/     # barre, pied de page
├── components/ui/         # primitives : PhotoHero, SectionHead, Action, Media, Capture
├── components/sections/   # sections partagées : FinalCta, Figures, LegalLayout
├── pages/                 # une page par route
├── styles/brand.css       # COPIE de la couche ep-* du dashboard, ne pas éditer ici
├── styles/site.css        # extensions propres au site
└── locales/<langue>/*.json  # un fichier par page, fusionnés au chargement
```

## Règles

- Couleurs, polices, formes : celles de la charte, via les classes `ep-*` et les tokens Tailwind `ep-*`. La garde ESLint refuse le reste.
- Tout texte affiché passe par `t()` et existe dans les 5 langues. La casse vient du CSS.
- Une nouvelle page : un fichier dans `src/pages/`, une entrée dans `src/routes/manifest.ts`. Une page supprimée : son URL passe dans `REDIRECTS`.

## Déploiement

Chaque push sur `main` déploie `build/` sur GitHub Pages (`.github/workflows/deploy-react.yml`).
Chaque route est prérendue en `route.html` et `route/index.html` ; les anciennes URL ont une page de redirection ; `404.html` est une vraie page 404.

**Ne jamais déplacer ni modifier** `public/images/signatures/` et `public/images/logos/` : les signatures mail chargent ces fichiers depuis le dépôt.
