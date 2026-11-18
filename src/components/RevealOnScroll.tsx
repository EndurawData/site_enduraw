import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Apparition douce des sections au défilement (fondu + léger glissement), comme sur les sites produit
 * récents : la page se découvre au lieu d'arriver d'un bloc. Aucune page n'est modifiée : on observe
 * simplement les <section> du contenu principal.
 *
 * - Les sections déjà visibles au chargement ne sont jamais masquées (pas de clignotement).
 * - Rien ne bouge si l'utilisateur a demandé moins d'animations.
 * - Un filet de sécurité révèle tout au bout de 4 s si l'observateur ne se déclenche pas.
 */
const RevealOnScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 15% 0px', threshold: 0 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>('main section').forEach((el) => {
        if (el.dataset.reveal) return;
        el.dataset.reveal = '1';
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        el.classList.add('reveal');
        io.observe(el);
      });
    };

    scan();
    // Les pages chargées à la demande montent un peu après le changement d'adresse.
    const timers = [window.setTimeout(scan, 250), window.setTimeout(scan, 1000)];
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'));
    }, 4000);

    return () => {
      io.disconnect();
      timers.forEach(window.clearTimeout);
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
};

export default RevealOnScroll;
