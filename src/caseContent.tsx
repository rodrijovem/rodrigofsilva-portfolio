import { ReactNode } from 'react';
import type { Lang } from './i18n';

import finProblema from '../images/Finvity/finProblema.webp';
import finACDC from '../images/Finvity/finACDC.webp';
import finProduto from '../images/Finvity/finProduto.webp';
import finSite from '../images/Finvity/finSite.webp';
import miioHeader from '../images/miio/miioHeader.webp';
import miioDecisao from '../images/miio/miioDecisao.webp';
import miioMone from '../images/miio/miioMone.webp';

import temMockup from '../images/tembici/temMockup.webp';
import temProblema from '../images/tembici/temProblema.webp';

const caption = (text?: string) => (
  text ? <figcaption className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{text}</figcaption> : null
);

const img = (src: string, alt: string, legend?: string) => (
  <figure className="w-full mb-12">
    <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
    {caption(legend)}
  </figure>
);

const embedIframe = (src: string, legend?: string) => (
  <figure className="w-full mb-12">
    <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden bg-[var(--bg-alt)]">
      <iframe className="w-full aspect-video" src={src} frameBorder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>
    </div>
    {caption(legend)}
  </figure>
);

/*
  O id vem declarado, nao derivado do texto. Derivando, o slug mudava junto com
  a traducao: o mesmo paragrafo era #o-workshop em portugues e #the-workshop em
  ingles, entao qualquer link compartilhado quebrava para quem abrisse no outro
  idioma. Declarado, a ancora e a mesma nos dois.
*/
const h = (id: string, t: string) => (
  <h3 id={id} className="text-2xl font-bold text-[var(--text-primary)] mb-6 mt-8 scroll-mt-24">{t}</h3>
);

// Classe literal: `mb-${n}` nao e gerada pelo Tailwind, que varre o fonte
// procurando nomes de classe completos.
const p = (t: string) => <p className="mb-4">{t}</p>;
const p12 = (t: string) => <p className="mb-12">{t}</p>;

const note = (t: string) => (
  <p className="mb-12 pl-4 border-l-2 border-[var(--brand-color)] text-[var(--text-secondary)]">{t}</p>
);

const statsGrid = (items: {value: string, label: string}[]) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    {items.map((item, i) => (
      <div key={i} className="p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex flex-col justify-center shadow-sm">
        <span className="block text-3xl font-bold text-[var(--brand-color)] mb-2">{item.value}</span>
        <span className="text-sm font-medium text-[var(--text-secondary)] leading-tight">{item.label}</span>
      </div>
    ))}
  </div>
);

export function getFinvityContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("the-question", "The question the platform has to answer")}
      {p("A wealth planner has to answer something uncomfortable: if this client dies tomorrow, how much does the family pay in inheritance tax, how long does probate take, and what is left.")}
      {p("Getting to that answer requires family structure, assets, debts, holding companies, gifts, income projections, and tax rules — all at once, all affecting each other. It is a domain where oversimplifying is not elegance, it is loss of precision.")}
      {p12("So the platform is not a dashboard with numbers on it. It is a chain: what gets entered in one place has to show up, correctly, in every analysis that depends on it.")}

      {img(finProblema, "Finvity client list", "The client list carries the state of each record — simplified or complete, received or shared — because the planner needs to know where each family stopped before opening any simulation.")}

      {h("three-fronts", "One designer, one CEO, three fronts")}
      {p("I was the company's only designer and reported directly to the CEO.")}
      {p("That explains the breadth of what I did here, and it is not scattering: when the platform promises to organize family wealth and the website promises something else, in another visual language, the gap between the two becomes a commercial problem. Product, identity, and website had to move together because the same person was designing all three.")}
      {p12("The price is structural, not effort-related: with one designer across three fronts, prioritization is constant and not everything gets the same depth at the same time. What was being built took the front of the queue; older modules and continuous research waited.")}

      {img(finSite, "Finvity institutional website", "The website was rebuilt with the product's own language and interface elements: whoever arrives through the site recognizes the platform when they log in.")}

      {h("registration", "Registration became the foundation, and that had a price")}
      {p("The obvious alternative was to keep the entry light: fewer fields, less drop-off at the start.")}
      {p("We did the opposite. We structured registration to feed everything that comes after it — risks, wealth evolution, succession, holding companies, gifts, reports. A piece of data goes in once and reappears in every analysis that depends on it. Registration stopped being a bureaucratic step and became the foundation of the simulations.")}
      {p12("The cost was a heavier start for the user. The counterweight was bringing in data that already exists instead of asking for typing: importing tax return data fills in a good part of the asset structure right at the entrance.")}

      {img(finACDC, "Finvity registration flow, before and after", "Before and after registration: from a linear four-step wizard to a structure navigable by section, with document upload inside the step itself.")}

      {h("specialist", "Getting closer to what the specialist already knows")}
      {p("In tax intelligence and tax return import, the interface logic was brought closer to structures the professional already recognizes from their own work, instead of inventing a new, \"cleaner\" organization.")}
      {p("The gain is not aesthetic: it cuts learning time and keeps the specialist from having to mentally translate what they already know into the tool's vocabulary.")}
      {p12("The same logic applied to reading data. Projections, parameters, and results stay in the same view, so changing an assumption and seeing the consequence is one movement, not a round trip between screens.")}

      {img(finProduto, "Wealth evolution projection", "Projection and parameters on the same screen: the specialist changes the rate of return and watches the cash flow chart respond without switching context.")}

      {h("ai-prototyping", "I prototyped with AI before and after the refactor")}
      {p("Being the only designer on a product this size means exploration is expensive. I used AI to bring that cost down, in two different ways as the codebase changed.")}
      {p("Before the refactor, I used Google Stitch fed by a design.md as the source of truth for visual decisions, generating high-fidelity screen variations in a fraction of the time. That let me test paths I would not have had time to draw on my own.")}
      {p12("Once the code was ready for it, I moved to Claude connected over MCP, generating screens and prototypes directly in the product and taking them to usability testing without going through Figma. The prototype stopped being a representation of the product and became the product running.")}

      {h("support-drop", "60% fewer support questions")}
      {p("Finvity's business numbers are under NDA. What I can share is what changed in behavior.")}
      {p("Before the redesign, support received a high volume of questions about how to operate the platform — including through the channel of the largest client, one of Brazil's biggest banks. After the redesign, that volume dropped 60%.")}
      {p12("That matters more than an interface metric: a question reaching support from an enterprise client is not individual friction, it is operating cost and renewal risk.")}

      {h("data-modeling", "What data modeling taught me")}
      {p("In complex products, clarity does not come from removing information. It comes from structuring the information the right way.")}
      {p("It also became clear that the data model defines the quality of the experience. When the initial modeling does not account for future scenarios, the interface inherits structural limitations.")}
      {p12("If I were redesigning the product's foundation today, I would think from the start about more flexible family and asset structures, supporting multiple entities, relationships, and analysis scenarios with less dependence on later workarounds.")}
    </>
  );

  return (
    <>
      {h("the-question", "A pergunta que a plataforma precisa responder")}
      {p("Um planejador patrimonial precisa responder algo desconfortável: se esse cliente morrer amanhã, quanto a família paga de ITCMD, quanto tempo leva o inventário e o que sobra.")}
      {p("Chegar nessa resposta exige estrutura familiar, patrimônio, dívidas, holding, doações, projeção de renda e regra tributária — tudo junto, tudo se afetando. É um domínio em que simplificar demais não é elegância, é perda de precisão.")}
      {p12("Por isso a plataforma não é um painel com números. É uma cadeia: o que entra em um lugar precisa reaparecer, correto, em cada análise que depende dele.")}

      {img(finProblema, "Lista de clientes da Finvity", "A lista de clientes carrega o estado de cada cadastro — simplificado ou completo, recebido ou compartilhado — porque o planejador precisa saber onde cada família parou antes de abrir qualquer simulação.")}

      {h("three-fronts", "Um designer, um CEO, três frentes")}
      {p("Eu era o único designer da empresa e respondia direto ao CEO.")}
      {p("Isso explica a amplitude do que fiz aqui, e não é dispersão: quando a plataforma promete organizar patrimônio de famílias e o site institucional promete outra coisa, com outra linguagem visual, a distância entre as duas vira problema comercial. Produto, identidade e site precisavam sair juntos porque a mesma pessoa desenhava os três.")}
      {p12("O preço disso é estrutural, não de esforço: com um designer para três frentes, a priorização é constante e nem tudo recebe a mesma profundidade ao mesmo tempo. O que estava sendo construído puxava a fila; módulos antigos e pesquisa contínua esperavam.")}

      {img(finSite, "Site institucional da Finvity", "O site foi refeito com a linguagem e os próprios elementos de interface do produto: quem chega pelo site reconhece a plataforma quando entra.")}

      {h("registration", "O cadastro virou a fundação, e isso teve preço")}
      {p("A alternativa óbvia era manter a entrada leve: menos campos, menos abandono no começo.")}
      {p("Fizemos o contrário. Estruturamos o cadastro para alimentar tudo que vem depois — riscos, evolução patrimonial, sucessão, holding, doações, relatórios. Um dado entra uma vez e reaparece em cada análise que depende dele. O cadastro deixou de ser etapa burocrática e virou a fundação das simulações.")}
      {p12("O custo foi um começo mais pesado para o usuário. A compensação veio de trazer dado que já existe em vez de pedir digitação: a importação dos dados do imposto de renda preenche boa parte da estrutura patrimonial logo na entrada.")}

      {img(finACDC, "Fluxo de cadastro da Finvity, antes e depois", "Antes e depois do cadastro: de um wizard linear de quatro etapas para uma estrutura navegável por seção, com envio de documentos dentro da própria etapa.")}

      {h("specialist", "Aproximar o que o especialista já conhece")}
      {p("Em inteligência tributária e na importação de dados do imposto de renda, a lógica da interface foi aproximada de estruturas que o profissional já reconhece do próprio trabalho, em vez de inventar uma organização nova e “mais limpa”.")}
      {p("O ganho não é estético: reduz aprendizado e evita que o especialista precise traduzir mentalmente o que ele já sabe para o vocabulário da ferramenta.")}
      {p12("A mesma lógica valeu para a leitura dos dados. Projeção, parâmetros e resultado ficam na mesma visão, para que mudar uma premissa e ver a consequência seja um movimento só, e não uma ida e volta entre telas.")}

      {img(finProduto, "Projeção de evolução patrimonial", "Projeção e parâmetros na mesma tela: o especialista muda a taxa de rendimento e vê o fluxo de caixa responder sem trocar de contexto.")}

      {h("ai-prototyping", "Prototipei com IA antes e depois da refatoração")}
      {p("Ser o único designer de um produto desse tamanho significa que exploração custa caro. Usei IA para baixar esse custo, de dois jeitos diferentes conforme o código foi mudando.")}
      {p("Antes da refatoração, usei o Google Stitch alimentado por um design.md como fonte de verdade das decisões visuais, para gerar variações de tela em alta fidelidade numa fração do tempo. Isso me deixou testar caminhos que sozinho eu não teria tempo de desenhar.")}
      {p12("Depois que o código foi preparado, passei a usar o Claude conectado por MCP para gerar telas e protótipos direto no produto, e levar para teste de usabilidade sem passar pelo Figma. O protótipo deixou de ser uma representação do produto e virou o produto rodando.")}

      {h("support-drop", "60% menos dúvidas no suporte")}
      {p("Os números de negócio da Finvity estão sob NDA. O que posso contar é o que mudou de comportamento.")}
      {p("Antes do redesign, o suporte recebia um volume alto de dúvidas sobre como operar a plataforma — inclusive pelo canal do maior cliente, um dos maiores bancos do Brasil. Depois do redesign, esse volume caiu 60%.")}
      {p12("Isso importa mais que uma métrica de interface: dúvida que chega no suporte de um cliente enterprise não é atrito individual, é custo de operação e risco de renovação.")}

      {h("data-modeling", "O que a modelagem de dados me ensinou")}
      {p("Em produtos complexos, clareza não nasce de remover informação. Nasce de estruturar a informação da forma certa.")}
      {p("Também ficou evidente que a base de dados define a qualidade da experiência. Quando a modelagem inicial não considera cenários futuros, a interface passa a herdar limitações estruturais.")}
      {p12("Se eu redesenhasse a fundação do produto hoje, pensaria desde o início em estruturas familiares e patrimoniais mais flexíveis, suportando múltiplas entidades, relações e cenários de análise com menos dependência de adaptações posteriores.")}
    </>
  );
}

export function getMiioContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("charging", "Charging for an app that was free")}
      {p("miio is an electric vehicle charging app based in Portugal. It worked, it was used, and it generated no recurring revenue.")}
      {p12("The audience makes that harder than it sounds. People who drive electric compare kWh prices cent by cent, track consumption, and pick the charging point by cost. These are people who open the app precisely because it is transparent. Charging the wrong way would not just convert poorly — it would attack the very reason the app was opened every week.")}

      {h("paywall", "The CEO wanted a paywall")}
      {p("The proposal on the table was aggressive monetization: block what was already free and force the purchase decision.")}
      {p("My lead and I brought a market study and a heuristic analysis of competitors to show the risk. In a base that chooses a service for price and transparency, restricting what used to be free does not create conversion, it creates distrust — and distrust in this product means opening a competitor's app.")}
      {p12("We won the argument, and the price of winning was accepting a slower conversion ramp at the start. That was an explicit choice: fewer subscriptions in month one in exchange for not burning the base that was already there.")}

      {h("real-savings", "Real savings instead of blocked access")}
      {p("With the paywall off the table, the question became: where does the plan show up?")}
      {p("The answer was to tie the subscription to benefits the user could calculate — kWh discount, store cashback, campaigns, priority support, connectivity, and vehicle statistics. That changed the pitch: instead of \"subscribe to get access\", the experience said \"see what you can save\".")}
      {p12("In practice, the plan only appeared where there was a number to show: in the cart with the discount already applied, at checkout, and after registering the vehicle — the moment the app finally knew how much that person spent per month.")}

      {img(miioDecisao, "Profile screen for a non-subscriber", "A non-subscriber sees how much subscribers save on average per month (+€21.60) before any purchase request. The argument is arithmetic, not a blocked feature.")}

      {h("subscription-states", "A subscription is not a screen, it's thirteen states")}
      {p("The easy mistake here is to design the plans screen and think the work is done. The real surface was different: user without a plan, on a trial, with a pending payment, with a subscription processing, with a subscribe error, with an active plan, on an annual plan, with a discount applied in the cart, and someone who started subscribing and gave up halfway.")}
      {p12("The critical states are not the successful ones, they are the limbo ones: pending payment and subscription processing, where the user does not know whether they have the benefit right now. Those are the states where the journey had to be most explicit — what already happened, what is missing, and what happens to the discount meanwhile — and that is what keeps a subscription from turning into a support ticket.")}

      {img(miioHeader, "miio plan selection screen", "Plans screen: monthly and annual side by side, each one stating the kWh discount and what it saves — including the €0.00 tier, which exists to let the connectivity benefit prove itself before it is charged for.")}

      {h("connected-car", "The connected car became the sales argument")}
      {p("Connecting to the vehicle brought battery, consumption, performance, and statistics into the app.")}
      {p12("That solved conversion from the side door: instead of arguing that the plan was worth it, the app started showing the user things about their own car they did not know. Value was demonstrated before the purchase request — which is the only way non-aggressive monetization works.")}

      {img(miioMone, "Consumption and vehicle connection screen", "With the car connected, the app shows the session in progress, the battery level, and the cost accumulating in real time — the data that makes the plan's savings verifiable by the user.")}

      {h("results", "2,000 subscribers and a 31% faster sign-up")}
      {statsGrid([
        { value: "2,000", label: "subscribers to the plan after the beta" },
        { value: "-31%", label: "time in the sign-up journey" }
      ])}
      {p("2,000 people subscribed to the plan after going through the beta.")}
      {p("In parallel, in the onboarding work, the time of the sign-up journey dropped 31%, measured with Google Analytics in an A/B test.")}
      {p12("On the design system, I contributed alongside the area lead to the base the team adopted: typography, icons, the illustrations for feedback states (success, error, empty), the atoms, and the most-used complex components.")}

      {h("what-id-do-differently", "What I would do differently")}
      {p("The decision not to use a paywall was right, but I defended it with a market study when I could have defended it with data from the product itself.")}
      {p12("If I did it again today, I would instrument every touchpoint before discussing the model: which moment generates the most intent, which benefit converts, where people give up in the middle of subscribing.")}
    </>
  );

  return (
    <>
      {h("charging", "Cobrar por um app que era grátis")}
      {p("A miio é um app de recarga de veículos elétricos sediado em Portugal. Funcionava, era usado, e não gerava receita recorrente.")}
      {p12("O público torna isso mais difícil do que parece. Quem dirige elétrico compara preço de kWh centavo a centavo, acompanha consumo e escolhe o posto pelo custo. É gente que abre o app justamente porque ele é transparente. Cobrar errado não ia só converter mal — ia atacar a razão pela qual o app era aberto toda semana.")}

      {h("paywall", "O CEO queria paywall")}
      {p("A proposta em cima da mesa era monetização agressiva: bloquear o que já era gratuito e forçar a decisão de compra.")}
      {p("Eu e minha líder levamos um estudo de mercado e uma análise heurística de concorrentes para mostrar o risco. Numa base que escolhe o serviço por preço e transparência, restringir o que já era grátis não gera conversão, gera desconfiança — e desconfiança nesse produto significa abrir o app do concorrente.")}
      {p12("Ganhamos a discussão, e o preço de ganhá-la foi aceitar uma rampa de conversão mais lenta no começo. Foi uma escolha explícita: menos assinatura no primeiro mês em troca de não queimar a base que já estava lá.")}

      {h("real-savings", "Economia real no lugar de acesso bloqueado")}
      {p("Com o paywall fora, a pergunta virou: onde o plano aparece?")}
      {p("A resposta foi amarrar a assinatura a benefícios que o usuário conseguia calcular — desconto por kWh, cashback na loja, campanhas, suporte prioritário, conectividade e estatísticas do veículo. Isso mudou o argumento de venda: em vez de “assine para ter acesso”, a experiência passou a dizer “veja o que você pode economizar”.")}
      {p12("Na prática, o plano só aparecia onde havia número para mostrar: no carrinho com o desconto já aplicado, no checkout, e depois do cadastro do veículo — o momento em que o app finalmente sabia quanto aquela pessoa gastava por mês.")}

      {img(miioDecisao, "Tela de perfil de um usuário sem plano", "Quem não assina vê quanto os assinantes economizam em média por mês (+21,60 €) antes de qualquer pedido de compra. O argumento é aritmético, não uma função bloqueada.")}

      {h("subscription-states", "A assinatura não é uma tela, são treze estados")}
      {p("O erro fácil aqui é desenhar a tela de planos e achar que o trabalho acabou. A superfície real era outra: usuário sem plano, em trial, com pagamento pendente, com assinatura em processamento, com erro ao subscrever, com plano ativo, com plano anual, com desconto aplicado no carrinho, e quem começou a contratar e desistiu no meio.")}
      {p12("Os estados críticos não são os de sucesso, são os de limbo: pagamento pendente e assinatura em processamento, em que o usuário não sabe se tem ou não o benefício naquele momento. Foi neles que a jornada precisou ser mais explícita — o que já aconteceu, o que falta e o que acontece com o desconto enquanto isso — e é isso que evita que uma assinatura vire ticket de suporte.")}

      {img(miioHeader, "Tela de escolha de plano da miio", "Tela de planos: mensal e anual lado a lado, cada um declarando o desconto por kWh e o quanto economiza — inclusive o plano de 0,00 €, que existe para deixar a conectividade provar valor antes de ser cobrada.")}

      {h("connected-car", "O carro conectado virou o argumento de venda")}
      {p("A conexão com o veículo trouxe bateria, consumo, desempenho e estatísticas para dentro do app.")}
      {p12("Isso resolveu o problema de conversão por um caminho lateral: em vez de argumentar que o plano valia a pena, o app passava a mostrar ao usuário coisas sobre o próprio carro que ele não sabia. O valor ficava demonstrado antes do pedido de compra — que é a única forma de monetização não agressiva funcionar.")}

      {img(miioMone, "Tela de consumo e conexão com o veículo", "Com o carro conectado, o app mostra a sessão em curso, o nível de bateria e o custo correndo em tempo real — o dado que torna a economia do plano verificável pelo usuário.")}

      {h("results", "2.000 assinantes e um cadastro 31% mais rápido")}
      {statsGrid([
        { value: "2.000", label: "assinantes do plano depois do beta" },
        { value: "-31%", label: "no tempo da jornada de cadastro" }
      ])}
      {p("2.000 pessoas assinaram o plano depois de passar pelo beta.")}
      {p("Em paralelo, no trabalho de onboarding, o tempo da jornada de cadastro caiu 31%, medido por Google Analytics em teste A/B.")}
      {p12("No design system, contribuí junto com a líder da área na base que o time passou a usar: tipografia, ícones, as ilustrações dos estados de feedback (sucesso, erro, vazio), os átomos e os componentes complexos de maior uso.")}

      {h("what-id-do-differently", "O que eu faria diferente")}
      {p("A decisão de não usar paywall foi certa, mas eu a defendi com estudo de mercado quando poderia tê-la defendido com dado do próprio produto.")}
      {p12("Se refizesse hoje, instrumentaria cada ponto de contato antes de discutir o modelo: qual momento gera mais intenção, qual benefício converte, onde a pessoa desiste no meio da contratação.")}
    </>
  );
}


export function getTembiciContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("two-users", "Two users, one bike")}
      {p("Tembici was born for urban mobility: you take a bike from a station, ride for 20 minutes, return it at another. During the pandemic that behavior collapsed and delivery demand exploded. The partnership with iFood came, and delivery riders started using the same fleet.")}
      {p("But a delivery rider is not a casual cyclist with a higher frequency. They take the bike for up to 4 hours, every day, as a work tool. Both were in the same pickup system, competing for the same asset, with incompatible needs.")}
      {p12("The result showed up in the fleet: dead battery, flat tire, broken seat. Maintenance and replacement were eating the operation, and the experience of the general public got worse alongside it — whoever arrived at a station found a broken bike.")}

      {img(temProblema, "Tembici usage diagram", "Leisure and commuting rides collapsed during the pandemic and delivery riders took their place on the same orange fleet. The red bike is what came out of the decision described below.")}

      {h("research", "What 50 forms and 9 conversations showed")}
      {p("The hypothesis started as a complaint: in our pain-gathering ritual, the delivery squad brought grievances about the quality of the bikes on offer. It could have become a maintenance backlog item.")}
      {p("I went after the data first. I cross-referenced usage and maintenance metrics with a quantitative survey that got more than 50 responses, and ran 9 interviews with delivery riders to understand the work routine behind the numbers.")}
      {p12("What showed up was not a bike quality problem. It was a model problem: the same bike serving a 20-minute ride once a week was sustaining shifts of up to 4 hours a day, with the same pickup logic, the same availability assumptions, and the same maintenance cycle. No repair backlog would fix that.")}

      {h("workshop", "The workshop that split the fleets")}
      {p("There was no fight. There was a workshop.")}
      {p("I brought the reading of the data and the interviews to a session with business, operations, customer service, and engineering. The hypothesis of fully separating the two operations — different fleet, different pickup flow, different usage logic — was built and voted on there, by every area in the room.")}
      {p12("Getting there that way was deliberate: this decision was expensive and would not survive if it came only from the product team. It meant giving up autonomous pickup at stations, which was the original product's main appeal, and taking on a physical pickup point, document checks, and people in the operation. We traded convenience for control, with everyone who would pay that bill in the room.")}

      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673071380377&embedMode=view_only_without_ui&embedId=517565179592", "The diagnosis taken into the workshop: where the two journeys overlap and what each audience actually needs from the same asset.")}

      {h("manual-mvp", "We validated with Google Forms before writing code")}
      {p("Before building anything, we tested the hypothesis with an entirely manual operation.")}
      {p("The first model ran on Google Forms and Google Sheets. We selected delivery riders by usage behavior — heavy users, the ones putting the most pressure on the operation. They filled in the form, someone reviewed the data by hand and, if approved, the rider picked the bike up at a support point, with document checks and in-person guidance. They kept the bike for a week.")}
      {p12("That confirmed there was real demand and that separating professional from casual use made sense. But what mattered more was what the spreadsheet revealed: how many people it took to keep one person pedaling. Registration, approval, pickup, and follow-up were all manual. The model worked and did not scale.")}

      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673603693435&embedMode=view_only_without_ui&embedId=334270980465", "The manual MVP mapped end to end: every step in this flow was a person, which is exactly what made the model impossible to scale.")}

      {h("into-the-app", "From the spreadsheet into the app they already used")}
      {p("With the hypothesis validated, the challenge became turning a manual operation into a product.")}
      {p("The decision was not to create a new channel. The rider already opened the iFood Pedal app every day — the product went in there, in the \"Bike pra Você\" area, instead of competing for one more icon on their screen.")}
      {p("The hard part was not the plan screen. It was that the journey had a leg outside the digital: the rider had to bring documents to a physical point and leave with a bike. That forced the interface to be explicit about things an app normally does not have to say — what to bring, where to go, what happens if the document is rejected.")}
      {p12("The most delicate states were the blocking ones — pending documentation, rejected registration — because there the rider does not lose a screen, they lose a week of work. Those states had to state the reason and the next step, not just the outcome.")}

      {img(temMockup, "iFood Pedal app screens", "\"Bike pra Você\" lives inside the app the rider already opens every day, and the pickup ends in a QR Code with a timer, name, and ID number — the interface working as a document for the operator at the physical point.")}

      {embedIframe("https://embed.figma.com/proto/v65YY7OjnfpFDJkBRXsQWG/iFood---Entregador?node-id=4731-28401&p=f&viewport=6114%2C682%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4731%3A28401&show-proto-sidebar=1&page-id=4731%3A23943&embed-host=share", "Navigable prototype of the journey, used in usability testing and in validation with operations, customer service, and engineering.")}

      {h("cut-scope", "What was cut to make the deadline")}
      {p("Automated registration.")}
      {p("It was exactly the piece that took the manual operation out of the path, and it did not fit in the development time we had. We shipped with registration analysis still done by hand, which meant the operation stayed in the middle of every approval — the problem the MVP had just proven did not scale.")}
      {p12("I logged it as technical and experience debt, with the automated flow mapped and documented for whenever there was room in the roadmap.")}
      {note("Team: PM, 1 front-end, 2 back-ends, 1 QA, a cross content designer, and me as the only product designer.")}

      {h("results", "R$1M/month and 72% fewer broken bikes")}
      {statsGrid([
        { value: "~R$1M", label: "saved per month, average of the first 6 months" },
        { value: "-72%", label: "maintenance incidents on the fleet" },
        { value: "10 mo", label: "to reach breakeven" }
      ])}
      {p("In the first 6 months of the new model, average savings were approximately R$1M per month in maintenance, pickup operations, and bike replacement.")}
      {p("The problems that started the project — dead battery, flat tire, broken seat — dropped 72%.")}
      {p("The operation reached breakeven in about 10 months.")}
      {p12("To be precise about what is mine in that: the savings came from the change in operating model, not from a screen. What I did was the research that supported the hypothesis, the workshop that turned it into a company decision, and the journey that made the new model operable at scale — without which it would have kept running on a spreadsheet, the way the MVP showed it could not be sustained.")}

      {h("takeaways", "What I take from this project")}
      {p("Digital products do not exist apart from operations. In contexts with logistics, physical assets, and multiple stakeholders, a good experience depends as much on the structure holding the service up as on the interface.")}
      {p12("It also became clear that different users should not be forced into the same product logic. The delivery rider had needs, usage frequency, and expectations very different from the traditional B2C user. Treating that audience as a variation of the same user would have been a strategic mistake.")}
    </>
  );

  return (
    <>
      {h("two-users", "Dois usuários, uma bicicleta")}
      {p("A Tembici nasceu para mobilidade urbana: você tira a bike numa estação, anda 20 minutos, devolve em outra. Na pandemia esse comportamento despencou e a demanda por delivery explodiu. Veio a parceria com o iFood, e entregadores passaram a usar a mesma frota.")}
      {p("Só que um entregador não é um ciclista casual com mais frequência. Ele pega a bicicleta por até 4 horas, todo dia, como ferramenta de trabalho. Os dois estavam no mesmo sistema de retirada, disputando o mesmo ativo, com necessidades incompatíveis.")}
      {p12("O resultado aparecia na frota: bicicleta sem bateria, pneu furado, banco quebrado. A manutenção e a reposição comiam a operação, e a experiência do público geral piorava junto — quem chegava na estação encontrava bike quebrada.")}

      {img(temProblema, "Diagrama de uso das bicicletas Tembici", "Lazer e cotidiano despencaram na pandemia e o entregador entrou no lugar deles, na mesma frota laranja. A bike vermelha é o que saiu da decisão descrita abaixo.")}

      {h("research", "O que 50 formulários e 9 conversas mostraram")}
      {p("A hipótese começou como reclamação: a squad de entregadores trazia, no nosso rito de levantamento de dores, queixas sobre a qualidade das bicicletas ofertadas. Podia ter virado um item de backlog de manutenção.")}
      {p("Fui atrás dos dados antes. Cruzei as métricas de uso e de manutenção com uma pesquisa quantitativa que teve mais de 50 respostas, e conduzi 9 entrevistas com entregadores para entender a rotina de trabalho por trás dos números.")}
      {p12("O que apareceu não era um problema de qualidade da bicicleta. Era um problema de modelo: a mesma bike que atendia uma viagem de 20 minutos por semana estava sustentando jornadas de até 4 horas por dia, com a mesma lógica de retirada, a mesma premissa de disponibilidade e o mesmo ciclo de manutenção. Nenhum backlog de conserto resolveria isso.")}

      {h("workshop", "O workshop que separou as frotas")}
      {p("Não houve briga. Houve um workshop.")}
      {p("Levei a leitura dos dados e das entrevistas para uma sessão com negócio, operação, atendimento e engenharia. A hipótese de separar completamente as duas operações — outra frota, outro fluxo de retirada, outra lógica de uso — foi construída e votada ali, por todas as áreas presentes.")}
      {p12("Chegar assim foi de propósito: essa decisão custava caro e não sobreviveria se saísse só do time de produto. Ela significava abrir mão da retirada autônoma nas estações, que era o principal atrativo do produto original, e assumir ponto físico de retirada, conferência de documento e gente na operação. Trocamos conveniência por controle, com todo mundo que ia pagar essa conta na sala.")}

      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673071380377&embedMode=view_only_without_ui&embedId=517565179592", "O diagnóstico levado para o workshop: onde as duas jornadas se sobrepõem e o que cada público precisa do mesmo ativo.")}

      {h("manual-mvp", "Validamos com Google Forms antes de escrever código")}
      {p("Antes de construir qualquer coisa, testamos a hipótese com uma operação inteiramente manual.")}
      {p("O primeiro modelo rodava em Google Forms e Google Sheets. Selecionamos entregadores pelo comportamento de uso — heavy users, os que mais pressionavam a operação. Eles preenchiam o formulário, alguém analisava os dados à mão e, se aprovado, o entregador retirava a bicicleta num ponto de apoio, com conferência de documentação e orientação presencial. Ficava com a bike por uma semana.")}
      {p12("Isso confirmou que havia demanda real e que separar o uso profissional do casual fazia sentido. Mas o que interessou mais foi o que a planilha revelou: quanta gente era necessária para manter uma pessoa pedalando. Cadastro, aprovação, retirada e acompanhamento eram todos manuais. O modelo funcionava e não escalava.")}

      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673603693435&embedMode=view_only_without_ui&embedId=334270980465", "O MVP manual mapeado ponta a ponta: cada etapa desse fluxo era uma pessoa, e é exatamente isso que tornava o modelo insustentável em escala.")}

      {h("into-the-app", "Da planilha para dentro do app que eles já usavam")}
      {p("Com a hipótese validada, o desafio virou transformar operação manual em produto.")}
      {p("A decisão foi não criar um canal novo. O entregador já abria o app iFood Pedal todo dia — o produto entrou lá dentro, na área “Bike pra Você”, em vez de disputar mais um ícone na tela dele.")}
      {p("A parte difícil não foi a tela do plano. Foi que a jornada tinha uma perna fora do digital: o entregador precisava levar documento a um ponto físico e sair de lá com uma bicicleta. Isso obrigava a interface a ser explícita sobre coisas que um app normalmente não precisa dizer — o que levar, onde ir, o que acontece se o documento for recusado.")}
      {p12("Os estados mais delicados eram os de bloqueio — documentação pendente, cadastro reprovado —, porque ali o entregador não perde uma tela, perde a semana de trabalho. Esses estados precisavam dizer o motivo e o próximo passo, não apenas o resultado.")}

      {img(temMockup, "Telas do app iFood Pedal", "O “Bike pra Você” vive dentro do app que o entregador já abre todo dia, e a retirada termina em um QR Code com contador, nome e CPF — a interface funcionando como documento para o operador no ponto físico.")}

      {embedIframe("https://embed.figma.com/proto/v65YY7OjnfpFDJkBRXsQWG/iFood---Entregador?node-id=4731-28401&p=f&viewport=6114%2C682%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4731%3A28401&show-proto-sidebar=1&page-id=4731%3A23943&embed-host=share", "Protótipo navegável da jornada, usado nos testes de usabilidade e na validação com operação, atendimento e engenharia.")}

      {h("cut-scope", "O que ficou de fora para caber no prazo")}
      {p("O cadastro automatizado.")}
      {p("Era exatamente a peça que tirava a operação manual do caminho, e não coube no tempo de desenvolvimento que tínhamos. Entregamos com a análise de cadastro ainda sendo feita à mão, o que significava que a operação continuava no meio de cada aprovação — o problema que o MVP tinha acabado de provar que não escalava.")}
      {p12("Registrei como dívida técnica e de experiência, com o mapa do fluxo automatizado documentado para quando houvesse espaço no roadmap.")}
      {note("Time: PM, 1 front-end, 2 back-ends, 1 QA, um content designer cross e eu como único product designer.")}

      {h("results", "R$1M/mês e 72% menos bicicleta quebrada")}
      {statsGrid([
        { value: "~R$1M", label: "economizados por mês, média dos 6 primeiros meses" },
        { value: "-72%", label: "ocorrências de manutenção na frota" },
        { value: "10 m", label: "para atingir o breakeven" }
      ])}
      {p("Nos primeiros 6 meses de operação do novo modelo, a economia média foi de aproximadamente R$1M por mês em manutenção, operação de retirada e reposição de bicicletas.")}
      {p("Os problemas que originaram o projeto — bateria descarregada, pneu furado, banco quebrado — caíram 72%.")}
      {p("A operação atingiu breakeven em cerca de 10 meses.")}
      {p12("Sendo preciso sobre o que é meu nisso: a economia veio da mudança de modelo operacional, não de uma tela. O que eu fiz foi a pesquisa que sustentou a hipótese, o workshop que a transformou em decisão de empresa e a jornada que tornou o novo modelo operável em escala — sem a qual ele teria continuado rodando em planilha, do jeito que o MVP mostrou que não dava para sustentar.")}

      {h("takeaways", "O que eu levo desse projeto")}
      {p("Produtos digitais não existem isolados da operação. Em contextos com logística, ativos físicos e múltiplos stakeholders, uma boa experiência depende tanto da estrutura que sustenta o serviço quanto da interface.")}
      {p12("Também ficou claro que usuários diferentes não devem ser forçados dentro da mesma lógica de produto. O entregador tinha necessidades, frequência de uso e expectativas muito diferentes do usuário B2C tradicional. Tratar esse público como uma variação do mesmo usuário seria um erro estratégico.")}
    </>
  );
}
