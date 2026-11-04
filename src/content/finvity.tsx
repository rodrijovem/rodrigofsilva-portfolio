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
import antesDepois from '../../images/Finvity/finvity-04-antes-depois.webp';
import antesDepoisEn from '../../images/Finvity/finvity-04-antes-depois-en.webp';
import telas from '../../images/Finvity/finvity-05-telas-finais.webp';
import telasEn from '../../images/Finvity/finvity-05-telas-finais-en.webp';

export function getFinvityContent(lang: Lang): ReactNode {
  if (lang === 'en') return (
    <>
      {h("the-question", "The question the platform has to answer")}
      {p("A wealth planner has to answer an uncomfortable question: if this client died tomorrow, how much would the family pay in estate tax (ITCMD), how long would probate take and what would be left.")}

      {img(telasEn, "Finvity probate screen with judicial and out-of-court costs and estate tax by state", "The answer on screen: judicial and out-of-court probate costs and estimated estate tax (ITCMD) by state, in the redesign.")}

      {p("Getting there takes family structure, assets, debts, holding companies, gifts, income projection and tax rules, all together and all affecting each other. In this domain, oversimplifying makes the analysis lose precision.")}
      {p12("That's why the platform works as a chain: what goes in one place has to reappear, correctly, in every analysis that depends on it. The old version broke that chain often, and that generated a lot of support questions.")}

      {img(finProblema, "Finvity client list", "The client list shows the state of each record (simplified or complete, received or shared), because the planner needs to know where each family stopped before opening any simulation.")}

      {h("three-fronts", "One designer, one CEO, three fronts")}
      {p("I was the company's only designer and reported directly to the CEO. The task: reduce friction in the platform (measured by the volume of support questions) without losing the precision experts require, and bring product, brand and website into one language.")}
      {p("Covering all three made sense: if the platform promises to organize families' wealth and the website talks about it differently, in another visual language, that gets in the way of sales. Since I was designing all three, they shipped together.")}
      {p12("With one designer across three fronts, I had to prioritize all the time. Whatever was being built came first; older modules and ongoing research came later.")}

      {img(finSite, "Finvity institutional website", "The website was rebuilt with the product's own language and interface elements: whoever arrives through the site recognizes the platform when they log in.")}

      {h("audit", "Audit before redesigning")}
      {p("As a team of one, I couldn't redesign everything at once. I needed to know where the old platform got in the expert's way the most and what the market had already solved.")}
      {p("I started with a **Nielsen heuristic evaluation** of the most-used flows: client list, onboarding, assets, financial assumptions and investment simulation. Each problem got a severity rating from 0 to 4, based on frequency, impact and persistence. I found **11 problems, 7 of them severe or catastrophic**. The most violated heuristics were visibility of system status and consistency and standards (4 occurrences each), followed by match between the system and the real world and error prevention (3 each).")}
      {p("The two catastrophic problems were these: deleting a client erased its entire wealth and estate history with no undo, and sharing data with other professionals promised \"full access\" while the edit permission toggle was off. With wealth data protected by Brazil's data protection law (LGPD), both were a real risk for clients.")}

      {img(diagnosticoEn, "Summary of the heuristic evaluation of the old platform: 11 problems by severity and occurrences per Nielsen heuristic", "Audit summary: 11 problems by severity and occurrences per heuristic. Visibility of system status and consistency led.")}

      {p("In parallel, I benchmarked **international platforms**, because Brazil had no wealth planning tools this complete. The care was in separating interface patterns from business rules: flows that make sense under US tax and estate law don't apply here, so I kept the information architecture and redesigned the logic for Brazilian rules.")}
      {p12("With that diagnosis, I set the redesign's order: onboarding first, since it fed everything; then navigation and the language of the analysis screens.")}

      {h("registration", "Onboarding as the base for every analysis")}
      {p("The simpler path was a light entry, with fewer fields and less drop-off at the start.")}
      {p("I proposed the opposite and took it to the CEO with the diagnosis in hand. I structured client onboarding to feed everything that comes after: risks, wealth projection, succession, holding companies, gifts and reports. A piece of data goes in once and reappears in every analysis that depends on it. That made onboarding the base of the simulations.")}

      {img(cadeiaEn, "Diagram of client onboarding feeding Finvity's analysis modules", "One input, many analyses: how onboarding came to feed every module of the platform.")}

      {p12("The cost was a heavier start for the user. To offset it, I brought in data the client already had: importing the income tax return (including the spouse's) fills in much of the asset structure right away. And I replaced the linear wizard with navigable sections, so experts could fill them in the order they receive the client's documents.")}

      {img(finACDC, "Finvity registration flow, before and after", "Before and after registration: from a linear four-step wizard to a structure navigable by section, with document upload inside the step itself.")}

      {h("specialist", "Getting closer to what experts already know")}
      {p("The audit surfaced technical jargon with no accessible help, charts with percentages that didn't add up and mixed currency formats on the same screen. Match with the real world and consistency became the criteria for the analysis screens.")}

      {img(antesDepoisEn, "Finvity assets screen before and after the redesign", "Assets before and after: donuts stuck at 25% and duplicated charts gave way to totals, composition and restricted assets in a single view.")}

      {p("In tax intelligence and income tax import, I brought the interface logic closer to structures professionals already use in their own work. That way they learn the tool faster and don't have to translate what they already know into its vocabulary.")}
      {p12("The same logic applied to reading the data. Projection, parameters and result sit in the same view, so experts can change an assumption and see the consequence without switching screens.")}

      {img(finProduto, "Wealth evolution projection", "Projection and parameters on the same screen: the specialist changes the rate of return and watches the cash flow chart respond without switching context.")}

      {h("ai-prototyping", "I prototyped with AI before and after the refactor")}
      {p("As the only designer on a product this size, I had little time to explore alternatives. I used AI to gain that time, in two different ways as the code changed.")}
      {p("Before the refactor, I used Google Stitch fed with a design.md as the source of truth for visual decisions, generating high-fidelity screen variations in a fraction of the time. That let me test paths I wouldn't have had time to design on my own.")}
      {p12("Once the code was ready, I switched to Claude connected via MCP to generate screens and prototypes directly in the product and take them into usability testing without going through Figma, with the product running.")}

      {img(iaEn, "AI prototyping workflow before and after the refactor", "Two phases, two workflows: from design.md as the source of truth in Stitch to a prototype running in code with Claude via MCP.")}

      {h("support-drop", "60% fewer support questions")}
      {p("Finvity's business numbers are under NDA, but I can share what changed in support.")}
      {p("Before the redesign, support received a high volume of questions about how to operate the platform, including through the largest client's channel, one of Brazil's biggest banks. Afterwards, that volume dropped **60%**.")}
      {p12("For an enterprise client, every support question is also operating cost and a risk at contract renewal.")}

      {h("data-modeling", "What data modeling taught me")}
      {p("I learned that in a complex product, clarity comes from organizing information well.")}
      {p("I also saw how much the data model limits the interface: when it doesn't account for future scenarios, the screen inherits those limits.")}
      {p12("If I redesigned the foundation today, I would start with more flexible family and asset structures, with multiple entities, relationships and analysis scenarios, and I would repeat the heuristic evaluation every delivery cycle.")}
    </>
  );

  return (
    <>
      {h("the-question", "A pergunta que a plataforma precisa responder")}
      {p("Um planejador patrimonial precisa responder algo desconfortável: se esse cliente morrer amanhã, quanto a família paga de ITCMD, quanto tempo leva o inventário e o que sobra.")}

      {img(telas, "Tela de inventário da Finvity com custo judicial, extrajudicial e ITCMD por estado", "A resposta na tela: custo de inventário judicial e extrajudicial e o ITCMD estimado por estado, no redesign.")}

      {p("Chegar nessa resposta exige estrutura familiar, patrimônio, dívidas, holding, doações, projeção de renda e regra tributária, tudo junto e tudo se afetando. Nesse domínio, simplificar demais faz a análise perder precisão.")}
      {p12("Por isso a plataforma funciona como uma cadeia: o que entra num lugar precisa reaparecer, correto, em cada análise que depende dele. A versão antiga quebrava essa cadeia com frequência, e isso gerava muitas dúvidas no suporte.")}

      {img(finProblema, "Lista de clientes da Finvity", "A lista de clientes mostra o estado de cada cadastro (simplificado ou completo, recebido ou compartilhado), porque o planejador precisa saber onde cada família parou antes de abrir qualquer simulação.")}

      {h("three-fronts", "Um designer, um CEO, três frentes")}
      {p("Eu era o único designer da empresa e respondia direto ao CEO. A tarefa: reduzir o atrito de uso da plataforma (medido no volume de dúvidas no suporte) sem perder a precisão que o especialista exige, e alinhar produto, marca e site numa mesma linguagem.")}
      {p("Cuidar das três frentes fazia sentido: se a plataforma promete organizar o patrimônio de famílias e o site fala de outro jeito, com outra linguagem visual, isso atrapalha a venda. Como eu desenhava os três, eles saíram juntos.")}
      {p12("Com um designer para três frentes, eu precisava priorizar o tempo todo. O que estava sendo construído vinha primeiro; módulos antigos e pesquisa contínua ficavam para depois.")}

      {img(finSite, "Site institucional da Finvity", "O site foi refeito com a linguagem e os próprios elementos de interface do produto: quem chega pelo site reconhece a plataforma quando entra.")}

      {h("audit", "Antes de redesenhar, auditar")}
      {p("Com um designer só, eu não podia redesenhar tudo de uma vez. Precisava saber onde a plataforma antiga mais travava o especialista e o que o mercado já tinha resolvido.")}
      {p("Comecei por uma **análise heurística de Nielsen** dos fluxos mais usados: lista de clientes, cadastro, patrimônio, premissas financeiras e simulação de investimentos. Cada problema recebeu severidade de 0 a 4, considerando frequência, impacto e persistência. Foram **11 problemas, 7 deles graves ou catastróficos**. As heurísticas mais violadas foram visibilidade do status do sistema e consistência e padrões (4 ocorrências cada), seguidas de correspondência com o mundo real e prevenção de erros (3 cada).")}
      {p("Os dois problemas catastróficos eram estes: excluir um cliente apagava todo o histórico patrimonial e sucessório sem opção de desfazer, e o compartilhamento de dados com outros profissionais dizia \"acesso total\" enquanto o controle de permissão estava desligado. Com dados patrimoniais protegidos pela LGPD, os dois eram um risco real para os clientes.")}

      {img(diagnostico, "Resumo da análise heurística da plataforma antiga: 11 problemas por severidade e ocorrências por heurística de Nielsen", "Resumo da auditoria: 11 problemas por severidade e as ocorrências por heurística. Visibilidade do status e consistência lideraram.")}

      {p("Em paralelo, fiz um **benchmark com plataformas internacionais**, porque no Brasil não havia ferramentas de planejamento patrimonial tão completas. O cuidado foi separar padrão de interface de regra de negócio: fluxos que fazem sentido na legislação tributária e sucessória dos Estados Unidos não se aplicam aqui, então aproveitei a organização da informação e redesenhei a lógica para a regra brasileira.")}
      {p12("Com esse diagnóstico, defini a ordem do redesign: primeiro o cadastro, que alimentava tudo; depois a navegação e a linguagem das telas de análise.")}

      {h("registration", "O cadastro como base das análises")}
      {p("O caminho mais simples era manter a entrada leve, com menos campos e menos abandono no começo.")}
      {p("Propus o oposto e levei a proposta ao CEO com o diagnóstico em mãos. Estruturei o cadastro para alimentar tudo que vem depois: riscos, evolução patrimonial, sucessão, holding, doações e relatórios. Um dado entra uma vez e reaparece em cada análise que depende dele. Assim o cadastro passou a ser a base das simulações.")}

      {img(cadeia, "Diagrama mostrando o cadastro alimentando os módulos de análise da Finvity", "Um dado, várias análises: como o cadastro passou a alimentar cada módulo da plataforma.")}

      {p12("O custo foi um começo mais pesado para o usuário. Para compensar, trouxe dados que o cliente já tinha: a importação da declaração de imposto de renda (inclusive a do cônjuge) preenche boa parte da estrutura patrimonial logo na entrada. E troquei o wizard linear por seções navegáveis, para o especialista preencher na ordem em que recebe os documentos do cliente.")}

      {img(finACDC, "Fluxo de cadastro da Finvity, antes e depois", "Antes e depois do cadastro: de um wizard linear de quatro etapas para uma estrutura navegável por seção, com envio de documentos dentro da própria etapa.")}

      {h("specialist", "Aproximar o que o especialista já conhece")}
      {p("A auditoria mostrou jargão técnico sem ajuda acessível, gráficos com percentuais que não fechavam e formatos de moeda misturados na mesma tela. Correspondência com o mundo real e consistência viraram os critérios das telas de análise.")}

      {img(antesDepois, "Tela de Patrimônio da Finvity antes e depois do redesign", "Patrimônio antes e depois: os donuts presos em 25% e os gráficos duplicados deram lugar a totais, composição e bens com restrição numa leitura só.")}

      {p("Em inteligência tributária e na importação do imposto de renda, aproximei a lógica da interface das estruturas que o profissional já usa no próprio trabalho. Assim ele aprende a ferramenta mais rápido e não precisa traduzir o que já sabe para o vocabulário dela.")}
      {p12("A mesma lógica valeu para a leitura dos dados. Projeção, parâmetros e resultado ficam na mesma visão, para o especialista mudar uma premissa e ver a consequência sem trocar de tela.")}

      {img(finProduto, "Projeção de evolução patrimonial", "Projeção e parâmetros na mesma tela: o especialista muda a taxa de rendimento e vê o fluxo de caixa responder sem trocar de contexto.")}

      {h("ai-prototyping", "Prototipei com IA antes e depois da refatoração")}
      {p("Como único designer de um produto desse tamanho, eu tinha pouco tempo para explorar alternativas. Usei IA para ganhar esse tempo, de dois jeitos diferentes conforme o código mudou.")}
      {p("Antes da refatoração, usei o Google Stitch alimentado por um design.md como fonte de verdade das decisões visuais, para gerar variações de tela em alta fidelidade numa fração do tempo. Isso me deixou testar caminhos que sozinho eu não teria tempo de desenhar.")}
      {p12("Depois que o código foi preparado, passei a usar o Claude conectado por MCP para gerar telas e protótipos direto no produto e levá-los a teste de usabilidade sem passar pelo Figma, com o produto rodando.")}

      {img(ia, "Fluxo de prototipação com IA antes e depois da refatoração", "Duas fases, dois fluxos: do design.md como fonte de verdade no Stitch ao protótipo rodando no código com Claude via MCP.")}

      {h("support-drop", "60% menos dúvidas no suporte")}
      {p("Os números de negócio da Finvity estão sob NDA, mas posso contar o que mudou no suporte.")}
      {p("Antes do redesign, o suporte recebia um volume alto de dúvidas sobre como operar a plataforma, inclusive pelo canal do maior cliente, um dos maiores bancos do Brasil. Depois, esse volume caiu **60%**.")}
      {p12("Para um cliente enterprise, cada dúvida no suporte também é custo de operação e risco na renovação do contrato.")}

      {h("data-modeling", "O que a modelagem de dados me ensinou")}
      {p("Aprendi que, em produto complexo, a clareza vem de organizar bem a informação.")}
      {p("Também vi o quanto a modelagem de dados limita a interface: quando ela não prevê cenários futuros, a tela herda essas limitações.")}
      {p12("Se redesenhasse a fundação hoje, começaria com estruturas familiares e patrimoniais mais flexíveis, com múltiplas entidades, relações e cenários de análise, e repetiria a auditoria heurística a cada ciclo de entregas.")}
    </>
  );
}
