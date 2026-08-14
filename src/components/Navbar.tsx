import { ArrowRight, Sun, Moon } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { translations } from '../i18n';
import { RippleHoverButton } from './RippleHoverButton';

import aboutImage from '../../images/about.webp';

export function Navbar() {
  const { isDarkMode, toggleTheme, lang, setLang } = useAppContext();
  const t = translations[lang];

  const location = useLocation();

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';

  const linkClass = (active: boolean, extra = '') =>
    `transition-colors duration-300 relative rounded-full text-sm font-medium ${extra} ${
      active
        ? 'bg-[var(--text-primary)] text-[var(--bg-color)]'
        : 'text-[var(--text-secondary)] hover:text-[var(--brand-color)]'
    }`;

  return (
    <>
      {/*
        Uma unica camada translucida: a nav e a chrome, e a pilha interna e
        solida. Vidro sobre vidro colapsa a legibilidade.
        O scroll-edge substitui a divisoria de 1px por um gradiente curto.
      */}
      <nav className="translucent-chrome scroll-edge fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 md:py-6 bg-[var(--bg-color)]/75 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-4">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 justify-start cursor-pointer hover:opacity-80 transition-opacity">
            <img src={aboutImage} alt="" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-lg">Rodrigo Silva</span>
          </Link>

          {/* Center: Links & Toggles (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4 justify-center solid-chrome px-4 py-2 rounded-full">
            <Link
              to="/"
              aria-current={isHome ? 'page' : undefined}
              className={linkClass(isHome, 'px-3 py-1')}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              aria-current={isAbout ? 'page' : undefined}
              className={linkClass(isAbout, 'px-3 py-1')}
            >
              {t.nav.about}
            </Link>

            <div className="w-[1px] h-4 bg-[var(--glass-border)] mx-1"></div>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform"
              aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} weight="fill" />}
            </button>
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="h-8 px-2 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-xs font-bold tracking-tight"
              aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end">
            <RippleHoverButton
              to="/#contact"
              className="inline-flex shrink-0 items-center justify-center px-6 py-2.5 bg-[var(--brand-color)] rounded-full text-sm font-semibold shadow-sm hover:shadow-md"
            >
              {t.nav.cta} <ArrowRight weight="bold" />
            </RippleHoverButton>
          </div>

        </div>
      </nav>

      {/* Bottom Navbar for Mobile — unica camada aqui, entao o vidro fica */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 liquid-glass px-4 py-2 rounded-full shadow-lg">
        <Link
          to="/"
          aria-current={isHome ? 'page' : undefined}
          className={linkClass(isHome, 'px-3 py-2')}
        >
          {t.nav.home}
        </Link>
        <Link
          to="/about"
          aria-current={isAbout ? 'page' : undefined}
          className={linkClass(isAbout, 'px-3 py-2')}
        >
          {t.nav.about}
        </Link>

        <div className="w-[1px] h-4 bg-[var(--glass-border)] mx-1"></div>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-[var(--text-secondary)]"
          aria-label={isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          aria-pressed={isDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} weight="fill" />}
        </button>
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="h-10 px-3 rounded-full flex shrink-0 items-center justify-center hover:scale-110 transition-transform text-sm font-bold tracking-tight text-[var(--text-secondary)]"
          aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </nav>
    </>
  );
}
