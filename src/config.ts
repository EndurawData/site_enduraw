// Le dashboard est une application à part, déployée séparément du site : on n'y
// accède que par des liens (aucun iframe, aucun code partagé), de sorte qu'une
// panne de l'un n'affecte jamais l'autre.
export const APP_URL = 'https://app.enduraw.co';
export const LOGIN_URL = `${APP_URL}/login`;
export const REGISTER_URL = `${APP_URL}/register`;
// Achat des tests (VO2max, lactate…) : tous les liens « testing » du site mènent ici
export const TESTING_SHOP_URL = `${APP_URL}/shop?tab=testing`;

export const trackLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};
