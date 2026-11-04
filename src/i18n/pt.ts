import curriculoFile from '../../files/Curriculo.pdf';
import type { Translations } from './types';

export const pt: Translations = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    cta: 'Vamos conversar',
    resume: 'Currículo',
  },
  home: {
    heroEyebrow: "Senior Product Designer · Porto Alegre",
    heroTitle: "Já fiz produto para mobilidade, fintech, varejo e saúde.",
    heroLead: "Os projetos que mais me ensinaram foram aqueles em que o difícil estava fora da tela: uma frota de bicicletas quebrando, um app de recarga que precisava começar a cobrar, uma família querendo saber quanto vai pagar de herança.",
    metaDescription: 'Senior Product Designer. 13 anos em design, 6 em produto: mobilidade, fintech e SaaS B2B, onde a decisão de design mexe em operação, receita e dado.',
    facts: [
      { value: '13 anos', label: 'em design, 6 deles em produto' },
      { value: '~R$1M/mês', label: 'de custo operacional eliminado na Tembici' },
      { value: '60%', label: 'menos dúvidas no suporte da Finvity depois do redesign' },
    ],
    casesCta: 'Ler estudo de caso',
    aboutEyebrow: 'Sobre',
    aboutTitle: 'Comecei no design gráfico. Hoje discuto modelagem de dados.',
    aboutText: "Sou paulista e moro em Porto Alegre. Passei por design gráfico, web e UX/UI até chegar em produto, onde o trabalho ficou mais perto de estratégia, operação e engenharia. Uso IA no processo para pesquisar, explorar, prototipar e também ajudar no handoff; mas o julgamento e as decisões de caminho ainda são meus.",
    aboutCta: 'Conheça minha trajetória',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar sobre o próximo problema.',
    contactLead: "Estou aberto a oportunidades como Senior ou Staff Product Designer e a conversas sobre design e IA no processo. Respondo rápido nos três canais.",
    linkedinDesc: 'Conexões e networking',
    emailDesc: 'Assuntos detalhados',
    whatsappDesc: 'Mensagens diretas',
  },
  about: {
    downloadResume: 'Baixar currículo',
    introPara1: "Comecei no design gráfico em 2012. Passei por web, UX/UI e chatbots até chegar em produto, quando percebi que o que me interessava não era a interface melhor, e sim entender por que um produto funciona, onde a pessoa trava e quanto essa trava custa para a operação.",
    introPara2: "Rendo mais em problemas em que o design encosta no modelo de negócio: uma frota física que quebra, uma assinatura que precisa nascer sem afastar a base, uma regra tributária que a tela não pode simplificar demais. Nesses contextos, meu trabalho começa antes do Figma, com dado, pesquisa e alinhamento entre áreas, e termina depois do lançamento, acompanhando métrica.",
    introPara3: "Uso IA no dia a dia para análise, exploração e protótipo funcional. Ela acelera o caminho; a decisão sobre o que vale construir continua sendo uma conversa com usuário, negócio e engenharia.",
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
    showMore: 'Ver mais experiências',
    showLess: 'Recolher',
  },
  cases: {
    impactOverview: 'Visão Geral do Impacto',
    summary: 'Resumo',
    role: 'Minha participação',
    readTime: 'Tempo de leitura',
    back: 'Voltar',
    moreCases: 'Mais cases',
    readCase: 'Ler estudo de caso',
  },
  footer: {
    role: 'Senior Product Designer · Porto Alegre, Brasil',
    rights: `© ${new Date().getFullYear()} Rodrigo Silva`,
  },
  confidential: {
    context: 'Varejo · B2C · 2026 – Atual',
    title: 'Lojas Renner',
    description: "Senior Product Designer desde maio de 2026. Lidero o discovery do programa de afiliadas, com mais de 12 mil cadastradas, e contribuo com o login com MFA e a recuperação de conta por biometria facial, em uma plataforma com mais de 5 milhões de logins por mês: os pedidos de troca de e-mail no atendimento caíram 80%. As telas estão sob confidencialidade; a conversa sobre as decisões, não.",
    cta: 'Conversar sobre esse trabalho',
  },
  resumeFile: curriculoFile,
  experiences: [
    {
      period: "2026 - Atual",
      company: "LOJAS RENNER",
      role: "Senior Product Designer",
      location: "Porto Alegre, Brasil",
      description: [
        "Atuo no ecossistema digital da Renner, entre o programa de afiliadas e a plataforma de autenticação.",
        "• Lidero o discovery do programa de afiliadas (+12 mil cadastradas): pesquisa quanti e quali, desk research e mapa da jornada com o time interno, com dores mapeadas em todas as etapas do programa.",
        "• Redesenhei a landing page do programa e validei com stakeholders uma nova proposta de produto para gestão das afiliadas, focada em dar visibilidade de desempenho a elas e abrir espaço para expandir o negócio.",
        "• Contribuo com o login com MFA e a recuperação de conta por biometria facial, numa plataforma com +5 milhões de logins/mês (app e site): queda de 80% nos pedidos de troca de e-mail no atendimento."
      ]
    },
    {
      period: "2025 - 2026",
      company: "FINVITY",
      role: "Senior Product Designer",
      location: "Brasil - Remoto",
      description: [
        "Fui o único designer de uma plataforma de gestão patrimonial e sucessória para advogados, assessores financeiros e multi-family offices.",
        "• Antes do redesign, auditei a plataforma antiga com análise heurística de Nielsen (11 problemas, 7 graves ou catastróficos, cada um com severidade de 0 a 4) e benchmark de plataformas internacionais, adaptando os fluxos à legislação brasileira.",
        "• Redesenhei fluxos, dashboards, simulações e visualização de dados para decisões patrimoniais, sucessórias e tributárias, em módulos como patrimônio, evolução patrimonial, riscos, sucessão, holding, inteligência tributária, relatórios e painel administrativo.",
        "• Reestruturei o cadastro para alimentar todas as análises a partir de uma única entrada, com importação dos dados do imposto de renda.",
        "• Resultado: 60% menos dúvidas chegando ao suporte, incluindo as do maior cliente, um dos maiores bancos do Brasil.",
        "• Também redesenhei a identidade visual e o site institucional, usando a linguagem do próprio produto."
      ]
    },
    {
      period: "2025 - 2025",
      company: "MIIO",
      role: "Product Designer",
      location: "Portugal - Remoto",
      description: [
        "Atuei no design de um app B2C de mobilidade elétrica, com foco em experiência mobile, onboarding, assinatura, checkout, integração com veículo e otimização da jornada do usuário.",
        "• Com minha líder, defendi com estudo de mercado e análise heurística de concorrentes uma monetização em contexto de uso no lugar do paywall proposto pela liderança.",
        "• Desenhei a conexão direta com o veículo (bateria, consumo, custo em tempo real), primeira etapa de um lançamento em milestones que levou até o plano pago.",
        "• Desenhei o ciclo completo da assinatura: contratação, trial, pagamento, falhas, renovação, cancelamento e desconto aplicado no carrinho e no checkout. Antes da cobrança, 2.000 usuários selecionados testaram o plano num beta A/B, com avaliações entre 4 e 5 estrelas.",
        "• Reduzi em 31% o tempo da jornada de cadastro, medido em teste A/B no Google Analytics.",
        "• Contribuí com a base do Design System: tipografia, ícones, ilustrações de estados de feedback e componentes de maior uso."
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
        "• O redesign aumentou em 400% o tempo médio de permanência na plataforma.",
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
        "• Fui o único Product Designer do Bike pra Você, produto para entregadores em parceria com o iFood: conduzi a pesquisa e o workshop que separaram as frotas e desenhei a jornada ponta a ponta. A operação economizou ~R$1M/mês e chegou ao breakeven em ~10 meses.",
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
    finvity: "Único designer de uma plataforma de planejamento patrimonial e sucessório usada por um dos maiores bancos do Brasil. Comecei auditando a plataforma antiga: 11 problemas de usabilidade, 7 graves ou catastróficos. Em 4 meses de redesign, as dúvidas no suporte caíram 60%.",
    miio: "O app de recarga era grátis e o CEO queria paywall. Com minha líder, mostramos por que bloquear acesso afastaria uma base que escolhe posto pelo preço, e desenhei a assinatura aparecendo só onde a economia era calculável. Antes de cobrar, 2.000 usuários testaram o plano num beta A/B.",
    tembici: "Entregadores e ciclistas casuais disputavam a mesma bicicleta, e a manutenção pagava a conta. Liderei a pesquisa e o workshop que separaram as duas operações e desenhei a jornada do novo produto: ~R$1M/mês economizados e breakeven em 10 meses.",
  },
  caseTitles: {
    finvity: "Finvity",
    miio: "miio",
    tembici: "Tembici & iFood",
  },
  caseContext: {
    tembici: "Mobilidade · B2B2C · 2023–2024",
    miio: 'Mobilidade elétrica · B2C · Portugal · 2025',
    finvity: "Gestão patrimonial · SaaS B2B · 2025–2026",
  },
  caseMeta: {
    tembici: {
      summary: "Na pandemia, entregadores do iFood passaram a usar a mesma frota de bikes elétricas dos ciclistas casuais, com uma intensidade que a operação não suportava: bike quebrada, NPS em queda e manutenção cara. Como único Product Designer, conduzi a pesquisa e o workshop que levaram a empresa a separar as duas operações e desenhei a jornada do novo produto. Resultado: **~R$1M/mês economizados** e **breakeven em ~10 meses**.",
      role: "Único Product Designer, do 2º semestre de 2023 ao início de 2024. Conduzi a pesquisa (50+ respostas quantitativas, 9 entrevistas), facilitei o workshop que definiu a estratégia e desenhei a jornada ponta a ponta. Time: PM, 1 front-end, 2 back-ends, 1 QA e 1 content designer compartilhado.",
      readTime: "5 min",
      impact: [
        { label: "Custo operacional", text: "~R$1M/mês na média dos 6 primeiros meses, somando a manutenção que deixou de existir e os cancelamentos de usuários comuns que pararam de acontecer." },
        { label: "Manutenção", text: "72% menos bateria descarregada, pneu furado e banco quebrado na frota." },
        { label: "Sustentabilidade", text: "Breakeven em ~10 meses e rollout iniciado para Porto Alegre e Rio de Janeiro." }
      ]
    },
    miio: {
      summary: "A miio, app de recarga de veículos elétricos em Portugal, precisava gerar receita recorrente de uma base que compara preço de kWh centavo a centavo, e a liderança queria paywall. Com minha líder, mostramos por que bloquear acesso afastaria essa base. Em 6 meses, entregamos em milestones: primeiro a conexão com o carro, depois um beta do plano com **2.000 usuários selecionados**, e por fim a assinatura paga para todos, aparecendo só onde a economia era calculável. No caminho, o cadastro ficou **31% mais rápido**.",
      role: "Product Designer nos fluxos de assinatura, checkout, onboarding e conexão com veículo, ao lado da líder de design. Cerca de 6 meses de projeto. Produto sediado em Portugal; atuei do Brasil, no fuso de Lisboa.",
      readTime: "4 min",
      impact: [
        { label: "Beta", text: "2.000 usuários selecionados testaram o plano em A/B antes da cobrança e o avaliaram com notas entre 4 e 5 estrelas." },
        { label: "Cadastro", text: "Jornada de cadastro 31% mais rápida, medida em teste A/B no Google Analytics." },
        { label: "Modelo", text: "Monetização em contexto de uso, não como bloqueio: decisão defendida contra o paywall proposto pela liderança." }
      ]
    },
    finvity: {
      summary: "A Finvity é um SaaS de planejamento patrimonial, sucessório e tributário usado por advogados, assessores e um dos maiores bancos do Brasil, e a plataforma gerava dúvidas demais no suporte. Como único designer, respondendo ao CEO, auditei a plataforma antiga (11 problemas de usabilidade, 7 graves ou catastróficos), reestruturei o cadastro como fundação das análises e redesenhei produto, marca e site em cerca de 4 meses. As dúvidas no suporte caíram **60%**.",
      role: "Único Product Designer da empresa, reportando direto ao CEO, com um time de desenvolvedores. Responsável por produto (auditoria, discovery, fluxos e UI), identidade visual e site institucional. Cerca de 4 meses de redesign.",
      readTime: "5 min",
      impact: [
        { label: "Suporte", text: "60% menos dúvidas chegando ao suporte depois do redesign, incluindo as do maior cliente, um dos maiores bancos do Brasil." },
        { label: "Diagnóstico", text: "11 problemas de usabilidade mapeados na plataforma antiga, 7 graves ou catastróficos, que viraram a ordem de prioridade do redesign." },
        { label: "Processo", text: "Protótipos de alta fidelidade com IA (Google Stitch + design.md, depois Claude via MCP) para testar caminhos antes de construir." }
      ]
    }
  },
  testimonialsTitle: "Como é trabalhar comigo",
  testimonials: [
    {
      content: '"Tive a oportunidade de trabalhar com o Rodrigo pela Levva em um projeto extremamente desafiador. E trabalhar com ele foi muito leve e tranquilo. Pois, ele é um profissional altamente dedicado e comprometido, entregando o seu melhor no produto. Todas as demandas direcionadas a ele eram realizadas de forma clara e com a preocupação não somente com o visual de designer, mas também com a experiência do usuário e com as expectativas dos stakeholders. Espero que possamos trabalhar novamente. Você é um talento!"',
      name: 'Jaqueline Figueiredo',
      role: 'Product Manager',
    },
    {
      content: '"Trabalhei com o Ro no time de design da Tembici por quase dois anos! Ele sempre se destacou pelo alto conhecimento técnico sobre prototipação, componentização, animação, ferramentas e plugins do figma. Nos ajudou com a construção do Design System da Tembici e também trazia boas ideias para soluções não convencionais."',
      name: 'Daniela Narumi',
      role: 'Product Designer',
    },
    {
      content: '"Trabalhar com o Ro na Tembici foi ótimo, ele está sempre buscando uma abordagem positiva e aberta diante dos desafios. Possui um amplo conhecimento em prototipação, além de uma notável habilidade em navegar pelo Figma. Sua disposição para ajudar a equipe é evidente, e ele sempre demonstrou grande boa vontade em colaborar e em ensinar o que sabe para seus pares. Quando o Ro se envolve em um projeto que o motiva, ele entrega seu melhor, fazendo com que seus olhos brilhem com entusiasmo. Agradeço pelas trocas e pelo tempo que compartilhamos trabalhando juntos!"',
      name: 'Paula Dantas',
      role: 'Head of Product Design',
    },
    {
      content: '"O Rodrigo é um UX Designer extraordinário que tem sido nada menos que incrível. 🌟 Seu domínio do Figma, fluxos de chatbot e UX em geral ficou evidente no tempo em que trabalhamos juntos. Como UX Writer, eu não poderia ter pedido um mentor e amigo melhor para me guiar pelas complexidades do design naquela época. Ele tem o dom de ensinar, sempre disposto a compartilhar seu conhecimento e ajudar os outros a evoluírem suas habilidades. Então, se você tiver a chance de trabalhar com o Rodrigo, agarre-a!"',
      name: 'Domi Rocha',
      role: 'Content Designer',
    }
  ]
};
