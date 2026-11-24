import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// `.mts` et non `.ts` : le package.json racine reste en CommonJS, parce que
// `server/*.js` et `scripts/translate.js` utilisent `require()` et n'ont pas de
// package.json à eux. Passer la racine en `"type": "module"` les casserait.
//
// La sortie reste dans `build/` : c'est le dossier que publie
// `.github/workflows/deploy-react.yml` (upload-pages-artifact, path ./build).
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    // Le bundle serveur (prérendu) n'a pas besoin de public/ : 500 Mo de copie
    // évités. Il est écrit dans build-ssr/ (option --outDir) puis supprimé.
    copyPublicDir: !isSsrBuild,
  },
}));
