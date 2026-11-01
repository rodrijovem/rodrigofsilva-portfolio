/*
  O vocabulario visual dos cases. Cada case monta sua prosa com estas pecas,
  entao uma mudanca de estilo — o espacamento entre blocos, o tratamento da
  legenda — acontece aqui uma vez e vale para os tres.
*/

/* Interno: chega nos cases sempre pelo `legend` de `img`/`embedIframe`. */
const caption = (text?: string) => (
  text ? <figcaption className="meta mt-3 max-w-[64ch]">{text}</figcaption> : null
);

export const img = (src: string, alt: string, legend?: string) => (
  <figure className="my-12 w-full">
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--rule)]">
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
    </div>
    {caption(legend)}
  </figure>
);

export const embedIframe = (src: string, legend?: string) => (
  <figure className="my-12 w-full">
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--surface)]">
      <iframe className="aspect-video w-full" src={src} frameBorder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>
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
  <h2 id={id} className="title-m mb-6 mt-16 scroll-mt-[calc(var(--nav-h)+2rem)] first:mt-0">{t}</h2>
);

// Classe literal: `mb-${n}` nao e gerada pelo Tailwind, que varre o fonte
// procurando nomes de classe completos.
export const p = (t: string) => <p className="mb-5 max-w-[64ch] text-[var(--body)]">{t}</p>;
export const p12 = (t: string) => <p className="mb-10 max-w-[64ch] text-[var(--body)]">{t}</p>;

export const note = (t: string) => (
  <p className="meta mb-10 max-w-[64ch] border-l border-[var(--brand)] pl-4">{t}</p>
);

export const statsGrid = (items: {value: string, label: string}[]) => (
  <div className="my-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
    {items.map((item, i) => (
      <div key={i} className="rule pt-5">
        <span className="block text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-[var(--brand)]">{item.value}</span>
        <span className="meta mt-2 block">{item.label}</span>
      </div>
    ))}
  </div>
);
