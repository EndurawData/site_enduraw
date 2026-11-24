import { useCallback, useEffect, useId, useRef, useState, type RefObject } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe, Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/links";
import { LANGS, LANG_LABELS, normalizeLang } from "@/i18n/languages";
import { switchLanguage } from "@/i18n";
import { findRoute } from "@/routes/manifest";

type Item = { to: string; label: string; children?: { to: string; label: string }[] };

/** Un seul corps de libellé dans toute la barre, comme le dashboard. */
const LABEL = "ep-label ep-label--bright text-[12px]";
/** Entrée de liste déroulante : 44 px de haut au moins. */
const ENTRY = "flex min-h-11 items-center border-l-2 px-4 transition-colors";

function useItems(): Item[] {
  const { t } = useTranslation();
  return [
    { to: "/", label: t("nav.home") },
    { to: "/media", label: t("nav.media") },
    { to: "/dashboard", label: t("nav.dashboard") },
    {
      to: "/services",
      label: t("nav.services"),
      children: [
        { to: "/services/testing", label: t("nav.lab") },
        { to: "/services/coaching", label: t("nav.coaching") },
        { to: "/services/conferences", label: t("nav.conferences") },
      ],
    },
    { to: "/about", label: t("nav.about") },
  ];
}

/**
 * Ferme une liste déroulante : Échap (et rend le focus au bouton), clic hors
 * de la zone, focus qui sort de la zone.
 */
function useDismiss(open: boolean, close: () => void, root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      close();
      root.current?.querySelector<HTMLButtonElement>("button[aria-expanded]")?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) close();
    };
    const onFocus = (e: FocusEvent) => {
      if (!root.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open, close, root]);
}

/**
 * Sous-menu Services, en navigation de site (pas un menu applicatif) : les
 * liens restent dans l'ordre de tabulation, sans rôles `menu`. Le survol
 * ouvre un aperçu sur les écrans à souris ; le clic sur le chevron épingle ou
 * libère le menu ; Échap, un clic ailleurs ou le focus qui sort le referment.
 */
function ServicesMenu({ item, active }: { item: Item; active: boolean }) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovered || pinned;
  const id = useId();
  const root = useRef<HTMLLIElement>(null);
  const close = useCallback(() => {
    setHovered(false);
    setPinned(false);
  }, []);
  useDismiss(open, close, root);

  const mouse = (e: React.PointerEvent) => e.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches;

  return (
    <li
      ref={root}
      className="relative flex items-center"
      onPointerEnter={(e) => mouse(e) && setHovered(true)}
      onPointerLeave={(e) => mouse(e) && setHovered(false)}
    >
      <NavLink to={item.to} end className={cn("ep-navlink", LABEL)} data-active={active}>
        {item.label}
      </NavLink>
      <button
        type="button"
        className="ml-0.5 flex h-11 w-11 items-center justify-center text-white/60 transition-colors hover:text-white"
        aria-expanded={open}
        aria-controls={id}
        aria-label={t("nav.servicesMenu")}
        onClick={() => {
          // Ouvert par le survol : le clic l'épingle au lieu de le refermer.
          if (hovered && !pinned) setPinned(true);
          else if (pinned) close();
          else setPinned(true);
        }}
      >
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-150", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <ul
        id={id}
        hidden={!open}
        className="absolute left-0 top-full z-50 min-w-[240px] border border-white/15 bg-black/95 py-1.5 backdrop-blur-[14px] before:absolute before:inset-x-0 before:-top-3 before:h-3"
      >
        {item.children!.map((c) => (
          <li key={c.to}>
            <NavLink
              to={c.to}
              onClick={close}
              className={({ isActive }) =>
                cn(
                  LABEL,
                  ENTRY,
                  isActive
                    ? "border-ep-sky text-ep-sky"
                    : "border-transparent text-white/[0.72] hover:border-white/25 hover:text-white",
                )
              }
            >
              {c.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

/** Choix de la langue : une courte liste, les cinq langues dans leur nom propre. */
function LangSwitch() {
  const { i18n, t } = useTranslation();
  const current = normalizeLang(i18n.language) ?? "en";
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, root);

  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        type="button"
        className={cn(LABEL, "flex h-11 items-center gap-1.5 px-2 transition-colors hover:text-white")}
        aria-expanded={open}
        aria-controls={id}
        // Le nom accessible contient le texte visible (WCAG 2.5.3).
        aria-label={`${current} – ${t("nav.language")} : ${LANG_LABELS[current]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        {current}
      </button>
      <ul id={id} hidden={!open} className="absolute right-0 top-full z-50 min-w-[168px] border border-white/15 bg-black/95 py-1.5 backdrop-blur-[14px]">
        {LANGS.map((l) => (
          <li key={l}>
            <button
              type="button"
              lang={l}
              aria-current={l === current ? "true" : undefined}
              className={cn(
                ENTRY,
                "w-full text-left text-[14px]",
                l === current ? "border-ep-sky text-ep-sky" : "border-transparent text-white/[0.72] hover:text-white",
              )}
              onClick={() => {
                setOpen(false);
                button.current?.focus();
                void switchLanguage(i18n, l);
              }}
            >
              {LANG_LABELS[l]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteNav() {
  const { t } = useTranslation();
  const items = useItems();
  const { pathname } = useLocation();
  const section = findRoute(pathname).section;
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  /* Tiroir ouvert : il se comporte comme une modale. La page dessous est
     inerte (hors tabulation et lecteur d'écran), ne défile plus, et le focus
     entre dans le tiroir puis revient au bouton à la fermeture. Il se ferme
     tout seul si l'écran s'élargit au-delà du point de bascule. */
  useEffect(() => {
    if (!open) return;
    const behind = [document.getElementById("main"), document.querySelector("footer")].filter(Boolean) as HTMLElement[];
    behind.forEach((el) => (el.inert = true));
    document.documentElement.style.overflow = "hidden";
    drawer.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = () => wide.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    const button = burger.current;
    return () => {
      behind.forEach((el) => (el.inert = false));
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
      button?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        stuck || open ? "border-white/10 bg-black/80 backdrop-blur-[14px]" : "border-transparent bg-transparent",
      )}
    >
      <div className="ep-wrap flex h-[68px] items-center gap-4 sm:gap-11">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Enduraw">
          <img
            src="/images/brand/logo-ecran-40.png"
            srcSet="/images/brand/logo-ecran-40.png 1x, /images/brand/logo-ecran-80.png 2x, /images/brand/logo-ecran-120.png 3x"
            alt="Enduraw"
            width={108}
            height={40}
            className="ep-brand"
          />
        </Link>

        <nav aria-label={t("nav.primary")} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) =>
              item.children ? (
                <ServicesMenu key={item.to} item={item} active={section === "services"} />
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end className={cn("ep-navlink", LABEL)}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <LangSwitch />
          <a
            href={LINKS.shop}
            className="flex h-11 w-11 items-center justify-center text-white/[0.72] transition-colors hover:text-white"
            aria-label={t("nav.shop")}
            title={t("nav.shop")}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          </a>
          <button
            ref={burger}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white/[0.72] transition-colors hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-label={t("nav.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          ref={drawer}
          id="site-drawer"
          aria-label={t("nav.primary")}
          className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-black lg:hidden"
        >
          <ul className="ep-wrap flex flex-col py-4">
            {items.map((item) => (
              <li key={item.to} className="border-b border-white/10 py-2 last:border-0">
                <NavLink to={item.to} end className={cn("ep-navlink", LABEL)}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mb-1 flex flex-col border-l border-white/15 pl-4">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          className={cn(LABEL, "flex min-h-11 items-center transition-colors hover:text-white aria-[current=page]:text-ep-sky")}
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
