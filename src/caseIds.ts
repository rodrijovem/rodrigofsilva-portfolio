/*
  Fonte unica de quais cases existem, e em que ordem aparecem.

  A uniao e derivada do array, nao o contrario. Na direcao inversa —
  `export const CASE_ORDER: CaseId[]` — a anotacao aceitava array parcial:
  acrescentar um id a uniao e esquecer de inclui-lo na ordem compilava sem
  erro, e o case sumia da home em silencio. Derivando, nao ha o que esquecer.

  Modulo folha de proposito: nao importa nada. E isso que deixa o
  `vite.config.ts` le-lo dentro do Node para pre-renderizar as rotas, sem
  arrastar junto React nem os imports de imagem que so o bundler resolve.
*/

/** Ordem de exibicao na home e na lista de "mais cases". */
export const CASE_ORDER = ['tembici', 'miio', 'finvity'] as const;

/** Os cases publicados, derivados da ordem acima. */
export type CaseId = (typeof CASE_ORDER)[number];

/** Estreita uma string vinda da URL, que nao oferece garantia nenhuma. */
export function isCaseId(value: string | undefined): value is CaseId {
  return value !== undefined && CASE_ORDER.some((id) => id === value);
}
