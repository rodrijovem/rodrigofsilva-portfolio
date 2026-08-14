import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { embedIframe, h, img, note, p, p12, statsGrid } from './blocks';

import temMockup from '../../images/tembici/temMockup.webp';
import temProblema from '../../images/tembici/temProblema.webp';

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
