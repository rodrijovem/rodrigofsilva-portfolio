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
    heroEyebrow: "Senior Product Designer · Porto Alegre, Brazil",
    heroTitle: "I've built products for mobility, fintech, retail and health.",
    heroLead: "The projects that taught me the most were the ones where the hard part was off the screen: a bike fleet that kept breaking down, an EV charging app that needed to start making money, a family wanting to know how much inheritance tax they'd pay.",
    metaDescription: 'Senior Product Designer. 13 years in design, 6 in product: mobility, fintech and B2B SaaS, where design decisions move operations, revenue and data.',
    facts: [
      { value: '13 years', label: 'in design, 6 of them in product' },
      { value: '~R$1M/mo', label: 'in operating cost removed at Tembici' },
      { value: '60%', label: 'fewer support questions at Finvity after the redesign' },
    ],
    casesCta: 'Read case study',
    aboutEyebrow: 'About',
    aboutTitle: 'I started in graphic design and now work in product.',
    aboutText: "I'm from São Paulo and live in Porto Alegre. I went through graphic design, web and UX/UI before landing in product, where the work got closer to strategy, operations and engineering. I use AI in my process to research, explore, prototype and also help with handoff, but the judgment and the decisions about direction are still mine.",
    aboutCta: 'See my career',
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk about the next problem.",
    contactLead: "I'm open to Senior or Staff Product Designer roles and to conversations about design and AI in the process. I reply quickly on all three channels.",
    linkedinDesc: 'Connections and networking',
    emailDesc: 'Detailed matters',
    whatsappDesc: 'Direct messages',
  },
  about: {
    downloadResume: 'Download resume',
    introPara1: "I started in graphic design in 2012. I moved through web, UX/UI and chatbots before getting to product, when I realized what interested me most was understanding why a product works, where people get stuck and how much that costs the operation.",
    introPara2: "I do my best work on problems where design touches the business model: a physical fleet that breaks down, a subscription that has to launch without pushing users away, a tax rule the screen cannot oversimplify. In those contexts my work starts before Figma, with data, research and alignment across teams, and ends after launch, tracking the metrics.",
    introPara3: "I use AI every day for analysis, exploration and working prototypes. It lets me test more paths in the same time, and what goes into the product I decide together with users, business and engineering.",
    educationTitle: 'Education',
    education: [
      { title: 'Product Design', location: 'Instituto Mauá de Tecnologia, Brazil' }
    ],
    coursesTitle: 'Certificates and courses',
    courses: [
      { title: 'UX Design', location: 'Google, Brazil' },
      { title: 'UX/UI Design', location: 'Alura, Brazil' },
      { title: 'Advanced Design System', location: 'Escala, Brazil' }
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
    role: 'Senior Product Designer · Porto Alegre, Brazil',
    rights: `© ${new Date().getFullYear()} Rodrigo Silva`,
  },
  confidential: {
    context: 'Retail · B2C · 2026 – Present',
    title: 'Lojas Renner',
    description: "Senior Product Designer since May 2026. I lead discovery for the affiliate program, with 12,000+ registered affiliates, and contribute to MFA login and facial-biometrics account recovery on a platform with 5M+ logins a month: email-change requests to customer service dropped 80%. The screens are confidential, but I'm happy to talk about the decisions.",
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
        "• I lead discovery for the affiliate program (12,000+ registered): quantitative and qualitative research, desk research and journey mapping with the internal team, with pain points mapped across every stage of the program.",
        "• I redesigned the program's landing page and validated with stakeholders a new product proposal for affiliate management, focused on giving affiliates visibility into their performance and opening room to grow the business.",
        "• I contribute to MFA login and facial-biometrics account recovery on a platform with 5M+ logins a month (app and web): email-change requests to customer service dropped 80%."
      ]
    },
    {
      period: "2025 - 2026",
      company: "FINVITY",
      role: "Senior Product Designer",
      location: "Brazil - Remote",
      description: [
        "I was the only designer on a platform for wealth and succession planning, designed for lawyers, financial advisors, and multi-family offices.",
        "• Before the redesign, I audited the old platform with a Nielsen heuristic evaluation (11 problems, 7 severe or catastrophic, each rated 0 to 4) and a benchmark of international platforms, adapting their flows to Brazilian law.",
        "• I redesigned flows, dashboards, simulations and data visualization for wealth, estate and tax decisions, across modules such as assets, wealth projection, risks, succession, holding companies, tax intelligence, reports and the admin panel.",
        "• I restructured client onboarding so a single data entry feeds every analysis, with income tax return import.",
        "• Result: 60% fewer questions reaching support, including those from the largest client, one of Brazil's biggest banks.",
        "• I also redesigned the visual identity and the corporate website using the product's own design language."
      ]
    },
    {
      period: "2025 - 2025",
      company: "MIIO",
      role: "Product Designer",
      location: "Portugal - Remote",
      description: [
        "I worked on the design of a B2C electric mobility app, focused on mobile experience, onboarding, subscription flows, checkout, vehicle integration, and user journey optimization.",
        "• With my lead, I used market research and a heuristic analysis of competitors to argue for in-context monetization instead of the paywall leadership proposed.",
        "• I designed the direct vehicle connection (battery, consumption, real-time cost), the first step of a milestone-based launch that led to the paid plan.",
        "• I designed the full subscription lifecycle: sign-up, trial, payment, failures, renewal, cancellation and the discount applied in the cart and at checkout. Before billing started, 2,000 selected users tested the plan in an A/B beta and rated it 4 to 5 stars.",
        "• I cut sign-up journey time by 31%, measured in an A/B test in Google Analytics.",
        "• I contributed to the Design System foundation: typography, icons, feedback-state illustrations and the most-used components."
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
        "• The redesign increased average time on platform by 400%.",
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
        "• I was the sole Product Designer on Bike pra Você, a product for delivery riders built with iFood: I ran the research and the workshop that split the fleets and designed the end-to-end journey. NPS went up for both audiences, and the operation saved ~R$1M/month and broke even in ~10 months.",
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
    finvity: "Sole designer of a wealth and estate planning platform used by one of Brazil's largest banks. I started by auditing the old platform: 11 usability problems, 7 of them severe or catastrophic. After 4 months of redesign, support questions dropped 60%.",
    miio: "The EV charging app was free and the CEO wanted a paywall. With my lead, I showed why blocking access would push away users who pick a charger by price, and I designed the subscription to appear only where the savings could be calculated. Before charging anyone, 2,000 users tested the plan in an A/B beta.",
    tembici: "Delivery riders and casual cyclists were competing for the same fleet, and both were complaining: empty stations, dead batteries, late fees. I led the research and the workshop that split the two operations and designed the new product's journey: NPS up for both audiences, ~R$1M/month saved and breakeven in 10 months.",
  },
  caseTitles: {
    finvity: "Finvity",
    miio: "miio",
    tembici: "Tembici & iFood",
  },
  caseContext: {
    tembici: "Mobility · B2B2C · 2023–2024",
    miio: 'Electric mobility · B2C · Portugal · 2025',
    finvity: "Wealth management · B2B SaaS · 2025–2026",
  },
  caseMeta: {
    tembici: {
      summary: "Tembici's partnership with iFood started during the pandemic, with delivery riders using the same e-bike fleet as casual cyclists. When people went back to their routines, both audiences started competing for the same bikes, and the service kept getting worse for everyone: empty stations, dead or broken bikes, late fees for riders who went past 4 hours and a maintenance and redistribution operation that couldn't keep up. By 2023, it was weighing on the NPS of the company's core product. As the sole Product Designer, I ran the research and the workshop that led the company to split the two operations, and I designed the new product's journey. Result: **NPS up for both audiences**, **~R$1M/month saved** and **breakeven in ~10 months**.",
      role: "Sole Product Designer, from the second half of 2023 to early 2024. I ran the research (50+ survey responses, 9 interviews), facilitated the workshop that set the strategy and designed the end-to-end journey. Team: PM, 1 front-end, 2 back-ends, 1 QA and 1 shared content designer.",
      readTime: "5 min",
      impact: [
        { label: "Experience", text: "NPS up for both audiences: casual cyclists found bikes in good shape at the station again, and riders no longer had the 4-hour limit that led to late fees." },
        { label: "Operations", text: "72% fewer dead batteries, flat tires and broken seats, and ~R$1M/month saved in maintenance and cancellations (average over the first 6 months)." },
        { label: "Sustainability", text: "Breakeven in ~10 months and a rollout started to Porto Alegre and Rio de Janeiro." }
      ]
    },
    miio: {
      summary: "miio, an EV charging app in Portugal, needed recurring revenue from users who compare kWh prices down to the cent, and leadership wanted a paywall. With my lead, I showed why blocking access would push those users away. Over 6 months, we shipped in milestones: first the car connection, then a plan beta with **2,000 selected users**, and finally the paid subscription for everyone, shown only where the savings could be calculated. Along the way, sign-up got **31% faster**.",
      role: "Product Designer on the subscription, checkout, onboarding and vehicle connection flows, alongside the design lead. About 6 months of work. The product is based in Portugal; I worked from Brazil, on Lisbon time.",
      readTime: "4 min",
      impact: [
        { label: "Beta", text: "2,000 selected users tested the plan in an A/B beta before billing and rated it 4 to 5 stars." },
        { label: "Sign-up", text: "Sign-up journey 31% faster, measured in an A/B test in Google Analytics." },
        { label: "Model", text: "Monetization inside the app's normal use, defended in place of the paywall leadership proposed." }
      ]
    },
    finvity: {
      summary: "Finvity is a wealth, estate and tax planning SaaS used by lawyers, advisors and one of Brazil's largest banks, and the platform generated too many support questions. As the sole designer, reporting to the CEO, I audited the old platform (11 usability problems, 7 severe or catastrophic), restructured client onboarding as the foundation of every analysis and redesigned the product, brand and website in about 4 months. Support questions dropped **60%**.",
      role: "The company's sole Product Designer, reporting directly to the CEO and working with a team of developers. Responsible for product (audit, discovery, flows and UI), visual identity and corporate website. About 4 months of redesign.",
      readTime: "5 min",
      impact: [
        { label: "Support", text: "60% fewer questions reaching support after the redesign, including those from the largest client, one of Brazil's biggest banks." },
        { label: "Diagnosis", text: "11 usability problems found in the old platform, 7 severe or catastrophic, which became the redesign's priority order." },
        { label: "Process", text: "High-fidelity AI prototypes (Google Stitch + design.md, then Claude via MCP) to test paths before building." }
      ]
    }
  },
  testimonialsTitle: "What it's like to work with me",
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
