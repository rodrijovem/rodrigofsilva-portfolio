import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/*
  O GitHub Pages serve arquivos estaticos: uma rota como /cases/finvity nao
  existe em disco e devolve 404 antes do React carregar. Servindo o mesmo HTML
  como 404.html, o Pages entrega o app em qualquer rota e o router assume dali.

  Emitido a partir do bundle (e nao copiado de public/) porque o index.html
  precisa ja estar com os assets com hash injetados pelo build.
*/
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback-404',
    enforce: 'post',
    apply: 'build',
    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (index?.type !== 'asset') return
      this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: '/',
})
