import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  LANG_KEY,
  THEME_KEY,
  initialLang,
  initialTheme,
  storedTheme,
} from './preferences';

/*
  O que estes testes protegem e a *precedencia*, nao as funcoes. O bug que ja
  aconteceu aqui foi de ordem: uma escrita no localStorage feita cedo demais
  fazia o site parar de seguir o tema do sistema. Cada `it` abaixo fixa um
  degrau dessa ordem.
*/

/** jsdom nao implementa matchMedia; cada teste declara o que o sistema responde. */
function systemPrefers(scheme: 'dark' | 'light') {
  vi.stubGlobal(
    'matchMedia',
    (query: string) => ({
      matches: query.includes(scheme),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  );
}

afterEach(() => {
  window.localStorage.clear();
  vi.unstubAllGlobals();
});

describe('storedTheme', () => {
  it('e null enquanto o usuario nao escolheu — e o que mantem o site seguindo o sistema', () => {
    expect(storedTheme()).toBeNull();
  });

  it('ignora valor invalido em vez de confiar no que esta gravado', () => {
    window.localStorage.setItem(THEME_KEY, 'roxo');
    expect(storedTheme()).toBeNull();
  });

  it('devolve a escolha gravada', () => {
    window.localStorage.setItem(THEME_KEY, 'light');
    expect(storedTheme()).toBe('light');
  });
});

describe('initialTheme', () => {
  it('a escolha do usuario vence a preferencia do sistema', () => {
    systemPrefers('light');
    window.localStorage.setItem(THEME_KEY, 'dark');
    expect(initialTheme()).toBe(true);
  });

  it('sem escolha, segue o sistema em claro', () => {
    systemPrefers('light');
    expect(initialTheme()).toBe(false);
  });

  it('sem escolha e sem sistema claro, cai no escuro', () => {
    systemPrefers('dark');
    expect(initialTheme()).toBe(true);
  });
});

describe('initialLang', () => {
  it('a escolha do usuario vence o idioma do navegador', () => {
    vi.stubGlobal('navigator', { language: 'en-US' });
    window.localStorage.setItem(LANG_KEY, 'pt');
    expect(initialLang()).toBe('pt');
  });

  it('sem escolha, segue o navegador', () => {
    vi.stubGlobal('navigator', { language: 'pt-BR' });
    expect(initialLang()).toBe('pt');
  });

  it('navegador em outro idioma cai no ingles, nao no portugues', () => {
    vi.stubGlobal('navigator', { language: 'fr-FR' });
    expect(initialLang()).toBe('en');
  });

  it('ignora idioma gravado invalido', () => {
    vi.stubGlobal('navigator', { language: 'fr-FR' });
    window.localStorage.setItem(LANG_KEY, 'de');
    expect(initialLang()).toBe('en');
  });
});
