import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LockSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { listCases } from '../cases';
import { calm, revealFrom, revealTo, stagger } from '../lib/motion';

import aboutImage from '../../images/about.webp';

const LINKEDIN = 'https://www.linkedin.com/in/rodrigo-fsilva/';
const EMAIL = 'mailto:rodrigo_silva05@live.com';
const WHATSAPP = 'https://wa.me/5511982204357';

const SHELL = 'mx-auto w-full max-w-[1180px] px-6 md:px-10';

export function Home() {
  const { lang } = useAppContext();
  const t = translations[lang];

  const cases = listCases(lang);

  const contacts = [
    { href: LINKEDIN, label: 'LinkedIn', desc: t.home.linkedinDesc, external: true },
    { href: EMAIL, label: 'Email', desc: t.home.emailDesc, external: false },
    { href: WHATSAPP, label: 'WhatsApp', desc: t.home.whatsappDesc, external: true },
  ];

  return (
    <div className="w-full">
      {/* ---------------------------------------------------------------
          Hero — afirmacao de posicionamento e tres numeros. Sem ilustracao
          e sem animacao de fundo: o que precisa ser lido aqui e texto.
          --------------------------------------------------------------- */}
      <section className={`${SHELL} pt-[calc(var(--nav-h)+4.5rem)] pb-20 md:pt-[calc(var(--nav-h)+8rem)] md:pb-28`}>
        <motion.div initial={revealFrom} animate={revealTo} transition={calm}>
          <p className="eyebrow">{t.home.heroEyebrow}</p>
          <h1 className="display mt-6 max-w-[16ch]">{t.home.heroTitle}</h1>
          <p className="lead mt-8 max-w-[52ch]">{t.home.heroLead}</p>
        </motion.div>

        <motion.dl
          initial={revealFrom}
          animate={revealTo}
          transition={{ ...calm, delay: 0.12 }}
          className="rule mt-16 grid grid-cols-1 gap-8 pt-8 sm:grid-cols-3 sm:gap-6"
        >
          {t.home.facts.map((fact) => (
            <div key={fact.value}>
              <dt className="text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-[var(--brand)] md:text-[2rem]">
                {fact.value}
              </dt>
              <dd className="meta mt-2 max-w-[30ch]">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </section>

      {/* ---------------------------------------------------------------
          Trabalho — uma linha por case. A regua separa; nao ha card.
          --------------------------------------------------------------- */}
      <section id="work" className={`${SHELL} scroll-mt-[calc(var(--nav-h)+1rem)] py-20 md:py-28`}>
        <motion.div
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="eyebrow">{t.home.workEyebrow}</h2>
          <p className="meta max-w-[46ch] md:text-right">{t.home.workNote}</p>
        </motion.div>

        <div className="mt-10">
          {cases.map((project, i) => (
            <motion.article
              key={project.id}
              initial={revealFrom}
              whileInView={revealTo}
              viewport={{ once: true, margin: '-60px' }}
              transition={stagger(i)}
              className="rule"
            >
              <Link
                to={`/cases/${project.id}`}
                className="press-subtle group grid grid-cols-1 items-start gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-7">
                  <p className="eyebrow">{t.caseContext[project.id]}</p>
                  <h3 className="title-l mt-4 transition-colors duration-200 group-hover:text-[var(--brand)]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-[50ch] text-[var(--body)]">{project.description}</p>
                  <p className="mt-5 text-[0.9375rem] font-medium text-[var(--brand)]">
                    {t.caseHighlight[project.id]}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)]">
                    {t.home.casesCta}
                    <ArrowRight
                      size={15}
                      weight="bold"
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>

                <div className="overflow-hidden rounded-[3px] border border-[var(--rule)] md:col-span-5">
                  <img
                    src={project.thumbnail}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </motion.article>
          ))}

          {/* O trabalho atual: sem pagina, porque nao ha o que publicar.
              A unica acao possivel aqui e comecar uma conversa. */}
          <motion.article
            initial={revealFrom}
            whileInView={revealTo}
            viewport={{ once: true, margin: '-60px' }}
            transition={stagger(cases.length)}
            className="rule"
          >
            <div className="grid grid-cols-1 items-start gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-7">
                <p className="eyebrow">{t.confidential.context}</p>
                <h3 className="title-l mt-4">{t.confidential.title}</h3>
                <p className="mt-5 max-w-[50ch] text-[var(--body)]">{t.confidential.description}</p>
                <Link
                  to="/#contact"
                  className="group mt-7 inline-flex items-center gap-2 border-b border-[var(--brand)] pb-1 text-sm font-medium text-[var(--brand)]"
                >
                  {t.confidential.cta}
                  <ArrowRight
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="flex aspect-[4/3] items-center justify-center rounded-[3px] bg-[var(--brand-soft)] md:col-span-5">
                <LockSimple size={28} weight="light" className="text-[var(--brand)]" aria-hidden="true" />
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Sobre — versao curta; a pagina /about tem o resto.
          --------------------------------------------------------------- */}
      <section className={`${SHELL} py-20 md:py-28`}>
        <motion.div
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
          className="rule grid grid-cols-1 gap-10 pt-16 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-4">
            <div className="overflow-hidden rounded-[3px] border border-[var(--rule)]">
              <img
                src={aboutImage}
                alt="Rodrigo Silva"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-8 md:pl-4">
            <p className="eyebrow">{t.home.aboutEyebrow}</p>
            <h2 className="title-l mt-5 max-w-[22ch]">{t.home.aboutTitle}</h2>
            <p className="mt-6 max-w-[56ch] text-[var(--body)]">{t.home.aboutText}</p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[var(--rule-strong)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
            >
              {t.home.aboutCta}
              <ArrowRight
                size={15}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------
          Contato
          --------------------------------------------------------------- */}
      <section id="contact" className={`${SHELL} scroll-mt-[calc(var(--nav-h)+1rem)] py-20 md:py-28`}>
        <motion.div
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
          className="grid grid-cols-1 gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-6">
            <p className="eyebrow">{t.home.contactEyebrow}</p>
            <h2 className="title-l mt-5 max-w-[18ch]">{t.home.contactTitle}</h2>
            <p className="mt-6 max-w-[44ch] text-[var(--body)]">{t.home.contactLead}</p>
          </div>

          <div className="md:col-span-6 md:pt-10">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="rule group flex items-center justify-between gap-6 py-5 transition-colors duration-200 hover:text-[var(--brand)]"
              >
                <span className="flex flex-col">
                  <span className="text-lg font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--brand)]">
                    {c.label}
                  </span>
                  <span className="meta mt-0.5">{c.desc}</span>
                </span>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className="shrink-0 text-[var(--muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
