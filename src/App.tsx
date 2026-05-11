import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LinkedinLogo, Sun, Moon, CaretDown, CaretUp, WhatsappLogo, Envelope, X } from '@phosphor-icons/react';
import { useRef, useState, useEffect, MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import lightImage from '../images/light.webp';
import darkImage from '../images/dark.webp';
import finvityCase from '../images/finvityAI.webp';
import miioCase from '../images/miioOne.webp';
import tembiciCase from '../images/Tembici.webp';
import temHeader from '../images/tembici/temHeader.webp';
import finHeader from '../images/Finvity/finHeader.webp';
import { translations, Lang } from './i18n.tsx';
import { getFinvityContent, getMiioContent, getTembiciContent } from './caseContent';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState<Lang>('pt');
  const [activeSection, setActiveSection] = useState("");
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const containerRef = useRef(null);

  const t = translations[lang];

  const cases = [
    {
      title: t.caseTitles.finvity,
      description: t.caseDescriptions.finvity,
      category: "Fintech / Sistema complexo",
      thumbnail: finvityCase,
      heroImage: finHeader,
      content: getFinvityContent(lang),
    },
    {
      title: t.caseTitles.miio,
      description: t.caseDescriptions.miio,
      category: "Mobilidade / Monetização",
      thumbnail: miioCase,
      heroImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      content: getMiioContent(lang),
    },
    {
      title: t.caseTitles.tembici,
      description: t.caseDescriptions.tembici,
      category: "Mobilidade / Operação & Negócio",
      thumbnail: tembiciCase,
      heroImage: temHeader,
      content: getTembiciContent(lang),
    }
  ];

  useEffect(() => {
    if (selectedCase !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  const toggleTheme = (e: MouseEvent) => {
    const isDark = !isDarkMode;

    if (!document.startViewTransition) {
      setIsDarkMode(isDark);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDark);
      });
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  useEffect(() => {
    const sections = ["about", "experience", "cases", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);



  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'cases', label: t.nav.cases },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div ref={containerRef} className="min-h-[100dvh] selection:bg-[var(--brand-color)] selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-[var(--bg-color)]/80 backdrop-blur-md pointer-events-none">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center pointer-events-auto">

          {/* Left: Logo */}
          <div
            className="flex items-center gap-3 justify-start cursor-pointer"
            onClick={scrollToTop}
          >
            <img src="/Favicon.webp" alt="Rodrigo Silva" className="w-8 h-8 rounded-sm" />
            <span className="text-xl font-bold tracking-tighter hidden sm:block">Rodrigo Silva</span>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium justify-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-300 relative py-1 ${activeSection === link.id ? 'text-[var(--brand-color)]' : 'hover:text-[var(--brand-color)]'}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--brand-color)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 justify-end">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="h-10 px-3 rounded-full liquid-glass flex items-center justify-center hover:scale-110 transition-transform text-sm font-bold tracking-tight"
              aria-label="Toggle language"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} weight="fill" />}
            </button>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[var(--brand-color)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-[0.98] transition-transform active:scale-95 shadow-[0_0_20px_var(--brand-shadow)]">
              {t.nav.cta} <ArrowRight weight="bold" />
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="https://cdn.coverr.co/videos/coverr-abstract-neon-waves-2741/1080p.mp4" type="video/mp4" />
          </video>
          {/* Solid Overlays for Readability instead of gradients */}
          <div className="absolute inset-0 bg-[var(--bg-color)] opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-3xl text-center md:text-left"
          >
            {/* Content background (no glow) */}
            <div className="absolute left-1/2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[120%] md:w-[800px] h-[150%] md:h-[600px] bg-[var(--bg-color)] rounded-full blur-[100px] opacity-40 pointer-events-none -z-10"></div>

            <span className="block text-md md:text-xl text-[var(--text-secondary)] tracking-widest smallcase mb-4 relative z-10">{t.hero.subtitle}</span>
            <h1 className="text-7xl md:text-8xl lg:text-[140px] font-bold tracking-tighter leading-[0.9] mb-8">
              Rodrigo <br className="hidden md:block" /> Silva
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#cases" className="inline-flex items-center justify-center gap-2 bg-[var(--brand-color)] text-white px-8 py-4 rounded-full font-semibold hover:scale-[0.98] transition-transform active:scale-95">
                {t.hero.ctaPrimary} <ArrowRight weight="bold" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 liquid-glass px-8 py-4 rounded-full font-semibold hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all active:scale-95">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-64 md:w-auto h-[50vh] md:h-[70vh] lg:h-[80vh] shrink-0 relative z-10 flex justify-center md:justify-end"
          >
            <img src={isDarkMode ? darkImage : lightImage} alt="Rodrigo Silva" className="w-auto h-full object-contain object-center" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-alt)] relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--glass-bg)] to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

          {/* Left: Big Typographic Statement & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.3] mb-8">
              {t.about.headline(
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-color)] to-emerald-600">
                  {lang === 'pt' ? 'IA ao meu processo' : 'AI into my process'}
                </span>
              )}
            </h2>

            <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-[var(--glass-border)]">
              <div>
                <span className="block text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 tracking-tighter">{t.about.metric1Value}</span>
                <span className="text-sm font-mono tracking-widest text-[var(--brand-color)] uppercase">{t.about.metric1Label}</span>
              </div>
              <div>
                <span className="block text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 tracking-tighter">{t.about.metric2Value}</span>
                <span className="text-sm font-mono tracking-widest text-[var(--brand-color)] uppercase">{t.about.metric2Label}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Text & Bio inside a Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="liquid-glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
              {/* Subtle top highlight for the card */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                {t.about.bio1}
              </p>

              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
                {t.about.bio2}
              </p>

              <a href="#contact" className="inline-flex items-center gap-2 border-b-2 border-[var(--brand-color)] pb-1 text-[var(--brand-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors font-medium">
                {t.about.cta} <ArrowRight />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-[var(--glass-border)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{t.experience.title}</h2>
        </motion.div>

        <div className="relative border-l border-[var(--glass-border)] ml-4 md:ml-0 md:pl-12 flex flex-col gap-16">
          {(showAllExperience ? t.experiences : t.experiences.slice(0, 2)).map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 flex flex-col md:flex-row gap-4 md:gap-16"
            >
              {/* Timeline Node */}
              <div className="absolute w-4 h-4 rounded-full bg-[var(--bg-color)] border-2 border-[var(--brand-color)] -left-[25px] top-1.5 md:-left-[57px]"></div>

              {/* Left Side: Time & Company */}
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-mono tracking-widest text-[var(--brand-color)] mb-2">{exp.period}</div>
                <h3 className="text-xl font-bold tracking-tighter uppercase mb-1 text-[var(--text-primary)]">{exp.company}</h3>
              </div>

              {/* Right Side: Role & Details */}
              <div className="md:w-3/4">
                <h4 className="text-2xl font-bold tracking-tight mb-2 text-[var(--text-primary)]">{exp.role}</h4>
                <p className="text-sm font-mono text-[var(--text-secondary)] mb-6">{exp.location}</p>
                <div className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-[var(--text-secondary)] leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => setShowAllExperience(!showAllExperience)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] font-medium hover:bg-[var(--glass-bg)] transition-colors"
          >
            {showAllExperience ? (
              <>{t.experience.showLess} <CaretUp weight="bold" /></>
            ) : (
              <>{t.experience.showMore} <CaretDown weight="bold" /></>
            )}
          </button>
        </motion.div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-alt)] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-24 flex flex-col items-start gap-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{t.cases.title}</h2>
            <p className="text-[var(--text-secondary)] max-w-4xl text-lg leading-relaxed">
              {t.cases.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
            {cases.map((project, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedCase(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
                className="group block cursor-pointer"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                  <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Arrow Icon */}
                  <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[var(--brand-color)] flex items-center justify-center text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight weight="bold" size={24} />
                  </div>
                </div>

                {/* Text Container */}
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-[var(--text-primary)] group-hover:text-[var(--brand-color)] transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Modal Overlay */}
        <AnimatePresence>
          {selectedCase !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/40 backdrop-blur-md"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="w-full max-w-[1200px] h-full max-h-[90vh] bg-[var(--bg-color)] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 z-50 w-12 h-12 bg-[var(--bg-color)]/50 hover:bg-[var(--bg-color)] backdrop-blur-md rounded-full flex items-center justify-center text-[var(--text-primary)] transition-colors border border-[var(--glass-border)] shadow-sm"
                >
                  <X size={24} weight="bold" />
                </button>

                <div className="overflow-y-auto w-full h-full custom-scrollbar pb-24">
                  {/* Hero Section */}
                  <div className="relative h-[40vh] md:h-[60vh] w-full shrink-0">
                    <motion.img
                      src={cases[selectedCase].heroImage}
                      alt={cases[selectedCase].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/40 to-transparent"></div>

                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">

                      <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)]"
                      >
                        {cases[selectedCase].title}
                      </motion.h2>
                    </div>
                  </div>

                  {/* Details Content */}
                  <div className="p-8 md:p-12 lg:px-24 max-w-4xl mx-auto">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl text-[var(--text-secondary)] font-medium leading-relaxed mb-16"
                    >
                      {cases[selectedCase].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="prose prose-lg dark:prose-invert max-w-none text-[var(--text-secondary)]"
                    >
                      {cases[selectedCase].content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">{t.contact.title}</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
            <a href="https://www.linkedin.com/in/rodrigo-fsilva/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full flex items-center justify-center border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white hover:border-[var(--brand-color)] hover:-translate-y-2" title="LinkedIn">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://wa.me/5511982204357" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full flex items-center justify-center border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white hover:border-[var(--brand-color)] hover:-translate-y-2" title="WhatsApp">
              <WhatsappLogo size={32} />
            </a>
            <a href="mailto:rodrigo_silva05@live.com" className="w-16 h-16 rounded-full flex items-center justify-center border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white hover:border-[var(--brand-color)] hover:-translate-y-2" title="E-mail">
              <Envelope size={32} />
            </a>
          </div>
          <div className="text-sm text-[var(--text-secondary)] uppercase tracking-widest font-mono">
            {t.contact.footer}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
