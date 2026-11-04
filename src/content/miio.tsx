import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { h, img, p, p12, statsGrid } from './blocks';

import miioHeader from '../../images/miio/miioHeader.webp';
import miioMone from '../../images/miio/miioMone.webp';
import paywall from '../../images/miio/miio-01-paywall-vs-contexto.webp';
import paywallEn from '../../images/miio/miio-01-paywall-vs-contexto-en.webp';
import pontos from '../../images/miio/miio-02-pontos-de-contato.webp';
import pontosEn from '../../images/miio/miio-02-pontos-de-contato-en.webp';
import ciclo from '../../images/miio/miio-03-ciclo-assinatura.webp';
import cicloEn from '../../images/miio/miio-03-ciclo-assinatura-en.webp';
import evolucao from '../../images/miio/miio-04-evolucao.webp';
import evolucaoEn from '../../images/miio/miio-04-evolucao-en.webp';
import telas from '../../images/miio/miio-05-telas-finais.webp';
import telasEn from '../../images/miio/miio-05-telas-finais-en.webp';

export function getMiioContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("charging", "Charging for an app that used to be free")}
      {p("miio is an EV charging app based in Portugal. People used it often, but it generated no recurring revenue.")}
      {p("The audience made this harder. EV drivers compare kWh prices down to the cent, track consumption and choose a charger by cost. Transparency was the reason they opened the app, and a badly placed charge could push them away.")}
      {p12("My task was to design monetization (the plan, checkout and the full subscription lifecycle) in a way that generated revenue without breaking that trust.")}

      {h("paywall", "The CEO wanted a paywall")}
      {p("The proposal on the table was aggressive: block what was already free and force a purchase decision.")}
      {p("My lead and I brought market research and a heuristic analysis of competitors to show the risk. With users who choose a service on price and transparency, blocking what used to be free tends to create distrust, and then people move to a competitor's app.")}
      {p12("Leadership accepted the proposal knowing conversion would be slower at the start. We agreed on fewer subscriptions in the first month to keep the users who were already there.")}

      {img(paywallEn, "Comparison between a paywall and in-context monetization", "The two proposals side by side: what each one asked of users and the risk it carried for a price-sensitive audience.")}

      {h("real-savings", "Showing each user's savings")}
      {p("Without the paywall, we had to decide where the plan would appear.")}
      {p("I tied the subscription to benefits users could calculate: a per-kWh discount, store cashback, campaigns, priority support, connectivity and vehicle stats. The message became \"see how much you could save\".")}
      {p12("In practice, the plan only appeared where there was a number to show: in the charger price, in the cart with the discount already applied, at checkout and after adding the first compatible vehicle, the moment the app finally knew how much that person spent each month.")}

      {img(pontosEn, "Journey showing where the miio plan appears to the user", "Where the plan appears: only at the moments when the app already has a savings number to show.")}

      {img(telasEn, "Final miio screens: plan price at the charger, offer, plan selection and connected car", "The final screens: the plan price right at the charger, the offer, choosing between plans and the connected car data.")}

      {h("prove-value", "Prove value before charging for it")}
      {p("Without a paywall, the order of delivery became part of the strategy. We split the project into milestones: first the car-to-app connection, so the value existed before any price; then a plan beta; finally, the paid subscription for everyone.")}
      {p("The beta was the most delicate moment. We selected users by usage and risk criteria (number and value of charges per month, not on the fleet management product and no history of billing problems) and showed the plan offer in an A/B test: some of those users saw the option to join, some didn't. Nobody paid, so cashback was left out of that version.")}
      {p12("2,000 users took part in the beta. They rated the plan as a whole, with every feature available in that version, and scores landed between 4 and 5 stars. Only then did the plan reach everyone, with payment, cashback and the other benefits.")}

      {img(evolucaoEn, "Three stages of the miio launch: connected car, free plan beta and paid plan for everyone", "The three launch stages: the connected car showed value, the beta tested the offer without billing and only then did the paid plan reach everyone.")}

      {h("subscription-states", "The full subscription lifecycle")}
      {p("The plans screen was only the start. I designed the whole lifecycle: monthly, annual or trial sign-up; awaiting payment; payment failure on purchase and on renewal; plan about to expire; automatic renewal; scheduled and completed cancellation; and people who started signing up and gave up halfway.")}
      {p("The most delicate states were the in-between ones, like pending payment and subscription processing, when users don't know whether they have the benefit yet. In those cases the journey explains what already happened, what's missing and what happens to the discount in the meantime, so the question doesn't turn into a support ticket.")}

      {img(cicloEn, "Map of the miio subscription lifecycle, with success and limbo states", "The subscription lifecycle mapped: the success paths and the limbo states, which caused the most confusion.")}

      {p12("Every stage of the lifecycle also got its own communication outside the app: email, push and invoice, including for people who abandoned sign-up, and different rules for purchases through the App Store and Google Play.")}

      {img(miioHeader, "miio plan selection screen", "Plans screen: monthly and annual side by side, each with its kWh discount and how much it saves. The €0.00 plan lets users try connectivity before paying.")}

      {h("connected-car", "The connected car helped sell the plan")}
      {p("The vehicle connection brought battery, consumption, performance and stats into the app.")}
      {p12("The app started showing users information about their own car that they didn't know, and that convinced them more than any argument about the plan. The value showed up before the purchase request, as monetization without a block required. That's why the free entry plan existed: so people could use connectivity before paying.")}

      {img(miioMone, "Consumption and vehicle connection screen", "With the car connected, the app shows the session in progress, the battery level and the cost in real time. With that data, users can check the plan's savings.")}

      {statsGrid([
        { value: "2,000", label: "users in the plan beta, before billing" },
        { value: "-31%", label: "time in the sign-up journey" }
      ])}
      {p("2,000 selected users tested the plan in the beta and rated it 4 to 5 stars, which gave the team confidence to launch the paid subscription to the whole user base.")}
      {p("In onboarding, I used data and benchmarks to find the friction in the initial flow and restructured the journey: sign-up time dropped 31%, measured in an A/B test in Google Analytics.")}
      {p12("In the design system, I built with the design lead the foundation the team went on to use: typography, icons, feedback-state illustrations (success, error, empty), atoms and the most-used complex components.")}

      {h("what-id-do-differently", "What I would do differently")}
      {p("Not using a paywall was the right decision, but I defended it with market research when I could have defended it with data from the product itself.")}
      {p12("If I did it again, I would instrument every touchpoint before discussing the model: which moment drives the most intent, which benefit converts, where people drop off halfway through sign-up.")}
    </>
  );

  return (
    <>
      {h("charging", "Cobrar por um app que era grátis")}
      {p("A miio é um app de recarga de veículos elétricos sediado em Portugal. O app tinha uso frequente, mas não gerava receita recorrente.")}
      {p("O público deixava isso mais difícil. Quem dirige carro elétrico compara preço de kWh centavo a centavo, acompanha o consumo e escolhe o posto pelo custo. A transparência era o motivo para abrir o app, e uma cobrança mal posicionada podia afastar essas pessoas.")}
      {p12("Minha tarefa era desenhar a monetização (plano, checkout e todo o ciclo da assinatura) de um jeito que gerasse receita sem quebrar essa confiança.")}

      {h("paywall", "O CEO queria paywall")}
      {p("A proposta na mesa era agressiva: bloquear o que já era gratuito e forçar a decisão de compra.")}
      {p("Eu e minha líder levamos um estudo de mercado e uma análise heurística de concorrentes para mostrar o risco. Numa base que escolhe o serviço por preço e transparência, bloquear o que já era grátis tende a gerar desconfiança, e com isso a pessoa passa a usar o app do concorrente.")}
      {p12("A liderança aceitou a proposta sabendo que a conversão seria mais lenta no começo. Combinamos menos assinaturas no primeiro mês para preservar a base que já usava o app.")}

      {img(paywall, "Comparação entre paywall e monetização em contexto de uso", "As duas propostas lado a lado: o que cada uma pedia ao usuário e o risco que levava para uma base sensível a preço.")}

      {h("real-savings", "Mostrar a economia de cada usuário")}
      {p("Sem o paywall, precisávamos decidir onde o plano apareceria.")}
      {p("Amarrei a assinatura a benefícios que o usuário conseguia calcular: desconto por kWh, cashback na loja, campanhas, suporte prioritário, conectividade e estatísticas do veículo. A mensagem passou a ser \"veja quanto você pode economizar\".")}
      {p12("Na prática, o plano só aparecia onde havia número para mostrar: no preço do posto, no carrinho com o desconto já aplicado, no checkout e depois do cadastro do primeiro veículo compatível, o momento em que o app finalmente sabia quanto aquela pessoa gastava por mês.")}

      {img(pontos, "Jornada mostrando onde o plano miio aparece para o usuário", "Onde o plano aparece: só nos momentos em que o app já tem um número de economia para mostrar.")}

      {img(telas, "Telas finais da miio: preço com plano no posto, oferta, escolha de plano e carro conectado", "As telas finais: o preço com o plano direto no posto, a oferta, a escolha entre planos e os dados do carro conectado.")}

      {h("prove-value", "Provar valor antes de cobrar")}
      {p("Sem paywall, a ordem das entregas passou a ser parte da estratégia. Dividimos o projeto em milestones: primeiro a conexão do carro com o app, para o valor existir antes de qualquer preço; depois um beta do plano; por fim, a assinatura paga para todos.")}
      {p("O beta foi o momento mais delicado. Selecionamos usuários por critérios de uso e risco (quantidade e valor de recargas no mês, fora do produto de gestão de frotas e sem histórico de problema de cobrança) e mostramos a oferta do plano em teste A/B: parte desses usuários via a opção de aderir, parte não. Ninguém pagava, por isso o cashback ficou de fora nessa versão.")}
      {p12("Foram 2.000 usuários no beta. Eles avaliaram o plano como um todo, com todas as funcionalidades disponíveis naquela versão, e as notas ficaram entre 4 e 5 estrelas. Só depois disso o plano chegou a todos, com pagamento, cashback e os demais benefícios.")}

      {img(evolucao, "Três etapas do lançamento da miio: carro conectado, beta do plano sem cobrança e plano pago para todos", "As três etapas do lançamento: o carro conectado mostrou valor, o beta testou a oferta sem cobrança e só então o plano pago chegou a todos.")}

      {h("subscription-states", "O ciclo completo da assinatura")}
      {p("A tela de planos era só o começo. Desenhei o ciclo inteiro: contratação mensal, anual ou trial; aguardando pagamento; falha no pagamento na compra e na renovação; plano perto de terminar; renovação automática; cancelamento agendado e efetivado; e quem começou a contratar e desistiu no meio.")}
      {p("Os estados mais delicados eram os intermediários, como pagamento pendente e assinatura em processamento, em que o usuário não sabe se já tem o benefício. Nesses casos a jornada explica o que já aconteceu, o que falta e o que acontece com o desconto enquanto isso, para a dúvida não virar ticket de suporte.")}

      {img(ciclo, "Mapa do ciclo da assinatura miio, com estados de sucesso e de limbo", "O ciclo da assinatura mapeado: os caminhos de sucesso e os estados de limbo, que eram os que mais geravam dúvida.")}

      {p12("Cada etapa do ciclo também ganhou sua comunicação fora do app: e-mail, push e fatura, inclusive para quem abandonou a contratação, e regras diferentes para compra pela App Store e pelo Google Play.")}

      {img(miioHeader, "Tela de escolha de plano da miio", "Tela de planos: mensal e anual lado a lado, cada um com o desconto por kWh e quanto economiza. O plano de 0,00 € deixa o usuário experimentar a conectividade antes de pagar.")}

      {h("connected-car", "O carro conectado ajudou a vender o plano")}
      {p("A conexão com o veículo trouxe bateria, consumo, desempenho e estatísticas para dentro do app.")}
      {p12("O app passou a mostrar ao usuário informações do próprio carro que ele não conhecia, e isso convenceu mais do que qualquer argumento sobre o plano. O valor aparecia antes do pedido de compra, como a monetização sem bloqueio pedia. Por isso existia o plano gratuito de entrada: para a pessoa usar a conectividade antes de pagar.")}

      {img(miioMone, "Tela de consumo e conexão com o veículo", "Com o carro conectado, o app mostra a sessão em curso, o nível de bateria e o custo em tempo real. Com esses dados, o usuário confere a economia do plano.")}

      {statsGrid([
        { value: "2.000", label: "usuários no beta do plano, antes da cobrança" },
        { value: "-31%", label: "no tempo da jornada de cadastro" }
      ])}
      {p("2.000 usuários selecionados testaram o plano no beta, com avaliações entre 4 e 5 estrelas, o que deu segurança para lançar a assinatura paga para toda a base.")}
      {p("No onboarding, identifiquei as fricções do fluxo inicial com dados e benchmark e reestruturei a jornada: o tempo de cadastro caiu 31%, medido em teste A/B no Google Analytics.")}
      {p12("No design system, construí com a líder da área a base que o time passou a usar: tipografia, ícones, ilustrações dos estados de feedback (sucesso, erro, vazio), átomos e os componentes complexos de maior uso.")}

      {h("what-id-do-differently", "O que eu faria diferente")}
      {p("A decisão de não usar paywall foi certa, mas eu a defendi com estudo de mercado quando poderia ter defendido com dado do próprio produto.")}
      {p12("Se refizesse hoje, instrumentaria cada ponto de contato antes de discutir o modelo: qual momento gera mais intenção, qual benefício converte, onde a pessoa desiste no meio da contratação.")}
    </>
  );
}
