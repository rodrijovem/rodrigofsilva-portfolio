import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { track } from '../lib/analytics';
import { isCaseId, listCases } from '../cases';
import { caseDetail } from '../caseDetail';
import { rich } from '../content/blocks';
import { calm, revealFrom, revealTo, stagger } from '../lib/motion';

const SHELL = 'mx-auto w-full max-w-[1180px] px-6 md:px-10';

/** O indice lateral: so existe se o conteudo tiver secoes com ancora. */
function useHeadings(deps: unknown[]) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    let cleanup = () => {};

    /*
      O conteudo e montado pelo React no mesmo commit que dispara este efeito,
      entao a leitura do DOM ja encontra os titulos. O timeout de um frame
      cobre imagens que empurram layout tarde.
    */
    const timer = window.setTimeout(() => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>('#case-content h2[id]'));
      setHeadings(nodes.map((n) => ({ id: n.id, text: n.textContent ?? '' })));

      const onScroll = () => {
        let current = '';
        for (const node of nodes) {
          if (node.getBoundingClientRect().top <= 160) current = node.id;
          else break;
        }
        setActive(current || nodes[0]?.id || '');
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      cleanup = () => window.removeEventListener('scroll', onScroll);
    }, 0);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { headings, active };
}

export function CaseStudy() {
  const { id } = useParams();
  const { lang } = useAppContext();
  const t = translations[lang];

  const valid = isCaseId(id);
  const { headings, active } = useHeadings([id, lang]);

  if (!valid) return <Navigate to="/" replace />;

  const data = caseDetail(id, lang);
  const others = listCases(lang).filter((c) => c.id !== id);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Cabecalho */}
      <section className={`${SHELL} pt-[calc(var(--nav-h)+2.5rem)] md:pt-[calc(var(--nav-h)+4rem)]`}>
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        >
          <ArrowLeft size={15} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1" />
          {t.cases.back}
        </Link>

        <motion.div initial={revealFrom} animate={revealTo} transition={calm} className="mt-10">
          <p className="eyebrow">{t.caseContext[id]}</p>
          <h1 className="display mt-5 max-w-[14ch]">{data.title}</h1>
          <p className="lead mt-8 max-w-[56ch]">{rich(data.summary)}</p>
        </motion.div>

        <div className="rule mt-14 grid grid-cols-1 gap-8 pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="eyebrow">{t.cases.role}</h2>
            <p className="mt-3 max-w-[56ch] text-[var(--body)]">{data.role}</p>
          </div>
          <div className="md:col-span-5">
            <h2 className="eyebrow">{t.cases.readTime}</h2>
            <p className="mt-3 text-[var(--body)]">{data.readTime}</p>
          </div>
        </div>
      </section>

      {/* Imagem de capa */}
      <section className={`${SHELL} mt-14 md:mt-16`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...calm, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-[var(--rule)]"
        >
          <img src={data.heroImage} alt="" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" />
        </motion.div>
      </section>

      {/* Visao geral do impacto */}
      <section className={`${SHELL} py-20 md:py-24`}>
        <h2 className="eyebrow">{t.cases.impactOverview}</h2>
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
          {data.impact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={revealFrom}
              whileInView={revealTo}
              viewport={{ once: true, margin: '-60px' }}
              transition={stagger(i)}
              className="rule pt-6"
            >
              <h3 className="text-sm font-medium text-[var(--ink)]">{item.label}</h3>
              <p className="mt-2 max-w-[40ch] text-[var(--body)]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conteudo + indice */}
      <section className={`${SHELL} flex items-start gap-16 pb-24`}>
        <nav aria-label={t.cases.summary} className="sticky top-[calc(var(--nav-h)+2rem)] hidden w-56 shrink-0 lg:block">
          <ul className="flex flex-col gap-3 border-l border-[var(--rule)] pl-5">
            {headings.map((hd) => (
              <li key={hd.id}>
                <a
                  href={`#${hd.id}`}
                  onClick={(e) => scrollTo(e, hd.id)}
                  className={`block text-[0.8125rem] leading-snug transition-colors duration-200 ${
                    active === hd.id ? 'font-medium text-[var(--brand)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  {hd.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          id="case-content"
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-60px' }}
          transition={calm}
          className="min-w-0 flex-1"
        >
          {data.content}
        </motion.div>
      </section>

      {/* Mais cases: painel cinza para destacar o bloco do fim do case e do rodape */}
      <section className={`${SHELL} pb-24`}>
        <div className="rounded-2xl bg-[var(--surface)] px-6 py-10 md:px-10 md:py-12">
          <h2 className="eyebrow">{t.cases.moreCases}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {others.map((project, i) => (
              <motion.div
                key={project.id}
                initial={revealFrom}
                whileInView={revealTo}
                viewport={{ once: true, margin: '-60px' }}
                transition={stagger(i)}
              >
                <Link
                  to={`/cases/${project.id}`}
                  onClick={() => track('case_open', { case_id: project.id, location: 'more_cases' })}
                  className="group flex h-full flex-col justify-between gap-10 rounded-xl border border-[var(--rule)] bg-[var(--bg)] p-6 transition-colors duration-200 hover:border-[var(--rule-strong)] md:p-8"
                >
                  <div>
                    <p className="eyebrow">{t.caseContext[project.id]}</p>
                    <h3 className="title-m mt-3 transition-colors duration-200 group-hover:text-[var(--brand)]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                    {t.cases.readCase}
                    <ArrowRight
                      size={15}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
