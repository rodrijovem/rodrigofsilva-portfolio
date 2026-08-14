import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { h, img, p, p12, statsGrid } from './blocks';

import miioHeader from '../../images/miio/miioHeader.webp';
import miioDecisao from '../../images/miio/miioDecisao.webp';
import miioMone from '../../images/miio/miioMone.webp';

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
