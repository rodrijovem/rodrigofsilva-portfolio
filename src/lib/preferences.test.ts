import { afterEach, describe, expect, it, vi } from 'vitest';
import { LANG_KEY, initialLang } from './preferences';

/*
  O que estes testes protegem e a *precedencia*, nao a funcao. O bug que ja
  aconteceu aqui foi de ordem: uma escrita no localStorage feita cedo demais
  fazia o site parar de seguir a preferencia do sistema. Cada `it` abaixo
  fixa um degrau dessa ordem.
*/

afterEach(() => {
  window.localStorage.clear();
  vi.unstubAllGlobals();
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
