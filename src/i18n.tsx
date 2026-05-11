import { ReactNode } from 'react';

export type Lang = 'pt' | 'en';

interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string[];
}

interface Translations {
  nav: {
    about: string;
    experience: string;
    cases: string;
    contact: string;
    cta: string;
  };
  hero: {
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    headline: (highlight: ReactNode) => ReactNode;
    metric1Value: string;
    metric1Label: string;
    metric2Value: string;
    metric2Label: string;
    bio1: string;
    bio2: string;
    cta: string;
  };
  experience: {
    title: string;
    showMore: string;
    showLess: string;
  };
  cases: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    footer: string;
  };
  experiences: Experience[];
  caseDescriptions: {
    finvity: string;
    miio: string;
    tembici: string;
  };
  caseTitles: {
    finvity: string;
    miio: string;
    tembici: string;
  };
}

export const translations: Record<Lang, Translations> = {
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Carreira',
      cases: 'Cases',
      contact: 'Contato',
      cta: 'Vamos conversar',
    },
    hero: {
      subtitle: 'Product Designer',
      description: 'Transformo contextos complexos em produtos digitais claros, escaláveis e orientados a resultado, trazendo UX, negócio e tecnologia para gerar impacto em operação, monetização e crescimento.',
      ctaPrimary: 'Ver meus projetos',
      ctaSecondary: 'Quem sou eu',
    },
    about: {
      headline: (highlight) => <>Também incorporo {highlight} para acelerar análise, ideação e prototipação, mantendo o foco em resolver o problema certo com critério e impacto mensurável.</>,
      metric1Value: '+6 anos',
      metric1Label: 'como Product Designer',
      metric2Value: '+16',
      metric2Label: 'Projetos entregues',
      bio1: 'Iniciei minha jornada no Design Gráfico e evoluí para UX e Produto. Hoje, atuo resolvendo problemas reais através de interfaces claras, ajudando empresas a escalar operações e melhorar sua monetização.',
      bio2: 'Acredito que o design não deve apenas ser esteticamente premium, mas precisa estar profundamente alinhado com as métricas do produto e as necessidades reais dos usuários.',
      cta: 'Vamos conversar',
    },
    experience: {
      title: 'Carreira',
      showMore: 'Ver mais experiências',
      showLess: 'Recolher',
    },
    cases: {
      title: 'Cases Selecionados',
      subtitle: 'Já trabalhei em projetos que ajudaram a eliminar prejuízo de R$1M/mês, reduzi onboarding em 31% e estruturei plataformas financeiras complexas.',
    },
    contact: {
      title: 'Vamos conversar.',
      subtitle: 'Aberto para novas oportunidades e projetos desafiadores.',
      footer: `© ${new Date().getFullYear()} Rodrigo Silva. Todos os direitos reservados.`,
    },
    experiences: [
      {
        period: "2025 - Atual",
        company: "FINVITY",
        role: "Product Designer",
        location: "Brasil - Remoto",
        description: [
          "Atuação no redesign completo da plataforma e do site institucional, com foco em clareza, eficiência e tomada de decisão em um sistema tributário complexo.",
          "Reestruturação de fluxos críticos, entrada de dados e visualização, reduzindo esforço manual e melhorando a consistência das análises patrimoniais.",
          "Utilizando inteligência artificial no processo de design e desenvolvimento, apoiado por um sistema de componentes baseado em Tailwind e Shadcn, acelerando a exploração de soluções e a entrega de interfaces.",
          "Contribui para a construção de uma base mais escalável e consistente, permitindo maior velocidade de evolução do produto em um domínio de alta complexidade."
        ]
      },
      {
        period: "2025 - 2025",
        company: "MIIO",
        role: "UX/UI Designer",
        location: "Portugal - Remoto",
        description: [
          "Melhorias no app B2C de carregamento de veículos elétricos, incluindo uma nova feature de conexão direta com o veículo. O projeto durante o período beta com +2.000 usuários, alcançando 4-5 estrelas de satisfação.",
          "Redução do tempo total do onboarding em 31% após mapear fricções, benchmark e reavaliar etapas críticas da jornada inicial.",
          "Reestruturando o Design System (tokens, componentes, documentação) junto ao time, melhorando consistência e velocidade de entrega.",
          "Handoffs contínuos com engenharia, garantindo alinhamento técnico, specs claras e redução de retrabalho durante o desenvolvimento."
        ]
      },
      {
        period: "2024 - 2025",
        company: "LEYVA",
        role: "Product Designer",
        location: "Brasil - Remoto",
        description: [
          "Redesenhei a plataforma da EMS Saúde, com o objetivo de elevar a taxa de conversão e tempo de retenção, elevando o tempo de sessão em 400%.",
          "Nesse projeto atuei desde o início como único designer do projeto, validando com stakeholders e garantindo alinhamento de produto.",
          "Conduzi entrevistas com nove médicos, benchmark internacional e análise das métricas atuais para embasar decisões críticas do redesign e direcionar a evolução do produto.",
          "Adaptei o Design System existente para a nova plataforma, garantindo consistência e escalabilidade."
        ]
      },
      {
        period: "2022 - 2024",
        company: "TEMBICI",
        role: "Product Designer",
        location: "Brasil - Híbrido",
        description: [
          "Atuei nos produtos B2C e B2B2C, conduzindo pesquisa, ideação, prototipação e testes em app e hardware (painel da nova bicicleta).",
          "Contribuí diretamente para eliminar um prejuízo de R$ 1M/mês, retirando entregadores do produto de lazer e melhorando o NPS.",
          "Participei da criação do Design System do zero, definindo tokens, componentes e padrões em parceria com engenharia."
        ]
      },
      {
        period: "2020 - 2022",
        company: "SMARTERS",
        role: "UX/UI Designer",
        location: "Brasil - Híbrido",
        description: [
          "Estruturei fluxos conversacionais completos para Elma Chips e Peugeot, em que o primeiro chegou a marca de 3 milhões de usuários com 82% de conversão de cadastro.",
          "Criei o chatbot da Peugeot e um sistema de gerenciamento de tickets para as concessionárias, o segundo sendo construído com Design System próprio, e sendo Whitelabel e SaaS.",
          "Reconhecido internamente pelas entregas, assumindo a liderança temporária do time de UX."
        ]
      },
      {
        period: "2012 - 2020",
        company: "OUTRAS EMPRESAS",
        role: "Designer Gráfico & Web Designer",
        location: "Brasil",
        description: [
          "Acrescento também outros 8 anos na carreira como Designer gráfico e Web Designer"
        ]
      }
    ],
    caseDescriptions: {
      finvity: "Redesign de uma plataforma SaaS para advogados e assessores, conectando cadastro, patrimônio, sucessão, riscos e inteligência tributária em fluxos mais claros, escaláveis e orientados à tomada de decisão.",
      miio: "Criação de uma experiência de monetização para mobilidade elétrica, integrando planos, benefícios, checkout, comunicações e momentos de uso para provar valor sem comprometer confiança.",
      tembici: "Criação e evolução de um produto para entregadores, convertendo um comportamento que pressionava a operação em um modelo dedicado, mais previsível e financeiramente sustentável.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Career',
      cases: 'Cases',
      contact: 'Contact',
      cta: "Let's talk",
    },
    hero: {
      subtitle: 'Product Designer',
      description: 'I transform complex contexts into clear, scalable, and result-oriented digital products, bringing UX, business, and technology together to drive impact in operations, monetization, and growth.',
      ctaPrimary: 'See my projects',
      ctaSecondary: 'Who am I',
    },
    about: {
      headline: (highlight) => <>I also incorporate {highlight} to accelerate analysis, ideation, and prototyping, keeping the focus on solving the right problem with criteria and measurable impact.</>,
      metric1Value: '+6 years',
      metric1Label: 'as Product Designer',
      metric2Value: '+16',
      metric2Label: 'Delivered projects',
      bio1: 'I started my journey in Graphic Design and evolved into UX and Product. Today, I solve real problems through clear interfaces, helping companies scale operations and improve their monetization.',
      bio2: 'I believe design should not only be aesthetically premium but must be deeply aligned with the product\'s metrics and users\' real needs.',
      cta: "Let's talk",
    },
    experience: {
      title: 'Career',
      showMore: 'See more experiences',
      showLess: 'Collapse',
    },
    cases: {
      title: 'Selected Cases',
      subtitle: "I've worked on projects that helped eliminate a R$1M/month deficit, reduced onboarding by 31%, and structured complex financial platforms.",
    },
    contact: {
      title: "Let's talk.",
      subtitle: 'Open to new opportunities and challenging projects.',
      footer: `© ${new Date().getFullYear()} Rodrigo Silva. All rights reserved.`,
    },
    experiences: [
      {
        period: "2025 - Present",
        company: "FINVITY",
        role: "Product Designer",
        location: "Brazil - Remote",
        description: [
          "Led the complete redesign of the platform and institutional website, focusing on clarity, efficiency, and decision-making in a complex tax system.",
          "Restructured critical flows, data entry, and visualization, reducing manual effort and improving consistency of asset analyses.",
          "Using artificial intelligence in the design and development process, supported by a component system based on Tailwind and Shadcn, accelerating solution exploration and interface delivery.",
          "Contributing to building a more scalable and consistent foundation, enabling faster product evolution in a domain of high complexity."
        ]
      },
      {
        period: "2025 - 2025",
        company: "MIIO",
        role: "UX/UI Designer",
        location: "Portugal - Remote",
        description: [
          "Improvements to the B2C electric vehicle charging app, including a new direct vehicle connection feature. The project during beta with 2,000+ users, achieving 4-5 star satisfaction.",
          "Reduced total onboarding time by 31% after mapping friction points, benchmarking, and re-evaluating critical steps in the initial journey.",
          "Restructuring the Design System (tokens, components, documentation) with the team, improving consistency and delivery speed.",
          "Continuous handoffs with engineering, ensuring technical alignment, clear specs, and reduced rework during development."
        ]
      },
      {
        period: "2024 - 2025",
        company: "LEYVA",
        role: "Product Designer",
        location: "Brazil - Remote",
        description: [
          "Redesigned the EMS Health platform, aiming to increase conversion rate and retention time, raising session time by 400%.",
          "Worked as the sole designer from day one, validating with stakeholders and ensuring product alignment.",
          "Conducted interviews with nine doctors, international benchmarking, and analysis of current metrics to support critical redesign decisions and guide product evolution.",
          "Adapted the existing Design System for the new platform, ensuring consistency and scalability."
        ]
      },
      {
        period: "2022 - 2024",
        company: "TEMBICI",
        role: "Product Designer",
        location: "Brazil - Hybrid",
        description: [
          "Worked on B2C and B2B2C products, conducting research, ideation, prototyping, and testing on app and hardware (new bicycle panel).",
          "Directly contributed to eliminating a R$1M/month deficit by separating delivery riders from the leisure product and improving NPS.",
          "Participated in creating the Design System from scratch, defining tokens, components, and standards in partnership with engineering."
        ]
      },
      {
        period: "2020 - 2022",
        company: "SMARTERS",
        role: "UX/UI Designer",
        location: "Brazil - Hybrid",
        description: [
          "Structured complete conversational flows for Elma Chips and Peugeot, where the first reached 3 million users with 82% registration conversion.",
          "Created the Peugeot chatbot and a ticket management system for dealerships, the latter built with its own Design System, being Whitelabel and SaaS.",
          "Internally recognized for deliveries, assuming temporary leadership of the UX team."
        ]
      },
      {
        period: "2012 - 2020",
        company: "OTHER COMPANIES",
        role: "Graphic Designer & Web Designer",
        location: "Brazil",
        description: [
          "I also add another 8 years in my career as a Graphic Designer and Web Designer"
        ]
      }
    ],
    caseDescriptions: {
      finvity: "Redesign of a SaaS platform for lawyers and advisors, connecting registration, wealth, succession, risks, and tax intelligence into clearer, scalable, and decision-oriented flows.",
      miio: "Creating a monetization experience for electric mobility, integrating plans, benefits, checkout, communications, and usage moments to prove value without compromising trust.",
      tembici: "Creation and evolution of a product for delivery riders, converting behavior that pressured the operation into a dedicated, more predictable, and financially sustainable model.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
    },
  }
};
