import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*
  O `!` que estava aqui prometia ao compilador algo que o HTML e quem cumpre.
  Se a div sumir do index.html, a promessa quebra em runtime como
  "Cannot read properties of null" vindo de dentro do React. Explicito, o
  mesmo erro chega com nome e local.
*/
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Elemento #root nao encontrado — index.html foi alterado?')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
