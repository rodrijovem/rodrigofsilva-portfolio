import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { embedIframe, h, img, p, p12 } from './blocks';

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
      {p("Tembici runs shared bikes: you take one from a station, ride for a few minutes and return it at another. During the pandemic, leisure and commuting rides collapsed while delivery exploded. The iFood partnership followed, and delivery riders started using the same fleet on a plan of unlimited rides of up to 4 hours each.")}
      {p("But a delivery rider is not a casual cyclist who rides more often. For them, the bike is a work tool. The plan worked like this: pick up a bike at a station, use it for up to 4 hours, return it to a station and start a new ride. Over a 12 to 14-hour workday, that meant 3 to 4 cycles a day, every day. Both audiences were in the same system, competing for the same asset, with incompatible needs.")}
      {p12("The cost showed up in three places: in the fleet (dead batteries, flat tires, broken seats), in maintenance and replacement costs, and in the NPS of returning users who found broken bikes at the station.")}

      {img(temProblema, "Tembici usage diagram", "Leisure and commuting rides collapsed during the pandemic and delivery riders took their place on the same orange fleet. The red bike is what came out of the decision described below.")}

      {h("the-task", "What I had to solve")}
      {p("The request arrived as a complaint: the delivery squad kept bringing up the quality of the bikes. It could have become a maintenance backlog item.")}
      {p("As the team's only designer, my job was to find out whether this really was a bike problem and, if it wasn't, to lead the company to a decision that balanced three pressures at once: operating cost, the casual cyclist's experience and the income of delivery riders, who depended on the bike to work.")}
      {p12("There was also external pressure: the main investor tied its funding to targets of NPS above 70 and positive EBITDA. The fleet problem hit both.")}

      {h("research", "What 50 forms and 9 conversations showed")}
      {p("Before proposing a solution, I cross-referenced fleet usage and maintenance metrics with a quantitative survey (50+ responses) and ran 9 interviews with delivery riders to understand the routine behind the numbers. I added desk research and a benchmark of scheduling and pickup in other services.")}
      {p("What showed up was not a bike defect. It was a model defect: the same bike, the same pickup logic and the same maintenance cycle were supporting a cyclist's 20-minute ride and a rider's entire shift. No repair backlog would fix that.")}

      {img(doisEn, "Comparison between casual cyclist and delivery rider: frequency, duration and expectations of bike use", "Same asset, two uses: what the research showed about each audience's frequency, duration and expectations.")}

      {p12("The interviews also showed what riders valued: a lighter bike, a battery that lasted the shift, charging at home and not having to return the bike every 4 hours to a station that was not always near their delivery area.")}

      {h("workshop", "A workshop instead of a fight")}
      {p("I brought the data and the interviews to a workshop with business, operations, customer service and engineering. I used *How Might We* to turn pain points into questions, *dot voting* to prioritize and an estimation round with each team to understand the real cost of each path.")}
      {p("The hypothesis of fully separating the operations (a different fleet, a different pickup flow, a different usage logic) was built and voted on there, by every team.")}
      {p12("I chose that format on purpose: the decision was expensive and would not survive if it came only from the product team. It meant giving up autonomous pickup at stations, the original product's main appeal, and taking on a physical pickup point, document checks and people in the operation. We traded convenience for control, with everyone who would pay that bill in the room.")}

      {embedIframe(MIRO_WORKSHOP, "Workshop activities — Bike pra Você", "The workshop board: prioritized pain points, *How Might We* questions, voting and each team's estimate for splitting the operations.")}

      {img(processoEn, "Bike pra Você process, from research to post-launch metrics", "Each step produced the input for the next: the data supported the workshop, the workshop defined the MVP and the MVP showed what the product needed to automate.")}

      {h("manual-mvp", "Validating with Google Forms before writing code")}
      {p("Before building, we tested the hypothesis with an entirely manual operation, using old e-bikes that had been sitting idle, nicknamed the \"vermelhinhas\" (the little red ones).")}
      {p("The MVP ran on Google Forms and Google Sheets. We selected heavy-user riders with no history of late payment or lost bikes. They filled in the form, someone reviewed the data by hand and, if approved, the rider picked up the bike at a support point, with document checks and in-person guidance, and kept it for a week.")}
      {p12("That confirmed there was demand and that separating professional from casual use made sense. But the most valuable part was what the spreadsheet revealed: how many people it took to keep one person pedaling. Slow registration (riders went back to the support point several times), manual approval and riders forgetting their renewal day. The model worked and did not scale.")}

      {h("into-the-app", "From the spreadsheet to the app they already opened")}
      {p("With the hypothesis validated, I went back to the MVP riders for a second round of interviews and explored alternatives with *Crazy 8* before locking the journey.")}
      {p("The first decision was not to create a new channel. Riders already opened the iFood Pedal app every day, so the product went there, in the \"Bike pra Você\" area, instead of competing for one more icon on their screen.")}

      {img(telasEn, "Four Bike pra Você screens in the iFood Pedal app: home, scheduling, summary with check-in and plan in use", "The final journey inside the iFood Pedal app: from the home entry point to the plan in use, with return date and location always visible.")}

      {p("The hard part was not the plan screen. The journey had a leg outside the digital world: bringing documents to a physical point and leaving with a bike. That forced the interface to say what an app normally doesn't have to: what to bring, where to go, what happens if a document is rejected.")}
      {p12("I prioritized the blocking states (pending documents, rejected registration, payment error, late return), because there the rider doesn't lose a screen, they lose a week of work. Each one had to give the reason and the next step, not just the outcome. I validated the journey in usability tests with a Maze prototype and in person with riders, and adjusted the error scenarios before handoff.")}

      {img(bloqueioEn, "Pending documents, rejected registration and payment error screens", "Three blocking states as they shipped: each one says what happened and what the rider does next.")}

      {img(temMockup, "iFood Pedal app screens", "\"Bike pra Você\" lives inside the app the rider already opens every day, and the pickup ends in a QR Code with a timer, name, and ID number — the interface working as a document for the operator at the physical point.")}

      {embedIframe(FIGMA_PROTO, "Navigable prototype — Bike pra Você", "Navigable prototype of version 1.1, already including the usability-test changes. Also used for validation with operations, customer service and engineering.")}

      {h("cut-scope", "What was cut to make the deadline")}
      {p("Automated registration.")}
      {p("It was the piece that took the manual operation out of the way, and it did not fit the development timeline. We launched with registration review still done by hand, which meant the operation stayed in the middle of every approval, exactly the bottleneck the MVP had exposed.")}
      {p12("I negotiated with the PM and tech lead to log it as recorded debt, not as something forgotten: I documented the full automated flow and left it ready for when there was room on the roadmap.")}

      {h("results", "R$1M/month and 72% fewer broken bikes")}
      {img(modeloEn, "Comparison between the old delivery rider plan and Bike pra Você", "What changed for riders and for the operation between the old plan and Bike pra Você.")}

      {p("In the first 6 months of the new model, average savings were ~R$1M per month, from two sources. The first was maintenance: riders stopped using the shared-fleet bikes, which were more expensive, needed more workshop time and handled their workload worse. The second was retention: comparing before and after launch, cancellations from regular users because they couldn't find a bike, or only found broken ones at the station, went down.")}
      {p("The problems that started the project (dead batteries, flat tires, broken seats) dropped 72%, and the operation broke even in ~10 months.")}
      {p("NPS went up for both audiences, the metric the investor was watching: casual cyclists found bikes available again and riders got a bike that lasted the whole shift. After being validated in São Paulo, the product started rolling out to Porto Alegre and Rio de Janeiro in early 2024, when I left the company. Today Bike pra Você is still live at [ifood.tembici.com.br](https://ifood.tembici.com.br/).")}

      {img(noArEn, "Delivery rider on the red Bike pra Você e-bike", "The red bike on the streets: Bike pra Você is still live at ifood.tembici.com.br. Photo: Tembici.")}

      {p12("To be precise about what is mine: the savings came from changing the operating model, not from a screen. My part was the research that supported the hypothesis, the workshop that turned it into a company decision and the journey that made the model work at scale. After launch, I tracked NPS, events and business metrics with the team.")}

      {h("takeaways", "What I take from this project")}
      {p("Digital products don't exist apart from operations. With logistics, physical assets and many teams involved, a good experience depends as much on the structure behind the service as on the interface.")}
      {p("Users with such different frequency, needs and expectations don't fit into the same product logic. Treating the rider as a variation of the casual cyclist would have been a strategic mistake.")}
      {p12("And facilitation is design work. Convincing teams with no tradition of collaborative sessions was the hardest part of the project, and also the part that mattered most for the decision to happen.")}
    </>
  );

  return (
    <>
      {h("two-users", "Dois públicos, uma frota")}
      {p("A Tembici opera bicicletas compartilhadas: você retira numa estação, pedala alguns minutos e devolve em outra. Na pandemia, esse uso de lazer e de deslocamento despencou enquanto o delivery explodiu. Veio a parceria com o iFood, e entregadores passaram a usar a mesma frota com um plano de viagens ilimitadas de até 4 horas.")}
      {p("Só que o entregador não é um ciclista casual com mais frequência. Para ele, a bike é ferramenta de trabalho. O plano funcionava assim: retirar numa estação, usar por até 4 horas, voltar a uma estação para devolver e iniciar outro uso. Numa jornada de 12 a 14 horas, eram 3 a 4 ciclos por dia, todos os dias. Os dois públicos estavam no mesmo sistema, disputando o mesmo ativo, com necessidades incompatíveis.")}
      {p12("A conta aparecia em três lugares: na frota (bateria descarregada, pneu furado, banco quebrado), no custo de manutenção e reposição, e no NPS de quem voltava a usar o serviço e encontrava bike quebrada na estação.")}

      {img(temProblema, "Diagrama de uso das bicicletas Tembici", "Lazer e cotidiano despencaram na pandemia e o entregador entrou no lugar deles, na mesma frota laranja. A bike vermelha é o que saiu da decisão descrita abaixo.")}

      {h("the-task", "O que eu precisava resolver")}
      {p("A demanda chegou como reclamação: a squad de entregadores trazia queixas sobre a qualidade das bicicletas. Podia ter virado um item de backlog de manutenção.")}
      {p("Como único designer do time, minha responsabilidade era descobrir se o problema era mesmo de bicicleta e, se não fosse, levar a empresa a uma decisão que equilibrasse três pressões ao mesmo tempo: o custo da operação, a experiência do ciclista casual e a renda do entregador, que dependia da bike para trabalhar.")}
      {p12("Havia ainda uma pressão externa: o principal investidor condicionava o aporte a metas de NPS acima de 70 e EBITDA positivo. O problema da frota mexia nas duas.")}

      {h("research", "O que 50 formulários e 9 conversas mostraram")}
      {p("Antes de propor solução, cruzei as métricas de uso e de manutenção da frota com uma pesquisa quantitativa (50+ respostas) e conduzi 9 entrevistas com entregadores para entender a rotina por trás dos números. Complementei com desk research e benchmark de agendamento e retirada em outros serviços.")}
      {p("O que apareceu não era defeito de bicicleta. Era defeito de modelo: a mesma bike, a mesma lógica de retirada e o mesmo ciclo de manutenção sustentavam uma viagem de 20 minutos de um ciclista e o turno inteiro de um entregador. Nenhum backlog de conserto resolveria isso.")}

      {img(dois, "Comparação entre ciclista casual e entregador: frequência, duração e expectativa de uso da bicicleta", "Mesmo ativo, dois usos: o que a pesquisa mostrou sobre frequência, duração e expectativa de cada público.")}

      {p12("As entrevistas também mostraram o que o entregador valorizava: uma bike mais leve, bateria que durasse o turno, poder carregar em casa e não precisar devolver a cada 4 horas numa estação que nem sempre ficava perto da área de entrega.")}

      {h("workshop", "Um workshop no lugar de uma briga")}
      {p("Levei os dados e as entrevistas para um workshop com negócio, operação, atendimento e engenharia. Usei *How Might We* para transformar as dores em perguntas, *dot voting* para priorizar e uma rodada de estimativa com cada área para saber o custo real de cada caminho.")}
      {p("A hipótese de separar completamente as operações (outra frota, outro fluxo de retirada, outra lógica de uso) foi construída e votada ali, por todas as áreas.")}
      {p12("Escolhi esse formato de propósito: a decisão era cara e não sobreviveria se saísse só do time de produto. Ela significava abrir mão da retirada autônoma nas estações, o principal atrativo do produto original, e assumir ponto físico de retirada, conferência de documento e gente na operação. Trocamos conveniência por controle, com todo mundo que ia pagar essa conta na sala.")}

      {embedIframe(MIRO_WORKSHOP, "Dinâmicas do workshop — Bike pra Você", "O board do workshop: dores priorizadas, perguntas *How Might We*, votação e a estimativa de cada área para separar as operações.")}

      {img(processo, "Linha do processo do Bike pra Você, da pesquisa ao acompanhamento de métricas", "Cada etapa gerou o insumo da seguinte: o dado sustentou o workshop, o workshop definiu o MVP e o MVP mostrou o que o produto precisava automatizar.")}

      {h("manual-mvp", "Validar com Google Forms antes de escrever código")}
      {p("Antes de construir, testamos a hipótese com uma operação inteiramente manual, usando bikes elétricas antigas que estavam paradas, as \"vermelhinhas\".")}
      {p("O MVP rodava em Google Forms e Google Sheets. Selecionamos entregadores heavy users, sem histórico de inadimplência ou perda de bike. Eles preenchiam o formulário, alguém analisava os dados à mão e, se aprovado, o entregador retirava a bike num ponto de apoio, com conferência de documento e orientação presencial, e ficava com ela por uma semana.")}
      {p12("Isso confirmou que havia demanda e que separar o uso profissional do casual fazia sentido. Mas o mais valioso foi o que a planilha revelou: quanta gente era necessária para manter uma pessoa pedalando. Cadastro lento (o entregador voltava ao ponto de apoio várias vezes), aprovação manual e entregadores esquecendo o dia de renovar. O modelo funcionava e não escalava.")}

      {h("into-the-app", "Da planilha para o app que eles já abriam")}
      {p("Com a hipótese validada, voltei aos entregadores do MVP para uma segunda rodada de entrevistas e explorei alternativas em *Crazy 8* antes de fechar a jornada.")}
      {p("A primeira decisão foi não criar um canal novo. O entregador já abria o app iFood Pedal todo dia, então o produto entrou ali, na área \"Bike pra Você\", em vez de disputar mais um ícone na tela dele.")}

      {img(telas, "Quatro telas do Bike pra Você no app iFood Pedal: home, agendamento, resumo com check-in e plano em uso", "A jornada final dentro do app iFood Pedal: da entrada pela home ao plano em uso, com data e local de devolução sempre visíveis.")}

      {p("A parte difícil não era a tela do plano. A jornada tinha uma perna fora do digital: levar documento a um ponto físico e sair de lá com uma bike. Isso obrigou a interface a dizer o que um app normalmente não precisa: o que levar, onde ir, o que acontece se o documento for recusado.")}
      {p12("Priorizei os estados de bloqueio (documentação pendente, cadastro reprovado, pagamento com erro, atraso na devolução), porque ali o entregador não perde uma tela, perde a semana de trabalho. Cada um precisava dizer o motivo e o próximo passo, não só o resultado. Validei a jornada em testes de usabilidade com protótipo no Maze e presenciais com entregadores, e ajustei os cenários de erro antes do handoff.")}

      {img(bloqueio, "Telas de documentação pendente, cadastro reprovado e erro de pagamento", "Três estados de bloqueio como foram para o app: cada um diz o que aconteceu e o que o entregador faz agora.")}

      {img(temMockup, "Telas do app iFood Pedal", "O “Bike pra Você” vive dentro do app que o entregador já abre todo dia, e a retirada termina em um QR Code com contador, nome e CPF — a interface funcionando como documento para o operador no ponto físico.")}

      {embedIframe(FIGMA_PROTO, "Protótipo navegável — Bike pra Você", "Protótipo navegável da versão 1.1, já com os ajustes do teste de usabilidade. Usado também na validação com operação, atendimento e engenharia.")}

      {h("cut-scope", "O que ficou de fora para caber no prazo")}
      {p("O cadastro automatizado.")}
      {p("Era a peça que tirava a operação manual do caminho, e não coube no prazo de desenvolvimento. Lançamos com a análise de cadastro ainda feita à mão, ou seja, com a operação no meio de cada aprovação, justamente o gargalo que o MVP tinha provado.")}
      {p12("Negociei com PM e tech lead para que isso entrasse como dívida registrada, não como esquecimento: documentei o fluxo automatizado completo e deixei pronto para quando houvesse espaço no roadmap.")}

      {h("results", "R$1M/mês e 72% menos bicicleta quebrada")}
      {img(modelo, "Comparação entre o plano antigo dos entregadores e o Bike pra Você", "O que mudou para o entregador e para a operação entre o plano antigo e o Bike pra Você.")}

      {p("Nos primeiros 6 meses do novo modelo, a economia média foi de ~R$1M por mês, vinda de duas frentes. A primeira foi manutenção: os entregadores deixaram de usar as bikes da frota compartilhada, mais caras, que exigiam mais tempo de oficina e aguentavam pior o ritmo de trabalho deles. A segunda foi retenção: comparando antes e depois do lançamento, caíram os cancelamentos de usuários comuns por falta de bicicleta ou por só encontrar bike com problema na estação.")}
      {p("Os problemas que originaram o projeto (bateria descarregada, pneu furado, banco quebrado) caíram 72%, e a operação chegou ao breakeven em ~10 meses.")}
      {p("O NPS subiu nos dois públicos, o indicador que o investidor acompanhava: o ciclista casual voltou a encontrar bike disponível e o entregador ganhou uma bike que durava o turno. Validado em São Paulo, o produto começou a ser levado para Porto Alegre e Rio de Janeiro no início de 2024, quando saí da empresa. Hoje o Bike pra Você segue no ar em [ifood.tembici.com.br](https://ifood.tembici.com.br/).")}

      {img(noAr, "Entregador pedalando a bike elétrica vermelha do Bike pra Você", "A bike vermelha nas ruas: o Bike pra Você continua no ar em ifood.tembici.com.br. Foto: Tembici.")}

      {p12("Sendo preciso sobre o que é meu: a economia veio da mudança de modelo operacional, não de uma tela. Minha parte foi a pesquisa que sustentou a hipótese, o workshop que a transformou em decisão da empresa e a jornada que tornou o modelo operável em escala. Depois do lançamento, acompanhei NPS, eventos e métricas de negócio com o time.")}

      {h("takeaways", "O que eu levo desse projeto")}
      {p("Produto digital não existe isolado da operação. Com logística, ativo físico e várias áreas envolvidas, uma boa experiência depende tanto da estrutura que sustenta o serviço quanto da interface.")}
      {p("Usuários com frequência, necessidade e expectativa tão diferentes não cabem na mesma lógica de produto. Tratar o entregador como uma variação do ciclista casual teria sido um erro estratégico.")}
      {p12("E facilitação é trabalho de design. Convencer áreas sem tradição de dinâmicas colaborativas foi a parte mais difícil do projeto, e também a que mais pesou para a decisão sair.")}
    </>
  );
}
