import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadSimple, LinkedinLogo, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
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

/* Nomeados: um alt como "Tool logo 0" nao e informacao nem decoracao */
const tools = [
  { src: logoAdobe, name: 'Adobe' },
  { src: logoClaude, name: 'Claude' },
  { src: logoFigma, name: 'Figma' },
  { src: logoGA, name: 'Google Analytics' },
  { src: logoHotjar, name: 'Hotjar' },
  { src: logoJira, name: 'Jira' },
  { src: logoLovable, name: 'Lovable' },
  { src: logoMaze, name: 'Maze' },
  { src: logoMiro, name: 'Miro' },
  { src: logoNotion, name: 'Notion' },
  { src: logoSlack, name: 'Slack' },
];

export function About() {
  const { lang } = useAppContext();
  const t = translations[lang];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences ? t.experiences : t.experiences.slice(0, 2);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === t.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? t.testimonials.length - 1 : prev - 1));
  };

  /*
    As setas laterais so aparecem em lg: entre md e lg o container ainda nao
    tem folga para o deslocamento de -4rem e elas vazavam 16px da viewport.
    Abaixo de lg quem navega sao os controles de baixo.
  */
  const arrowClass =
    'w-12 h-12 rounded-full bg-[var(--bg-color)] border border-[var(--glass-border)] items-center justify-center text-[var(--text-primary)] hover:bg-[var(--glass-border)] transition-colors z-10 hidden lg:flex shadow-sm';

  return (
    <div className="w-full">
      {/* Intro & Education */}
      <section className="pt-[calc(var(--nav-h)+4rem)] pb-16 md:pb-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-color)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left: Intro */}
          <motion.div
            initial={revealFrom}
            animate={revealTo}
            transition={calm}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <p className="text-xl text-[var(--text-secondary)] leading-snug tracking-tight font-medium text-pretty">
              {t.about.introPara1}
            </p>
            <p className="text-xl text-[var(--text-secondary)] leading-snug tracking-tight font-medium text-pretty">
              {t.about.introPara2}
            </p>
            <p className="text-xl text-[var(--text-secondary)] leading-snug tracking-tight font-medium mb-4 text-pretty">
              {t.about.introPara3}
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a href={t.resumeFile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--brand-color)] text-[var(--bg-color)] px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                <DownloadSimple size={18} weight="bold" aria-hidden="true" /> {t.about.downloadResume}
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-fsilva/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--brand-color)] text-[var(--bg-color)] px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                <LinkedinLogo size={18} weight="fill" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            initial={revealFrom}
            animate={revealTo}
            transition={{ ...calm, delay: 0.12 }}
            className="lg:col-span-5 bg-[var(--bg-alt)] p-8 md:p-10 rounded-[2rem] border border-[var(--glass-border)] shadow-sm"
          >
            <h2 className="text-3xl font-bold tracking-tighter leading-[1.05] mb-8 text-[var(--brand-color)]">{t.about.educationTitle}</h2>

            <div className="flex flex-col gap-6">
              {t.about.education.map((item, index) => (
                <div key={index} className={index !== t.about.education.length - 1 ? "border-b border-[var(--glass-border)] pb-4" : ""}>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] text-pretty">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.location}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Tools Section — pausa no hover, e para de vez sob movimento reduzido */}
      <section className="py-16 bg-[var(--bg-alt)] overflow-hidden border-y border-[var(--glass-border)] flex items-center">
        <h2 className="sr-only">{lang === 'pt' ? 'Ferramentas que uso' : 'Tools I use'}</h2>
        <div className="marquee-wrap w-full opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500">
          <div className="animate-marquee flex w-max items-center">
            {/* Primeiro conjunto: nomeado */}
            <div className="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
              {tools.map((tool) => (
                <img key={`logo-1-${tool.name}`} src={tool.src} alt={tool.name} className="h-10 md:h-12 w-auto object-contain" />
              ))}
            </div>

            {/* Segundo conjunto: duplicata visual para o loop, invisivel para leitores de tela */}
            <div className="flex gap-16 md:gap-32 px-8 md:px-16 items-center" aria-hidden="true">
              {tools.map((tool) => (
                <img key={`logo-2-${tool.name}`} src={tool.src} alt="" className="h-10 md:h-12 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-color)]">
        <div className="max-w-[1200px] mx-auto">

          <div className="relative border-l border-[var(--glass-border)] ml-4 md:ml-8 md:pl-12 flex flex-col gap-16 max-w-4xl mx-auto">
            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={stagger(index)}
                className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-16"
              >
                {/* Timeline Node */}
                <div className="absolute w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--brand-color)] -left-[25px] top-1.5 md:-left-[57px]" aria-hidden="true"></div>

                {/* Left Side: Time & Company */}
                <div className="md:w-1/4 shrink-0">
                  <div className="text-sm font-mono tracking-widest text-[var(--text-secondary)] mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold tracking-tighter uppercase mb-1 text-[var(--text-primary)]">{exp.company}</h3>
                </div>

                {/* Right Side: Role & Details */}
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold tracking-tight leading-[1.15] text-balance mb-2 text-[var(--brand-color)]">{exp.role}</h4>
                  <p className="text-sm font-mono text-[var(--text-secondary)] mb-6">{exp.location}</p>
                  <div className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-pretty">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {t.experiences.length > 2 && (
              <div className="mt-4 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-16 pl-8 md:pl-0">
                <div className="hidden md:block md:w-1/4 shrink-0"></div>
                <div className="md:w-3/4">
                  <button
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    aria-expanded={showAllExperiences}
                    className="px-6 py-2 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-border)] transition-colors font-medium text-sm bg-[var(--bg-color)] shadow-sm"
                  >
                    {showAllExperiences ? t.experience.showLess : t.experience.showMore}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-alt)] border-t border-[var(--glass-border)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter leading-[1.05] mb-16 text-[var(--text-primary)]">{t.testimonialsTitle}</h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className={`absolute lg:-left-16 top-1/2 -translate-y-1/2 ${arrowClass}`}
              aria-label={lang === 'pt' ? 'Depoimento anterior' : 'Previous testimonial'}
            >
              <CaretLeft size={24} weight="bold" aria-hidden="true" />
            </button>

            <button
              onClick={nextTestimonial}
              className={`absolute lg:-right-16 top-1/2 -translate-y-1/2 ${arrowClass}`}
              aria-label={lang === 'pt' ? 'Próximo depoimento' : 'Next testimonial'}
            >
              <CaretRight size={24} weight="bold" aria-hidden="true" />
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[var(--bg-color)] p-8 md:p-12 rounded-2xl border border-[var(--glass-border)] shadow-sm flex flex-col text-left min-h-[300px] m-0"
                >
                  <p className="text-[var(--text-secondary)] italic text-lg md:text-xl leading-relaxed grow text-pretty">
                    {t.testimonials[currentTestimonial].content}
                  </p>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation & Indicators */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-[var(--bg-color)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--glass-border)] transition-colors lg:hidden"
                aria-label={lang === 'pt' ? 'Depoimento anterior' : 'Previous testimonial'}
              >
                <CaretLeft size={20} weight="bold" aria-hidden="true" />
              </button>

              <div className="flex gap-2">
                {t.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-current={index === currentTestimonial ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                      index === currentTestimonial
                        ? 'bg-[var(--text-primary)] w-8'
                        : 'bg-[var(--glass-border)] hover:bg-[var(--text-secondary)] w-2.5'
                    }`}
                    aria-label={
                      lang === 'pt'
                        ? `Ver depoimento ${index + 1} de ${t.testimonials.length}`
                        : `Go to testimonial ${index + 1} of ${t.testimonials.length}`
                    }
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-[var(--bg-color)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--glass-border)] transition-colors lg:hidden"
                aria-label={lang === 'pt' ? 'Próximo depoimento' : 'Next testimonial'}
              >
                <CaretRight size={20} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
