import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';

/*
  Chrome editorial: palavra-marca a esquerda, links em texto a direita, sem
  pilula nem avatar. O "Inicio" nao e um link proprio — a palavra-marca ja
  leva para a home, que e o que o visitante espera e o que libera espaco
  para os quatro itens caberem no celular sem virar menu sanfona.
*/
export function Navbar() {
  const { lang, setLang } = useAppContext();
  const t = translations[lang];
  const { pathname } = useLocation();

  const linkClass = (active: boolean) =>
    `relative py-1 transition-colors duration-200 ${
      active
        ? 'text-[var(--ink)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[var(--brand)]'
        : 'text-[var(--muted)] hover:text-[var(--ink)]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[1180px] items-center justify-between gap-6 px-6 md:px-10">
        <Link to="/" className="shrink-0 text-[0.9375rem] font-medium tracking-tight text-[var(--ink)]">
          Rodrigo Silva
        </Link>

        <div className="flex items-center gap-5 text-[0.8125rem] font-medium md:gap-7 md:text-sm">
          <Link to="/about" aria-current={pathname === '/about' ? 'page' : undefined} className={linkClass(pathname === '/about')}>
            {t.nav.about}
          </Link>

          <a
            href={t.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)] sm:inline"
          >
            {t.nav.resume}
          </a>

          <Link to="/#contact" className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]">
            {t.nav.cta}
          </Link>

          {/* O botao mostra o idioma de destino, nao o atual */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="shrink-0 border border-[var(--rule)] px-2 py-1 text-[0.6875rem] font-medium tracking-[0.12em] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--brand)] hover:text-[var(--brand)]"
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </nav>
  );
}
