import { StrictMode, useEffect } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import type { i18n as I18n } from "i18next";
import "./index.css";
import App from "./App";
import { preloadRoute } from "./routes/pages";
import { createI18n, loadMessages, switchLanguage } from "./i18n";
import { detectLang, normalizeLang, type Lang } from "./i18n/languages";

const html = document.documentElement;
const reveal = () => requestAnimationFrame(() => html.classList.remove("ep-lang-pending"));

/**
 * Passe à la langue du visiteur une fois l'hydratation terminée (un effet ne
 * s'exécute qu'après le commit). Changer de langue pendant l'hydratation
 * forcerait React à abandonner le HTML prérendu et à tout rendre à nouveau.
 */
function Root({ i18n, target }: { i18n: I18n; target: Lang }) {
  useEffect(() => {
    if (normalizeLang(i18n.language) === target) {
      reveal();
      return;
    }
    void switchLanguage(i18n, target).then(reveal);
  }, [i18n, target]);

  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </StrictMode>
  );
}

/**
 * Démarrage côté navigateur.
 *
 * La page arrive prérendue dans la langue par défaut (`data-prerender-lang`).
 * Visiteur de cette langue : React reprend le HTML tel quel (`hydrateRoot`),
 * rien ne bouge. Autre langue : le contenu reste masqué (`ep-lang-pending`,
 * posé par index.html), la page est rendue directement dans sa langue, puis
 * apparaît.
 */
async function start() {
  // On charge directement la langue du visiteur, une seule fois : charger
  // d'abord celle du prérendu pour hydrater, puis la sienne, doublait le
  // téléchargement et retardait l'affichage pour tous les non-anglophones.
  const target = detectLang();
  const container = document.getElementById("root")!;
  const prerendered = normalizeLang(html.dataset.prerenderLang);
  const initial = target;

  const [messages] = await Promise.all([loadMessages(initial), preloadRoute(window.location.pathname)]);
  const i18n = createI18n(initial, messages);
  html.lang = initial;

  const root = <Root i18n={i18n} target={target} />;
  if (initial === prerendered && container.firstElementChild) {
    hydrateRoot(container, root);
  } else {
    container.textContent = "";
    createRoot(container).render(root);
  }
}

void start();
