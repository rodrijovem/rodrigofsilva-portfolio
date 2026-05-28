
import { ArrowRight, Sun, Moon } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { translations } from '../i18n';
import { RippleHoverButton } from './RippleHoverButton';

import aboutImage from '../../images/about.webp';

export function Navbar() {
  const { isDarkMode, toggleTheme, lang, setLang } = useAppContext();

  const location = useLocation();

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 md:py-6 bg-[var(--bg-color)]/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">

        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 justify-start cursor-pointer hover:opacity-80 transition-opacity">
          <img src={aboutImage} alt="Rodrigo Silva" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-bold text-lg">Rodrigo Silva</span>
        </Link>

        {/* Center: Links & Toggles (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4 justify-center liquid-glass px-4 py-2 rounded-full">
          <Link
            to="/"
            className={`transition-colors duration-300 relative px-3 py-1 rounded-full text-sm font-medium ${isHome ? 'bg-[var(--text-primary)] text-[var(--bg-color)]' : 'hover:text-[var(--brand-color)]'}`}
          >
            {translations[lang].nav.home}
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-300 relative px-3 py-1 rounded-full text-sm font-medium ${isAbout ? 'bg-[var(--text-primary)] text-[var(--bg-color)]' : 'hover:text-[var(--brand-color)]'}`}
          >
            {translations[lang].nav.about}
          </Link>
          
          <div className="w-[1px] h-4 bg-[var(--glass-border)] mx-1"></div>
          
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} weight="fill" />}
          </button>
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="h-8 px-2 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-xs font-bold tracking-tight"
            aria-label="Toggle language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end">
          <RippleHoverButton href="/#contact" className="inline-flex shrink-0 items-center justify-center px-6 py-2.5 bg-[var(--brand-color)] rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
            {translations[lang].nav.cta} <ArrowRight weight="bold" />
          </RippleHoverButton>
        </div>

      </div>
    </nav>

    {/* Bottom Navbar for Mobile */}
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 liquid-glass px-4 py-2 rounded-full shadow-lg border border-[var(--glass-border)]">
      <Link
        to="/"
        className={`transition-colors duration-300 relative px-3 py-2 rounded-full text-sm font-medium ${isHome ? 'bg-[var(--text-primary)] text-[var(--bg-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--brand-color)]'}`}
      >
        {translations[lang].nav.home}
      </Link>
      <Link
        to="/about"
        className={`transition-colors duration-300 relative px-3 py-2 rounded-full text-sm font-medium ${isAbout ? 'bg-[var(--text-primary)] text-[var(--bg-color)]' : 'text-[var(--text-secondary)] hover:text-[var(--brand-color)]'}`}
      >
        {translations[lang].nav.about}
      </Link>
      
      <div className="w-[1px] h-4 bg-[var(--glass-border)] mx-1"></div>
      
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-[var(--text-secondary)]"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} weight="fill" />}
      </button>
      <button
        onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        className="h-10 px-3 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-sm font-bold tracking-tight text-[var(--text-secondary)]"
        aria-label="Toggle language"
      >
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </nav>
    </>
  );
}
