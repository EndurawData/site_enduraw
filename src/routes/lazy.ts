import { lazy, type ComponentType, type LazyExoticComponent } from "react";

type Loader = () => Promise<{ default: ComponentType }>;

/**
 * Page chargée à la demande, préchargeable.
 *
 * `React.lazy` suspend au premier rendu même si le module est déjà là : il
 * attend la résolution de sa promesse, qui arrive au mieux une micro-tâche
 * plus tard. Au démarrage, ce délai suffit à afficher le repli du
 * `<Suspense>` — la page s'effondre, le pied de page remonte puis redescend
 * (mesuré : CLS 0,33 sur l'accueil).
 *
 * Une fois le module préchargé, on rend à React un « thenable » qui se résout
 * de façon synchrone : `lazy` le lit immédiatement et ne suspend pas.
 */
export function lazyPage(load: Loader): { Page: LazyExoticComponent<ComponentType>; preload: () => Promise<unknown> } {
  let mod: { default: ComponentType } | undefined;
  let pending: Promise<{ default: ComponentType }> | undefined;

  const preload = () =>
    (pending ??= load().then((m) => {
      mod = m;
      return m;
    }));

  const Page = lazy(() => {
    if (mod) {
      const loaded = mod;
      // Thenable synchrone : `then` appelle son callback tout de suite.
      return { then: (resolve: (m: { default: ComponentType }) => void) => resolve(loaded) } as Promise<{
        default: ComponentType;
      }>;
    }
    return preload();
  });

  return { Page, preload };
}
