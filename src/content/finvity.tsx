import { ReactNode } from 'react';
import type { Lang } from '../i18n';
import { h, img, p, p12 } from './blocks';

import finProblema from '../../images/Finvity/finProblema.webp';
import finACDC from '../../images/Finvity/finACDC.webp';
import finProduto from '../../images/Finvity/finProduto.webp';
import finSite from '../../images/Finvity/finSite.webp';

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
