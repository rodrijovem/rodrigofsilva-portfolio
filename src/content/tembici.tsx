import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { embedIframe, h, img, list, p, p12 } from './blocks';

import temMockup from '../../images/tembici/temMockup.webp';
import temProblema from '../../images/tembici/temProblema.webp';
import dois from '../../images/tembici/tembici-01-dois-publicos.webp';
import doisEn from '../../images/tembici/tembici-01-dois-publicos-en.webp';
import processo from '../../images/tembici/tembici-02-processo.webp';
import processoEn from '../../images/tembici/tembici-02-processo-en.webp';
import modelo from '../../images/tembici/tembici-03-modelo-antes-depois.webp';
import modeloEn from '../../images/tembici/tembici-03-modelo-antes-depois-en.webp';
import telas from '../../images/tembici/tembici-04-telas-finais.webp';
import telasEn from '../../images/tembici/tembici-04-telas-finais-en.webp';
import bloqueio from '../../images/tembici/tembici-05-estados-de-bloqueio.webp';
import bloqueioEn from '../../images/tembici/tembici-05-estados-de-bloqueio-en.webp';
import noAr from '../../images/tembici/tembici-06-produto-no-ar.webp';
import noArEn from '../../images/tembici/tembici-06-produto-no-ar-en.webp';

// Os iframes sao os mesmos nos dois idiomas; muda so o title e a legenda.
const MIRO_WORKSHOP = "https://miro.com/app/live-embed/uXjVKMHscvA=/?moveToViewport=-43218,-14518,13584,15036&embedMode=view_only_without_ui";
const FIGMA_PROTO = "https://embed.figma.com/proto/v65YY7OjnfpFDJkBRXsQWG/iFood---Entregador?node-id=4118-17666&starting-point-node-id=4118%3A17666&scaling=scale-down&content-scaling=fixed&hide-ui=1&embed-host=share";

export function getTembiciContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("two-users", "Two audiences, one fleet")}
      {p("Tembici runs shared bikes: you take one from a station, ride for a few minutes and return it at another. During the pandemic, leisure and commuting rides collapsed while delivery exploded. That's when the iFood partnership started: delivery riders began using the same fleet on a plan of unlimited rides of up to 4 hours each.")}
      {p("For delivery riders, the bike was a work tool. The plan worked like this: pick up a bike at a station, use it for up to 4 hours, return it to a station and start a new ride. Over a 12 to 14-hour workday, that meant 3 to 4 cycles a day, every day. While leisure and commuting rides were low, the fleet could handle it. When people went back to their routines after the pandemic, both audiences started competing for the same bikes, with incompatible needs, and the problems kept growing until 2023, when I started working on them.")}
      {p("The problems showed up on several fronts at once:")}
      {list(["**In satisfaction surveys**, casual cyclists and riders complained about the same thing: getting to a station and finding no bike, or only bikes with a dead battery or something broken.", "**In operations**, every bike with a problem had to be picked up at the station, taken to maintenance and brought back. On top of that, every day Tembici collected bikes from stations where they wouldn't be needed and redistributed them to balance supply for the next day.", "**For riders**, the 4-hour limit turned into charges: anyone who returned the bike late paid a fee, which came back as complaints about unfair charges."])}
      {p12("All of this flowed into the NPS of the company's core product, bike rental for the general public. Maintenance cost was one more consequence of the same situation.")}

      {img(temProblema, "Tembici usage diagram", "During the pandemic, leisure and commuting rides collapsed and delivery riders started using the same orange fleet. When routines came back, everyone was competing for the same bikes. The red bike is what came out of the decision described below.")}

      {h("the-task", "What I had to solve")}
      {p("The request arrived as complaints from both sides: riders about bike quality and late fees, casual cyclists about empty stations. It could have become a maintenance backlog item.")}
      {p("As the team's only designer, my job was to find out whether this really was a bike problem and, if it wasn't, to lead the company to a decision that balanced three pressures at once: the casual cyclist's experience, which was the company's core product; the income of delivery riders, who depended on the bike to work; and operating cost.")}
      {p12("There was also external pressure: the main investor tied its funding to targets of NPS above 70 and positive EBITDA. The fleet problem hit both.")}

      {h("research", "What 50 forms and 9 conversations showed")}
      {p("Before proposing a solution, I cross-referenced both audiences' satisfaction surveys and fleet usage and maintenance metrics with a quantitative survey (50+ responses) and ran 9 interviews with delivery riders to understand the routine behind the numbers. I added desk research and a benchmark of scheduling and pickup in other services.")}
      {p("The data pointed to the usage model: the same bike, the same pickup logic and the same maintenance cycle were supporting a cyclist's 20-minute ride and a rider's entire shift. Fixing bikes faster wouldn't change that.")}

      {img(doisEn, "Comparison between casual cyclist and delivery rider: frequency, duration and expectations of bike use", "Same asset, two uses: what the research showed about each audience's frequency, duration and expectations.")}

      {p12("The interviews also showed what riders valued: a lighter bike, a battery that lasted the shift, charging at home and not having to return the bike every 4 hours to a station that was not always near their delivery area.")}

      {h("workshop", "The cross-team workshop")}
      {p("I brought the data and the interviews to a workshop with business, operations, customer service and engineering. I used *How Might We* to turn pain points into questions, *dot voting* to prioritize and an estimation round with each team to understand the real cost of each path.")}
      {p("The hypothesis of fully separating the operations (a different fleet, a different pickup flow, a different usage logic) was built and voted on there, by every team.")}
      {p12("I chose that format because the decision was expensive and needed support from every team to move forward. It meant giving up autonomous pickup at stations, the original product's main appeal, and taking on a physical pickup point, document checks and people in the operation. Every team that would carry that change took part in the decision.")}

      {embedIframe(MIRO_WORKSHOP, "Bike pra Você: workshop activities", "The workshop board: prioritized pain points, *How Might We* questions, voting and each team's estimate for splitting the operations.")}

      {img(processoEn, "Bike pra Você process, from research to post-launch metrics", "Each step produced the input for the next: the data supported the workshop, the workshop defined the MVP and the MVP showed what the product needed to automate.")}

      {h("manual-mvp", "Validating with Google Forms before writing code")}
      {p("Before building, we tested the hypothesis with an entirely manual operation, using old e-bikes that had been sitting idle, nicknamed the \"vermelhinhas\" (the little red ones).")}
      {p("The MVP ran on Google Forms and Google Sheets. We selected heavy-user riders with no history of late payment or lost bikes. They filled in the form, someone reviewed the data by hand and, if approved, the rider picked up the bike at a support point, with document checks and in-person guidance, and kept it for a week.")}
      {p12("That confirmed there was demand and that separating professional from casual use made sense. The spreadsheet also showed how many people it took to keep each rider on a bike: registration was slow (riders went back to the support point several times), approval was manual and many riders forgot their renewal day. The model worked, but it didn't scale.")}

      {h("into-the-app", "From the spreadsheet to the app they already opened")}
      {p("With the hypothesis validated, I went back to the MVP riders for a second round of interviews and explored alternatives with *Crazy 8* before locking the journey.")}
      {p("Riders already opened the iFood Pedal app every day, so we put the product there, in the \"Bike pra Você\" area, without creating a new app.")}

      {img(telasEn, "Four Bike pra Você screens in the iFood Pedal app: home, scheduling, summary with check-in and plan in use", "The final journey inside the iFood Pedal app: from the home entry point to the plan in use, with return date and location always visible.")}

      {p("The hardest part was the step outside the app: bringing documents to a physical point and leaving with a bike. The interface had to explain what to bring, where to go and what happened if a document was rejected.")}
      {p12("I prioritized the blocking states (pending documents, rejected registration, payment error, late return), because a block there could cost the rider a week of work. Each state shows the reason and the next step. I validated the journey in usability tests with a Maze prototype and in person with riders, and adjusted the error scenarios before handoff.")}

      {img(bloqueioEn, "Pending documents, rejected registration and payment error screens", "Three blocking states as they shipped: each one says what happened and what the rider does next.")}

      {img(temMockup, "iFood Pedal app screens", "\"Bike pra Você\" sits inside the app the rider already opens every day. Pickup ends in a QR Code with a timer, name and ID number, which the operator at the physical point uses to check the pickup.")}

      {embedIframe(FIGMA_PROTO, "Bike pra Você: navigable prototype", "Navigable prototype of version 1.1, already including the usability-test changes. Also used for validation with operations, customer service and engineering.")}

      {h("cut-scope", "What was cut to make the deadline")}
      {p("Automated registration was cut, the piece that took the manual operation out of the way. It didn't fit the development timeline. We launched with registration review still done by hand, which meant the operation stayed in the middle of every approval, exactly the bottleneck the MVP had exposed.")}
      {p12("I agreed with the PM and tech lead to log it as debt in the backlog: I documented the full automated flow and left it ready for when there was room on the roadmap.")}

      {img(modeloEn, "Comparison between the old delivery rider plan and Bike pra Você", "What changed for riders and for the operation between the old plan and Bike pra Você.")}

      {p("NPS went up for both audiences, the metric the investor was watching. Casual cyclists found available bikes in good shape at the station again, and riders got a bike that lasted the whole shift, without the 4-hour limit that led to late fees.")}
      {p("In operations, dead batteries, flat tires and broken seats dropped 72%. Over the first 6 months, average savings were ~R$1M per month, from two sources: maintenance of the shared-fleet bikes, which were more expensive and handled the riders' workload worse, and fewer cancellations from regular users because they couldn't find a bike or only found broken ones, measured before and after launch. The operation broke even in ~10 months.")}
      {p("After being validated in São Paulo, the product started rolling out to Porto Alegre and Rio de Janeiro in early 2024, when I left the company. Today Bike pra Você is still live at [ifood.tembici.com.br](https://ifood.tembici.com.br/).")}

      {img(noArEn, "Delivery rider on the red Bike pra Você e-bike", "The red bike on the streets: Bike pra Você is still live at ifood.tembici.com.br. Photo: Tembici.")}

      {p12("These results came from changing the operating model, which was a company decision. My part was the research that supported the hypothesis, the workshop that turned it into a company decision and the journey that made the model work at scale. After launch, I tracked NPS, events and business metrics with the team.")}

      {h("takeaways", "What I take from this project")}
      {p("I learned to look at operations from the start. With logistics, physical assets and many teams involved, the experience depends as much on the structure behind the service as on the interface.")}
      {p("It also became clear that audiences with such different frequency, needs and expectations needed different products. Treating the rider as a variation of the casual cyclist would have been a mistake.")}
      {p12("And facilitating the workshop took more effort than designing the screens. Convincing teams with no habit of collaborative sessions was the hardest part of the project, and it's what got the decision made.")}
    </>
  );

  return (
    <>
      {h("two-users", "Dois públicos, uma frota")}
      {p("A Tembici opera bicicletas compartilhadas: você retira numa estação, pedala alguns minutos e devolve em outra. Na pandemia, esse uso de lazer e de deslocamento despencou enquanto o delivery explodiu. Foi quando começou a parceria com o iFood: entregadores passaram a usar a mesma frota, com um plano de viagens ilimitadas de até 4 horas.")}
      {p("Para o entregador, a bike era ferramenta de trabalho. O plano funcionava assim: retirar numa estação, usar por até 4 horas, voltar a uma estação para devolver e iniciar outro uso. Numa jornada de 12 a 14 horas, eram 3 a 4 ciclos por dia, todos os dias. Enquanto o uso de lazer e de deslocamento estava baixo, a frota dava conta. Quando as pessoas voltaram à rotina depois da pandemia, os dois públicos passaram a disputar as mesmas bikes, com necessidades incompatíveis, e os problemas foram crescendo até 2023, quando comecei a trabalhar neles.")}
      {p("Os problemas apareciam em várias pontas ao mesmo tempo:")}
      {list(["**Nas pesquisas de satisfação**, ciclistas casuais e entregadores reclamavam da mesma coisa: chegar na estação e não achar bike, ou achar só bike sem bateria ou quebrada.", "**Na operação**, cada bike com problema exigia buscar na estação, levar para a manutenção e devolver. E todo dia a Tembici ainda recolhia bikes de estações onde não fariam falta para redistribuí-las e equilibrar a oferta do dia seguinte.", "**Para o entregador**, o limite de 4 horas virava cobrança: quem devolvia depois do prazo pagava multa, e isso chegava como reclamação de cobrança indevida."])}
      {p12("Tudo isso desaguava no NPS do produto principal da empresa, o aluguel de bikes para o público geral. O custo de manutenção entrava como mais uma consequência da mesma situação.")}

      {img(temProblema, "Diagrama de uso das bicicletas Tembici", "Na pandemia, lazer e cotidiano despencaram e o entregador passou a usar a mesma frota laranja. Com a volta da rotina, todos passaram a disputar as mesmas bikes. A bike vermelha é o que saiu da decisão descrita abaixo.")}

      {h("the-task", "O que eu precisava resolver")}
      {p("A demanda chegou como reclamação, das duas pontas: entregadores queixando da qualidade das bikes e da multa por atraso, ciclistas casuais queixando de estação vazia. Podia ter virado um item de backlog de manutenção.")}
      {p("Como único designer do time, minha responsabilidade era descobrir se o problema era mesmo de bicicleta e, se não fosse, levar a empresa a uma decisão que equilibrasse três pressões ao mesmo tempo: a experiência do ciclista casual, que era o produto principal da empresa; a renda do entregador, que dependia da bike para trabalhar; e o custo da operação.")}
      {p12("Havia ainda uma pressão externa: o principal investidor condicionava o aporte a metas de NPS acima de 70 e EBITDA positivo. O problema da frota mexia nas duas.")}

      {h("research", "O que 50 formulários e 9 conversas mostraram")}
      {p("Antes de propor solução, cruzei as pesquisas de satisfação dos dois públicos e as métricas de uso e de manutenção da frota com uma pesquisa quantitativa (50+ respostas) e conduzi 9 entrevistas com entregadores para entender a rotina por trás dos números. Complementei com desk research e benchmark de agendamento e retirada em outros serviços.")}
      {p("Os dados apontaram para o modelo de uso: a mesma bike, a mesma lógica de retirada e o mesmo ciclo de manutenção sustentavam uma viagem de 20 minutos de um ciclista e o turno inteiro de um entregador. Consertar as bikes mais rápido não ia mudar isso.")}

      {img(dois, "Comparação entre ciclista casual e entregador: frequência, duração e expectativa de uso da bicicleta", "Mesmo ativo, dois usos: o que a pesquisa mostrou sobre frequência, duração e expectativa de cada público.")}

      {p12("As entrevistas também mostraram o que o entregador valorizava: uma bike mais leve, bateria que durasse o turno, poder carregar em casa e não precisar devolver a cada 4 horas numa estação que nem sempre ficava perto da área de entrega.")}

      {h("workshop", "O workshop com as áreas")}
      {p("Levei os dados e as entrevistas para um workshop com negócio, operação, atendimento e engenharia. Usei *How Might We* para transformar as dores em perguntas, *dot voting* para priorizar e uma rodada de estimativa com cada área para saber o custo real de cada caminho.")}
      {p("A hipótese de separar completamente as operações (outra frota, outro fluxo de retirada, outra lógica de uso) foi construída e votada ali, por todas as áreas.")}
      {p12("Escolhi esse formato porque a decisão era cara e precisava do apoio de todas as áreas para seguir. Ela significava abrir mão da retirada autônoma nas estações, o principal atrativo do produto original, e assumir ponto físico de retirada, conferência de documento e gente na operação. Todas as áreas que iam arcar com essa mudança participaram da decisão.")}

      {embedIframe(MIRO_WORKSHOP, "Bike pra Você: dinâmicas do workshop", "O board do workshop: dores priorizadas, perguntas *How Might We*, votação e a estimativa de cada área para separar as operações.")}

      {img(processo, "Linha do processo do Bike pra Você, da pesquisa ao acompanhamento de métricas", "Cada etapa gerou o insumo da seguinte: o dado sustentou o workshop, o workshop definiu o MVP e o MVP mostrou o que o produto precisava automatizar.")}

      {h("manual-mvp", "Validar com Google Forms antes de escrever código")}
      {p("Antes de construir, testamos a hipótese com uma operação inteiramente manual, usando bikes elétricas antigas que estavam paradas, as \"vermelhinhas\".")}
      {p("O MVP rodava em Google Forms e Google Sheets. Selecionamos entregadores heavy users, sem histórico de inadimplência ou perda de bike. Eles preenchiam o formulário, alguém analisava os dados à mão e, se aprovado, o entregador retirava a bike num ponto de apoio, com conferência de documento e orientação presencial, e ficava com ela por uma semana.")}
      {p12("Isso confirmou que havia demanda e que separar o uso profissional do casual fazia sentido. A planilha também mostrou quanta gente era necessária para manter cada entregador com uma bike: o cadastro era lento (o entregador voltava ao ponto de apoio várias vezes), a aprovação era manual e muitos esqueciam o dia de renovar. O modelo funcionava, mas não escalava.")}

      {h("into-the-app", "Da planilha para o app que eles já abriam")}
      {p("Com a hipótese validada, voltei aos entregadores do MVP para uma segunda rodada de entrevistas e explorei alternativas em *Crazy 8* antes de fechar a jornada.")}
      {p("O entregador já abria o app iFood Pedal todo dia, então colocamos o produto ali, na área \"Bike pra Você\", sem criar um app novo.")}

      {img(telas, "Quatro telas do Bike pra Você no app iFood Pedal: home, agendamento, resumo com check-in e plano em uso", "A jornada final dentro do app iFood Pedal: da entrada pela home ao plano em uso, com data e local de devolução sempre visíveis.")}

      {p("A parte mais difícil foi a etapa fora do app: levar documento a um ponto físico e sair de lá com uma bike. A interface precisava explicar o que levar, onde ir e o que acontecia se o documento fosse recusado.")}
      {p12("Priorizei os estados de bloqueio (documentação pendente, cadastro reprovado, pagamento com erro, atraso na devolução), porque um bloqueio ali podia custar a semana de trabalho do entregador. Cada estado mostra o motivo e o próximo passo. Validei a jornada em testes de usabilidade com protótipo no Maze e presenciais com entregadores, e ajustei os cenários de erro antes do handoff.")}

      {img(bloqueio, "Telas de documentação pendente, cadastro reprovado e erro de pagamento", "Três estados de bloqueio como foram para o app: cada um diz o que aconteceu e o que o entregador faz agora.")}

      {img(temMockup, "Telas do app iFood Pedal", "O “Bike pra Você” fica dentro do app que o entregador já abre todo dia. A retirada termina num QR Code com contador, nome e CPF, que o operador do ponto físico usa para conferir a retirada.")}

      {embedIframe(FIGMA_PROTO, "Bike pra Você: protótipo navegável", "Protótipo navegável da versão 1.1, já com os ajustes do teste de usabilidade. Usado também na validação com operação, atendimento e engenharia.")}

      {h("cut-scope", "O que ficou de fora para caber no prazo")}
      {p("Ficou de fora o cadastro automatizado, a peça que tirava a operação manual do caminho. Ele não coube no prazo de desenvolvimento. Lançamos com a análise de cadastro ainda feita à mão, ou seja, com a operação no meio de cada aprovação, justamente o gargalo que o MVP tinha provado.")}
      {p12("Combinei com PM e tech lead de registrar isso como dívida no backlog: documentei o fluxo automatizado completo e deixei pronto para quando houvesse espaço no roadmap.")}

      {img(modelo, "Comparação entre o plano antigo dos entregadores e o Bike pra Você", "O que mudou para o entregador e para a operação entre o plano antigo e o Bike pra Você.")}

      {p("O NPS subiu nos dois públicos, o indicador que o investidor acompanhava. O ciclista casual voltou a encontrar bike disponível e em bom estado na estação, e o entregador passou a ter uma bike que durava o turno, sem o limite de 4 horas que gerava multa.")}
      {p("Na operação, bateria descarregada, pneu furado e banco quebrado caíram 72%. Nos primeiros 6 meses, a economia média foi de ~R$1M por mês, vinda de duas frentes: a manutenção das bikes da frota compartilhada, mais caras e que aguentavam pior o ritmo dos entregadores, e a queda nos cancelamentos de usuários comuns por falta de bike ou bike com problema, medida antes e depois do lançamento. A operação chegou ao breakeven em ~10 meses.")}
      {p("Validado em São Paulo, o produto começou a ser levado para Porto Alegre e Rio de Janeiro no início de 2024, quando saí da empresa. Hoje o Bike pra Você segue no ar em [ifood.tembici.com.br](https://ifood.tembici.com.br/).")}

      {img(noAr, "Entregador pedalando a bike elétrica vermelha do Bike pra Você", "A bike vermelha nas ruas: o Bike pra Você continua no ar em ifood.tembici.com.br. Foto: Tembici.")}

      {p12("Esses resultados vieram da mudança de modelo operacional, que foi uma decisão da empresa. Minha parte foi a pesquisa que sustentou a hipótese, o workshop que a transformou em decisão da empresa e a jornada que tornou o modelo operável em escala. Depois do lançamento, acompanhei NPS, eventos e métricas de negócio com o time.")}

      {h("takeaways", "O que eu levo desse projeto")}
      {p("Aprendi a olhar para a operação desde o começo. Com logística, ativo físico e várias áreas envolvidas, a experiência depende tanto da estrutura por trás do serviço quanto da interface.")}
      {p("Também ficou claro que públicos com frequência, necessidade e expectativa tão diferentes precisavam de produtos diferentes. Tratar o entregador como uma variação do ciclista casual teria sido um erro.")}
      {p12("E facilitar o workshop deu mais trabalho do que desenhar as telas. Convencer áreas sem costume de fazer dinâmicas colaborativas foi a parte mais difícil do projeto, e foi o que fez a decisão sair.")}
    </>
  );
}
