import { ReactNode } from 'react';
import { Lang } from './i18n.tsx';

import finProblema from '../images/Finvity/finProblema.webp';
import finACDC from '../images/Finvity/finACDC.webp';
import finProduto from '../images/Finvity/finProduto.webp';
import finSite from '../images/Finvity/finSite.webp';
import miioHeader from '../images/miio/miioHeader.webp';
import miioDecisao from '../images/miio/miioDecisao.webp';
import miioMone from '../images/miio/miioMone.webp';

import temMockup from '../images/tembici/temMockup.webp';
import temProblema from '../images/tembici/temProblema.webp';

const img = (src: string, alt: string) => (
  <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden mb-12">
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </div>
);

const embedIframe = (src: string) => (
  <div className="w-full rounded-2xl border border-[var(--glass-border)] overflow-hidden mb-12 bg-[var(--bg-alt)]">
    <iframe className="w-full aspect-video" src={src} frameBorder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>
  </div>
);

const h = (t: string) => <h3 id={t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')} className="text-2xl font-bold text-[var(--text-primary)] mb-6 mt-8 scroll-mt-24">{t}</h3>;
const p = (t: string, mb = 4) => <p className={`mb-${mb}`}>{t}</p>;
const p12 = (t: string) => <p className="mb-12">{t}</p>;


const ul = (items: string[]) => (
  <ul className="list-disc pl-6 space-y-2 mb-12">
    {items.map((item, i) => <li key={i} className="text-[var(--text-primary)]">{item}</li>)}
  </ul>
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

      {h("Executive summary")}
      {p("Finvity is a SaaS platform for wealth and succession management. The product needs to handle a naturally complex domain: family structure, wealth, debts, succession, risks, holding companies, tax intelligence, financial projections, and reports.")}
      {p12("The challenge was not just to improve the interface. It was to organize a system where every registered data could impact multiple future analyses. The work involved redesigning flows, structuring modules, improving data reading, evolving the platform's visual consistency, and aligning the brand's external positioning with the product's new moment.")}

      {h("Context")}
      {p("Finvity users deal with high-impact decisions: succession planning, wealth organization, financial risks, tax simulations, and reports for decision-making.")}
      {p("In this context, clarity is not just an aesthetic issue. Poorly organized data, a confusing visual hierarchy, or an unpredictable flow can increase cognitive load and make important analyses difficult.")}
      {p12("The product needed to evolve to support more complexity without appearing more complex.")}

      {h("Challenge")}
      {p("The main challenge was to connect scattered information into a coherent experience.")}
      {p("The platform needed to allow different forms of data entry, organize financial and family information, feed simulations, and transform all this into clear reading for decision-making.")}
      {p12("At the same time, the product needed to maintain visual consistency, navigational predictability, and a more scalable base for future evolution.")}

      {img(finProblema, "Finvity Problem")}

      {h("My role")}
      {p("I acted as Product Designer in the platform's evolution, working on flows, dashboards, simulations, data visualization, information architecture, and interface consistency.")}
      {p("I also contributed to the evolution of Finvity's visual identity and the redesign of the institutional website, aligning the brand's external presence to the product's proposition: transforming complex wealth, succession, and tax management topics into a clearer, more reliable, and technological experience.")}
      {p12("Additionally, I participated in organizing a more consistent visual and technical base, using reusable components and exploring AI in the design and development process to accelerate variations, validate paths, and bridge the gap between prototyping and implementation.")}

      {h("Main design decisions")}

      {h("1. Organize complexity, do not hide it")}
      {p("In a wealth and succession product, oversimplifying can lead to a loss of precision. The decision was to organize complexity progressively, creating hierarchies, groupings, and flows that helped the user understand what needed to be done without erasing the domain's depth.")}

      {img(finProduto, "Organizing Finvity's complexity")}

      {h("2. Create a database that feeds multiple modules")}
      {p("Data entry was designed not to serve just one isolated screen. Personal, family, wealth, and tax information needed to feed analyses of risks, wealth evolution, succession, holding companies, donations, and reports.")}
      {p12("This decision changed the product's logic: registration was no longer just a bureaucratic step and became the foundation of the analyses.")}

      {img(finACDC, "Finvity Data Entry")}

      {h("3. Bring complex flows closer to known mental models")}
      {p12("In areas like tax intelligence and tax return data import, part of the logic was brought closer to structures the user already recognizes. This reduced the need for learning and made the process more natural for professionals who already deal with this type of information.")}

      {h("4. Improve data reading to support decision-making")}
      {p("Dashboards, charts, and projections were structured to help the user interpret scenarios, not just visualize numbers.")}
      {p12("The intention was to transform information such as total wealth, debts, risk, income, expenses, ITCMD (state tax), inventory, and projections into a more actionable reading.")}

      {h("5. Align product, visual identity, and institutional website")}
      {p12("The platform's evolution also required a more coherent external presence. The institutional website and visual identity were redesigned to communicate more confidence, clarity, and sophistication, reducing the gap between the brand's promise and the actual product experience.")}

      {img(finSite, "Finvity Institutional Site")}

      {h("Solution")}
      {p("The solution involved the evolution of different product layers:")}
      {ul([
        "registration and data import flows;",
        "family structure organization;",
        "wealth and wealth evolution modules;",
        "financial, wealth, and succession risk analyses;",
        "tax intelligence;",
        "succession, inventory, donation, and holding simulations;",
        "dashboards and visualization of complex data;",
        "reports and visual customization;",
        "interface consistency and reusable components;",
        "redesign of the visual identity and institutional website."
      ])}
      {p12("The focus was to create an experience that helped specialists work with more clarity, reducing manual effort and making complex scenarios more understandable.")}

      {h("Result")}
      {p("The platform gained more consistency across flows, greater clarity in reading information, and a base better prepared for evolution.")}
      {p("In practice, the work contributed to:")}
      {ul([
        "reducing manual effort in registration and data organization steps;",
        "improving consistency between platform modules;",
        "making wealth, succession, and tax analyses more understandable;",
        "bringing interface, data logic, and decision-making closer together;",
        "accelerating exploration and implementation with a more systematized visual base;",
        "aligning Finvity's external positioning with the product's sophistication."
      ])}

      {h("Learnings / Next Steps")}
      {p("This project reinforced that, in complex products, clarity does not come from removing information. It comes from structuring the information the right way.")}
      {p("It also became evident that the database defines the quality of the experience. When the initial modeling doesn't consider future scenarios, the interface inherits structural limitations.")}
      {p12("If I were to redesign the product's foundation today, I would think from the beginning about more flexible family and wealth structures, supporting multiple entities, relationships, and analysis scenarios with less dependence on later adaptations.")}
    </>
  );

  return (
    <>

      {h("Resumo executivo")}
      {p("A Finvity é uma plataforma SaaS voltada à gestão patrimonial e sucessória. O produto precisa lidar com um domínio naturalmente complexo: estrutura familiar, patrimônio, dívidas, sucessão, riscos, holding, inteligência tributária, projeções financeiras e relatórios.")}
      {p12("O desafio não era apenas melhorar a interface. Era organizar um sistema em que cada dado cadastrado poderia impactar múltiplas análises futuras. O trabalho envolveu redesenhar fluxos, estruturar módulos, melhorar a leitura dos dados, evoluir a consistência visual da plataforma e alinhar o posicionamento externo da marca com o novo momento do produto.")}

      {h("Contexto")}
      {p("Usuários da Finvity lidam com decisões de alto impacto: planejamento sucessório, organização patrimonial, riscos financeiros, simulações tributárias e relatórios para tomada de decisão.")}
      {p("Nesse contexto, clareza não é apenas uma questão estética. Um dado mal organizado, uma hierarquia visual confusa ou um fluxo pouco previsível pode aumentar a carga cognitiva e dificultar análises importantes.")}
      {p12("O produto precisava evoluir para suportar mais complexidade sem parecer mais complexo.")}

      {h("Desafio")}
      {p("O principal desafio era conectar informações dispersas em uma experiência coerente.")}
      {p("A plataforma precisava permitir diferentes formas de entrada de dados, organizar informações financeiras e familiares, alimentar simulações e transformar tudo isso em leitura clara para tomada de decisão.")}
      {p12("Ao mesmo tempo, o produto precisava manter consistência visual, previsibilidade de navegação e uma base mais escalável para evolução futura.")}

      {img(finProblema, "Problema Finvity")}

      {h("Meu papel")}
      {p("Atuei como Product Designer na evolução da plataforma, trabalhando em fluxos, dashboards, simulações, visualização de dados, arquitetura da informação e consistência de interface.")}
      {p("Também contribuí para a evolução da identidade visual da Finvity e para o redesenho do site institucional, alinhando a presença externa da marca à proposta do produto: transformar temas complexos de gestão patrimonial, sucessória e tributária em uma experiência mais clara, confiável e tecnológica.")}
      {p12("Além disso, participei da organização de uma base visual e técnica mais consistente, usando componentes reutilizáveis e explorando IA no processo de design e desenvolvimento para acelerar variações, validar caminhos e aproximar protótipo e implementação.")}

      {h("Principais decisões de design")}

      {h("1. Organizar a complexidade, não esconder a complexidade")}
      {p("Em um produto patrimonial e sucessório, simplificar demais pode gerar perda de precisão. A decisão foi organizar a complexidade de forma progressiva, criando hierarquias, agrupamentos e fluxos que ajudassem o usuário a entender o que precisava fazer sem apagar a profundidade do domínio.")}

      {img(finProduto, "Organizar a complexidade")}

      {h("2. Criar uma base de dados que alimenta múltiplos módulos")}
      {p("A entrada de dados foi pensada para não servir apenas a uma tela isolada. Informações pessoais, familiares, patrimoniais e tributárias precisavam alimentar análises de riscos, evolução patrimonial, sucessão, holding, doações e relatórios.")}
      {p12("Essa decisão mudou a lógica do produto: o cadastro deixou de ser apenas uma etapa burocrática e passou a ser a fundação das análises.")}

      {img(finACDC, "Entrada de dados Finvity")}

      {h("3. Aproximar fluxos complexos de modelos mentais conhecidos")}
      {p12("Em áreas como inteligência tributária e importação de dados do imposto de renda, parte da lógica foi aproximada de estruturas que o usuário já reconhece. Isso reduziu a necessidade de aprendizado e tornou o processo mais natural para profissionais que já lidam com esse tipo de informação.")}

      {h("4. Melhorar leitura de dados para apoiar decisão")}
      {p("Dashboards, gráficos e projeções foram estruturados para ajudar o usuário a interpretar cenários, não apenas visualizar números.")}
      {p12("A intenção era transformar informações como patrimônio total, dívidas, risco, renda, despesas, ITCMD, inventário e projeções em uma leitura mais acionável.")}

      {h("5. Alinhar produto, identidade visual e site institucional")}
      {p12("A evolução da plataforma exigia também uma presença externa mais coerente. O site institucional e a identidade visual foram redesenhados para comunicar mais confiança, clareza e sofisticação, reduzindo a distância entre a promessa da marca e a experiência real do produto.")}

      {img(finSite, "Site institucional Finvity")}

      {h("Solução")}
      {p("A solução envolveu a evolução de diferentes camadas do produto:")}
      {ul([
        "fluxos de cadastro e importação de dados;",
        "organização da estrutura familiar;",
        "módulos de patrimônio e evolução patrimonial;",
        "análises de riscos financeiros, patrimoniais e sucessórios;",
        "inteligência tributária;",
        "simulações de sucessão, inventário, doação e holding;",
        "dashboards e visualização de dados complexos;",
        "relatórios e personalização visual;",
        "consistência de interface e componentes reutilizáveis;",
        "redesenho da identidade visual e do site institucional."
      ])}
      {p12("O foco foi criar uma experiência que ajudasse especialistas a trabalhar com mais clareza, reduzindo esforço manual e tornando cenários complexos mais compreensíveis.")}

      {h("Resultado")}
      {p("A plataforma ganhou mais consistência entre fluxos, maior clareza na leitura das informações e uma base mais preparada para evolução.")}
      {p("Na prática, o trabalho contribuiu para:")}
      {ul([
        "reduzir esforço manual em etapas de cadastro e organização de dados;",
        "melhorar a consistência entre módulos da plataforma;",
        "tornar análises patrimoniais, sucessórias e tributárias mais compreensíveis;",
        "aproximar interface, lógica de dados e tomada de decisão;",
        "acelerar exploração e implementação com uma base visual mais sistematizada;",
        "alinhar o posicionamento externo da Finvity com a sofisticação do produto."
      ])}

      {h("Aprendizados / próximos passos")}
      {p("Esse projeto reforçou que, em produtos complexos, clareza não nasce de remover informação. Nasce de estruturar a informação da forma certa.")}
      {p("Também ficou evidente que a base de dados define a qualidade da experiência. Quando a modelagem inicial não considera cenários futuros, a interface passa a herdar limitações estruturais.")}
      {p12("Se eu redesenhasse a fundação do produto hoje, pensaria desde o início em estruturas familiares e patrimoniais mais flexíveis, suportando múltiplas entidades, relações e cenários de análise com menos dependência de adaptações posteriores.")}
    </>
  );
}

export function getMiioContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>

      {h("Executive summary")}
      {p("miio is a B2C electric mobility app used for charging electric vehicles. The product already solved an important functional need, but needed to evolve its monetization model without compromising user trust.")}
      {p12("The challenge was to create a subscription experience that didn't feel like just another charge. The plan needed to demonstrate value within real usage: savings on charging, connectivity with the vehicle, consumption insights, store benefits, and priority support.")}

      {h("Context")}
      {p("In electric mobility, price and trust are critical factors. The user compares costs, tracks consumption, seeks predictability, and expects transparency.")}
      {p12("Therefore, monetizing the product couldn't be treated as simply inserting banners, pop-ups, or aggressive paywalls. If the experience felt forced, the risk was reducing trust exactly in a product that depends on clarity to generate recurrence.")}

      {img(miioHeader, "miio Problem")}

      {h("Challenge")}
      {p("The challenge was to balance two needs:")}
      {ul([
        "create a recurring revenue model;",
        "preserve the user's perception of value, transparency, and control."
      ])}
      {p("The central question of the project was:")}
      {p12("How do we present a paid subscription without interrupting the journey and without transforming the app into an overly commercial experience?")}

      {h("My role")}
      {p("I worked on designing mobile flows related to subscriptions, benefits, checkout, communication, and vehicle connection.")}
      {p("My work involved mapping moments of highest intent, designing screens and payment states, organizing benefit messages, predicting error and recovery scenarios, and connecting the plan's proposition to the user's real behavior in the app.")}
      {p12("I also worked on onboarding improvements and the evolution of the Design System, collaborating with engineering to maintain consistency, reduce rework, and accelerate delivery.")}

      {h("Main design decisions")}
      {h("1. Don't sell the plan out of context")}
      {p("The decision was to avoid an aggressive monetization approach. Instead of presenting the subscription as a disconnected commercial layer, the plan was inserted in moments where the benefit made sense.")}
      {p12("The user shouldn't just see that a plan exists. They should understand what they could save or unlock at that moment.")}

      {h("2. Use real savings as a conversion argument")}
      {p("The subscription was connected to concrete benefits, such as discount per kWh, store cashback, campaigns, priority support, connectivity, and vehicle statistics.")}
      {p12("This changed the sales pitch: instead of \"subscribe to access\", the experience communicated \"see what you can win or save\".")}

      {img(miioDecisao, "miio Decision")}

      {h("3. Create a complete journey, not just a subscription screen")}
      {p("The experience needed to cover different states:")}
      {ul([
        "user without a plan;",
        "user on a trial;",
        "user with pending payment;",
        "subscription processing;",
        "subscription error;",
        "active plan;",
        "annual plan;",
        "discount applied in the cart;",
        "communication to resume incomplete subscription."
      ])}
      {p12("This system view was essential to avoid gaps in the journey.")}

      {h("4. Integrate monetization, checkout, and communication")}
      {p("The plan appeared in the cart, at checkout, in payment flows, in communications, and in moments related to vehicle registration.")}
      {p12("This integration helped maintain continuity: the user saw the benefit, understood the plan, could subscribe, validate payment, and resume the process when necessary.")}

      {img(miioMone, "Complete subscription journey")}

      {h("5. Transform vehicle data into perceived value")}
      {p("Connecting with the vehicle added an important layer to the product: battery, consumption, performance, statistics, and insights.")}
      {p12("This reinforced the value of the subscription because it helped the user better understand their own vehicle and make more economical decisions.")}

      {h("Solution")}
      {p("The solution combined monetization, product, and communication into an integrated experience.")}
      {p("Flows and states were designed for:")}
      {ul([
        "presentation of plans;",
        "comparison of benefits;",
        "free trial;",
        "monthly and annual subscriptions;",
        "payment validation;",
        "error handling;",
        "subscription in processing;",
        "discount applied in cart;",
        "integration with store checkout;",
        "communication for users without a plan;",
        "recovery of uncompleted subscription;",
        "presentation of benefits after vehicle registration;",
        "connection with vehicle and visualization of consumption data."
      ])}
      {p12("The focus was to make the plan appear as a natural consequence of the journey, not an interruption.")}

      {h("Result")}
      {p("The project contributed to structuring a more sustainable monetization model, keeping the experience aligned with user behavior.")}
      {p12("Additionally, within the electric mobility work:")}

      {statsGrid([
        { value: "-31%", label: "onboarding friction" },
        { value: "+2,000", label: "users in beta phase" }
      ])}

      {ul([
        "the experience started to communicate benefits, savings, and connectivity better;",
        "the subscription journey gained more clarity in critical states of payment, error, and activation;",
        "the Design System evolved with components, tokens, and documentation to give more consistency to delivery."
      ])}

      {h("Learnings / Next Steps")}
      {p("This project reinforced that monetization is not just about charging for a feature. It is about building a perception of value before the conversion request.")}
      {p("When the product proves its value in the right context, the subscription ceases to seem like a barrier and starts functioning as a logical extension of the experience.")}
      {p12("If I were to evolve this project today, I would deepen the measurement by touchpoint: which moments generate more intent, which benefits convert best, and where the user abandons the subscription.")}
    </>
  );

  return (
    <>

      {h("Resumo executivo")}
      {p("A miio é um app B2C de mobilidade elétrica usado para carregamento de veículos elétricos. O produto já resolvia uma necessidade funcional importante, mas precisava evoluir seu modelo de monetização sem comprometer a confiança do usuário.")}
      {p12("O desafio era criar uma experiência de assinatura que não parecesse apenas uma cobrança adicional. O plano precisava demonstrar valor dentro do uso real: economia em carregamentos, conectividade com o veículo, insights de consumo, benefícios na loja e suporte prioritário.")}

      {h("Contexto")}
      {p("Em mobilidade elétrica, preço e confiança são fatores críticos. O usuário compara custos, acompanha consumo, busca previsibilidade e espera transparência.")}
      {p12("Por isso, monetizar o produto não poderia ser tratado como simplesmente inserir banners, pop-ups ou bloqueios agressivos. Se a experiência parecesse forçada, o risco era reduzir confiança justamente em um produto que depende de clareza para gerar recorrência.")}

      {img(miioHeader, "Problema miio")}

      {h("Desafio")}
      {p("O desafio era equilibrar duas necessidades:")}
      {ul([
        "criar um modelo de receita recorrente;",
        "preservar a percepção de valor, transparência e controle do usuário."
      ])}
      {p("A pergunta central do projeto era:")}
      {p12("Como apresentar uma assinatura paga sem interromper a jornada e sem transformar o app em uma experiência excessivamente comercial?")}

      {h("Meu papel")}
      {p("Atuei no design de fluxos mobile relacionados à assinatura, benefícios, checkout, comunicação e conexão com veículo.")}
      {p("Meu trabalho envolveu mapear momentos de maior intenção, desenhar telas e estados de pagamento, organizar mensagens de benefício, prever cenários de erro e recuperação, além de conectar a proposta do plano ao comportamento real do usuário no app.")}
      {p12("Também atuei em melhorias de onboarding e na evolução do Design System, colaborando com engenharia para manter consistência, reduzir retrabalho e acelerar entrega.")}

      {h("Principais decisões de design")}
      {h("1. Não vender o plano fora de contexto")}
      {p("A decisão foi evitar uma abordagem agressiva de monetização. Em vez de apresentar a assinatura como uma camada comercial desconectada, o plano foi inserido nos momentos em que o benefício fazia sentido.")}
      {p12("O usuário não deveria apenas ver que existe um plano. Ele deveria entender o que poderia economizar ou desbloquear naquele momento.")}

      {h("2. Usar economia real como argumento de conversão")}
      {p("A assinatura foi conectada a benefícios concretos, como desconto por kWh, cashback na loja, campanhas, suporte prioritário, conectividade e estatísticas do veículo.")}
      {p12("Isso mudou o argumento de venda: em vez de “assine para ter acesso”, a experiência comunicava “veja o que você pode ganhar ou economizar”.")}

      {img(miioDecisao, "Decisão miio")}

      {h("3. Criar uma jornada completa, não apenas uma tela de assinatura")}
      {p("A experiência precisou cobrir diferentes estados:")}
      {ul([
        "usuário sem plano;",
        "usuário com trial;",
        "usuário com pagamento pendente;",
        "assinatura em processamento;",
        "erro ao subscrever;",
        "plano ativo;",
        "plano anual;",
        "desconto aplicado no carrinho;",
        "comunicação para retomar assinatura não concluída."
      ])}
      {p12("Essa visão de sistema era essencial para evitar buracos na jornada.")}

      {h("4. Integrar monetização, checkout e comunicação")}
      {p("O plano aparecia no carrinho, no checkout, nos fluxos de pagamento, nas comunicações e em momentos relacionados ao cadastro de veículo.")}
      {p12("Essa integração ajudava a manter continuidade: o usuário via o benefício, entendia o plano, podia contratar, validar pagamento e retomar o processo quando necessário.")}

      {img(miioMone, "Jornada completa de assinatura")}

      {h("5. Transformar dados do veículo em percepção de valor")}
      {p("A conexão com o veículo adicionava uma camada importante ao produto: bateria, consumo, desempenho, estatísticas e insights.")}
      {p12("Isso reforçava o valor da assinatura porque ajudava o usuário a entender melhor o próprio veículo e tomar decisões mais econômicas.")}

      {h("Solução")}
      {p("A solução combinou monetização, produto e comunicação em uma experiência integrada.")}
      {p("Foram desenhados fluxos e estados para:")}
      {ul([
        "apresentação dos planos;",
        "comparação de benefícios;",
        "trial gratuito;",
        "contratação mensal e anual;",
        "validação de pagamento;",
        "tratamento de erro;",
        "assinatura em processamento;",
        "desconto aplicado no carrinho;",
        "integração com checkout da loja;",
        "comunicação para usuários sem plano;",
        "recuperação de assinatura não concluída;",
        "apresentação de benefícios após cadastro de veículo;",
        "conexão com veículo e visualização de dados de consumo."
      ])}
      {p12("O foco foi fazer o plano aparecer como uma consequência natural da jornada, não como uma interrupção.")}

      {h("Resultado")}
      {p("O projeto contribuiu para estruturar um modelo de monetização mais sustentável, mantendo a experiência alinhada ao comportamento do usuário.")}
      {p12("Além disso, dentro do trabalho em mobilidade elétrica:")}

      {statsGrid([
        { value: "-31%", label: "no onboarding" },
        { value: "+2.000", label: "usuários beta" }
      ])}

      {ul([
        "a experiência passou a comunicar melhor benefícios, economia e conectividade;",
        "a jornada de assinatura ganhou mais clareza em estados críticos de pagamento, erro e ativação;",
        "o Design System evoluiu com componentes, tokens e documentação para dar mais consistência à entrega."
      ])}

      {h("Aprendizados / próximos passos")}
      {p("Esse projeto reforçou que monetização não é apenas cobrar por uma funcionalidade. É construir percepção de valor antes do pedido de conversão.")}
      {p("Quando o produto prova valor no contexto certo, a assinatura deixa de parecer uma barreira e passa a funcionar como uma extensão lógica da experiência.")}
      {p12("Se eu evoluísse esse projeto hoje, aprofundaria a mensuração por ponto de contato: quais momentos geram mais intenção, quais benefícios convertem melhor e onde o usuário abandona a contratação.")}
    </>
  );
}


export function getTembiciContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>

      {h("Executive summary")}
      {p("During the pandemic, the growth of delivery completely changed the use of Tembici's shared bicycles. A product designed for short trips and leisure began to be used intensively by delivery riders, creating conflict between audiences, low availability at stations, and direct pressure on operations.")}
      {p12("The challenge was to transform this unplanned use into a viable product, without stalling validation by depending on development from the very first moment. The path was to start with a simple operational MVP, validate the model quickly, and then evolve into a more structured digital experience, integrated with physical operations.")}

      {h("Context")}
      {p("Tembici had a shared bicycle system primarily aimed at occasional urban commuting. With the increase in app deliveries, a new user profile started using the product much more intensely: delivery riders.")}
      {p("The problem wasn't just the increased use. It was different behaviors competing for the same system.")}
      {p12("Occasional users needed to find bicycles available for short trips. Delivery riders needed autonomy, predictability, and prolonged use to work. The same experience didn't serve either audience well.")}

      {img(temProblema, "Tembici Problem")}

      {h("Challenge")}
      {p("The challenge was to balance three forces at the same time:")}
      {ul([
        "reduce the financial and operational impact generated by improper use of the product;",
        "preserve the experience of traditional users;",
        "create a useful solution for delivery riders, who had a real and recurring need."
      ])}
      {p("The most obvious decision would be to block or restrict use by delivery riders. But that would ignore an important market signal: there was real demand for a product dedicated to this audience.")}
      {p12("The opportunity lay in transforming a problematic behavior into a new product line.")}

      {h("My role")}
      {p("I worked on designing the product experience for delivery riders, collaborating with Product, Operations, Engineering, and business stakeholders.")}
      {p("My work involved understanding the delivery rider's journey, mapping friction points in the operation, designing registration and activation flows, prototyping solutions, supporting validations, and evolving the experience into a more scalable model.")}
      {p12("I also participated in discussions about trade-offs between validation speed, experience quality, and operational capacity.")}

      {h("Main design decisions")}
      {h("1. Separate delivery rider behavior from the leisure product")}
      {p("The first step was recognizing that the problem wasn't just \"excessive use\". It was incompatibility of journeys.")}
      {p12("Delivery riders needed another value proposition: prolonged use, predictability, planned pickup, and dedicated rules. Therefore, the product was redesigned as a separate experience, not an adaptation of the existing model.")}

      {h("2. Validate the model before building the ideal solution")}
      {p("The company needed to react fast. Instead of waiting for a full digital solution, validation began with a simple MVP, using form registration, spreadsheet control, and manual operation.")}
      {p12("This decision accelerated learning, but came at a cost: as adoption grew, the operation became overloaded. This was a conscious trade-off between validation speed and scalability.")}

      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673603693435&embedMode=view_only_without_ui&embedId=334270980465")}

      {h("3. Transform the MVP into a more predictable digital journey")}
      {p("After validating demand, the focus shifted to reducing operational effort and providing more clarity to the delivery rider.")}
      {p12("The experience evolved into registration flows, document submission, payment, scheduling, check-in, pickup, and renewal. The goal was to make it explicit what the user needed to do, which step they were on, and what could block their plan access.")}

      {h("4. Integrate digital product and physical operation")}
      {p("Picking up a bicycle wasn't just an in-app step. It depended on a physical point, an operator, documents, payment, time, and availability.")}
      {p12("Therefore, the experience needed to connect the interface, operational rules, and real-world validations. The QR Code was a compromise solution: not the most invisible experience possible, but viable within the technical and operational limitations of the time.")}

      {img(temMockup, "Evolution to real product")}

      {h("Solution")}
      {p("The solution evolved from a manual MVP to a more structured product, with digital journeys connected to operations.")}
      {p("The experience now included:")}
      {ul([
        "registration and data review;",
        "phone validation;",
        "submission and correction of documentation;",
        "address registration;",
        "adding payment methods;",
        "scheduling pickup;",
        "check-in at the release point;",
        "presenting the QR Code to the operator;",
        "bicycle pickup;",
        "rules for use, return, and renewal."
      ])}
      {p12("The design focus was reducing uncertainty. The delivery rider needed to quickly understand what was missing to start pedaling, while the operation needed enough control to safely release bicycles.")}

      {h("Result")}
      {p("The project contributed to transforming a use that generated deficit and instability into a dedicated operation, with its own rules and greater predictability.")}
      {p12("Among the main results:")}
      
      {statsGrid([
        { value: "R$1M", label: "monthly deficit eliminated" },
        { value: "10m", label: "to reach breakeven" }
      ])}

      {ul([
        "improvement in NPS indicators;",
        "reduction of conflict between occasional users and delivery riders;",
        "greater operational predictability;",
        "evolution from a manual MVP to a more scalable digital product."
      ])}
      {p12("More than creating screens, the work helped redesign the relationship between product, operations, and business model.")}



      {h("Learnings / Next Steps")}
      {p("This project reinforced that a product doesn't just fail due to interface issues. Often, it fails because it tries to serve incompatible behaviors within the same logic.")}
      {p("It also showed that an MVP is not synonymous with a bad experience. An MVP can be simple and manual, as long as it makes clear what is being validated, what risks are assumed, and when it needs to evolve.")}
      {p12("If I were to evolve this project today, I would deepen the measurement of drop-off per step, average release time, and operational impact per flow, making the next decisions even more data-driven.")}
    </>
  );

  return (
    <>
      {h("Contexto")}
      {p("A Tembici nasceu oferecendo bicicletas compartilhadas para mobilidade urbana. O modelo original era voltado para o público geral: pessoas que usavam as bikes para lazer ou como parte do deslocamento diário, retirando e devolvendo bicicletas em estações espalhadas pela cidade.")}
      {p("Durante a pandemia, esse comportamento mudou de forma brusca. O uso das bicicletas pelo público geral caiu, enquanto a demanda por delivery cresceu. A partir desse contexto, surgiu uma parceria com o iFood para que entregadores também pudessem usar as bicicletas da Tembici.")}
      {p12("O problema é que, com o tempo, entregadores e usuários comuns passaram a disputar o mesmo ativo, no mesmo sistema de retirada, com necessidades completamente diferentes.")}

      {h("O problema")}
      {p("Os entregadores eram heavy users. Eles usavam as bicicletas por muito mais tempo, em rotinas intensas de trabalho, muitas vezes com planos de até 4 horas. Isso aumentava desgaste, manutenção, indisponibilidade e afetava diretamente a experiência do público geral.")}
      {p("Na prática, o mesmo produto estava tentando atender dois comportamentos incompatíveis:")}
      {ul([
        "usuários comuns, que faziam viagens curtas e ocasionais;",
        "entregadores, que dependiam da bicicleta como ferramenta de trabalho."
      ])}
      {p("Essa sobreposição gerava impacto em cadeia: bicicletas quebradas ou sem bateria, aumento no custo operacional, piora na percepção do serviço, queda de NPS e risco para indicadores estratégicos do negócio.")}
      {p12("A hipótese que construímos foi simples: se resolvêssemos melhor a experiência dos entregadores, também reduziríamos parte dos problemas vividos pelo público geral.")}
      {img(temProblema, "Diagrama de problema Tembici")}

      {h("Meu papel")}
      {p("Atuei como Product Designer no projeto, em parceria direta com o PM e com times de negócio, operação, atendimento e engenharia.")}
      {p("Minha atuação passou por:")}
      {ul([
        "análise de dados e pesquisas existentes;",
        "investigação da jornada dos entregadores;",
        "dinâmicas de cocriação com stakeholders;",
        "estruturação da jornada do novo produto;",
        "prototipação e testes de usabilidade;",
        "definição de fluxos, estados, mensagens e regras;",
        "documentação para desenvolvimento;",
        "acompanhamento pós-lançamento com olhar para operação, adoção e métricas."
      ])}
      {p12("O desafio não era apenas desenhar telas. Era redesenhar a lógica do serviço, conectando produto digital, operação física, ativos, atendimento e sustentabilidade financeira.")}

      {h("Diagnóstico")}
      {p("A primeira etapa foi entender por que a solução existente não escalava.")}
      {p("Analisamos métricas, dados de NPS, comportamento dos entregadores e impactos operacionais. Também realizamos pesquisas e conversas com entregadores para entender como eles usavam as bicicletas, quais fricções enfrentavam e o que tornava a solução atual insuficiente para a rotina de trabalho.")}
      {p("A partir disso, ficou claro que o problema não estava apenas na interface. O modelo operacional precisava mudar.")}
      {p12("A principal decisão foi separar os entregadores do público geral. Em vez de usar as mesmas bicicletas e as mesmas estações, os entregadores passariam a ter uma experiência própria, com outro tipo de bicicleta, outro fluxo de retirada e outra lógica de uso.")}
      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673071380377&embedMode=view_only_without_ui&embedId=517565179592")}

      {h("MVP")}
      {p("Antes de construir uma solução completa, validamos a hipótese com um MVP operacional.")}
      {p("O primeiro modelo funcionava com Google Forms e Google Sheets. Entregadores eram pré-selecionados com base no comportamento de uso, principalmente heavy users, que tinham maior impacto na operação atual. Depois, passaram a se cadastrar por formulário, ter seus dados analisados e, se aprovados, retirar a bicicleta em um ponto de apoio.")}
      {p("A bicicleta deixava de ser retirada de forma autônoma nas estações e passava a ser retirada em um local específico, com conferência de documentação e orientação operacional. O entregador ficava com a bike por uma semana.")}
      {p("Esse MVP ajudou a validar três pontos importantes:")}
      {ul([
        "havia demanda real dos entregadores;",
        "separar o uso profissional do uso comum fazia sentido;",
        "o modelo poderia reduzir pressão sobre as bicicletas do público geral."
      ])}
      {p12("Mas o MVP também deixou claro que a operação manual não era sustentável. Havia muitas pessoas envolvidas, muita dependência de planilhas e um fluxo pouco escalável para cadastro, aprovação, retirada e acompanhamento do plano.")}
      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673603693435&embedMode=view_only_without_ui&embedId=334270980465")}

      {h("Do MVP para o produto")}
      {p("Com a hipótese validada, o desafio passou a ser transformar uma operação manual em um produto escalável.")}
      {p("A solução foi criar uma experiência dentro do app iFood Pedal, que já fazia parte da rotina dos entregadores. Em vez de criar um novo canal, inserimos o produto onde o usuário já estava.")}
      {p("Dentro do app, o entregador acessava a área “Bike pra Você”, onde podia:")}
      {ul([
        "conhecer o plano;",
        "entender como funcionava a retirada da bicicleta;",
        "iniciar ou revisar o cadastro;",
        "enviar documentos;",
        "acompanhar pendências;",
        "receber aprovação ou reprovação;",
        "pagar o plano;",
        "agendar ou realizar a retirada;",
        "escanear o QR Code da bicicleta;",
        "gerenciar o plano semanal;",
        "solicitar suporte em caso de problema."
      ])}
      {p12("A experiência precisava ser simples, mas também precisava lidar com muitos estados operacionais: cadastro incompleto, documentação pendente, aprovação, pagamento, retirada, plano ativo, erro, suporte e restrições de uso.")}
      {embedIframe("https://miro.com/app/live-embed/uXjVKMHscvA=/?focusWidget=3458764673603812160&embedMode=view_only_without_ui&embedId=35061022419")}

      {h("Design da experiência")}
      {p("O ponto central do design foi reduzir a dependência da operação manual sem remover os controles necessários para o negócio.")}
      {p("Para isso, estruturei a jornada em etapas claras: entrada no produto, explicação do funcionamento, cadastro, validação, pagamento, retirada e gestão do plano.")}
      {p("Também trabalhei nos textos e estados de interface para que o entregador soubesse exatamente o que precisava fazer em cada momento. Como havia etapas fora do digital, como levar documentos e retirar a bicicleta em um ponto físico, a comunicação precisava ser objetiva e evitar ambiguidade.")}
      {p12("Outro cuidado foi desenhar a experiência considerando que o entregador estava em contexto de trabalho. O fluxo precisava ser direto, mobile first e tolerante a interrupções.")}
      {img(temMockup, "Design Mockup Tembici")}

      {h("Validação")}
      {p("Antes da entrega final, os fluxos foram prototipados e testados com foco em clareza da jornada, compreensão das etapas e viabilidade operacional.")}
      {p("A validação ajudou a ajustar textos, estados intermediários, mensagens de erro e momentos em que o entregador precisava receber instruções mais explícitas.")}
      {p12("Como o produto dependia de múltiplas áreas, o teste não era apenas sobre usabilidade da interface. Também validávamos se o fluxo fazia sentido para operação, atendimento, tecnologia e negócio.")}
      {embedIframe("https://embed.figma.com/proto/v65YY7OjnfpFDJkBRXsQWG/iFood---Entregador?node-id=4731-28401&p=f&viewport=6114%2C682%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4731%3A28401&show-proto-sidebar=1&page-id=4731%3A23943&embed-host=share")}

      {h("Handoff e acompanhamento")}
      {p("Após a definição da solução, preparei a documentação para desenvolvimento, contemplando fluxos, estados, regras, mensagens, componentes, cenários alternativos e comportamentos esperados.")}
      {p("Também acompanhei o time de desenvolvimento para garantir que a implementação respeitasse a lógica da jornada e os pontos críticos da experiência.")}
      {p12("Depois do lançamento, acompanhei indicadores relacionados à adoção, operação, experiência e resultado financeiro. Esse acompanhamento foi importante para entender se a solução estava reduzindo atrito, melhorando a operação e contribuindo para a sustentabilidade do produto.")}

      {h("Resultado")}
      {p("O projeto ajudou a transformar uma operação problemática em um produto mais sustentável, claro e escalável.")}
      {p("Entre os principais resultados:")}
      {statsGrid([
        { value: "R$1M", label: "redução de aprox. R$1M/mês em prejuízo" },
        { value: "10m", label: "breakeven em cerca de 10 meses" }
      ])}
      {ul([
        "melhora nos indicadores de NPS acompanhados;",
        "aumento de receita com um produto mais adequado ao perfil dos entregadores;",
        "redução de custos operacionais associados ao processo manual;",
        "mais clareza para entregadores em etapas críticas de cadastro, aprovação e retirada;",
        "separação entre a experiência do público geral e a experiência dos entregadores."
      ])}
      {p12("Mais do que uma melhoria de interface, o projeto redesenhou a forma como entregadores acessavam, entendiam e utilizavam o serviço, conectando produto digital, operação física e sustentabilidade de negócio.")}

      {h("Aprendizados")}
      {p("Esse projeto reforçou que produtos digitais não existem isolados da operação. Em contextos com logística, ativos físicos e múltiplos stakeholders, uma boa experiência depende tanto da interface quanto da estrutura que sustenta o serviço.")}
      {p("Também ficou claro que usuários diferentes não devem ser forçados dentro da mesma lógica de produto. O entregador tinha necessidades, frequência de uso e expectativas muito diferentes do usuário B2C tradicional. Tratar esse público como uma variação do mesmo usuário seria um erro estratégico.")}
      {p12("O principal aprendizado foi que design pode ter impacto direto no resultado financeiro quando atua sobre o sistema inteiro: jornada, regras, operação, comunicação, atendimento e métricas de negócio.")}
    </>
  );
}
