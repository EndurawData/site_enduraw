import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const STORE = "ep-scroll";

function readStore(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORE) ?? "{}");
  } catch {
    return {};
  }
}

/** Attend que `test` réussisse (page paresseuse en cours de chargement), au
 *  plus `timeout` ms, puis exécute `run`. */
function when(test: () => boolean, run: () => void, timeout = 2000) {
  const start = performance.now();
  let frame = 0;
  const tick = () => {
    if (test() || performance.now() - start > timeout) run();
    else frame = requestAnimationFrame(tick);
  };
  tick();
  return () => cancelAnimationFrame(frame);
}

/**
 * Défilement entre les pages.
 *
 * L'ancien `ScrollToTop` sortait tôt dès que l'URL portait une ancre, et rien
 * ne défilait ensuite : `/services/testing#offer` arrivait en haut de page.
 *
 *   · nouvelle page        → en haut
 *   · page avec ancre      → sur l'ancre, une fois la page chargée (le
 *                            décalage de la barre vient de `scroll-margin-top`)
 *   · retour / avance      → la position laissée en partant
 *
 * Le focus passe sur `<main>` après une navigation interne : un lecteur
 * d'écran repart du début du contenu, pas du lien cliqué.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const type = useNavigationType();
  const positions = useRef<Record<string, number>>({});
  const firstRender = useRef(true);
  const currentKey = useRef(key);

  useEffect(() => {
    positions.current = readStore();
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const save = () => {
      positions.current[currentKey.current] = window.scrollY;
    };
    const persist = () => {
      try {
        sessionStorage.setItem(STORE, JSON.stringify(positions.current));
      } catch {
        /* stockage indisponible : pas de restauration entre deux visites */
      }
    };
    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("pagehide", persist);
    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("pagehide", persist);
    };
  }, []);

  useEffect(() => {
    currentKey.current = key;
    const initial = firstRender.current;
    firstRender.current = false;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      return when(
        () => document.getElementById(id) !== null,
        () => document.getElementById(id)?.scrollIntoView({ block: "start" }),
      );
    }

    if (type === "POP") {
      const y = positions.current[key];
      if (y !== undefined) {
        return when(
          () => document.documentElement.scrollHeight - window.innerHeight >= y,
          () => window.scrollTo({ top: y, behavior: "instant" }),
        );
      }
    }

    if (!initial) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }
    return undefined;
  }, [pathname, hash, key, type]);

  return null;
}
