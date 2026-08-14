import { createContext, useContext } from 'react';
import type { MouseEvent } from 'react';
import type { Lang } from '../i18n';

/*
  Separado de `AppContext.tsx` porque la mora um componente. Um arquivo que
  exporta componente e nao-componente ao mesmo tempo perde o fast refresh do
  Vite: editar o provider recarregava a pagina inteira em vez de preservar o
  estado. Com o hook aqui, cada arquivo exporta uma coisa so.
*/

export interface AppContextType {
  isDarkMode: boolean;
  toggleTheme: (e: MouseEvent) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
