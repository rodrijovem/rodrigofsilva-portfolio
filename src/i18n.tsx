import curriculoFile from '../files/Curriculo.pdf';
import resumeFile from '../files/Resume.pdf';

export type Lang = 'pt' | 'en';

interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string[];
}

interface CaseMeta {
  summary: string;
  role: string;
  readTime: string;
  impact: { label: string; text: string }[];
}

interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    cases: string;
    contact: string;
    cta: string;
    resume: string;
  };
  hero: {
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    metric1Value: number;
    metric1Suffix: string;
    metric1Label: string;
    metric2Value: number;
    metric2Suffix: string;
    metric2Label: string;
    bio1: string;
    bio2: string;
    downloadResume: string;
    introPara1: string;
    introPara2: string;
    introPara3: string;
    educationTitle: string;
    education: { title: string; location: string; }[];
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
    impactOverview: string;
    summary: string;
    role: string;
    readTime: string;
    back: string;
    moreCases: string;
    readCase: string;
  };
  contact: {
    title: string;
    subtitle: string;
    footer: string;
  };
  resumeFile: string;
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
  caseMeta: {
    finvity: CaseMeta;
    miio: CaseMeta;
    tembici: CaseMeta;
  };
  testimonialsTitle: string;
  testimonials: {
    content: string;
    initial: string;
    name: string;
    role: string;
  }[];
}

export const translations: Record<Lang, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Carreira',
      cases: 'Cases',
      contact: 'Contato',
      cta: 'Vamos conversar',
      resume: 'Currículo',
    },
    hero: {
      subtitle: 'Product Designer',
      description: 'Atuo em produtos SaaS, mobile e B2B/B2C, conectando UX, negócio e tecnologia para resolver problemas complexos com clareza, eficiência operacional e impacto mensurável.',
      ctaPrimary: 'Ver meus projetos',
      ctaSecondary: 'Quem sou eu',
    },
    home: {
      heroTitle1: 'Oi, eu sou o Rodrigo.',
      heroTitle2: 'Product Designer.',
      heroDescription: 'Com 13 anos de experiência em design e atuação em produtos digitais para fintech, mobilidade e plataforma B2B/B2C.',
      aboutTitle: 'Um pouco sobre mim',
      aboutSubtitle: 'Sou paulista e atualmente moro em Porto Alegre.',
      aboutDescription: 'Atualmente Product Designer mas comecei minha trajetória no Design Gráfico e no Web Design. Com o tempo, fui me aproximando de UX/UI até migrar para Produto, onde passei a atuar mais perto de estratégia, experiência e construção de soluções digitais.',
      aboutYears: 'anos',
      aboutMetric1Label: 'Em design',
      aboutMetric2Label: 'Como Product Designer',
      aboutCta: 'Conheça mais sobre mim',
      casesTitle: 'Projetos selecionados',
      casesDescription: 'Minha carreira em Produto foi construída em diferentes tipos de negócio e complexidade: B2C, B2B, B2B2C, SaaS, mobile apps e plataformas orientadas a dados.',
      casesCta: 'Ler estudo de caso',
      contactTitle1: 'Vamos construir',
      contactTitle2: 'algo incrível juntos.',
      contactDescription1: 'Estou sempre aberto a conversar sobre novos projetos, oportunidades em Produto ou apenas trocar ideias sobre design e tecnologia.',
      contactDescription2: 'Sinta-se à vontade para me chamar nos canais ao lado.',
      linkedinDesc: 'Conexões e networking',
      emailDesc: 'Assuntos detalhados',
      whatsappDesc: 'Mensagens diretas',
    },
    about: {
      metric1Value: 13,
      metric1Suffix: ' anos',
      metric1Label: 'em design',
      metric2Value: 6,
      metric2Suffix: ' anos',
      metric2Label: 'como Product Designer',
      bio1: 'Sou Product Designer e comecei minha trajetória no Design Gráfico e no Web Design. Com o tempo, fui me aproximando de UX/UI até migrar para Produto, onde passei a atuar mais perto de estratégia, experiência e construção de soluções digitais.',
      bio2: 'Sou paulista e atualmente moro em Porto Alegre. Essa mudança de áreas ajudou a formar meu olhar para design: mais visual no início, mais funcional e orientado ao uso conforme minha carreira evoluiu.',
      downloadResume: 'Baixar currículo',
      introPara1: 'Minha trajetória começou no design visual e evoluiu para produto quando percebi que não queria apenas criar interfaces melhores, mas entender por que certos produtos funcionam, onde usuários travam e como decisões de design afetam negócio, operação e comportamento.',
      introPara2: 'Hoje atuo melhor quando consigo conectar visão estratégica e execução: entender o problema com profundidade, estruturar caminhos possíveis, testar hipóteses, colaborar com times técnicos e transformar decisões abstratas em experiências concretas.',
      introPara3: 'O tipo de desafio que mais me interessa é construir produtos que ajudem pessoas e empresas a tomar decisões melhores, operar com menos atrito e evoluir com mais inteligência. Tenho usado inteligência artificial como parte desse processo para acelerar análise, exploração e prototipação, sem abrir mão do pensamento crítico sobre usuário, produto e impacto.',
      educationTitle: 'Educação',
      education: [
        { title: 'Avançado de Design System', location: 'Escala, Brasil' },
        { title: 'UX Design', location: 'Google, Brasil' },
        { title: 'UX/UI Design', location: 'Alura, Brasil' },
        { title: 'Design de produto', location: 'Instituto Mauá de Tecnologia, Brasil' }
      ]
    },
    experience: {
      title: 'Carreira',
      subtitle: 'Minha carreira em Produto foi construída em diferentes tipos de negócio e complexidade: B2C, B2B, B2B2C, SaaS, mobile apps, dashboards e plataformas orientadas a dados. Atuei em jornadas de discovery a delivery, sempre buscando transformar contextos complexos em experiências mais claras, funcionais e conectadas a resultado. Nos últimos anos venho incorporando IA aos meus processos para acelerar análise, ideação e prototipação.',
      showMore: 'Ver mais experiências',
      showLess: 'Recolher',
    },
    cases: {
      title: 'Cases Selecionados',
      subtitle: 'Projetos que economizaram ~R$1M/mês em operação, converteram 2.000 assinantes em um app que era gratuito e derrubaram em 60% as dúvidas que chegavam ao suporte de uma plataforma financeira.',
      impactOverview: 'Visão Geral do Impacto',
      summary: 'Resumo',
      role: 'Minha participação',
      readTime: 'Tempo de leitura',
      back: 'Voltar',
      moreCases: 'Mais cases',
      readCase: 'Ler estudo de caso',
    },
    contact: {
      title: 'Vamos conversar.',
      subtitle: 'Aberto para novas oportunidades e projetos desafiadores.',
      footer: `© ${new Date().getFullYear()} Rodrigo Silva. Todos os direitos reservados.`,
    },
    resumeFile: curriculoFile,
    experiences: [
      {
        period: "2025 - Atual",
        company: "FINVITY",
        role: "Product Designer",
        location: "Brasil - Remoto",
        description: [
          "Atuo como Product Designer em uma plataforma de gestão patrimonial e sucessória para advogados, assessores financeiros e multi-family offices.",
          "• Estruturo fluxos complexos, dashboards, simulações e visualização de dados para apoiar decisões patrimoniais, sucessórias e tributárias.",
          "• Trabalho em módulos como patrimônio, evolução patrimonial, análise de riscos, sucessão, holding, inteligência tributária, relatórios, painel administrativo e gestão de clientes.",
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
          "• Fui responsável por um novo produto para entregadores em parceria com iFood, contribuindo para eliminar um prejuízo de aproximadamente R$1M/mês e atingindo breakeven em cerca de 10 meses, equilibrando necessidades de negócio, operação e usuário.",
          "• Atuei em discovery, mapeamento de jornada, ideação, prototipação, testes de usabilidade, validação contínua e acompanhamento de métricas.",
          "• Desenhei fluxos de cadastro, validação de telefone, documentação, endereço, pagamento, agendamento, check-in, QR Code e retirada de bicicleta.",
          "• Também participei da criação do Design System do zero para aumentar consistência e velocidade de entrega."
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
          "• Atuei com pesquisa, arquitetura de fluxos, prototipação, testes A/B, UI design a handoff para desenvolvimento.",
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
      finvity: "Único designer de uma plataforma de gestão patrimonial e sucessória usada por um dos maiores bancos do Brasil. Redesenhei produto, marca e site — e as dúvidas que chegavam ao suporte caíram 60%.",
      miio: "O app de recarga elétrica era grátis e a liderança queria um paywall. Argumentei contra, com dados — e a assinatura, apresentada dentro do uso real, fechou 2.000 assinantes no beta.",
      tembici: "Entregadores e ciclistas casuais disputavam a mesma bicicleta — e quem pagava a conta era a manutenção. Separar as frotas economizou ~R$1M/mês e levou a operação ao breakeven em 10 meses.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
    },
    caseMeta: {
      tembici: {
        summary: "Entregadores usavam a bicicleta 4 horas por dia; ciclistas casuais, 20 minutos por semana. Mesma frota, mesma estação, mesmo sistema — e uma conta de manutenção que não fechava. Separei as duas operações e desenhei a jornada que tornou a nova possível sem planilha.",
        role: "Único Product Designer do time. Conduzi a pesquisa (50+ respostas quantitativas e 9 entrevistas), o workshop que definiu a estratégia e o desenho da jornada ponta a ponta.",
        readTime: "5 min",
        impact: [
          { label: "Custo operacional", text: "~R$1M/mês economizados em manutenção, retirada e reposição de bicicletas — média dos 6 primeiros meses do produto." },
          { label: "Manutenção", text: "Queda de 72% nos problemas de bateria descarregada, pneu furado e banco quebrado." },
          { label: "Sustentabilidade", text: "Breakeven da operação em cerca de 10 meses." }
        ]
      },
      miio: {
        summary: "Um app de recarga de veículos elétricos, grátis, precisava começar a cobrar de uma base que compara preço de kWh centavo a centavo. A liderança queria paywall. Levei um estudo mostrando por que não funcionaria e desenhei o caminho oposto — o plano aparecendo onde o benefício era demonstrável.",
        role: "Product Designer nos fluxos de assinatura, checkout, onboarding e conexão com veículo. Produto sediado em Portugal — atuei do Brasil, no fuso de Lisboa.",
        readTime: "4 min",
        impact: [
          { label: "Assinantes", text: "2.000 pessoas assinaram o plano depois de passar pelo beta." },
          { label: "Cadastro", text: "Tempo da jornada de cadastro 31% menor, medido por Google Analytics em teste A/B." },
          { label: "Modelo", text: "Monetização apresentada em contexto de uso, não como bloqueio — decisão defendida contra a proposta de paywall da liderança." }
        ]
      },
      finvity: {
        summary: "Único designer de uma plataforma SaaS de gestão patrimonial, sucessória e tributária, respondendo direto ao CEO. Redesenhei o produto, a identidade visual e o site institucional — e as dúvidas que chegavam ao suporte caíram 60%.",
        role: "Único Product Designer da empresa, reportando ao CEO. Produto, identidade visual e site institucional.",
        readTime: "4 min",
        impact: [
          { label: "Suporte", text: "60% menos dúvidas chegando ao suporte após o redesign — incluindo as que vinham pelo maior cliente da plataforma, um dos maiores bancos do Brasil." },
          { label: "Escopo", text: "Único designer da empresa: produto, marca e site institucional passavam por mim." },
          { label: "Processo", text: "Protótipos de alta fidelidade gerados com IA — Google Stitch com design.md, depois Claude via MCP — para testar caminhos antes de construir." }
        ]
      }
    },
    testimonialsTitle: "Como é trabalhar comigo!",
    testimonials: [
      {
        content: '"Tive a oportunidade de trabalhar com o Rodrigo pela Levva em um projeto extremamente desafiador. E trabalhar com ele foi muito leve e tranquilo. Pois, ele é um profissional altamente dedicado e comprometido, entregando o seu melhor no produto. Todas as demandas direcionadas a ele eram realizadas de forma clara e com a preocupação não somente com o visual de designer, mas também com a experiência do usuário e com as expectativas dos stakeholders. Espero que possamos trabalhar novamente. Você é um talento!"',
        initial: 'J',
        name: 'Jaqueline Figueiredo',
        role: 'Product Manager'
      },
      {
        content: '"Trabalhei com o Ro no time de design da Tembici por quase dois anos! Ele sempre se destacou pelo alto conhecimento técnico sobre prototipação, componentização, animação, ferramentas e plugins do figma. Nos ajudou com a construção do Design System da Tembici e também trazia boas ideias para soluções não convencionais."',
        initial: 'D',
        name: 'Daniela Narumi',
        role: 'Product Designer'
      },
      {
        content: '"Trabalhar com o Ro na Tembici foi ótimo, ele está sempre buscando uma abordagem positiva e aberta diante dos desafios. Possui um amplo conhecimento em prototipação, além de uma notável habilidade em navegar pelo Figma. Sua disposição para ajudar a equipe é evidente, e ele sempre demonstrou grande boa vontade em colaborar e em ensinar o que sabe para seus pares. Quando o Ro se envolve em um projeto que o motiva, ele entrega seu melhor, fazendo com que seus olhos brilhem com entusiasmo. Agradeço pelas trocas e pelo tempo que compartilhamos trabalhando juntos!"',
        initial: 'P',
        name: 'Paula Dantas',
        role: 'Head of Product Design'
      },
      {
        content: '"O Rodrigo é um UX Designer extraordinário que tem sido nada menos que incrível. 🌟 Seu domínio do Figma, fluxos de chatbot e UX em geral ficou evidente no tempo em que trabalhamos juntos. Como UX Writer, eu não poderia ter pedido um mentor e amigo melhor para me guiar pelas complexidades do design naquela época. Ele tem o dom de ensinar, sempre disposto a compartilhar seu conhecimento e ajudar os outros a evoluírem suas habilidades. Então, se você tiver a chance de trabalhar com o Rodrigo, agarre-a!"',
        initial: 'D',
        name: 'Domi Rocha',
        role: 'Content Designer'
      }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Career',
      cases: 'Cases',
      contact: 'Contact',
      cta: "Let's talk",
      resume: 'Resume',
    },
    hero: {
      subtitle: 'Product Designer',
      description: 'I work on SaaS, mobile, and B2B/B2C products, connecting UX, business, and technology to solve complex problems with clarity, operational efficiency, and measurable impact.',
      ctaPrimary: 'View my projects',
      ctaSecondary: 'Who am I',
    },
    home: {
      heroTitle1: 'Hi, I am Rodrigo.',
      heroTitle2: 'Product Designer.',
      heroDescription: 'With 13 years of experience in design and working on digital products for fintech, mobility, and B2B/B2C platforms.',
      aboutTitle: 'A little about me',
      aboutSubtitle: 'I am from São Paulo and currently live in Porto Alegre.',
      aboutDescription: 'Currently a Product Designer but I started my journey in Graphic Design and Web Design. Over time, I got closer to UX/UI until I migrated to Product, where I started working closer to strategy, experience, and building digital solutions.',
      aboutYears: 'years',
      aboutMetric1Label: 'In design',
      aboutMetric2Label: 'As a Product Designer',
      aboutCta: 'Learn more about me',
      casesTitle: 'Selected projects',
      casesDescription: 'My career in Product was built across different types of business and complexity: B2C, B2B, B2B2C, SaaS, mobile apps, and data-driven platforms.',
      casesCta: 'Read case study',
      contactTitle1: "Let's build",
      contactTitle2: 'something amazing together.',
      contactDescription1: 'I am always open to discussing new projects, opportunities in Product, or just exchanging ideas about design and technology.',
      contactDescription2: 'Feel free to reach out to me through the channels on the side.',
      linkedinDesc: 'Connections and networking',
      emailDesc: 'Detailed matters',
      whatsappDesc: 'Direct messages',
    },
    about: {
      metric1Value: 13,
      metric1Suffix: ' years',
      metric1Label: 'in design',
      metric2Value: 6,
      metric2Suffix: ' years',
      metric2Label: 'as Product Designer',
      bio1: 'I am a Product Designer and started my journey in Graphic Design and Web Design. Over time, I got closer to UX/UI until I migrated to Product, where I started to work closer to strategy, experience, and the construction of digital solutions.',
      bio2: 'I am from São Paulo and currently live in Porto Alegre. This shift in areas helped shape my view on design: more visual at the beginning, more functional and use-oriented as my career evolved.',
      downloadResume: 'Download resume',
      introPara1: 'My journey started in visual design and evolved into product when I realized I did not just want to create better interfaces, but understand why certain products work, where users get stuck, and how design decisions affect business, operations, and behavior.',
      introPara2: 'Today, I work best when I can connect strategic vision and execution: understanding the problem in depth, structuring possible paths, testing hypotheses, collaborating with technical teams, and transforming abstract decisions into concrete experiences.',
      introPara3: 'The type of challenge that interests me the most is building products that help people and companies make better decisions, operate with less friction, and evolve more intelligently. I have been using artificial intelligence as part of this process to accelerate analysis, exploration, and prototyping, without giving up critical thinking about the user, product, and impact.',
      educationTitle: 'Education',
      education: [
        { title: 'Advanced Design System', location: 'Escala, Brazil' },
        { title: 'UX Design', location: 'Google, Brazil' },
        { title: 'UX/UI Design', location: 'Alura, Brazil' },
        { title: 'Product Design', location: 'Instituto Mauá de Tecnologia, Brazil' }
      ]
    },
    experience: {
      title: 'Career',
      subtitle: 'My career in Product was built across different types of businesses and complexities: B2C, B2B, B2B2C, SaaS, mobile apps, dashboards, and data-driven platforms. I have worked on journeys from discovery to delivery, always seeking to transform complex contexts into clearer, more functional, and results-oriented experiences. In recent years, I have been incorporating AI into my processes to accelerate analysis, ideation, and prototyping.',
      showMore: 'See more experiences',
      showLess: 'Collapse',
    },
    cases: {
      title: 'Selected Cases',
      subtitle: "Projects that saved ~R$1M/month in operations, converted 2,000 subscribers in an app that used to be free, and cut support questions by 60% on a financial platform.",
      impactOverview: 'Impact Overview',
      summary: 'Summary',
      role: 'My Role',
      readTime: 'Reading Time',
      back: 'Back',
      moreCases: 'More cases',
      readCase: 'Read case study',
    },
    contact: {
      title: "Let's talk.",
      subtitle: 'Open to new opportunities and challenging projects.',
      footer: `© ${new Date().getFullYear()} Rodrigo Silva. All rights reserved.`,
    },
    resumeFile: resumeFile,
    experiences: [
      {
        period: "2025 - Present",
        company: "FINVITY",
        role: "Product Designer",
        location: "Brazil - Remote",
        description: [
          "I work as a Product Designer on a platform for wealth and succession planning, designed for lawyers, financial advisors, and multi-family offices.",
          "• I structure complex flows, dashboards, simulations, and data visualization experiences to support wealth, succession, and tax-related decision-making.",
          "• I work on modules such as assets, wealth evolution, risk analysis, succession, holding structures, tax intelligence, reports, admin panels, and client management.",
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
          "• I was responsible for a new product for delivery workers in partnership with iFood, helping to eliminate a loss of approximately R$1M/month and reach breakeven in around 10 months, balancing business, operational, and user needs.",
          "• Worked across discovery, journey mapping, ideation, prototyping, usability testing, continuous validation, and metrics tracking.",
          "• Designed flows for registration, phone validation, documentation, address submission, payment, scheduling, check-in, QR Code, and bike pickup.",
          "• Also participated in the creation of the Design System from scratch to improve consistency and delivery speed."
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
      finvity: "Sole designer of a wealth and succession management platform used by one of Brazil's largest banks. I redesigned the product, the brand, and the website — and support questions dropped 60%.",
      miio: "The EV charging app was free and leadership wanted a paywall. I argued against it with data — and the subscription, surfaced inside real usage, closed 2,000 subscribers in the beta.",
      tembici: "Delivery riders and casual cyclists were competing for the same bike — and maintenance paid the bill. Splitting the fleets saved ~R$1M/month and took the operation to breakeven in 10 months.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
    },
    caseMeta: {
      tembici: {
        summary: "Delivery riders used the bike 4 hours a day; casual cyclists, 20 minutes a week. Same fleet, same station, same system — and a maintenance bill that did not add up. I split the two operations and designed the journey that made the new one possible without a spreadsheet.",
        role: "Sole Product Designer on the team. I ran the research (50+ survey responses and 9 interviews), the workshop that set the strategy, and the end-to-end journey design.",
        readTime: "5 min",
        impact: [
          { label: "Operating cost", text: "~R$1M/month saved in maintenance, pickup operations, and bike replacement — average over the product's first 6 months." },
          { label: "Maintenance", text: "72% drop in dead battery, flat tire, and broken seat incidents." },
          { label: "Sustainability", text: "The operation reached breakeven in about 10 months." }
        ]
      },
      miio: {
        summary: "A free EV charging app had to start charging a user base that compares kWh prices cent by cent. Leadership wanted a paywall. I brought a study showing why it would not work and designed the opposite path — the plan showing up where the benefit was demonstrable.",
        role: "Product Designer on subscription, checkout, onboarding, and vehicle connection flows. Product based in Portugal — I worked from Brazil on Lisbon time.",
        readTime: "4 min",
        impact: [
          { label: "Subscribers", text: "2,000 people subscribed to the plan after going through the beta." },
          { label: "Sign-up", text: "31% shorter sign-up journey, measured with Google Analytics in an A/B test." },
          { label: "Model", text: "Monetization presented in context of use, not as a blocker — a decision defended against leadership's paywall proposal." }
        ]
      },
      finvity: {
        summary: "Sole designer of a SaaS platform for wealth, succession, and tax management, reporting directly to the CEO. I redesigned the product, the visual identity, and the institutional website — and support questions dropped 60%.",
        role: "Sole Product Designer at the company, reporting to the CEO. Product, visual identity, and institutional website.",
        readTime: "4 min",
        impact: [
          { label: "Support", text: "60% fewer questions reaching support after the redesign — including those coming through the platform's largest client, one of Brazil's biggest banks." },
          { label: "Scope", text: "Sole designer at the company: product, brand, and institutional website all went through me." },
          { label: "Process", text: "High-fidelity prototypes generated with AI — Google Stitch with a design.md, later Claude over MCP — to test paths before building them." }
        ]
      }
    },
    testimonialsTitle: "What it's like working with me!",
    testimonials: [
      {
        content: '"I had the opportunity to work with Rodrigo through Levva on an extremely challenging project. And working with him was very light and peaceful. Because he is a highly dedicated and committed professional, delivering his best to the product. All demands directed to him were carried out clearly and with concern not only for the designer\'s visual, but also for the user experience and the expectations of stakeholders. I hope we can work with you again soon. You are a talent!"',
        initial: 'J',
        name: 'Jaqueline Figueiredo',
        role: 'Product Manager'
      },
      {
        content: '"I worked with Ro on the Tembici design team for almost two years! He always stood out for his high technical knowledge of prototyping, componentization, animation, tools and Figma plugins. He helped us build the Tembici Design System and also brought good ideas for unconventional solutions."',
        initial: 'D',
        name: 'Daniela Narumi',
        role: 'Product Designer'
      },
      {
        content: '"Working with Ro at Tembici was great, he is always looking for a positive and open approach to challenges. He has extensive knowledge in prototyping, as well as a remarkable ability to navigate Figma. His willingness to help the team is evident, and he has always shown great willingness to collaborate and teach what he knows to his peers. When Ro gets involved in a project that motivates him, he gives his best, making his eyes shine with enthusiasm. Thank you for the exchanges and the time we shared working together!"',
        initial: 'P',
        name: 'Paula Dantas',
        role: 'Head of Product Design'
      },
      {
        content: '"Rodrigo is an extraordinary UX Designer who\'s been nothing short of amazing. 🌟 His mastery of Figma, chatbot flows, and UX in general has been evident from our time working together. As a UX Writer myself, I couldn\'t have asked for a better mentor and friend to guide me through design intricacies that time. He\'s a natural-born teacher, always willing to share his expertise and help others level up their skills. So, if you ever get the chance to work with Rodrigo, seize it!"',
        initial: 'D',
        name: 'Domi Rocha',
        role: 'Content Designer'
      }
    ]
  }
};
