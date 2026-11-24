import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/**
 * Bouton ou lien d'action de la charte. Un chemin interne passe par le
 * routeur ; une URL externe ou un `mailto:` reste un lien natif.
 */
export function Action({
  to,
  variant = "primary",
  size,
  className,
  onClick,
  children,
}: {
  to: string;
  variant?: "primary" | "ghost" | "link";
  size?: "sm";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(to);
  const classes =
    variant === "link"
      ? cn("ep-link text-white", className)
      : cn("ep-btn", variant === "primary" ? "ep-btn--primary" : "ep-btn--ghost", size === "sm" && "ep-btn--sm", className);
  const content =
    variant === "link" ? (
      <>
        {children}
        <span className="ep-link__arrow" aria-hidden="true">
          →
        </span>
      </>
    ) : (
      <span>{children}</span>
    );
  if (external) {
    return (
      <a
        href={to}
        className={classes}
        onClick={onClick}
        {...(to.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
