import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider, useAppContext } from './contexts/AppContext';
import { translations } from './i18n';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudy } from './pages/CaseStudy';
import { prefersReducedMotion } from './lib/motion';

const SITE_NAME = 'Rodrigo Silva';

/**
 * Unica autoridade sobre a posicao de scroll entre rotas.
 * Se a URL traz um hash, vai ate a ancora em vez de ir ao topo —
 * sem isso o CTA "/#contact" cai sempre no topo da home.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    /*
      Nada de requestAnimationFrame aqui: abas em segundo plano nao recebem
      frames, e um link aberto em nova aba nunca chegaria a ancora.
      O efeito ja roda depois do commit do DOM, entao a primeira tentativa
      quase sempre acerta; o retry cobre conteudo que monta atrasado.
    */
    let cancelled = false;
    let tries = 0;
    let timer = 0;

    const attempt = () => {
      if (cancelled) return;

      const el = document.getElementById(hash.slice(1));
      if (el) {
        // Aba oculta nao recebe frames: o scroll suave ficaria travado no topo.
        // Quem abre o link em nova aba deve encontrar a secao ja posicionada.
        const smooth = !prefersReducedMotion() && !document.hidden;
        el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
        return;
      }

      if (tries++ < 10) {
        timer = window.setTimeout(attempt, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    attempt();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pathname, hash, key]);

  return null;
}

/** Cada rota merece o proprio titulo — os tres cases dividiam o mesmo. */
function DocumentTitle() {
  const { pathname } = useLocation();
  const { lang } = useAppContext();
  const t = translations[lang];

  useEffect(() => {
    const role = lang === 'pt' ? 'Product Designer' : 'Product Designer';
    let title = `${SITE_NAME} — ${role}`;
    let description = t.home.heroDescription;

    if (pathname === '/about') {
      title = `${t.nav.about} — ${SITE_NAME}`;
    } else if (pathname.startsWith('/cases/')) {
      const id = pathname.split('/')[2] as keyof typeof t.caseTitles;
      const caseTitle = t.caseTitles[id];
      if (caseTitle) {
        title = `${caseTitle} — ${SITE_NAME}`;
        description = t.caseDescriptions[id] ?? description;
      }
    }

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', window.location.href);
  }, [pathname, lang, t]);

  return null;
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollManager />
        <DocumentTitle />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cases/:id" element={<CaseStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
