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
    aboutRole: string;
    aboutProjects: string;
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
      aboutRole: 'Como Product Designer',
      aboutProjects: 'Projetos entregues',
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
      metric1Value: 6,
      metric1Suffix: ' anos',
      metric1Label: 'como Product Designer',
      metric2Value: 16,
      metric2Suffix: '',
      metric2Label: 'Projetos entregues',
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
      subtitle: 'Já trabalhei em projetos que ajudaram a eliminar prejuízo de R$1M/mês, reduzir onboarding em 31% e estruturar plataformas financeiras complexas orientadas à tomada de decisão.',
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
      finvity: "Redesenho de uma plataforma SaaS para gestão patrimonial, sucessória e tributária, conectando fluxos, dados, simulações e relatórios em uma experiência mais clara, consistente e escalável.",
      miio: "Criação de uma experiência de monetização para um app de mobilidade elétrica, integrando economia, conectividade, checkout e comunicação em momentos reais da jornada do usuário.",
      tembici: "Criação e evolução de um produto para entregadores, validando um novo modelo operacional e digital que ajudou a reduzir prejuízo, melhorar previsibilidade e atingir breakeven em cerca de 10 meses.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
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
      aboutRole: 'As a Product Designer',
      aboutProjects: 'Delivered projects',
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
      metric1Value: 6,
      metric1Suffix: ' years',
      metric1Label: 'as Product Designer',
      metric2Value: 16,
      metric2Suffix: '',
      metric2Label: 'Delivered projects',
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
      subtitle: "I've worked on projects that helped eliminate a R$1M/month deficit, reduce onboarding by 31%, and structure complex financial platforms geared towards decision-making.",
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
      finvity: "Redesign of a SaaS platform for wealth, succession, and tax management, connecting flows, data, simulations, and reports into a clearer, more consistent, and scalable experience.",
      miio: "Creation of a monetization experience for an electric mobility app, integrating savings, connectivity, checkout, and communication in real moments of the user's journey.",
      tembici: "Creation and evolution of a product for delivery riders, validating a new operational and digital model that helped reduce deficit, improve predictability, and reach breakeven in about 10 months.",
    },
    caseTitles: {
      finvity: "Finvity",
      miio: "miio",
      tembici: "Tembici & iFood",
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
