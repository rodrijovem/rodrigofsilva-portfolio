/*
  O vocabulario visual dos cases. Cada case monta sua prosa com estas pecas,
  entao uma mudanca de estilo — o raio da borda, o espacamento entre blocos —
  acontece aqui uma vez e vale para os tres.

  Ficavam no topo de `caseContent.tsx`, junto com a prosa dos tres cases. O
  arquivo tinha 378 linhas e todo ajuste de texto passava por perto delas.
*/

/* Interno: chega nos cases sempre pelo `legend` de `img`/`embedIframe`. */
const caption = (text?: string) => (
  text ? <figcaption className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{text}</figcaption> : null
);

export const img = (src: string, alt: string, legend?: string) => (
  <figure className="w-full mb-12">
    <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
    {caption(legend)}
  </figure>
);

export const embedIframe = (src: string, legend?: string) => (
  <figure className="w-full mb-12">
    <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden bg-[var(--bg-alt)]">
      <iframe className="w-full aspect-video" src={src} frameBorder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>
    </div>
    {caption(legend)}
  </figure>
);
/*
  O id vem declarado, nao derivado do texto. Derivando, o slug mudava junto com
  a traducao: o mesmo paragrafo era #o-workshop em portugues e #the-workshop em
  ingles, entao qualquer link compartilhado quebrava para quem abrisse no outro
  idioma. Declarado, a ancora e a mesma nos dois.
*/
export const h = (id: string, t: string) => (
  <h3 id={id} className="text-2xl font-bold text-[var(--text-primary)] mb-6 mt-8 scroll-mt-24">{t}</h3>
);

// Classe literal: `mb-${n}` nao e gerada pelo Tailwind, que varre o fonte
// procurando nomes de classe completos.
export const p = (t: string) => <p className="mb-4">{t}</p>;
export const p12 = (t: string) => <p className="mb-12">{t}</p>;

export const note = (t: string) => (
  <p className="mb-12 pl-4 border-l-2 border-[var(--brand-color)] text-[var(--text-secondary)]">{t}</p>
);

export const statsGrid = (items: {value: string, label: string}[]) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    {items.map((item, i) => (
      <div key={i} className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex flex-col justify-center shadow-sm">
        <span className="block text-3xl font-bold text-[var(--brand-color)] mb-2">{item.value}</span>
        <span className="text-sm font-medium text-[var(--text-secondary)] leading-tight">{item.label}</span>
      </div>
    ))}
  </div>
);
