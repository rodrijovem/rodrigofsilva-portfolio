import type { ReactNode } from 'react';
import { translations } from './i18n';
import type { CaseId, CaseMeta, Lang } from './i18n';
import { getFinvityContent } from './content/finvity';
import { getMiioContent } from './content/miio';
import { getTembiciContent } from './content/tembici';

import finHero from '../images/Finvity/finHeader.webp';
import miioHero from '../images/miioOne.webp';
import temHero from '../images/tembici/temHeader.webp';

/*
  Separado de `cases.ts` de proposito: este modulo puxa `caseContent`, que
  carrega a prosa e as imagens dos tres cases. A home so precisa da lista, e
  importar isto la traria o conteudo inteiro junto para a primeira tela.
*/

type CaseDetailAssets = {
  hero: string;
  content: (lang: Lang) => ReactNode;
};

const details: Record<CaseId, CaseDetailAssets> = {
  tembici: { hero: temHero, content: getTembiciContent },
  miio: { hero: miioHero, content: getMiioContent },
  finvity: { hero: finHero, content: getFinvityContent },
};

export type CaseDetail = CaseMeta & {
  title: string;
  heroImage: string;
  content: ReactNode;
};

export function caseDetail(id: CaseId, lang: Lang): CaseDetail {
  const t = translations[lang];
  return {
    title: t.caseTitles[id],
    ...t.caseMeta[id],
    heroImage: details[id].hero,
    content: details[id].content(lang),
  };
}
