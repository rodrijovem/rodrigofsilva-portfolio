import type { Lang } from '../i18n';

/*
  As preferencias do visitante: tema e idioma, cada uma com sua ordem de
  precedencia. Moravam soltas dentro do provider, onde eram privadas e so
  davam para exercitar montando a arvore React inteira.

  Aqui tem interface propria — tres funcoes — e a precedencia deixa de ser
  detalhe de implementacao de um componente para virar a coisa que os testes
  conseguem apertar diretamente. Ja regrediu uma vez (ver o comentario do
  primeiro efeito em `contexts/AppContext.tsx`), o que e o argumento para
  isto nao voltar a ser privado.
*/

export const THEME_KEY = 'rs-theme';
export const LANG_KEY = 'rs-lang';

export type Theme = 'dark' | 'light';

/**
 * So existe quando o usuario clicou no toggle. Enquanto for null, o site
 * ainda esta seguindo o sistema.
 */
export function storedTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  const saved = window.localStorage.getItem(THEME_KEY);
  return saved === 'dark' || saved === 'light' ? saved : null;
}

/** Escolha salva > preferencia do sistema > escuro. */
export function initialTheme(): boolean {
  const saved = storedTheme();
  if (saved) return saved === 'dark';
  if (typeof window === 'undefined') return true;
  return !window.matchMedia('(prefers-color-scheme: light)').matches;
}

/** Escolha salva > idioma do navegador > portugues. */
export function initialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const saved = window.localStorage.getItem(LANG_KEY);
  if (saved === 'pt' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

/** A partir daqui o sistema deixa de mandar: a escolha e do usuario. */
export function persistTheme(dark: boolean): void {
  window.localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
}

export function persistLang(lang: Lang): void {
  window.localStorage.setItem(LANG_KEY, lang);
}
