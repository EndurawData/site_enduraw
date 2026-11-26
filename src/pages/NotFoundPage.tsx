import { useTranslation } from "react-i18next";
import { Action } from "@/components/ui/Action";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="ep-wrap flex min-h-[80svh] flex-col justify-center pb-24 pt-[calc(var(--ep-nav-h)+72px)]">
      <span className="ep-tiret ep-tiret--sky" aria-hidden="true" />
      <p className="ep-display mt-6 text-[clamp(4rem,12vw,9rem)] leading-none text-white/10">404</p>
      <h1 className="ep-display ep-h2 mt-4 max-w-[18ch]">{t("notFound.title")}</h1>
      <p className="ep-lead mt-5 max-w-[52ch]">{t("notFound.text")}</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Action to="/">{t("notFound.home")}</Action>
      </div>
    </section>
  );
}
