import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { h, img, p, p12 } from './blocks';

import finProblema from '../../images/Finvity/finProblema.webp';
import finACDC from '../../images/Finvity/finACDC.webp';
import finProduto from '../../images/Finvity/finProduto.webp';
import finSite from '../../images/Finvity/finSite.webp';
import diagnostico from '../../images/Finvity/finvity-01-diagnostico.webp';
import diagnosticoEn from '../../images/Finvity/finvity-01-diagnostico-en.webp';
import cadeia from '../../images/Finvity/finvity-02-cadeia-de-dados.webp';
import cadeiaEn from '../../images/Finvity/finvity-02-cadeia-de-dados-en.webp';
import ia from '../../images/Finvity/finvity-03-ia-no-processo.webp';
import iaEn from '../../images/Finvity/finvity-03-ia-no-processo-en.webp';

export function getFinvityContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("the-question", "The question the platform has to answer")}
      {p("A wealth planner has to answer an uncomfortable question: if this client died tomorrow, how much would the family pay in estate tax (ITCMD), how long would probate take and what would be left.")}
      {p("Getting there takes family structure, assets, debts, holding companies, gifts, income projection and tax rules, all together and all affecting each other. In this domain, oversimplifying is not elegance, it's a loss of precision.")}
      {p12("That's why the platform is not a dashboard with numbers. It's a chain: what goes in one place has to reappear, correctly, in every analysis that depends on it. And the old version broke that chain often enough that support became part of the product.")}

      {img(finProblema, "Finvity client list", "The client list carries the state of each record — simplified or complete, received or shared — because the planner needs to know where each family stopped before opening any simulation.")}

      {h("three-fronts", "One designer, one CEO, three fronts")}
      {p("I was the company's only designer and reported directly to the CEO. The task: reduce friction in the platform (measured by the volume of support questions) without losing the precision experts require, and bring product, brand and website into one language.")}
      {p("The breadth was not a lack of focus. When the platform promises to organize families' wealth and the website promises something else, in a different visual language, the gap becomes a sales problem. Product, identity and website had to ship together because the same person was designing all three.")}
      {p12("The cost is structural: with one designer across three fronts, prioritization never stops. Whatever was being built went first; older modules and ongoing research waited.")}

      {img(finSite, "Finvity institutional website", "The website was rebuilt with the product's own language and interface elements: whoever arrives through the site recognizes the platform when they log in.")}

      {h("audit", "Audit before redesigning")}
      {p("As a team of one, I couldn't redesign everything at once. I needed to know where the old platform got in the expert's way the most and what the market had already solved.")}
      {p("I started with a **Nielsen heuristic evaluation** of the most-used flows: client list, onboarding, assets, financial assumptions and investment simulation. Each problem got a severity rating from 0 to 4, based on frequency, impact and persistence. I found **11 problems, 7 of them severe or catastrophic**. The most violated heuristics were visibility of system status and consistency and standards (4 occurrences each), followed by match between the system and the real world and error prevention (3 each).")}
      {p("The two catastrophic problems said a lot about the product: deleting a client erased its entire wealth and estate history with no undo, and sharing data with other professionals promised \"full access\" while the edit permission toggle was off. With wealth data under Brazil's data protection law (LGPD), both were a risk, not a detail.")}

      {img(diagnosticoEn, "Summary of the heuristic evaluation of the old platform: 11 problems by severity and occurrences per Nielsen heuristic", "Audit summary: 11 problems by severity and occurrences per heuristic. Visibility of system status and consistency led.")}

      {p("In parallel, I benchmarked **international platforms**, because Brazil had no wealth planning tools this complete. The care was in separating interface patterns from business rules: flows that make sense under US tax and estate law don't apply here, so I kept the information architecture and redesigned the logic for Brazilian rules.")}
      {p12("That diagnosis became the redesign's priority order: onboarding first, since it fed everything; then navigation and the language of the analysis screens.")}

      {h("registration", "Onboarding became the foundation, and that had a cost")}
      {p("The obvious alternative was a light entry: fewer fields, less drop-off at the start.")}
      {p("I did the opposite, and took that bet to the CEO with the diagnosis in hand. I structured client onboarding to feed everything that comes after: risks, wealth projection, succession, holding companies, gifts and reports. A piece of data goes in once and reappears in every analysis that depends on it. Onboarding stopped being paperwork and became the foundation of the simulations.")}

      {img(cadeiaEn, "Diagram of client onboarding feeding Finvity's analysis modules", "One input, many analyses: how onboarding came to feed every module of the platform.")}

      {p12("The cost was a heavier start for the user. I offset it by bringing in data that already exists instead of asking people to type it: importing the income tax return (including the spouse's) fills in much of the asset structure right away. And I replaced the linear wizard with navigable sections, so experts could fill them in the order they receive the client's documents.")}

      {img(finACDC, "Finvity registration flow, before and after", "Before and after registration: from a linear four-step wizard to a structure navigable by section, with document upload inside the step itself.")}

      {h("specialist", "Getting closer to what experts already know")}
      {p("The audit surfaced technical jargon with no accessible help, charts with percentages that didn't add up and mixed currency formats on the same screen. Match with the real world and consistency became the criteria for the analysis screens.")}
      {p("In tax intelligence and income tax import, I brought the interface logic closer to structures professionals already recognize from their own work, instead of inventing a new, \"cleaner\" organization. The gain is not aesthetic: it reduces learning and saves experts from mentally translating what they already know into the tool's vocabulary.")}
      {p12("The same logic applied to reading the data. Projection, parameters and result sit in the same view, so changing an assumption and seeing the consequence is a single move, not a back-and-forth between screens.")}

      {img(finProduto, "Wealth evolution projection", "Projection and parameters on the same screen: the specialist changes the rate of return and watches the cash flow chart respond without switching context.")}

      {h("ai-prototyping", "I prototyped with AI before and after the refactor")}
      {p("As the only designer on a product this size, exploring is expensive. I used AI to lower that cost, in two different ways as the code changed.")}
      {p("Before the refactor, I used Google Stitch fed with a design.md as the source of truth for visual decisions, generating high-fidelity screen variations in a fraction of the time. That let me test paths I wouldn't have had time to design on my own.")}
      {p12("Once the code was ready, I switched to Claude connected via MCP to generate screens and prototypes directly in the product and take them into usability testing without going through Figma. The prototype stopped being a representation of the product and became the product running.")}

      {img(iaEn, "AI prototyping workflow before and after the refactor", "Two phases, two workflows: from design.md as the source of truth in Stitch to a prototype running in code with Claude via MCP.")}

      {h("support-drop", "60% fewer support questions")}
      {p("Finvity's business numbers are under NDA. What I can share is what changed in behavior.")}
      {p("Before the redesign, support received a high volume of questions about how to operate the platform, including through the largest client's channel, one of Brazil's biggest banks. Afterwards, that volume dropped **60%**.")}
      {p12("That matters more than an interface metric: a support question from an enterprise client is not individual friction, it's operating cost and renewal risk.")}

      {h("data-modeling", "What data modeling taught me")}
      {p("In a complex product, clarity doesn't come from removing information. It comes from structuring information the right way.")}
      {p("The data model defines the quality of the experience. When the initial model doesn't account for future scenarios, the interface inherits its limits.")}
      {p12("If I redesigned the foundation today, I would start with more flexible family and asset structures, with multiple entities, relationships and analysis scenarios, and I would make heuristic evaluation a recurring ritual instead of a project-kickoff event.")}
    </>
  );

  return (
    <>
      {h("the-question", "A pergunta que a plataforma precisa responder")}
      {p("Um planejador patrimonial precisa responder algo desconfortável: se esse cliente morrer amanhã, quanto a família paga de ITCMD, quanto tempo leva o inventário e o que sobra.")}
      {p("Chegar nessa resposta exige estrutura familiar, patrimônio, dívidas, holding, doações, projeção de renda e regra tributária, tudo junto e tudo se afetando. Nesse domínio, simplificar demais não é elegância, é perda de precisão.")}
      {p12("Por isso a plataforma não é um painel com números. É uma cadeia: o que entra num lugar precisa reaparecer, correto, em cada análise que depende dele. E a versão antiga quebrava essa cadeia com frequência suficiente para o suporte virar parte do produto.")}

      {img(finProblema, "Lista de clientes da Finvity", "A lista de clientes carrega o estado de cada cadastro — simplificado ou completo, recebido ou compartilhado — porque o planejador precisa saber onde cada família parou antes de abrir qualquer simulação.")}

      {h("three-fronts", "Um designer, um CEO, três frentes")}
      {p("Eu era o único designer da empresa e respondia direto ao CEO. A tarefa: reduzir o atrito de uso da plataforma (medido no volume de dúvidas no suporte) sem perder a precisão que o especialista exige, e alinhar produto, marca e site numa mesma linguagem.")}
      {p("A amplitude não era dispersão. Quando a plataforma promete organizar o patrimônio de famílias e o site promete outra coisa, com outra linguagem visual, a distância vira problema comercial. Produto, identidade e site precisavam sair juntos porque a mesma pessoa desenhava os três.")}
      {p12("O custo disso é estrutural: com um designer para três frentes, a priorização é constante. O que estava sendo construído puxava a fila; módulos antigos e pesquisa contínua esperavam.")}

      {img(finSite, "Site institucional da Finvity", "O site foi refeito com a linguagem e os próprios elementos de interface do produto: quem chega pelo site reconhece a plataforma quando entra.")}

      {h("audit", "Antes de redesenhar, auditar")}
      {p("Com um designer só, eu não podia redesenhar tudo de uma vez. Precisava saber onde a plataforma antiga mais travava o especialista e o que o mercado já tinha resolvido.")}
      {p("Comecei por uma **análise heurística de Nielsen** dos fluxos mais usados: lista de clientes, cadastro, patrimônio, premissas financeiras e simulação de investimentos. Cada problema recebeu severidade de 0 a 4, considerando frequência, impacto e persistência. Foram **11 problemas, 7 deles graves ou catastróficos**. As heurísticas mais violadas foram visibilidade do status do sistema e consistência e padrões (4 ocorrências cada), seguidas de correspondência com o mundo real e prevenção de erros (3 cada).")}
      {p("As duas catástrofes diziam muito sobre o produto: excluir um cliente apagava todo o histórico patrimonial e sucessório sem opção de desfazer, e o compartilhamento de dados com outros profissionais dizia \"acesso total\" enquanto o controle de permissão estava desligado. Em dados patrimoniais, sob LGPD, os dois eram risco, não detalhe.")}

      {img(diagnostico, "Resumo da análise heurística da plataforma antiga: 11 problemas por severidade e ocorrências por heurística de Nielsen", "Resumo da auditoria: 11 problemas por severidade e as ocorrências por heurística. Visibilidade do status e consistência lideraram.")}

      {p("Em paralelo, fiz um **benchmark com plataformas internacionais**, porque no Brasil não havia ferramentas de planejamento patrimonial tão completas. O cuidado foi separar padrão de interface de regra de negócio: fluxos que fazem sentido na legislação tributária e sucessória dos Estados Unidos não se aplicam aqui, então aproveitei a organização da informação e redesenhei a lógica para a regra brasileira.")}
      {p12("Esse diagnóstico virou a ordem de prioridade do redesign: primeiro o cadastro, que alimentava tudo; depois a navegação e a linguagem das telas de análise.")}

      {h("registration", "O cadastro virou a fundação, e isso teve preço")}
      {p("A alternativa óbvia era manter a entrada leve: menos campos, menos abandono no começo.")}
      {p("Fiz o contrário, e levei essa aposta ao CEO com o diagnóstico na mão. Estruturei o cadastro para alimentar tudo que vem depois: riscos, evolução patrimonial, sucessão, holding, doações e relatórios. Um dado entra uma vez e reaparece em cada análise que depende dele. O cadastro deixou de ser etapa burocrática e virou a fundação das simulações.")}

      {img(cadeia, "Diagrama mostrando o cadastro alimentando os módulos de análise da Finvity", "Um dado, várias análises: como o cadastro passou a alimentar cada módulo da plataforma.")}

      {p12("O custo foi um começo mais pesado para o usuário. Compensei trazendo dado que já existe em vez de pedir digitação: a importação da declaração de imposto de renda (inclusive a do cônjuge) preenche boa parte da estrutura patrimonial logo na entrada. E troquei o wizard linear por seções navegáveis, para o especialista preencher na ordem em que recebe os documentos do cliente.")}

      {img(finACDC, "Fluxo de cadastro da Finvity, antes e depois", "Antes e depois do cadastro: de um wizard linear de quatro etapas para uma estrutura navegável por seção, com envio de documentos dentro da própria etapa.")}

      {h("specialist", "Aproximar o que o especialista já conhece")}
      {p("A auditoria mostrou jargão técnico sem ajuda acessível, gráficos com percentuais que não fechavam e formatos de moeda misturados na mesma tela. Correspondência com o mundo real e consistência viraram os critérios das telas de análise.")}
      {p("Em inteligência tributária e na importação do imposto de renda, aproximei a lógica da interface das estruturas que o profissional já reconhece do próprio trabalho, em vez de inventar uma organização nova e \"mais limpa\". O ganho não é estético: reduz aprendizado e evita que o especialista traduza mentalmente o que já sabe para o vocabulário da ferramenta.")}
      {p12("A mesma lógica valeu para a leitura dos dados. Projeção, parâmetros e resultado ficam na mesma visão, para que mudar uma premissa e ver a consequência seja um movimento só, e não uma ida e volta entre telas.")}

      {img(finProduto, "Projeção de evolução patrimonial", "Projeção e parâmetros na mesma tela: o especialista muda a taxa de rendimento e vê o fluxo de caixa responder sem trocar de contexto.")}

      {h("ai-prototyping", "Prototipei com IA antes e depois da refatoração")}
      {p("Sendo o único designer de um produto desse tamanho, explorar custa caro. Usei IA para baixar esse custo, de dois jeitos diferentes conforme o código mudou.")}
      {p("Antes da refatoração, usei o Google Stitch alimentado por um design.md como fonte de verdade das decisões visuais, para gerar variações de tela em alta fidelidade numa fração do tempo. Isso me deixou testar caminhos que sozinho eu não teria tempo de desenhar.")}
      {p12("Depois que o código foi preparado, passei a usar o Claude conectado por MCP para gerar telas e protótipos direto no produto e levá-los a teste de usabilidade sem passar pelo Figma. O protótipo deixou de ser uma representação do produto e virou o produto rodando.")}

      {img(ia, "Fluxo de prototipação com IA antes e depois da refatoração", "Duas fases, dois fluxos: do design.md como fonte de verdade no Stitch ao protótipo rodando no código com Claude via MCP.")}

      {h("support-drop", "60% menos dúvidas no suporte")}
      {p("Os números de negócio da Finvity estão sob NDA. O que posso contar é o que mudou no comportamento.")}
      {p("Antes do redesign, o suporte recebia um volume alto de dúvidas sobre como operar a plataforma, inclusive pelo canal do maior cliente, um dos maiores bancos do Brasil. Depois, esse volume caiu **60%**.")}
      {p12("Isso pesa mais que uma métrica de interface: dúvida no suporte de um cliente enterprise não é atrito individual, é custo de operação e risco de renovação.")}

      {h("data-modeling", "O que a modelagem de dados me ensinou")}
      {p("Em produto complexo, clareza não nasce de remover informação. Nasce de estruturar a informação do jeito certo.")}
      {p("A base de dados define a qualidade da experiência. Quando a modelagem inicial não considera cenários futuros, a interface herda as limitações.")}
      {p12("Se redesenhasse a fundação hoje, começaria com estruturas familiares e patrimoniais mais flexíveis, com múltiplas entidades, relações e cenários de análise, e levaria a auditoria heurística para um ritual recorrente, não um evento de início de projeto.")}
    </>
  );
}
