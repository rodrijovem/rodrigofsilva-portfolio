import type { CaseId } from '../caseIds';

export type Lang = 'pt' | 'en';

/** Reexportado por conveniencia: a fonte e `src/caseIds.ts`. */
export type { CaseId };

export interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string[];
}

export interface CaseMeta {
  summary: string;
  role: string;
  readTime: string;
  impact: { label: string; text: string }[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    cta: string;
    resume: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    /** description/og/twitter: mais curta que o heroLead, escrita para o card de compartilhamento. */
    metaDescription: string;
    /** Tres numeros logo abaixo do hero: e o que o recrutador le em 5 segundos. */
    facts: { value: string; label: string }[];
    casesCta: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutText: string;
    aboutCta: string;
    contactEyebrow: string;
    contactTitle: string;
    contactLead: string;
    linkedinDesc: string;
    emailDesc: string;
    whatsappDesc: string;
  };
  footer: {
    role: string;
    rights: string;
  };
  /*
    O trabalho atual, que existe no site sem ter pagina: o projeto esta sob
    confidencialidade. Fica no fim da lista de cases, encostado no contato,
    porque e dali que a conversa comeca.
  */
  confidential: {
    context: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    downloadResume: string;
    introPara1: string;
    introPara2: string;
    introPara3: string;
    educationTitle: string;
    education: { title: string; location: string }[];
  };
  experience: {
    title: string;
    showMore: string;
    showLess: string;
  };
  cases: {
    impactOverview: string;
    summary: string;
    role: string;
    readTime: string;
    back: string;
    moreCases: string;
    readCase: string;
  };
  resumeFile: string;
  experiences: Experience[];
  caseDescriptions: Record<CaseId, string>;
  caseTitles: Record<CaseId, string>;
  /** Linha de contexto do card: setor, modelo de negocio e ano. */
  caseContext: Record<CaseId, string>;
  /** O numero que o card carrega, curto o bastante para ser lido de relance. */
  caseMeta: Record<CaseId, CaseMeta>;
  testimonialsTitle: string;
  testimonials: { content: string; name: string; role: string }[];
}
