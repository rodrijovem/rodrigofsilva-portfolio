import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Lang } from '../i18n';
import { AppContext } from './useAppContext';
import { initialLang, persistLang } from '../lib/preferences';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Leitores de tela e tradutores automaticos dependem disso
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    persistLang(next);
    setLangState(next);
  }, []);

  /*
    Sem memo, este objeto e recriado a cada render do provider e derruba todos
    os consumidores junto — Navbar, Footer e as tres paginas.
  */
  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
