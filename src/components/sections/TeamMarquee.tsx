import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pause, Play } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { NewTab } from "@/components/sections/ContentRow";

export type Member = {
  name: string;
  role: string;
  /** Portrait carré ; sans photo, les initiales. */
  photo?: string;
  linkedin?: string;
};

function Portrait({ m, hidden }: { m: Member; hidden?: boolean }) {
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
          <Media src={m.photo} alt="" ratio="1 / 1" position="center 30%" sizes="240px" />
        ) : (
          <div className="ep-portrait__initials" aria-hidden="true">
            {initials}
          </div>
        )}
        <span className="ep-cross" style={{ bottom: -6, right: -6 }} aria-hidden="true" />
      </div>
      <p className="mt-4 text-[16px] font-medium text-white">{m.name}</p>
      <p className="ep-body mt-0.5 text-[14px]">{m.role}</p>
    </>
  );
  return (
    <li className="ep-portrait">
      {m.linkedin ? (
        <a
          href={m.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
          className="block"
        >
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
 * L'équipe en bandeau qui défile tout seul. La rangée est rendue deux fois
 * pour une boucle sans à-coup ; la copie est masquée aux lecteurs d'écran et
 * hors tabulation. Pause au survol, au focus et par un bouton (WCAG 2.2.2).
 * Avec « réduire les animations » : une rangée simple, défilable à la main.
 */
export function TeamMarquee({ members, label }: { members: Member[]; label: string }) {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);
  return (
    <div>
      <div className="ep-marquee" data-paused={paused} role="region" aria-label={label}>
        <div className="ep-marquee__track">
          <ul role="list" className="ep-marquee__group">
            {members.map((m) => (
              <Portrait key={m.name} m={m} />
            ))}
          </ul>
          <ul role="list" className="ep-marquee__group" aria-hidden="true" inert>
            {members.map((m) => (
              <Portrait key={m.name} m={m} hidden />
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-[13px] text-white/70 transition-colors hover:text-white motion-reduce:hidden"
      >
        {paused ? <Play className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /> : <Pause className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
        {paused ? t("aboutPage.team.play") : t("aboutPage.team.pause")}
      </button>
    </div>
  );
}
