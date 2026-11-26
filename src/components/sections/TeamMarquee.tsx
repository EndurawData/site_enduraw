import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Pause, Play } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { NewTab } from "@/components/sections/ContentRow";
import { cn } from "@/lib/utils";

export type Member = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
};

const PER_PAGE = 4;
const DELAY = 7000;

function Portrait({ m }: { m: Member }) {
  const initials = m.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  const body = (
    <>
      <div className="ep-portrait__img">
        <span className="ep-cross" style={{ top: -6, left: -6 }} aria-hidden="true" />
        {m.photo ? (
          <Media src={m.photo} alt="" ratio="1 / 1" position="center 30%" sizes="(min-width: 1024px) 200px, 40vw" />
        ) : (
          <div className="ep-portrait__initials" aria-hidden="true">
            {initials}
          </div>
        )}
        <span className="ep-cross" style={{ bottom: -6, right: -6 }} aria-hidden="true" />
      </div>
      <p className="mt-3 text-[15px] font-medium text-white">{m.name}</p>
      <p className="text-[12.5px] text-ep-sky">{m.role}</p>
      {m.bio && <p className="ep-body mt-2 line-clamp-3 text-[13px] leading-snug">{m.bio}</p>}
    </>
  );
  return (
    <li className="ep-portrait">
      {m.linkedin ? (
        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="block">
          {body}
          <span className="sr-only">LinkedIn</span>
          <NewTab />
        </a>
      ) : (
        body
      )}
    </li>
  );
}

/**
 * L'équipe par pages de quatre, qui se succèdent toutes seules. Pause au
 * survol, au focus et par un bouton (WCAG 2.2.2) ; pas de passage automatique
 * avec « réduire les animations ». Points pour aller à une page.
 */
export function TeamMarquee({ members, label }: { members: Member[]; label: string }) {
  const { t } = useTranslation();
  const pages = Array.from({ length: Math.ceil(members.length / PER_PAGE) }, (_, i) =>
    members.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE),
  );
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (paused || hold || pages.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setPage((p) => (p + 1) % pages.length), DELAY);
    return () => window.clearTimeout(id);
  }, [page, paused, hold, pages.length]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setHold(true)}
      onPointerLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="grid">
        {pages.map((group, i) => (
          <ul
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${pages.length}`}
            aria-hidden={i !== page}
            inert={i !== page}
            className={cn(
              "ep-team-page col-start-1 row-start-1 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-x-8",
              i === page ? "is-on" : "",
            )}
          >
            {group.map((m) => (
              <Portrait key={m.name} m={m} />
            ))}
          </ul>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-4">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${t("aboutPage.team.label")} ${i + 1}`}
            aria-current={i === page ? "true" : undefined}
            onClick={() => setPage(i)}
            className="flex h-11 items-center"
          >
            <span className={cn("ep-tiret ep-tiret--sm transition-colors", i === page ? "ep-tiret--sky" : "opacity-30")} />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="ml-2 inline-flex min-h-11 items-center gap-2 text-[13px] text-white/70 transition-colors hover:text-white motion-reduce:hidden"
        >
          {paused ? <Play className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /> : <Pause className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
          {paused ? t("aboutPage.team.play") : t("aboutPage.team.pause")}
        </button>
      </div>
    </section>
  );
}
