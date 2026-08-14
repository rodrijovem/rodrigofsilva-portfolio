import { describe, expect, it } from 'vitest';
import { CASE_ORDER, isCaseId } from './caseIds';
import { caseSummary, listCases } from './cases';
import { translations } from './i18n';

/*
  `isCaseId` e o unico ponto que separa a URL — string sem garantia nenhuma —
  do resto do codigo, que trata `CaseId` como certo. Se ele deixar passar algo,
  todo `Record<CaseId, …>` mais adiante indexa em undefined.
*/
describe('isCaseId', () => {
  it('aceita os cases publicados', () => {
    for (const id of CASE_ORDER) {
      expect(isCaseId(id)).toBe(true);
    }
  });

  it('recusa id desconhecido', () => {
    expect(isCaseId('finvityy')).toBe(false);
  });

  it('recusa undefined — rota sem parametro', () => {
    expect(isCaseId(undefined)).toBe(false);
  });

  it('nao se deixa enganar por propriedade herdada de Object', () => {
    expect(isCaseId('toString')).toBe(false);
    expect(isCaseId('constructor')).toBe(false);
  });
});

describe('listCases', () => {
  it('respeita a ordem declarada em CASE_ORDER', () => {
    expect(listCases('pt').map((c) => c.id)).toEqual([...CASE_ORDER]);
  });

  it('traduz titulo e descricao, e mantem a thumbnail entre idiomas', () => {
    const pt = caseSummary('tembici', 'pt');
    const en = caseSummary('tembici', 'en');

    expect(pt.title).toBe(translations.pt.caseTitles.tembici);
    expect(en.title).toBe(translations.en.caseTitles.tembici);
    expect(pt.thumbnail).toBe(en.thumbnail);
  });

  it('todo case tem titulo e descricao nos dois idiomas', () => {
    for (const lang of ['pt', 'en'] as const) {
      for (const summary of listCases(lang)) {
        expect(summary.title.length).toBeGreaterThan(0);
        expect(summary.description.length).toBeGreaterThan(0);
      }
    }
  });
});
