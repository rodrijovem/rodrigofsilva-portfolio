import { translations } from './i18n';
import type { Lang } from './i18n';
import { CASE_ORDER } from './caseIds';
import type { CaseId } from './caseIds';

import finvityThumb from '../images/finvityAI.webp';
import miioThumb from '../images/miioOne.webp';
import tembiciThumb from '../images/Tembici.webp';

/*
  Fonte unica dos cases. Antes esta lista existia duas vezes — uma na Home e
  outra no CaseStudy — e as copias ja tinham divergido: o mesmo case aparecia
  com anos diferentes nos dois arquivos. Nenhum dos dois campos chegava a ser
  renderizado, entao a divergencia passou despercebida.

  Titulo e descricao vem do i18n; aqui ficam so as imagens, que nao dependem
  de idioma. A ordem e a lista de ids moraram aqui ate virarem `caseIds.ts`,
  que o build tambem le. Um case novo entra la, em thumbnails e no i18n — o
  resto se propaga, e cada um destes tres quebra o build se ficar para tras.
*/

export { CASE_ORDER, isCaseId } from './caseIds';
export type { CaseId } from './caseIds';

const thumbnails: Record<CaseId, string> = {
  tembici: tembiciThumb,
  miio: miioThumb,
  finvity: finvityThumb,
};

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
