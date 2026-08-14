import type { Lang, Translations } from './types';
import { pt } from './pt';
import { en } from './en';

export type { Lang, CaseId, CaseMeta, Experience, Translations } from './types';

export const translations: Record<Lang, Translations> = { pt, en };
