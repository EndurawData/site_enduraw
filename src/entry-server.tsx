import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import { createI18n, loadMessages } from "./i18n";
import { DEFAULT_LANG, type Lang } from "./i18n/languages";
import { buildHead, headToHtml } from "./routes/head";
import { REDIRECTS, ROUTES, findRoute } from "./routes/manifest";
import { preloadRoute } from "./routes/pages";

export { REDIRECTS, ROUTES };

/**
 * Rendu d'une URL en HTML statique, pour `scripts/prerender.mjs`.
 *
 * `prerenderToNodeStream` (React 19) attend que tout soit résolu avant de
 * rendre la main. La page étant préchargée, rien ne suspend : le HTML écrit
 * est la page complète, d'un seul tenant.
 */
export async function render(url: string, lang: Lang = DEFAULT_LANG) {
  const i18n = createI18n(lang, await loadMessages(lang));
  // La page est chargée avant le rendu : son composant paresseux ne suspend pas.
  await preloadRoute(url);

  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </I18nextProvider>
    </StrictMode>,
    // Depuis React 19.2, un <Suspense> dont le contenu dépasse
    // `progressiveChunkSize` est « sorti » du flux : le HTML contient son repli,
    // et le contenu, rangé dans un bloc caché, n'est révélé que par un script
    // en ligne. Utile en streaming ; pour une page statique, c'est une page qui
    // s'affiche vide puis saute (mesuré : CLS 0,33 sur toutes les pages).
    // Seuil infini : le contenu reste à sa place.
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER },
  );

  let html = "";
  for await (const chunk of prelude) html += chunk;

  const route = findRoute(url);
  const head = buildHead(route, i18n.t, lang, url);
  return { html, head: headToHtml(head), lang };
}
