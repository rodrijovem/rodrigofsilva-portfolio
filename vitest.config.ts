import { defineConfig } from 'vitest/config';

/*
  Separado do `vite.config.ts` de proposito: aquele carrega o plugin de
  pre-render, que emite 404.html e as rotas conhecidas. Nada disso tem sentido
  rodando teste, e o plugin so age no build.

  jsdom porque as preferencias leem localStorage e navigator. `matchMedia` nao
  vem no jsdom — cada teste declara o que o sistema responde.
*/
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts'],
    restoreMocks: true,
  },
});
