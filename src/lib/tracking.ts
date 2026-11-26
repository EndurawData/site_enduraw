/**
 * Meta Pixel. Le script de base (`fbq('init')`, `PageView`) est dans
 * `index.html`, inchangé. Ici, l'événement `Lead` déclenché au clic vers le
 * dashboard — même appel qu'avant la refonte (HomePage, EndurawDashboardPage).
 */
type Fbq = (command: "track", event: string) => void;

export function trackLead() {
  if (typeof window === "undefined") return;
  const fbq = (window as Window & { fbq?: Fbq }).fbq;
  fbq?.("track", "Lead");
}
