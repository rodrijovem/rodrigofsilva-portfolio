import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { CASE_ORDER } from './src/caseIds'

/*
  O GitHub Pages serve arquivos estaticos: uma rota como /cases/finvity nao
  existe em disco e devolve 404 antes do React carregar.

  Duas saidas, e as duas sao necessarias:

  - 404.html, que o Pages entrega em qualquer rota nao encontrada. Resolve a
    navegacao, mas a resposta sai com status 404 — o visitante ve a pagina, o
    crawler ve um erro.
  - um index.html em cada rota conhecida, que o Pages acha em disco e serve
    com 200. E o que torna as paginas indexaveis.

  Emitidos a partir do bundle (e nao copiados de public/) porque o index.html
  precisa ja estar com os assets com hash injetados pelo build.

  A lista de cases vem de `src/caseIds.ts`, o mesmo array que a home percorre.
  Mantida a mao, um case novo respondia 404 aqui — renderizava, mas nao
  indexava. Derivada, entra sozinho. So `about` fica declarado, por ser a
  unica rota estatica que nao sai de um case.
*/
const PRERENDERED_ROUTES = ['about', ...CASE_ORDER.map((id) => `cases/${id}`)]

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    enforce: 'post',
    apply: 'build',
    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (index?.type !== 'asset') return

      this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })

      for (const route of PRERENDERED_ROUTES) {
        this.emitFile({
          type: 'asset',
          fileName: `${route}/index.html`,
          source: index.source,
        })
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: '/',
})
