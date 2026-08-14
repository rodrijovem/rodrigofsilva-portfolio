import { translations } from './i18n';
import type { CaseId, Lang } from './i18n';

import finvityThumb from '../images/finvityAI.webp';
import miioThumb from '../images/miioOne.webp';
import tembiciThumb from '../images/Tembici.webp';

/*
  Fonte unica dos cases. Antes esta lista existia duas vezes — uma na Home e
  outra no CaseStudy — e as copias ja tinham divergido: o mesmo case aparecia
  com anos diferentes nos dois arquivos. Nenhum dos dois campos chegava a ser
  renderizado, entao a divergencia passou despercebida.

  Titulo e descricao vem do i18n; aqui ficam so a ordem e as imagens, que nao
  dependem de idioma. Um case novo entra em CASE_ORDER, em thumbnails e no
  i18n — o resto se propaga.
*/

/** Ordem de exibicao na home e na lista de "mais cases". */
export const CASE_ORDER: CaseId[] = ['tembici', 'miio', 'finvity'];

const thumbnails: Record<CaseId, string> = {
  tembici: tembiciThumb,
  miio: miioThumb,
  finvity: finvityThumb,
};

/** Estreita uma string vinda da URL, que nao oferece garantia nenhuma. */
export function isCaseId(value: string | undefined): value is CaseId {
  return value !== undefined && value in thumbnails;
}

export interface CaseSummary {
  id: CaseId;
  title: string;
  description: string;
  thumbnail: string;
}

export function caseSummary(id: CaseId, lang: Lang): CaseSummary {
  const t = translations[lang];
  return {
    id,
    title: t.caseTitles[id],
    description: t.caseDescriptions[id],
    thumbnail: thumbnails[id],
  };
}

export function listCases(lang: Lang): CaseSummary[] {
  return CASE_ORDER.map((id) => caseSummary(id, lang));
}
