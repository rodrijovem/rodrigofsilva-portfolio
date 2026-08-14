import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/*
  O TypeScript nao enxerga dep array de hook: para ele, `[a, b]` e so um array.
  Quem verifica se as dependencias batem com o que o efeito le e a regra
  `react-hooks/exhaustive-deps`, e ela e o motivo principal deste arquivo
  existir — o comentario em `contexts/AppContext.tsx` registra um bug que
  nasceu exatamente ai.
*/
export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'coverage'] },

  // Codigo do site: roda no browser, e checado com tipos.
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat['recommended-latest'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      // Um export nao-componente no mesmo arquivo derruba o hot reload do Vite.
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      /*
        As tres que sustentam o estado atual do repo: zero `any`, zero
        assertion, zero non-null. Como error, e nao warn, para que a proxima
        gambiarra pare o commit em vez de virar aviso ignorado.
      */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },

  // Configs de build: rodam no Node, checados com o outro tsconfig.
  {
    files: ['vite.config.ts', 'vitest.config.ts'],
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: ['./tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Este proprio arquivo: sem regra com tipo, senao precisaria constar de um
  // tsconfig so para se auto-verificar.
  {
    files: ['eslint.config.js'],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.node },
  }
);
