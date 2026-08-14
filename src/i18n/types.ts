export type Lang = 'pt' | 'en';

/** Os cases publicados. A ordem de exibicao vive em `src/cases.ts`. */
export type CaseId = 'tembici' | 'miio' | 'finvity';

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
    heroTitle1: string;
    heroTitle2: string;
    heroDescription: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutDescription: string;
    aboutYears: string;
    aboutMetric1Label: string;
    aboutMetric2Label: string;
    aboutCta: string;
    casesTitle: string;
    casesDescription: string;
    casesCta: string;
    contactTitle1: string;
    contactTitle2: string;
    contactDescription1: string;
    contactDescription2: string;
    linkedinDesc: string;
    emailDesc: string;
    whatsappDesc: string;
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
  caseMeta: Record<CaseId, CaseMeta>;
  testimonialsTitle: string;
  /* Sem atribuicao por enquanto: os campos de autor existiam mas nunca eram
     renderizados. Voltam quando o card mostrar quem assina. */
  testimonials: { content: string }[];
}
