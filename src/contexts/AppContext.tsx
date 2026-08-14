import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, MouseEvent } from 'react';
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

/**
 * So existe quando o usuario clicou no toggle. Enquanto for null, o site
 * ainda esta seguindo o sistema.
 */
function storedTheme(): 'dark' | 'light' | null {
  if (typeof window === 'undefined') return null;
  const saved = window.localStorage.getItem(THEME_KEY);
  return saved === 'dark' || saved === 'light' ? saved : null;
}

/** Escolha salva > preferencia do sistema > escuro. */
function initialTheme(): boolean {
  const saved = storedTheme();
  if (saved) return saved === 'dark';
  if (typeof window === 'undefined') return true;
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
  const [hasThemeChoice, setHasThemeChoice] = useState(() => storedTheme() !== null);

  /*
    Aplica o tema, e so isso. Gravar no localStorage aqui era o que quebrava o
    efeito de baixo: como este roda primeiro, a chave ja existia quando o guard
    de la era avaliado, e o listener de sistema nunca chegava a ser anexado.
    Persistir agora e responsabilidade exclusiva de quem clica no toggle.
  */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    root.classList.toggle('light', !isDarkMode);
    root.style.colorScheme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  // Leitores de tela e tradutores automaticos dependem disso
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  // Segue o sistema enquanto o usuario nao fizer uma escolha explicita
  useEffect(() => {
    if (hasThemeChoice) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [hasThemeChoice]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(LANG_KEY, next);
    setLangState(next);
  }, []);

  /** A partir daqui o sistema deixa de mandar: a escolha e do usuario. */
  const chooseTheme = useCallback((dark: boolean) => {
    window.localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    setHasThemeChoice(true);
    setIsDarkMode(dark);
  }, []);

  const toggleTheme = useCallback(
    (e: MouseEvent) => {
      const isDark = !isDarkMode;

      if (!document.startViewTransition || prefersReducedMotion()) {
        chooseTheme(isDark);
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
          chooseTheme(isDark);
        });
      });

      transition.ready
        .then(() => {
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
        })
        .catch(() => {
          /*
            ready rejeita quando a transicao e abortada — navegacao no meio da
            animacao, ou um segundo clique no toggle. O tema ja trocou; o que
            se perde e so o circulo. Sem este catch vira unhandled rejection.
          */
        });
    },
    [isDarkMode, chooseTheme]
  );

  /*
    Sem memo, este objeto e recriado a cada render do provider e derruba todos
    os consumidores junto — Navbar, Footer e as tres paginas.
  */
  const value = useMemo(
    () => ({ isDarkMode, toggleTheme, lang, setLang }),
    [isDarkMode, toggleTheme, lang, setLang]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
