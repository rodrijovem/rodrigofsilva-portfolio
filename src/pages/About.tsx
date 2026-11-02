import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, DownloadSimple } from '@phosphor-icons/react';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { track } from '../lib/analytics';
import { calm, revealFrom, revealTo, stagger } from '../lib/motion';

import logoAdobe from '../../images/svgs/logoAdobe.svg';
import logoClaude from '../../images/svgs/logoClaude.svg';
import logoFigma from '../../images/svgs/logoFigma.svg';
import logoGA from '../../images/svgs/logoGA.svg';
import logoHotjar from '../../images/svgs/logoHotjar.svg';
import logoJira from '../../images/svgs/logoJira.svg';
import logoLovable from '../../images/svgs/logoLovable.svg';
import logoMaze from '../../images/svgs/logoMaze.svg';
import logoMiro from '../../images/svgs/logoMiro.svg';
import logoNotion from '../../images/svgs/logoNotion.svg';
import logoSlack from '../../images/svgs/logoSlack.svg';

const LINKEDIN = 'https://www.linkedin.com/in/rodrigo-fsilva/';
const SHELL = 'mx-auto w-full max-w-[1180px] px-6 md:px-10';

/* Nomeados: um alt como "Tool logo 0" nao e informacao nem decoracao */
const tools = [
  { src: logoFigma, name: 'Figma' },
  { src: logoClaude, name: 'Claude' },
  { src: logoLovable, name: 'Lovable' },
  { src: logoMiro, name: 'Miro' },
  { src: logoMaze, name: 'Maze' },
  { src: logoHotjar, name: 'Hotjar' },
  { src: logoGA, name: 'Google Analytics' },
  { src: logoNotion, name: 'Notion' },
  { src: logoJira, name: 'Jira' },
  { src: logoSlack, name: 'Slack' },
  { src: logoAdobe, name: 'Adobe' },
];

export function About() {
  const { lang } = useAppContext();
  const t = translations[lang];
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? t.experiences : t.experiences.slice(0, 2);

  return (
    <div className="w-full">
      {/* Intro */}
      <section className={`${SHELL} pt-[calc(var(--nav-h)+4rem)] pb-16 md:pt-[calc(var(--nav-h)+6rem)]`}>
        <motion.div initial={revealFrom} animate={revealTo} transition={calm}>
          <p className="eyebrow">{t.home.aboutEyebrow}</p>
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="flex flex-col gap-6 md:col-span-7">
              <p className="lead">{t.about.introPara1}</p>
              <p className="text-[var(--body)]">{t.about.introPara2}</p>
              <p className="text-[var(--body)]">{t.about.introPara3}</p>

              <div className="mt-2 flex flex-wrap gap-6">
                <a
                  href={t.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('resume_download', { language: lang, location: 'about' })}
                  className="group inline-flex items-center gap-2 border-b border-[var(--brand)] pb-1 text-sm font-medium text-[var(--brand)]"
                >
                  <DownloadSimple size={16} weight="bold" aria-hidden="true" />
                  {t.about.downloadResume}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('contact_click', { method: 'linkedin', location: 'about' })}
                  className="group inline-flex items-center gap-2 border-b border-[var(--rule-strong)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  LinkedIn
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Educacao */}
            <div className="md:col-span-5 md:pl-6">
              <h2 className="eyebrow">{t.about.educationTitle}</h2>
              <ul className="mt-6">
                {t.about.education.map((item) => (
                  <li key={item.title} className="rule py-4">
                    <p className="font-medium text-[var(--ink)]">{item.title}</p>
                    <p className="meta mt-0.5">{item.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ferramentas — faixa em loop. A lista e renderizada duas vezes
          porque o loop depende disso; a segunda copia e decorativa e sai
          do alcance do leitor de tela para os nomes nao serem lidos em
          dobro. */}
      <section className={`${SHELL} py-10`}>
        <div className="rule pt-10">
          <div className="marquee">
            <ul className="marquee-track">
              {[0, 1].map((copy) => (
                <li key={copy} aria-hidden={copy === 1 ? true : undefined} className="contents">
                  <ul className="flex shrink-0 items-center gap-x-12 pr-12 md:gap-x-16 md:pr-16">
                    {tools.map((tool) => (
                      <li key={`${copy}-${tool.name}`} className="shrink-0">
                        <img
                          src={tool.src}
                          alt={copy === 0 ? tool.name : ''}
                          title={tool.name}
                          loading="lazy"
                          className="h-6 w-auto opacity-45 grayscale transition-opacity duration-300 hover:opacity-100 md:h-7"
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Carreira */}
      <section className={`${SHELL} py-20 md:py-28`}>
        <h2 className="eyebrow">{t.experience.title}</h2>

        <div className="mt-10">
          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={revealFrom}
              whileInView={revealTo}
              viewport={{ once: true, margin: '-60px' }}
              transition={stagger(index)}
              className="rule grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <p className="meta tracking-[0.08em]">{exp.period}</p>
                <h3 className="title-m mt-2">{exp.company}</h3>
                <p className="meta mt-1">{exp.location}</p>
              </div>

              <div className="md:col-span-8">
                <p className="text-lg font-medium text-[var(--brand)]">{exp.role}</p>
                <div className="mt-4 flex flex-col gap-3">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="max-w-[62ch] text-[var(--body)]">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {t.experiences.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 border-b border-[var(--rule-strong)] pb-1 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            {showAll ? t.experience.showLess : t.experience.showMore}
          </button>
        )}
      </section>

      {/* Depoimentos — empilhados, nao em carrossel: o recrutador le os
          quatro de uma vez em vez de clicar tres vezes */}
      <section className={`${SHELL} py-20 md:py-28`}>
        <h2 className="eyebrow">{t.testimonialsTitle}</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {t.testimonials.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={revealFrom}
              whileInView={revealTo}
              viewport={{ once: true, margin: '-60px' }}
              transition={stagger(index)}
              className="rule py-8"
            >
              <blockquote className="max-w-[52ch] text-[var(--body)]">{item.content}</blockquote>
              <figcaption className="mt-5">
                <span className="block text-sm font-medium text-[var(--ink)]">{item.name}</span>
                <span className="meta">{item.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  );
}
