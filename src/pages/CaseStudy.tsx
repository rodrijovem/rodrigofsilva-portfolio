import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb, ArrowRight } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { isCaseId, listCases } from '../cases';
import type { CaseSummary } from '../cases';
import { caseDetail } from '../caseDetail';
import { calm, revealFrom, revealTo } from '../lib/motion';

function OtherCasesStack({ cases }: { cases: CaseSummary[] }) {
  // Hook no topo do componente — nunca dentro do map
  const { lang } = useAppContext();
  const readCase = translations[lang].cases.readCase;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {cases.map((project) => (
        <Link
          key={project.id}
          to={`/cases/${project.id}`}
          className="press-subtle group flex flex-col md:flex-row gap-6 items-center bg-[var(--bg-alt)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--brand-color)] transition-colors duration-300"
        >
          {/* Thumbnail */}
          <div className="w-full md:w-[140px] h-[120px] rounded-xl overflow-hidden shrink-0 bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <img src={project.thumbnail} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h3 className="text-lg font-bold tracking-tight mb-1 text-[var(--brand-color)]">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[var(--brand-color)] font-semibold text-sm group-hover:gap-3 transition-all">
              {readCase} <ArrowRight weight="bold" size={16} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CaseStudy() {
  const { id } = useParams();
  const { lang } = useAppContext();
  const t = translations[lang];

  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

  const valid = isCaseId(id);
  const caseData = valid ? caseDetail(id, lang) : null;
  const otherCases = valid ? listCases(lang).filter((c) => c.id !== id) : [];

  /*
    Um IntersectionObserver no lugar do par setTimeout + listener de scroll.
    Dependencias sao apenas [id, lang]: caseData e um objeto novo a cada render
    e, como dependencia, fazia o efeito reexecutar indefinidamente, acumulando
    listeners que nunca eram removidos.

    A busca sai do ref do proprio conteudo, e nao de um querySelectorAll global
    por '.prose h3' — assim o indice nao depende de qual outro componente da
    pagina por acaso usa a mesma classe.
  */
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>('h3')).filter((h) => h.id);

    setHeadings(els.map((h) => ({ id: h.id, text: h.textContent || '' })));
    if (els.length === 0) return;

    setActiveSection(els[0].id);

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = els.find((h) => visible.has(h.id));
        if (first) setActiveSection(first.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id, lang]);

  if (!caseData) {
    return <Navigate to="/" replace />;
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full bg-[var(--bg-color)]">

      {/* Title */}
      <section className="pt-[calc(var(--nav-h)+3rem)] pb-12 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto relative">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-color)] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} weight="bold" /> {t.cases.back}
        </Link>

        <motion.h1
          initial={revealFrom}
          animate={revealTo}
          transition={calm}
          className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.02] text-balance text-[var(--brand-color)] mb-12"
        >
          {caseData.title}
        </motion.h1>

        {/* Metadata Grid */}
        <motion.div
          initial={revealFrom}
          animate={revealTo}
          transition={{ ...calm, delay: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[var(--glass-border)] pt-8"
        >
          <div className="md:col-span-6">
            <h2 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.summary}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.summary}</p>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.role}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.role}</p>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.readTime}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.readTime}</p>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...calm, delay: 0.14 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-[var(--glass-border)]"
        >
          <img src={caseData.heroImage} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Impact Overview */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto mb-24">
        <motion.div
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
        >
          <div className="flex items-center gap-2 mb-8 text-[var(--brand-color)]">
            <Lightbulb size={32} weight="fill" aria-hidden="true" />
            <h2 className="text-2xl font-bold tracking-tight">{t.cases.impactOverview}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseData.impact.map((item) => (
              <div key={item.label} className="bg-[var(--glass-bg)] border border-[var(--glass-border)] p-6 rounded-2xl">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.label}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content Rendering with TOC */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto pb-32 flex items-start gap-16 relative">

        {/* Floating TOC */}
        <nav
          aria-label={t.cases.impactOverview}
          className="hidden lg:block w-64 shrink-0 sticky top-[calc(var(--nav-h)+2rem)]"
        >
          <div className="border-l border-[var(--glass-border)] pl-4 flex flex-col gap-3 py-2">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                onClick={(e) => scrollToSection(e, h.id)}
                aria-current={activeSection === h.id ? 'location' : undefined}
                className={`text-sm transition-colors duration-300 relative ${activeSection === h.id ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--brand-color)]'}`}
              >
                {activeSection === h.id && (
                  <motion.div
                    layoutId="activeToc"
                    transition={calm}
                    className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-[var(--brand-color)]"
                  />
                )}
                {h.text}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <motion.div
          ref={contentRef}
          initial={revealFrom}
          whileInView={revealTo}
          viewport={{ once: true, margin: '-80px' }}
          transition={calm}
          className="flex-1 prose prose-lg dark:prose-invert max-w-none prose-headings:text-[var(--text-primary)] prose-headings:text-balance prose-p:text-[var(--text-secondary)]"
        >
          {caseData.content}
        </motion.div>

      </section>

      {/* Other Cases Section */}
      <section className="pt-12 pb-24 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.05] mb-10 text-[var(--brand-color)]">{t.cases.moreCases}</h2>
          <OtherCasesStack cases={otherCases} />
        </div>
      </section>

    </div>
  );
}
