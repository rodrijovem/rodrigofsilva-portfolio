import { ReactNode } from 'react';
import { Lang } from './i18n.tsx';

import finProblema from '../images/Finvity/finProblema.webp';
import finACDC from '../images/Finvity/finACDC.webp';
import finProduto from '../images/Finvity/finProduto.webp';
import finSite from '../images/Finvity/finSite.webp';
import miioHeader from '../images/miio/miioHeader.webp';
import miioDecisao from '../images/miio/miioDecisao.webp';
import miioMone from '../images/miio/miioMone.webp';
import temApoio from '../images/tembici/temApoio.webp';
import temMockup from '../images/tembici/temMockup.webp';
import temBike from '../images/tembici/temBike.webp';
import temProblema from '../images/tembici/temProblema.webp';

const img = (src: string, alt: string) => (
  <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden mb-12">
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </div>
);

const h = (t: string) => <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">{t}</h3>;
const p = (t: string, mb = 4) => <p className={`mb-${mb}`}>{t}</p>;
const p12 = (t: string) => <p className="mb-12">{t}</p>;

const ul = (items: string[]) => (
  <ul className="list-disc pl-6 space-y-2 mb-4">
    {items.map((item, i) => <li key={i} className="text-[var(--text-primary)]">{item}</li>)}
  </ul>
);


export function getFinvityContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {p("Finvity is a SaaS platform for wealth and succession management, used by lawyers, financial advisors, and multi-family offices to structure financial, family, tax, and succession information in a single analysis environment.")}
      {p12("The challenge was not to redesign isolated screens. It was to create a product base capable of transforming complex data — assets, income, risks, succession, holding, and taxes — into clearer, more consistent, and reliable flows for decision-making.")}
      {h("The problem")}
      {p("Part of the platform had evolved in a fragmented way. Flows that should complement each other used different logics, required a lot of manual entry, and made cross-reading information difficult.")}
      {p12("In a financial and regulated product, this wasn't just a usability problem. Poorly organized information could increase the user's cognitive load, make risk interpretation difficult, and weaken confidence in the analysis.")}
      {img(finProblema, "Finvity Problem")}
      {h("My role")}
      {p("I worked on the redesign of flows, the organization of information architecture, the creation of screens and components, data visualization, and the alignment between business rules, user experience, and technical feasibility.")}
      {p12("The goal was to make the platform work less as a set of isolated modules and more as an integrated decision system.")}
      {h("Decision 1 — Reorganize data entry")}
      {p("The first step was to redesign the registration and information entry base. The platform needed to allow both manual filling and import of the income tax declaration, respecting different levels of complexity between clients and offices.")}
      {p12("This decision reduced operational effort and created a more consistent foundation for data to feed into other product areas, such as assets, family structure, wealth evolution, risks, succession, and tax intelligence.")}
      {img(finACDC, "Finvity Data Entry")}
      {h("Decision 2 — Organize complexity, don't hide it")}
      {p("The risk of oversimplifying was transforming a technical product into a beautiful but unreliable interface. Therefore, the approach was to organize complexity into clearer steps, hierarchies, and groupings.")}
      {p12("In flows like tax intelligence and tax return import, I brought the interface logic closer to mental models the user already knew. The idea was to reduce learning without hiding the depth necessary for analysis.")}
      {img(finProduto, "Finvity Organizing Complexity")}
      {h("Decision 3 — Transform data into strategic reading")}
      {p("Beyond registration, the work involved structuring asset, risk, wealth evolution, succession, and holding screens so that data stopped being just records and started supporting decisions.")}
      {p12("The platform needed to show scenarios, alerts, comparisons, projections, and financial impacts in a comprehensible way for those analyzing complex wealth cases.")}
      {img(finSite, "Finvity Site")}
      {h("Decision 4 — Create a more scalable visual and technical base")}
      {p("I also worked on the evolution of Finvity's visual identity and the redesign of the institutional website, aligning the brand's external presence with the product's value proposition: transforming complex wealth, succession, and tax management themes into a clearer, more reliable, and technological experience.")}
      {p12("The base in Tailwind and shadcn helped bridge design and implementation. With this, artificial intelligence could be used as support in the process of exploration, prototyping, and acceleration of solutions without losing consistency with the system.")}
      {h("What changed in practice")}
      {p("The platform now has more coherent flows, less dependence on manual effort, and better integration between modules that previously seemed more separate.")}
      {p12("Most importantly: the product is better prepared to transform sensitive and complex data into actionable reading, supporting wealth, tax, and succession decisions with more clarity.")}
      {h("Limitations and learnings")}
      {p("The first product base was designed mainly for individuals and couples. As the system evolved, it became clear that more complex family and wealth structures would require a more flexible foundation from the start.")}
      {p("If I were to redesign this base today, I would prioritize from the beginning an architecture capable of supporting multiple entities, different family relationships, companies, heirs, beneficiaries, and more sophisticated planning scenarios.")}
      {p12("This project reinforced an important idea: in complex products, good design is not about simplifying everything. It's about organizing complexity so that difficult decisions become more comprehensible.")}
    </>
  );

  // PT (original)
  return (
    <>
      {p("A Finvity é uma plataforma SaaS para gestão patrimonial e sucessória, usada por advogados, assessores financeiros e multi-family offices para estruturar informações financeiras, familiares, tributárias e sucessórias em um único ambiente de análise.")}
      {p12("O desafio não era redesenhar telas isoladas. Era criar uma base de produto capaz de transformar dados complexos — patrimônio, renda, riscos, sucessão, holding e tributos — em fluxos mais claros, consistentes e confiáveis para tomada de decisão.")}
      {h("O problema")}
      {p("Parte da plataforma havia evoluído de forma fragmentada. Fluxos que deveriam se complementar usavam lógicas diferentes, exigiam muito preenchimento manual e dificultavam a leitura cruzada das informações.")}
      {p12("Em um produto financeiro e regulado, isso não era apenas um problema de usabilidade. Uma informação mal organizada poderia aumentar a carga cognitiva do usuário, dificultar a interpretação de riscos e enfraquecer a confiança na análise.")}
      {img(finProblema, "Problema Finvity")}
      {h("Meu papel")}
      {p("Atuei no redesign dos fluxos, na organização da arquitetura da informação, na criação de telas e componentes, na visualização de dados e na aproximação entre regras de negócio, experiência do usuário e viabilidade técnica.")}
      {p12("O objetivo era fazer a plataforma funcionar menos como um conjunto de módulos isolados e mais como um sistema integrado de decisão.")}
      {h("Decisão 1 — Reorganizar a entrada de dados")}
      {p("O primeiro passo foi redesenhar a base de cadastro e entrada de informações. A plataforma precisava permitir tanto preenchimento manual quanto importação da declaração de imposto de renda, respeitando diferentes níveis de complexidade entre clientes e escritórios.")}
      {p12("Essa decisão reduziu esforço operacional e criou uma fundação mais consistente para que os dados alimentassem outras áreas do produto, como patrimônio, estrutura familiar, evolução patrimonial, riscos, sucessão e inteligência tributária.")}
      {img(finACDC, "Entrada de dados Finvity")}
      {h("Decisão 2 — Organizar a complexidade, não escondê-la")}
      {p("O risco de simplificar demais era transformar um produto técnico em uma interface bonita, mas pouco confiável. Por isso, a abordagem foi organizar a complexidade em etapas, hierarquias e agrupamentos mais claros.")}
      {p12("Em fluxos como inteligência tributária e importação de IR, aproximei a lógica da interface de modelos mentais que o usuário já conhecia. A ideia era reduzir aprendizado sem esconder a profundidade necessária para análise.")}
      {img(finProduto, "Organizando Complexidade Finvity")}
      {h("Decisão 3 — Transformar dados em leitura estratégica")}
      {p("Além do cadastro, o trabalho envolveu estruturar telas de patrimônio, riscos, evolução patrimonial, sucessão e holding para que os dados deixassem de ser apenas registros e passassem a apoiar decisões.")}
      {p12("A plataforma precisava mostrar cenários, alertas, comparações, projeções e impactos financeiros de forma compreensível para quem analisa casos patrimoniais complexos.")}
      {img(finSite, "Site Finvity")}
      {h("Decisão 4 — Criar uma base visual e técnica mais escalável")}
      {p("Também atuei na evolução da identidade visual da Finvity e no redesenho do site institucional, alinhando a presença externa da marca à proposta do produto: transformar temas complexos de gestão patrimonial, sucessória e tributária em uma experiência mais clara, confiável e tecnológica.")}
      {p12("A base em Tailwind e shadcn ajudou a aproximar design e implementação. Com isso, a inteligência artificial pôde ser usada como apoio no processo de exploração, prototipação e aceleração de soluções sem perder consistência com o sistema.")}
      {h("O que mudou na prática")}
      {p("A plataforma passou a ter fluxos mais coerentes, menor dependência de esforço manual e melhor integração entre módulos que antes pareciam mais separados.")}
      {p12("Mais importante: o produto ficou melhor preparado para transformar dados sensíveis e complexos em leitura acionável, apoiando decisões patrimoniais, tributárias e sucessórias com mais clareza.")}
      {h("Limitações e aprendizados")}
      {p("A primeira base do produto foi pensada principalmente para indivíduos e casais. Com a evolução do sistema, ficou claro que estruturas familiares e patrimoniais mais complexas exigiriam uma fundação mais flexível desde o início.")}
      {p("Se eu redesenhasse essa base hoje, priorizaria desde o começo uma arquitetura capaz de suportar múltiplas entidades, diferentes relações familiares, empresas, herdeiros, beneficiários e cenários de planejamento mais sofisticados.")}
      {p12("Esse projeto reforçou uma ideia importante: em produtos complexos, bom design não é simplificar tudo. É organizar a complexidade para que decisões difíceis fiquem mais compreensíveis.")}
    </>
  );
}

export function getMiioContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {p("miio is a B2C app for electric vehicle charging used in different European countries. The product already solved an important functional need: helping EV drivers find, use, and monitor charges.")}
      {p12("The next challenge was to evolve the revenue model. The company needed to create a subscription capable of generating recurrence without compromising the trust of an audience highly sensitive to costs, transparency, and real savings.")}
      {h("The problem")}
      {p("Monetizing an EV mobility app isn't simply adding a paid plan. If the subscription appears as a barrier or as an aggressive sales attempt, the user tends to see it as just another cost.")}
      {p12("The challenge was to invert this perception: make the plan appear as a tool for savings and control, not as an extra charge.")}
      {img(miioHeader, "miio Problem")}
      {h("My role")}
      {p("I worked on the subscription and monetization experience, designing touchpoints between plans, benefits, checkout, store, communications, payment states, and real moments of app use.")}
      {p12("The work involved thinking about the experience end-to-end: from discovery of benefits, sign-up, trial, and payment to error states, active subscription, cart abandonment, and post-event communication.")}
      {h("Decision 1 — Don't push the plan, prove value in context")}
      {p("The most obvious solution would be to spread banners, modals, and aggressive calls across the interface. This might increase short-term visibility but would also create noise, a sense of commercial pressure, and loss of trust.")}
      {p("The decision was to follow the opposite path: insert the plan in moments where the benefit made sense for the user.")}
      {p12("Instead of communicating only 'subscribe', the experience began showing potential savings, discounts, and benefits within the context of use: charging, simulation, store, consumption, and vehicle analysis.")}
      {img(miioDecisao, "miio Decision")}
      {h("Decision 2 — Transform savings into a product argument")}
      {p("The plan needed to be perceived as something measurable. Therefore, the experience was designed to highlight values such as discount per kWh, cashback, store advantages, priority support, statistics, connectivity, and benefits per plan.")}
      {p12("The logic was simple: the more the user understood their expenses, the easier it would be to perceive the subscription as a rational decision.")}
      {h("Decision 3 — Map critical subscription states")}
      {p("The monetization experience didn't end at the plan card. It was necessary to cover sensitive states of the flow: free trial, monthly or annual billing, payment method, billing address, 3DS validation, payment processing, subscription error, active subscription, upgrade to annual plan, and abandonment recovery.")}
      {p12("These states were important because any friction in payment or communication could break trust exactly at the moment of highest intent.")}
      {img(miioMone, "miio Monetization")}
      {h("Decision 4 — Connect subscription to continuous vehicle use")}
      {p("Beyond sign-up, the subscription was connected to a broader view of value: charging history, consumption analysis, operators used, average cost, driving efficiency, comparison with fuel, and behavioral insights.")}
      {p12("With this, the app stopped being just a tool for charging the vehicle and started helping the user better understand their costs and savings opportunities.")}
      {h("What changed in practice")}
      {p("The product gained a subscription experience more integrated into the user's real behavior. Instead of a separate commercial layer, monetization became part of the usage journey itself.")}
      {p12("This helped align recurring revenue and experience, creating a model where the plan was justified by the value perceived at the right time.")}
      {h("Impact")}
      {p("The project contributed to structuring a more sustainable monetization model, without depending on excessive commercial pressure within the interface.")}
      {ul(["31% reduction in onboarding friction", "Validation with over 2,000 users during the beta period"])}
      {h("Learning")}
      {p("Monetization is not just about charging for a functionality. It's about making the value evident before the user needs to rationalize the price.")}
      {p12("When the experience shows savings, control, and trust in the right context, conversion stops seeming like insistence and starts being a consequence.")}
    </>
  );

  // PT (original)
  return (
    <>
      {p("A miio é um aplicativo B2C para carregamento de veículos elétricos usado em diferentes países da Europa. O produto já resolvia uma necessidade funcional importante: ajudar motoristas de veículos elétricos a encontrar, usar e acompanhar carregamentos.")}
      {p12("O próximo desafio era evoluir o modelo de receita. A empresa precisava criar uma assinatura capaz de gerar recorrência sem comprometer a confiança de um público altamente sensível a custos, transparência e economia real.")}
      {h("O problema")}
      {p("Monetizar um app de mobilidade elétrica não é simplesmente adicionar um plano pago. Se a assinatura aparece como uma barreira ou como uma tentativa agressiva de venda, o usuário tende a enxergar apenas mais um custo.")}
      {p12("O desafio era inverter essa percepção: fazer o plano aparecer como uma ferramenta de economia e controle, não como uma cobrança extra.")}
      {img(miioHeader, "Problema miio")}
      {h("Meu papel")}
      {p("Atuei na experiência de assinatura e monetização, desenhando pontos de contato entre planos, benefícios, checkout, loja, comunicações, estados de pagamento e momentos reais de uso do app.")}
      {p12("O trabalho envolveu pensar a experiência ponta a ponta: desde descoberta dos benefícios, contratação, trial e pagamento até estados de erro, assinatura ativa, após-evento e recuperação de abandono.")}
      {h("Decisão 1 — Não empurrar o plano, provar valor no contexto")}
      {p("A solução mais óbvia seria espalhar banners, modais e chamadas agressivas pela interface. Isso poderia aumentar visibilidade no curto prazo, mas também criaria ruído, sensação de pressão comercial e perda de confiança.")}
      {p("A decisão foi seguir o caminho oposto: inserir o plano em momentos onde o benefício fizesse sentido para o usuário.")}
      {p12("Em vez de comunicar apenas “assine”, a experiência passou a mostrar economia potencial, descontos e benefícios dentro do contexto de uso: carregamento, simulação, loja, consumo e análise do veículo.")}
      {img(miioDecisao, "Decisão miio")}
      {h("Decisão 2 — Transformar economia em argumento de produto")}
      {p("O plano precisava ser percebido como algo mensurável. Por isso, a experiência foi desenhada para evidenciar valores como desconto por kWh, cashback, vantagens na loja, suporte prioritário, estatísticas, conectividade e benefícios por plano.")}
      {p12("A lógica era simples: quanto mais o usuário entendesse seus gastos, mais fácil seria perceber a assinatura como uma decisão racional.")}
      {h("Decisão 3 — Mapear os estados críticos da assinatura")}
      {p("A experiência de monetização não terminava no card do plano. Era necessário cobrir estados sensíveis do fluxo: trial gratuito, cobrança mensal ou anual, método de pagamento, morada de faturação, validação 3DS, pagamento em processamento, erro ao subscrever, assinatura ativa, upgrade para plano anual e recuperação de abandono.")}
      {p12("Esses estados eram importantes porque qualquer fricção em pagamento ou comunicação poderia quebrar confiança exatamente no momento de maior intenção.")}
      {img(miioMone, "Monetização miio")}
      {h("Decisão 4 — Conectar assinatura ao uso contínuo do veículo")}
      {p("Além da contratação, a assinatura foi conectada a uma visão mais ampla de valor: histórico de carregamentos, análise de consumo, operadores utilizados, custo médio, eficiência de condução, comparação com combustível e insights sobre comportamento.")}
      {p12("Com isso, o app deixava de ser apenas uma ferramenta para carregar o veículo e passava a ajudar o usuário a entender melhor seus custos e oportunidades de economia.")}
      {h("O que mudou na prática")}
      {p("O produto ganhou uma experiência de assinatura mais integrada ao comportamento real do usuário. Em vez de uma camada comercial separada, a monetização passou a fazer parte da própria jornada de uso.")}
      {p12("Isso ajudou a alinhar receita recorrente e experiência, criando um modelo onde o plano se justificava pelo valor percebido no momento certo.")}
      {h("Impacto")}
      {p("O projeto contribuiu para estruturar um modelo de monetização mais sustentável, sem depender de pressão comercial excessiva dentro da interface.")}
      {ul(["Redução de fricções no onboarding em 31%", "Validação com mais de 2.000 usuários durante o período beta"])}
      {h("Aprendizado")}
      {p("Monetização não é apenas cobrar por uma funcionalidade. É tornar o valor evidente antes que o usuário precise racionalizar o preço.")}
      {p12("Quando a experiência mostra economia, controle e confiança no contexto certo, a conversão deixa de parecer insistência e passa a ser consequência.")}
    </>
  );
}

export function getTembiciContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {p("Tembici is the largest micromobility company in Latin America. During the pandemic, the product faced a critical scenario: the explosive growth of delivery brought a new usage profile. Delivery riders began intensively using common bicycles, which had been designed for short trips and leisure.")}
      {p12("This movement generated a direct conflict. Prolonged use by delivery riders reduced the availability of bikes for the leisure audience, pressured maintenance, and harmed the experience on both sides.")}
      {h("The problem")}
      {p("Previous decisions generated operational and financial noise. To try and serve the leisure audience, usage time was extended, which opened a gap for unstructured professional use.")}
      {p12("The result was an overloaded system, with increasing maintenance costs and a negative perception from those who couldn't find bicycles available at stations.")}
      {img(temProblema, "Tembici Problem")}
      {h("My role")}
      {p("I acted as Product Designer in the New Business team, focusing on designing the experience for a new product aimed specifically at delivery riders.")}
      {p12("The challenge was to create a solution that organized this use, reduced conflict at stations, and generated a new recurring revenue line for the company.")}
      {h("Decision 1 — Create a category, not just a plan")}
      {p("Instead of trying to restrict usage, the strategic decision was to embrace it. But this couldn't be done in the common system. We needed a separate product: the Plan for Delivery Riders.")}
      {p12("The foundation was to create a journey where the delivery rider had exclusive conditions but operated under rules that didn't harm the public sharing system.")}
      {h("Decision 2 — Prioritize speed and real validation")}
      {p("Time was a critical factor. Instead of waiting months for complete development, the strategy was to run an MVP (Minimum Viable Product) in record time.")}
      {p12("The focus was to validate payment willingness and usage behavior before scaling the technology. This decision allowed learning fast from real users on the streets of São Paulo.")}
      {img(temApoio, "Tembici Validation")}
      {h("Decision 3 — Facilitate access with strategic partnerships")}
      {p("For the product to gain traction, the experience needed to be simple and accessible. Therefore, I designed integration flows with partners like iFood.")}
      {p12("The delivery rider could sign up for the plan directly through the partner's app, with facilitated conditions, creating an efficient acquisition channel and a much smoother onboarding experience.")}
      {img(temMockup, "Tembici Integration")}
      {h("Decision 4 — Balance social impact and business sustainability")}
      {p("The project wasn't just about revenue. There was a strong social component: offering a dignified and economical transportation alternative for those working in delivery.")}
      {p12("At the same time, the experience design needed to ensure that the operational cost was sustainable for Tembici, balancing the subscription value with the delivery rider's financial reality.")}
      {h("What changed in practice")}
      {p("Usage conflict at stations decreased, maintenance became more predictable, and Tembici was able to open a market that was previously seen only as a problem.")}
      {p12("The Plan for Delivery Riders stopped being a test and became a strategic pillar of the company's new business.")}
      {h("Impact")}
      {p("The project contributed to the generation of a new revenue line of approximately R$ 1 million/month, validating the micromobility model as a large-scale work tool.")}
      {img(temBike, "Tembici Impact")}
      {h("Learning")}
      {p("Large usage problems hide large product opportunities. Instead of fighting against user behavior, the role of design is to understand the motivation and structure a path that generates value for the client and the business.")}
    </>
  );

  // PT (original)
  return (
    <>
      {p("A Tembici é a maior empresa de micromobilidade da América Latina. Durante a pandemia, o produto enfrentou um cenário crítico: o crescimento explosivo do delivery trouxe um novo perfil de uso. Entregadores passaram a usar intensivamente as bicicletas comuns, que haviam sido projetadas para trajetos curtos e lazer.")}
      {p12("Esse movimento gerou um conflito direto. O uso prolongado por entregadores reduzia a disponibilidade de bikes para o público de lazer, pressionava a manutenção e prejudicava a experiência de ambos os lados.")}
      {h("O problema")}
      {p("As decisões anteriores geravam ruído operacional e financeiro. Para tentar atender ao lazer, o tempo de uso foi estendido, o que abriu brecha para o uso profissional desestruturado.")}
      {p12("O resultado era um sistema sobrecarregado, com custos de manutenção crescentes e uma percepção negativa de quem não conseguia encontrar bicicletas disponíveis nas estações.")}
      {img(temProblema, "Problema Tembici")}
      {h("Meu papel")}
      {p("Atuou como Product Designer no time de Novos Negócios, com foco em desenhar a experiência de um novo produto voltado especificamente para entregadores.")}
      {p12("O desafio era criar uma solução que organizasse esse uso, reduzisse o conflito nas estações e gerasse uma nova linha de receita recorrente para a companhia.")}
      {h("Decisão 1 — Criar uma categoria, não apenas um plano")}
      {p("Em vez de tentar restringir o uso, a decisão estratégica foi abraçá-lo. Mas isso não poderia ser feito no sistema comum. Precisávamos de um produto separado: o Plano para Entregadores.")}
      {p12("A fundação foi criar uma jornada onde o entregador tivesse condições exclusivas, mas operasse sob regras que não prejudicassem o sistema de compartilhamento público.")}
      {h("Decisão 2 — Priorizar a velocidade e a validação real")}
      {p("O tempo era um fator crítico. Em vez de esperar meses por um desenvolvimento completo, a estratégia foi rodar um MVP (Mínimo Produto Viável) em tempo recorde.")}
      {p12("O foco foi validar a disposição de pagamento e o comportamento de uso antes de escalar a tecnologia. Essa decisão permitiu aprender rápido com usuários reais nas ruas de São Paulo.")}
      {img(temApoio, "Validação Tembici")}
      {h("Decisão 3 — Facilitar o acesso com parcerias estratégicas")}
      {p("Para o produto ganhar tração, a experiência precisava ser simples e acessível. Por isso, desenhei fluxos de integração com parceiros como o iFood.")}
      {p12("O entregador podia contratar o plano diretamente pelo app do parceiro, com condições facilitadas, criando um canal de aquisição eficiente e uma experiência de onboarding muito mais fluida.")}
      {img(temMockup, "Integração Tembici")}
      {h("Decisão 4 — Equilibrar impacto social e sustentabilidade do negócio")}
      {p("O projeto não era apenas sobre receita. Havia um componente social forte: oferecer uma alternativa de transporte digna e econômica para quem trabalha com delivery.")}
      {p12("Ao mesmo tempo, o design da experiência precisava garantir que o custo operacional fosse sustentável para a Tembici, equilibrando o valor da assinatura com a realidade financeira do entregador.")}
      {h("O que mudou na prática")}
      {p("O conflito de uso nas estações diminuiu, a manutenção tornou-se mais previsível e a Tembici conseguiu abrir um mercado que antes era visto apenas como um problema.")}
      {p12("O Plano para Entregadores deixou de ser um teste e passou a ser um pilar estratégico de novos negócios da empresa.")}
      {h("Impacto")}
      {p("O projeto contribuiu para a geração de uma nova linha de receita de aproximadamente R$ 1 milhão/mês, validando o modelo de micromobilidade como ferramenta de trabalho em larga escala.")}
      {img(temBike, "Impacto Tembici")}
      {h("Aprendizado")}
      {p("Grandes problemas de uso escondem grandes oportunidades de produto. Em vez de lutar contra o comportamento do usuário, o papel do design é entender a motivação e estruturar um caminho que gere valor para o cliente e para o negócio.")}
    </>
  );
}
