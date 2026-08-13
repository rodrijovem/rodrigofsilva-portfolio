import { motion } from 'framer-motion';
import { ArrowRight, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { LuMail } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { translations } from '../i18n';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { InteractiveCanvas } from '../components/InteractiveCanvas';


import aboutImage from '../../images/about.webp';

import finvityCase from '../../images/finvityAI.webp';
import miioCase from '../../images/miioOne.webp';
import tembiciCase from '../../images/Tembici.webp';

export function Home() {
  const { lang } = useAppContext();
  const t = translations[lang];

  const cases = [
    {
      id: "tembici",
      title: t.caseTitles.tembici,
      description: t.caseDescriptions.tembici,
      thumbnail: tembiciCase,
      year: "2023"
    },
    {
      id: "miio",
      title: t.caseTitles.miio,
      description: t.caseDescriptions.miio,
      thumbnail: miioCase,
      year: "2025"
    },
    {
      id: "finvity",
      title: t.caseTitles.finvity,
      description: t.caseDescriptions.finvity,
      thumbnail: finvityCase,
      year: "2026"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden mt-[-96px] pt-24">
        {/* Background Dot Pattern */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', 
            backgroundSize: '24px 24px', 
            opacity: 0.1 
          }}
        ></div>

        {/* Interactive Drawing Canvas */}
        <InteractiveCanvas />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
            className="max-w-6xl text-left"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120%] md:w-[800px] h-[150%] md:h-[600px] bg-[var(--bg-color)] rounded-full blur-[100px] opacity-40 pointer-events-none -z-10"></div>
            
            <h1 className="text-6xl md:text-[90px] lg:text-[120px] font-bold tracking-tighter leading-[0.95] mb-8">
              <span className="text-[var(--text-primary)] block mb-2">{t.home.heroTitle1}</span>
              <span className="text-[var(--brand-color)] block opacity-90">{t.home.heroTitle2}</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-[var(--text-secondary)] max-w-4xl leading-relaxed font-medium">
              {t.home.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-color)]">
        <div className="max-w-[1400px] mx-auto bg-[var(--bg-alt)] rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[var(--glass-border)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[2rem] overflow-hidden aspect-square"
            >
              <img src={aboutImage} alt="Rodrigo Silva" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-[var(--brand-color)]">{t.home.aboutTitle}</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-4">{t.home.aboutSubtitle}</p>
              <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
                {t.home.aboutDescription}
              </p>
              
              <div className="flex flex-row items-center gap-12 md:gap-16 pt-6 border-t border-[var(--glass-border)]">
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[var(--brand-color)] tracking-tighter mb-1">
                    <AnimatedCounter value={13} /> {t.home.aboutYears}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-secondary)]">{t.home.aboutMetric1Label}</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[var(--brand-color)] tracking-tighter mb-1">
                    <AnimatedCounter value={6} /> {t.home.aboutYears}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-secondary)]">{t.home.aboutMetric2Label}</span>
                </div>
              </div>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 border border-[var(--brand-color)] text-[var(--brand-color)] px-5 py-2.5 rounded-md font-medium hover:bg-[var(--brand-color)] hover:text-[var(--bg-color)] transition-colors self-start text-sm mt-8"
              >
                {t.home.aboutCta} <ArrowRight weight="bold" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Cases Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-color)]">
        <div className="max-w-[1400px] mx-auto bg-[var(--bg-alt)] rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[var(--glass-border)]">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-[var(--brand-color)]">{t.home.casesTitle}</h2>
            <p className="text-[var(--text-secondary)] max-w-3xl text-lg leading-relaxed">
              {t.home.casesDescription}
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {cases.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/cases/${project.id}`} className="group flex flex-col md:flex-row gap-8 items-center border border-transparent rounded-[2rem] p-6 md:p-8 hover:bg-[var(--bg-color)] hover:border-[var(--glass-border)] hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                  {/* Imagem */}
                  <div className="w-full md:w-[40%] aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0 bg-[var(--bg-alt)] border border-[var(--glass-border)]">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center py-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[var(--brand-color)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-xl">
                      {project.description}
                    </p>
                    <div className="inline-flex items-center gap-2 border border-[var(--brand-color)] text-[var(--brand-color)] bg-transparent group-hover:bg-[var(--brand-color)] group-hover:text-white transition-colors duration-300 px-5 py-2.5 rounded-md font-medium text-sm self-start">
                      {t.home.casesCta} <ArrowRight weight="bold" size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--bg-color)]">
        <div className="max-w-[1400px] mx-auto bg-[var(--bg-alt)] rounded-[2.5rem] p-10 md:p-16 lg:p-24 shadow-sm border border-[var(--glass-border)] relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--brand-color)] rounded-full blur-[100px] md:blur-[120px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
          >
            {/* Texto */}
            <div className="flex flex-col text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-[var(--text-primary)] leading-[1.1]">
                {t.home.contactTitle1} <br className="hidden lg:block"/><span className="text-[var(--brand-color)]">{t.home.contactTitle2}</span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg mb-8">
                {t.home.contactDescription1}
              </p>
              <p className="text-[var(--text-primary)] font-medium text-lg hidden lg:block">
                {t.home.contactDescription2}
              </p>
            </div>

            {/* Botoes/Cards de Contato */}
            <div className="flex flex-col gap-4 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <a 
                href="https://www.linkedin.com/in/rodrigo-fsilva/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-5 md:p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--brand-color)] hover:bg-[var(--brand-color)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-[var(--brand-color)] transition-colors shrink-0">
                    <LinkedinLogo size={24} weight="fill" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-lg md:text-xl text-[var(--text-primary)] group-hover:text-white transition-colors">LinkedIn</span>
                    <span className="block text-sm md:text-base text-[var(--text-secondary)] group-hover:text-white/80 transition-colors line-clamp-1">{t.home.linkedinDesc}</span>
                  </div>
                </div>
                <ArrowRight size={24} weight="bold" className="text-[var(--text-secondary)] group-hover:text-white group-hover:-rotate-45 transition-all shrink-0" />
              </a>

              <a 
                href="mailto:rodrigo_silva05@live.com" 
                className="group flex items-center justify-between p-5 md:p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--brand-color)] hover:bg-[var(--brand-color)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-[var(--brand-color)] transition-colors shrink-0">
                    <LuMail size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-lg md:text-xl text-[var(--text-primary)] group-hover:text-white transition-colors">Email</span>
                    <span className="block text-sm md:text-base text-[var(--text-secondary)] group-hover:text-white/80 transition-colors line-clamp-1">{t.home.emailDesc}</span>
                  </div>
                </div>
                <ArrowRight size={24} weight="bold" className="text-[var(--text-secondary)] group-hover:text-white group-hover:-rotate-45 transition-all shrink-0" />
              </a>

              <a 
                href="https://wa.me/5511982204357" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-5 md:p-6 rounded-2xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:border-[var(--brand-color)] hover:bg-[var(--brand-color)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-[var(--brand-color)] transition-colors shrink-0">
                    <WhatsappLogo size={24} weight="fill" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-lg md:text-xl text-[var(--text-primary)] group-hover:text-white transition-colors">WhatsApp</span>
                    <span className="block text-sm md:text-base text-[var(--text-secondary)] group-hover:text-white/80 transition-colors line-clamp-1">{t.home.whatsappDesc}</span>
                  </div>
                </div>
                <ArrowRight size={24} weight="bold" className="text-[var(--text-secondary)] group-hover:text-white group-hover:-rotate-45 transition-all shrink-0" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
