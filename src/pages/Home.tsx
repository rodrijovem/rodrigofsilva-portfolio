import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { track } from '../lib/analytics';
import { listCases } from '../cases';
import { calm, revealFrom, revealTo, stagger } from '../lib/motion';

import aboutImage from '../../images/about.webp';
import rennerCover from '../../images/covers/renner.webp';

// O card da Renner (sem pagina) entra entre os cases, antes deste indice.
const RENNER_POSITION = 2;

const LINKEDIN = 'https://www.linkedin.com/in/rodrigo-fsilva/';
const EMAIL = 'mailto:rodrigo_silva05@live.com';
const WHATSAPP = 'https://wa.me/5511982204357';

const SHELL = 'mx-auto w-full max-w-[1180px] px-6 md:px-10';

export function Home() {
  const { lang } = useAppContext();
  const t = translations[lang];

  const cases = listCases(lang);

  const contacts = [
    { href: LINKEDIN, label: 'LinkedIn', method: 'linkedin', desc: t.home.linkedinDesc, external: true },
    { href: EMAIL, label: 'Email', method: 'email', desc: t.home.emailDesc, external: false },
    { href: WHATSAPP, label: 'WhatsApp', method: 'whatsapp', desc: t.home.whatsappDesc, external: true },
  ] as const;

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
        <div>
          {cases.map((project, i) => (
            <Fragment key={project.id}>
              {/* O trabalho atual: sem pagina, porque nao ha o que publicar.
                  A unica acao possivel aqui e comecar uma conversa. */}
              {i === RENNER_POSITION && (
                <motion.article
                  initial={revealFrom}
                  whileInView={revealTo}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={stagger(i)}
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

                    {/* Telas reais com todo texto trocado por barras: mostra o produto sem expor dado */}
                    <div className="overflow-hidden rounded-2xl border border-[var(--rule)] md:col-span-5">
                      <img src={rennerCover} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    </div>
                  </div>
                </motion.article>
              )}

            <motion.article
              initial={revealFrom}
              whileInView={revealTo}
              viewport={{ once: true, margin: '-60px' }}
              transition={stagger(i)}
              className="rule"
            >
              <Link
                to={`/cases/${project.id}`}
                onClick={() => track('case_open', { case_id: project.id, location: 'home' })}
                className="press-subtle group grid grid-cols-1 items-start gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-7">
                  <p className="eyebrow">{t.caseContext[project.id]}</p>
                  <h3 className="title-l mt-4 transition-colors duration-200 group-hover:text-[var(--brand)]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-[50ch] text-[var(--body)]">{project.description}</p>
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

                <div className="overflow-hidden rounded-2xl border border-[var(--rule)] md:col-span-5">
                  <img
                    src={project.thumbnail}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </motion.article>
            </Fragment>
          ))}

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
            <div className="overflow-hidden rounded-2xl border border-[var(--rule)]">
              <img
                src={aboutImage}
                alt="Rodrigo Silva"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
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
          Contato — o unico bloco cheio da cor de marca. O resto do site e
          papel branco; aqui a pagina muda de tom para marcar o fim e a acao.
          --------------------------------------------------------------- */}
      <section id="contact" className={`${SHELL} scroll-mt-[calc(var(--nav-h)+1rem)] py-20 md:py-28`}>
        <motion.div
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
          className="grid grid-cols-1 gap-12 rounded-2xl bg-[var(--brand)] px-6 py-12 md:grid-cols-12 md:px-14 md:py-16"
        >
          <div className="md:col-span-6">
            <p className="eyebrow !text-[var(--on-brand-muted)]">{t.home.contactEyebrow}</p>
            <h2 className="title-l mt-5 max-w-[18ch] !text-[var(--on-brand)]">{t.home.contactTitle}</h2>
            <p className="mt-6 max-w-[44ch] text-[var(--on-brand-muted)]">{t.home.contactLead}</p>
          </div>

          <div className="md:col-span-6 md:pt-10">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => track('contact_click', { method: c.method, location: 'home_contact' })}
                className="group flex items-center justify-between gap-6 border-t border-[var(--on-brand-rule)] py-5"
              >
                <span className="flex flex-col">
                  <span className="text-lg font-medium text-[var(--on-brand)]">{c.label}</span>
                  <span className="meta mt-0.5 !text-[var(--on-brand-muted)]">{c.desc}</span>
                </span>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  aria-hidden="true"
                  className="shrink-0 text-[var(--on-brand-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--on-brand)]"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
