import type { Lang } from '../i18n';

/*
  A preferencia do visitante. Era um par — tema e idioma — ate o site passar
  a ter uma paleta so; o tema saiu junto com o toggle, e sobrou o idioma.

  Continua aqui, e nao dentro do provider, pela mesma razao de antes: a
  precedencia (escolha salva > navegador > portugues) e a parte que ja
  regrediu uma vez, e so da para apertar diretamente se for publica.
*/

export const LANG_KEY = 'rs-lang';

/** Escolha salva > idioma do navegador > portugues. */
export function initialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const saved = window.localStorage.getItem(LANG_KEY);
  if (saved === 'pt' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function persistLang(lang: Lang): void {
  window.localStorage.setItem(LANG_KEY, lang);
}
