import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb, ArrowRight } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { translations } from '../i18n';
import { getFinvityContent, getMiioContent, getTembiciContent } from '../caseContent';

import finHeader from '../../images/Finvity/finHeader.webp';
import temHeader from '../../images/tembici/temHeader.webp';
import miioHero from '../../images/miioOne.webp';

import finvityCase from '../../images/finvityAI.webp';
import miioCase from '../../images/miioOne.webp';
import tembiciCase from '../../images/Tembici.webp';

type CaseItem = { id: string; title: string; description: string; thumbnail: string };

function OtherCasesStack({ cases }: { cases: CaseItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {cases.map((project) => (
        <Link
          key={project.id}
          to={`/cases/${project.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col md:flex-row gap-6 items-center bg-[var(--bg-alt)] border border-[var(--glass-border)] rounded-2xl p-5 hover:border-[var(--brand-color)] transition-colors duration-300"
        >
          {/* Thumbnail */}
          <div className="w-full md:w-[140px] h-[120px] rounded-xl overflow-hidden shrink-0 bg-[var(--glass-bg)] border border-[var(--glass-border)]">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
              {translations[useAppContext().lang]?.cases?.readCase || 'Ler estudo de caso'} <ArrowRight weight="bold" size={16} />
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

  const [headings, setHeadings] = useState<{id: string, text: string}[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

  const getCaseData = () => {
    if (id === 'finvity') {
      return {
        title: t.caseTitles.finvity,
        ...t.caseMeta.finvity,
        timeline: "2025",
        heroImage: finHeader,
        content: getFinvityContent(lang)
      };
    }
    if (id === 'miio') {
      return {
        title: t.caseTitles.miio,
        ...t.caseMeta.miio,
        timeline: "2025",
        heroImage: miioHero,
        content: getMiioContent(lang)
      };
    }
    if (id === 'tembici') {
      return {
        title: t.caseTitles.tembici,
        ...t.caseMeta.tembici,
        timeline: "2022",
        heroImage: temHeader,
        content: getTembiciContent(lang)
      };
    }
    return null;
  };

  const caseData = getCaseData();

  const allCases = [
    {
      id: "tembici",
      title: t.caseTitles.tembici,
      description: t.caseDescriptions.tembici,
      thumbnail: tembiciCase
    },
    {
      id: "miio",
      title: t.caseTitles.miio,
      description: t.caseDescriptions.miio,
      thumbnail: miioCase
    },
    {
      id: "finvity",
      title: t.caseTitles.finvity,
      description: t.caseDescriptions.finvity,
      thumbnail: finvityCase
    }
  ];

  const otherCases = allCases.filter(c => c.id !== id);

  useEffect(() => {
    if (!caseData) return;

    // Small delay to ensure content is rendered
    setTimeout(() => {
      const h3s = Array.from(document.querySelectorAll('.prose h3'));
      const extracted = h3s.map(h => ({
        id: h.id,
        text: h.textContent || ''
      })).filter(h => h.id);

      setHeadings(extracted);

      const handleScroll = () => {
        const h3Elements = Array.from(document.querySelectorAll('.prose h3'))
          .filter(h => h.id);
        let currentSection = '';
        
        for (const h of h3Elements) {
          const rect = h.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = h.id;
          } else {
            break;
          }
        }
        
        if (currentSection) {
          setActiveSection(currentSection);
        } else if (h3Elements.length > 0) {
          setActiveSection(h3Elements[0].id);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }, 100);
  }, [id, lang, caseData]);

  if (!caseData) {
    return <Navigate to="/" replace />;
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[var(--bg-color)]">
      
      {/* Title */}
      <section className="pt-12 pb-12 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto relative">
        <Link to="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand-color)] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} weight="bold" /> {t.cases.back}
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tighter text-[var(--brand-color)] mb-12"
        >
          {caseData.title}
        </motion.h1>

        {/* Metadata Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[var(--glass-border)] pt-8"
        >
          <div className="md:col-span-6">
            <h4 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.summary}</h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.summary}</p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.role}</h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.role}</p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold text-[var(--brand-color)] mb-2">{t.cases.readTime}</h4>
            <p className="text-[var(--text-secondary)] leading-relaxed">{caseData.readTime}</p>
          </div>
        </motion.div>
      </section>

      {/* Hero Image (Max width 1200px to match everything) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-[var(--glass-border)]"
        >
          <img src={caseData.heroImage} alt={caseData.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Impact Overview (Max width 1200px) */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-8 text-[var(--brand-color)]">
            <Lightbulb size={32} weight="fill" />
            <h3 className="text-2xl font-bold">{t.cases.impactOverview}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseData.impact.map((item, i) => (
              <div key={i} className="bg-[var(--glass-bg)] border border-[var(--glass-border)] p-6 rounded-2xl">
                <h4 className="font-bold text-[var(--text-primary)] mb-2">{item.label}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Content Rendering with TOC */}
      <section className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto pb-32 flex items-start gap-16 relative">
        
        {/* Floating TOC (Hidden on mobile, visible on lg screens) */}
        <div className="hidden lg:block w-64 shrink-0 sticky top-32">
          <div className="border-l border-[var(--glass-border)] pl-4 flex flex-col gap-3 py-2">
            {headings.map(h => (
              <a 
                key={h.id}
                href={`#${h.id}`}
                onClick={(e) => scrollToSection(e, h.id)}
                className={`text-sm transition-all duration-300 relative ${activeSection === h.id ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--brand-color)]'}`}
              >
                {activeSection === h.id && (
                  <motion.div 
                    layoutId="activeToc"
                    className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-[var(--brand-color)]"
                  />
                )}
                {h.text}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 prose prose-lg dark:prose-invert max-w-none prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)]"
        >
          {caseData.content}
        </motion.div>

      </section>

      {/* Other Cases Section */}
      <section className="pt-12 pb-24 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-10 text-[var(--brand-color)]">{t.cases.moreCases}</h2>
          <OtherCasesStack cases={otherCases} />
        </div>
      </section>

    </div>
  );
}
