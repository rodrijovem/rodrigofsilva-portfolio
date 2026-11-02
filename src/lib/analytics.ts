/*
  Google Analytics 4 sem cookies.

  O consentimento de armazenamento fica sempre negado: o gtag nao grava
  cookie nem identificador no navegador e manda pings anonimos, que o GA
  usa para modelar os numeros. Por isso nao ha banner — nao ha o que
  consentir. A tag so carrega no build de producao, para o `npm run dev`
  nao sujar os relatorios.
*/
const MEASUREMENT_ID = 'G-RL614BKXVT';

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let ready = false;

export function initAnalytics() {
  if (ready || !import.meta.env.PROD || typeof window === 'undefined') return;
  ready = true;

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  // O gtag.js le `arguments`, nao um array: precisa ser function, nao arrow
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  // SPA: a page_view e enviada a cada troca de rota por trackPageView
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(path: string) {
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/*
  Nomes proprios, nao os do enhanced measurement (click, file_download):
  assim os eventos do site nao se misturam com os automaticos do GA.
*/
type Events = {
  contact_click: { method: 'linkedin' | 'email' | 'whatsapp'; location: string };
  case_open: { case_id: string; location: string };
  resume_download: { language: string; location: string };
  language_change: { language: string };
};

export function track<K extends keyof Events>(name: K, params: Events[K]) {
  window.gtag?.('event', name, params);
}
