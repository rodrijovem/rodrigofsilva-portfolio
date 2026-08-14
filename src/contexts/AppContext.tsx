import React, { createContext, useContext, useState, useEffect, MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { Lang } from '../i18n';
import { prefersReducedMotion } from '../lib/motion';

interface AppContextType {
  isDarkMode: boolean;
  toggleTheme: (e: MouseEvent) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const THEME_KEY = 'rs-theme';
const LANG_KEY = 'rs-lang';

/** Escolha salva > preferencia do sistema > escuro. */
function initialTheme(): boolean {
  if (typeof window === 'undefined') return true;
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return !window.matchMedia('(prefers-color-scheme: light)').matches;
}

/** Escolha salva > idioma do navegador > portugues. */
function initialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const saved = window.localStorage.getItem(LANG_KEY);
  if (saved === 'pt' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    root.classList.toggle('light', !isDarkMode);
    root.style.colorScheme = isDarkMode ? 'dark' : 'light';
    window.localStorage.setItem(THEME_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Leitores de tela e tradutores automaticos dependem disso
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    window.localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  // Segue o sistema enquanto o usuario nao fizer uma escolha explicita
  useEffect(() => {
    if (window.localStorage.getItem(THEME_KEY)) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setLang = (next: Lang) => setLangState(next);

  const toggleTheme = (e: MouseEvent) => {
    const isDark = !isDarkMode;

    if (!document.startViewTransition || prefersReducedMotion()) {
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
          duration: 450,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
