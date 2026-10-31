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
    heroEyebrow: 'Product Designer · SaaS · Mobilidade · Fintech',
    heroTitle: 'Desenho o sistema inteiro, não só a tela.',
    heroLead: 'Trabalho em SaaS, mobile e plataformas B2B/B2C onde a decisão de design encosta em operação, modelo de negócio e dado. Hoje na Lojas Renner; antes, Finvity, miio e Tembici.',
    facts: [
      { value: '13 anos', label: 'em design, 6 deles como Product Designer' },
      { value: '~R$1M/mês', label: 'em custo operacional eliminado na Tembici' },
      { value: '2.000', label: 'assinantes no lançamento da monetização da miio' },
    ],
    casesCta: 'Ler estudo de caso',
    aboutEyebrow: 'Sobre',
    aboutTitle: 'Comecei no design gráfico. Hoje discuto modelagem de dados.',
    aboutText: 'Sou paulista e moro em Porto Alegre. Vim do design gráfico e do web design, passei por UX/UI e migrei para produto, onde fiquei mais perto de estratégia, operação e construção. Uso IA dentro do processo — pesquisa, exploração e protótipo — sem abrir mão do pensamento crítico sobre usuário e negócio.',
    aboutCta: 'Conheça minha trajetória',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos conversar sobre o próximo problema.',
    contactLead: 'Estou aberto a oportunidades em Produto, a conversas sobre design e a trocas sobre IA no processo. Respondo rápido nos três canais.',
    linkedinDesc: 'Conexões e networking',
    emailDesc: 'Assuntos detalhados',
    whatsappDesc: 'Mensagens diretas',
  },
  about: {
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
    role: 'Product Designer · Porto Alegre, Brasil',
    rights: `© ${new Date().getFullYear()} Rodrigo Silva`,
  },
  confidential: {
    context: 'Varejo · B2C · 2026 – Atual',
    title: 'Lojas Renner',
    description: 'Senior Product Designer desde maio de 2026. Lidero o discovery do programa de afiliadas — mais de 12 mil cadastradas — e atuei no login com MFA e na recuperação de conta por biometria facial, em uma plataforma com mais de 5 milhões de logins por mês. As telas e o detalhe das decisões estão sob confidencialidade; conversar sobre elas, não.',
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
        "• Lidero o discovery do programa de afiliadas (+12 mil cadastros): pesquisa quanti e quali, desk research e mapeamento da jornada com o time interno, identificando dores em todas as etapas do programa.",
        "• Redesenhei a landing page do programa e validei com stakeholders uma nova proposta de produto para a gestão das afiliadas, com foco em mais visibilidade para as afiliadas e expansão do negócio.",
        "• Contribuí para o login com MFA e a recuperação de conta por biometria facial, em uma plataforma com mais de 5 milhões de logins/mês (app e site), reduzindo em 80% os pedidos de troca de e-mail no atendimento."
      ]
    },
    {
      period: "2025 - 2026",
      company: "FINVITY",
      role: "Senior Product Designer",
      location: "Brasil - Remoto",
      description: [
        "Fui o único designer de uma plataforma de gestão patrimonial e sucessória para advogados, assessores financeiros e multi-family offices.",
        "• Estruturei fluxos complexos, dashboards, simulações e visualização de dados para apoiar decisões patrimoniais, sucessórias e tributárias.",
        "• Trabalhei em módulos como patrimônio, evolução patrimonial, análise de riscos, sucessão, holding, inteligência tributária, relatórios, painel administrativo e gestão de clientes.",
        "• Também contribuí para a evolução da identidade visual da Finvity e para o redesenho do site institucional, alinhando a percepção externa da marca à sofisticação do produto."
      ]
    },
    {
      period: "2025 - 2025",
      company: "MIIO",
      role: "Product Designer",
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
  caseContext: {
    tembici: 'Mobilidade · B2B2C · 2022–2024',
    miio: 'Mobilidade elétrica · B2C · Portugal · 2025',
    finvity: 'Gestão patrimonial · SaaS B2B · 2025–2026',
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
