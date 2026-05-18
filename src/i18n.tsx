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
    metric1Value: number;
    metric1Suffix: string;
    metric1Label: string;
    metric2Value: number;
    metric2Suffix: string;
    metric2Label: string;
    bio1: string;
    bio2: string;
  };
  experience: {
    title: string;
    subtitle: string;
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
      description: 'Atuo em produtos SaaS, mobile e B2B/B2C, conectando UX, negócio e tecnologia para resolver problemas complexos com clareza, eficiência operacional e impacto mensurável.',
      ctaPrimary: 'Ver meus projetos',
      ctaSecondary: 'Quem sou eu',
    },
    about: {
      metric1Value: 6,
      metric1Suffix: ' anos',
      metric1Label: 'como Product Designer',
      metric2Value: 16,
      metric2Suffix: '',
      metric2Label: 'Projetos entregues',
      bio1: 'Sou Product Designer e comecei minha trajetória no Design Gráfico e no Web Design. Com o tempo, fui me aproximando de UX/UI até migrar para Produto, onde passei a atuar mais perto de estratégia, experiência e construção de soluções digitais.',
      bio2: 'Sou paulista e atualmente moro em Porto Alegre. Essa mudança de áreas ajudou a formar meu olhar para design: mais visual no início, mais funcional e orientado ao uso conforme minha carreira evoluiu.',
    },
    experience: {
      title: 'Carreira',
      subtitle: 'Minha carreira em Produto foi construída em diferentes tipos de negócio e complexidade: B2C, B2B, B2B2C, SaaS, mobile apps, dashboards e plataformas orientadas a dados. Atuei em jornadas de discovery a delivery, sempre buscando transformar contextos complexos em experiências mais claras, funcionais e conectadas a resultado. Nos últimos anos venho incorporando IA aos meus processos para acelerar análise, ideação e prototipação.',
      showMore: 'Ver mais experiências',
      showLess: 'Recolher',
    },
    cases: {
      title: 'Cases Selecionados',
      subtitle: 'Já trabalhei em projetos que ajudaram a eliminar prejuízo de R$1M/mês, reduzir onboarding em 31% e estruturar plataformas financeiras complexas orientadas à tomada de decisão.',
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
          "Atuo como Product Designer em uma plataforma SaaS de gestão patrimonial e sucessória para advogados, assessores financeiros e multi-family offices.",
          "• Estruturo fluxos complexos, dashboards, simulações e visualização de dados para apoiar decisões patrimoniais, sucessórias e tributárias.",
          "• Trabalho em módulos como patrimônio, evolução patrimonial, análise de riscos, sucessão, holding, inteligência tributária, relatórios, painel administrativo e gestão de clientes.",
          "• Transformo dados financeiros, familiares e patrimoniais em experiências mais claras, escaláveis e orientadas à tomada de decisão.",
          "• Colaboro próximo à engenharia na definição de soluções, componentes e fluxos, com foco em consistência, acessibilidade, eficiência operacional e evolução contínua do produto.",
          "• Também contribuí para a evolução da identidade visual da Finvity e para o redesenho do site institucional, alinhando a percepção externa da marca à sofisticação do produto."
        ]
      },
      {
        period: "2025 - 2025",
        company: "MIIO",
        role: "UX/UI Designer",
        location: "Portugal - Remoto",
        description: [
          "Atuei no design de um app B2C de mobilidade elétrica, com foco em experiência mobile, onboarding, assinatura, checkout, integração com veículo e otimização da jornada do usuário.",
          "• Reduzi o tempo de onboarding em 31% ao identificar fricções críticas e reestruturar o fluxo inicial com base em dados, benchmark e testes.",
          "• Desenhei uma feature de conexão direta com o veículo, validada por +2.000 usuários em fase beta, com avaliação entre 4 e 5 estrelas.",
          "• Estruturei fluxos de monetização e assinatura, conectando benefícios, trial, pagamento, estados de erro, recuperação de assinatura e descontos no checkout.",
          "• Trabalhei em experiências de data visualization, consumo, eficiência, carregamento e insights para ajudar usuários a entenderem melhor seus custos e comportamento de uso.",
          "• Contribuí para a evolução do Design System, incluindo tokens, componentes, variações de estado e documentação para handoff com engenharia."
        ]
      },
      {
        period: "2024 - 2025",
        company: "Levva",
        role: "Product Designer",
        location: "Brasil - Remoto",
        description: [
          "Atuei no redesign de uma plataforma digital de saúde, com foco em clareza da experiência, retenção, conversão e aumento de engajamento.",
          "• Conduzi entrevistas com médicos, benchmark internacional e análise de métricas para identificar oportunidades e direcionar decisões estratégicas do produto.",
          "• Redesenhei jornadas e interfaces críticas, melhorando a organização da informação e reduzindo fricções na navegação da plataforma.",
          "• O redesign contribuiu para um aumento de 400% no tempo médio de permanência, indicando maior engajamento e aderência à experiência.",
          "• Atuei próximo a Produto, Engenharia e stakeholders para alinhar decisões, priorizar melhorias e garantir consistência entre discovery e delivery.",
          "• Também contribuí para a adaptação e evolução do Design System, fortalecendo consistência visual e escalabilidade da interface."
        ]
      },
      {
        period: "2022 - 2024",
        company: "TEMBICI",
        role: "Product Designer",
        location: "Brasil - Híbrido",
        description: [
          "Atuei em produtos B2C e B2B2C de mobilidade, trabalhando em app mobile, hardware, operação física e experiência de usuários recorrentes.",
          "• Participei da reestruturação de um produto para entregadores em parceria com iFood, ajudando a transformar um uso problemático em uma operação mais sustentável.",
          "• Contribuí para eliminar um prejuízo de aproximadamente R$1M/mês e atingir breakeven em cerca de 10 meses, equilibrando necessidades de negócio, operação e usuário.",
          "• Atuei em discovery, mapeamento de jornada, ideação, prototipação, testes de usabilidade, validação contínua e acompanhamento de métricas.",
          "• Desenhei fluxos de cadastro, validação de telefone, documentação, endereço, pagamento, agendamento, check-in, QR Code e retirada de bicicleta.",
          "• Colaborei com Produto, Engenharia e Operações, além de participar da criação do Design System do zero para aumentar consistência e velocidade de entrega."
        ]
      },
      {
        period: "2020 - 2022",
        company: "SMARTERS",
        role: "UX/UI Designer",
        location: "Brasil - Híbrido",
        description: [
          "Atuei no design de soluções conversacionais e produtos digitais para grandes marcas, incluindo Elma Chips e Peugeot.",
          "• Estruturei fluxos completos de chatbot, incluindo onboarding, captura de leads, campanhas promocionais, mensagens transacionais e jornadas automatizadas.",
          "• Um dos projetos alcançou 3 milhões de usuários e 82% de conversão de cadastro em uma campanha promocional.",
          "• Desenhei um sistema white-label de gestão de tickets para concessionárias, estruturado como produto SaaS com Design System próprio.",
          "• Atuei com pesquisa, arquitetura de fluxos, prototipação, testes A/B, UI design e handoff para desenvolvimento.",
          "• Também contribuí para a organização de bibliotecas no Figma e padronização de componentes para acelerar entregas recorrentes."
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
      finvity: "Redesenho de uma plataforma SaaS para gestão patrimonial, sucessória e tributária, conectando fluxos, dados, simulações e relatórios em uma experiência mais clara, consistente e escalável.",
      miio: "Criação de uma experiência de monetização para um app de mobilidade elétrica, integrando economia, conectividade, checkout e comunicação em momentos reais da jornada do usuário.",
      tembici: "Criação e evolução de um produto para entregadores, validando um novo modelo operacional e digital que ajudou a reduzir prejuízo, melhorar previsibilidade e atingir breakeven em cerca de 10 meses.",
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
      description: 'I work on SaaS, mobile, and B2B/B2C products, connecting UX, business, and technology to solve complex problems with clarity, operational efficiency, and measurable impact.',
      ctaPrimary: 'See my projects',
      ctaSecondary: 'Who am I',
    },
    about: {
      metric1Value: 6,
      metric1Suffix: ' years',
      metric1Label: 'as Product Designer',
      metric2Value: 16,
      metric2Suffix: '',
      metric2Label: 'Delivered projects',
      bio1: 'I am a Product Designer and started my journey in Graphic Design and Web Design. Over time, I got closer to UX/UI until I migrated to Product, where I started to work closer to strategy, experience, and the construction of digital solutions.',
      bio2: 'I am from São Paulo and currently live in Porto Alegre. This shift in areas helped shape my view on design: more visual at the beginning, more functional and use-oriented as my career evolved.',
    },
    experience: {
      title: 'Career',
      subtitle: 'My career in Product was built across different types of businesses and complexities: B2C, B2B, B2B2C, SaaS, mobile apps, dashboards, and data-driven platforms. I have worked on journeys from discovery to delivery, always seeking to transform complex contexts into clearer, more functional, and results-oriented experiences. In recent years, I have been incorporating AI into my processes to accelerate analysis, ideation, and prototyping.',
      showMore: 'See more experiences',
      showLess: 'Collapse',
    },
    cases: {
      title: 'Selected Cases',
      subtitle: "I've worked on projects that helped eliminate a R$1M/month deficit, reduce onboarding by 31%, and structure complex financial platforms geared towards decision-making.",
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
          "I work as a Product Designer on a SaaS platform for wealth and succession planning, designed for lawyers, financial advisors, and multi-family offices.",
          "• I structure complex flows, dashboards, simulations, and data visualization experiences to support wealth, succession, and tax-related decision-making.",
          "• I work on modules such as assets, wealth evolution, risk analysis, succession, holding structures, tax intelligence, reports, admin panels, and client management.",
          "• I turn financial, family, and wealth data into clearer, more scalable, and decision-oriented product experiences.",
          "• I collaborate closely with engineering to define scalable solutions, components, and flows, with a focus on consistency, accessibility, operational efficiency, and continuous product evolution.",
          "• I also contributed to the evolution of Finvity’s visual identity and the redesign of its institutional website, aligning the brand perception with the sophistication of the product."
        ]
      },
      {
        period: "2025 - 2025",
        company: "MIIO",
        role: "UX/UI Designer",
        location: "Portugal - Remote",
        description: [
          "I worked on the design of a B2C electric mobility app, focused on mobile experience, onboarding, subscription flows, checkout, vehicle integration, and user journey optimization.",
          "• Reduced onboarding time by 31% by identifying critical friction points and restructuring the initial flow based on data, benchmarking, and testing.",
          "• Designed a vehicle-connected mobile feature, validated by 2,000+ beta users, with ratings between 4 and 5 stars.",
          "• Structured monetization and subscription flows, connecting benefits, trial experience, payment, error states, subscription recovery, and checkout discounts.",
          "• Worked on data visualization experiences related to consumption, efficiency, charging, and insights to help users better understand their costs and usage behavior.",
          "• Contributed to the evolution of the Design System, including tokens, components, state variations, and documentation for engineering handoff."
        ]
      },
      {
        period: "2024 - 2025",
        company: "Levva",
        role: "Product Designer",
        location: "Brazil - Remote",
        description: [
          "I worked on the redesign of a digital healthcare platform, focused on experience clarity, retention, conversion, and user engagement.",
          "• Conducted interviews with doctors, international benchmarking, and metrics analysis to identify opportunities and guide strategic product decisions.",
          "• Redesigned critical journeys and interfaces, improving information organization and reducing friction across the platform.",
          "• The redesign contributed to a 400% increase in average session time, indicating stronger engagement and better product adherence.",
          "• Worked closely with Product, Engineering, and stakeholders to align decisions, prioritize improvements, and ensure consistency from discovery to delivery.",
          "• Also contributed to the adaptation and evolution of the Design System, strengthening visual consistency and interface scalability."
        ]
      },
      {
        period: "2022 - 2024",
        company: "TEMBICI",
        role: "Product Designer",
        location: "Brazil - Hybrid",
        description: [
          "I worked on B2C and B2B2C mobility products, covering mobile apps, hardware, physical operations, and the experience of recurring heavy users.",
          "• Contributed to the restructuring of a product for delivery workers in partnership with iFood, helping turn a problematic usage pattern into a more sustainable operation.",
          "• Helped eliminate an approximately R$1M/month loss and reach breakeven in around 10 months, balancing business, operational, and user needs.",
          "• Worked across discovery, journey mapping, ideation, prototyping, usability testing, continuous validation, and metrics tracking.",
          "• Designed flows for registration, phone validation, documentation, address submission, payment, scheduling, check-in, QR Code, and bike pickup.",
          "• Collaborated with Product, Engineering, and Operations, and also contributed to building the Design System from scratch to improve consistency and delivery speed."
        ]
      },
      {
        period: "2020 - 2022",
        company: "SMARTERS",
        role: "UX/UI Designer",
        location: "Brazil - Hybrid",
        description: [
          "I worked on conversational design solutions and digital products for major brands, including Elma Chips and Peugeot.",
          "• Structured complete chatbot flows, including onboarding, lead capture, promotional campaigns, transactional messages, and automated journeys.",
          "• One of the projects reached 3 million users and achieved an 82% sign-up conversion rate in a promotional campaign.",
          "• Designed a white-label ticket management system for car dealerships, structured as a SaaS product with its own Design System.",
          "• Worked across research, flow architecture, prototyping, A/B testing, UI design, and development handoff.",
          "• Also contributed to organizing Figma libraries and standardizing components to speed up recurring deliveries."
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
      finvity: "Redesign of a SaaS platform for wealth, succession, and tax management, connecting flows, data, simulations, and reports into a clearer, more consistent, and scalable experience.",
      miio: "Creation of a monetization experience for an electric mobility app, integrating savings, connectivity, checkout, and communication in real moments of the user's journey.",
      tembici: "Creation and evolution of a product for delivery riders, validating a new operational and digital model that helped reduce deficit, improve predictability, and reach breakeven in about 10 months.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
    },
  }
};
