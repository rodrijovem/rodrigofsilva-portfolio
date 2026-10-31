import resumeFile from '../../files/Resume.pdf';
import type { Translations } from './types';

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    cta: "Let's talk",
    resume: 'Resume',
  },
  home: {
    heroEyebrow: 'Product Designer · SaaS · Mobility · Fintech',
    heroTitle: 'I design the whole system, not just the screen.',
    heroLead: 'I work on SaaS, mobile, and B2B/B2C platforms where design decisions run into operations, business model, and data. Currently at Lojas Renner; before that, Finvity, miio, and Tembici.',
    facts: [
      { value: '13 years', label: 'in design, 6 of them as a Product Designer' },
      { value: '~R$1M/mo', label: 'in operating cost removed at Tembici' },
      { value: '2,000', label: 'subscribers at the launch of miio\'s paid plan' },
    ],
    casesCta: 'Read case study',
    aboutEyebrow: 'About',
    aboutTitle: 'I started in graphic design. Today I argue about data modeling.',
    aboutText: 'I am from São Paulo and live in Porto Alegre. I came from graphic and web design, moved through UX/UI, and then into product, where I got closer to strategy, operations, and building. I use AI inside the process — research, exploration, and prototyping — without giving up critical thinking about user and business.',
    aboutCta: 'See my career',
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk about the next problem.",
    contactLead: 'I am open to opportunities in Product, conversations about design, and exchanges about AI in the process. I reply quickly on all three channels.',
    linkedinDesc: 'Connections and networking',
    emailDesc: 'Detailed matters',
    whatsappDesc: 'Direct messages',
  },
  about: {
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
    showMore: 'See more experiences',
    showLess: 'Collapse',
  },
  cases: {
    impactOverview: 'Impact Overview',
    summary: 'Summary',
    role: 'My Role',
    readTime: 'Reading Time',
    back: 'Back',
    moreCases: 'More cases',
    readCase: 'Read case study',
  },
  footer: {
    role: 'Product Designer · Porto Alegre, Brazil',
    rights: `© ${new Date().getFullYear()} Rodrigo Silva`,
  },
  confidential: {
    context: 'Retail · B2C · 2026 – Present',
    title: 'Lojas Renner',
    description: 'Senior Product Designer since May 2026. I lead discovery for the affiliate program — 12,000+ registered affiliates — and worked on MFA login and facial-biometrics account recovery on a platform with 5M+ logins a month. The screens and the detail behind the decisions are under NDA; talking about them is not.',
    cta: 'Talk about this work',
  },
  resumeFile: resumeFile,
  experiences: [
    {
      period: "2026 - Present",
      company: "LOJAS RENNER",
      role: "Senior Product Designer",
      location: "Porto Alegre, Brazil",
      description: [
        "I work across Renner's digital ecosystem, between the affiliate program and the authentication platform.",
        "• I lead discovery for the affiliate program (12,000+ registered affiliates): quantitative and qualitative research, desk research and journey mapping with the internal team, uncovering pain points across every stage of the program.",
        "• Redesigned the program's landing page and validated a new product proposal for affiliate management with stakeholders, focused on giving affiliates more visibility and enabling business expansion.",
        "• Contributed to MFA login and facial-biometrics account recovery on a platform with 5M+ monthly logins (app and web), reducing email-change requests to customer support by 80%."
      ]
    },
    {
      period: "2025 - 2026",
      company: "FINVITY",
      role: "Senior Product Designer",
      location: "Brazil - Remote",
      description: [
        "I was the only designer on a platform for wealth and succession planning, designed for lawyers, financial advisors, and multi-family offices.",
        "• I structured complex flows, dashboards, simulations, and data visualization experiences to support wealth, succession, and tax-related decision-making.",
        "• I worked on modules such as assets, wealth evolution, risk analysis, succession, holding structures, tax intelligence, reports, admin panels, and client management.",
        "• I also contributed to the evolution of Finvity’s visual identity and the redesign of its institutional website, aligning the brand perception with the sophistication of the product."
      ]
    },
    {
      period: "2025 - 2025",
      company: "MIIO",
      role: "Product Designer",
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
  caseContext: {
    tembici: 'Mobility · B2B2C · 2024',
    miio: 'Electric mobility · B2C · Portugal · 2025',
    finvity: 'Wealth management · B2B SaaS · 2025–2026',
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
      name: 'Jaqueline Figueiredo',
      role: 'Product Manager',
    },
    {
      content: '"I worked with Ro on the Tembici design team for almost two years! He always stood out for his high technical knowledge of prototyping, componentization, animation, tools and Figma plugins. He helped us build the Tembici Design System and also brought good ideas for unconventional solutions."',
      name: 'Daniela Narumi',
      role: 'Product Designer',
    },
    {
      content: '"Working with Ro at Tembici was great, he is always looking for a positive and open approach to challenges. He has extensive knowledge in prototyping, as well as a remarkable ability to navigate Figma. His willingness to help the team is evident, and he has always shown great willingness to collaborate and teach what he knows to his peers. When Ro gets involved in a project that motivates him, he gives his best, making his eyes shine with enthusiasm. Thank you for the exchanges and the time we shared working together!"',
      name: 'Paula Dantas',
      role: 'Head of Product Design',
    },
    {
      content: '"Rodrigo is an extraordinary UX Designer who\'s been nothing short of amazing. 🌟 His mastery of Figma, chatbot flows, and UX in general has been evident from our time working together. As a UX Writer myself, I couldn\'t have asked for a better mentor and friend to guide me through design intricacies that time. He\'s a natural-born teacher, always willing to share his expertise and help others level up their skills. So, if you ever get the chance to work with Rodrigo, seize it!"',
      name: 'Domi Rocha',
      role: 'Content Designer',
    }
  ]
};
