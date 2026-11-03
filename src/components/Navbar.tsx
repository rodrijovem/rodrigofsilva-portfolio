import { Fragment } from 'react';
import { Globe } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';
import { track } from '../lib/analytics';

/*
  Chrome editorial: palavra-marca a esquerda; idioma, links em texto e CTA a direita, sem
  pilula nem avatar. O "Inicio" nao e um link proprio — a palavra-marca ja
  leva para a home, que e o que o visitante espera e o que libera espaco
  para os quatro itens caberem no celular sem virar menu sanfona.
*/
const LANGS = ['pt', 'en'] as const;

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
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[1180px] items-center justify-between gap-3 px-6 md:px-10">
        <Link to="/" className="shrink-0 text-[0.9375rem] font-medium tracking-tight text-[var(--ink)]">
          Rodrigo Silva
        </Link>

        <div className="flex items-center gap-2.5 text-[0.8125rem] font-medium md:gap-7 md:text-sm">
          {/* Os dois idiomas visiveis, o atual marcado: o visitante ve que ha troca e para onde */}
          <div className="flex items-center gap-1 text-[0.75rem] md:gap-1.5 tracking-[0.08em] md:text-[0.8125rem]">
            <Globe size={15} aria-hidden="true" className="shrink-0 text-[var(--muted)]" />
            {LANGS.map((code, i) => (
              <Fragment key={code}>
                {i > 0 && <span aria-hidden="true" className="text-[var(--rule-strong)]">|</span>}
                <button
                  type="button"
                  onClick={() => {
                    if (code === lang) return;
                    setLang(code);
                    track('language_change', { language: code });
                  }}
                  aria-pressed={code === lang}
                  aria-label={code === 'pt' ? 'Português' : 'English'}
                  className={`py-1 uppercase transition-colors duration-200 ${
                    code === lang ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--brand)]'
                  }`}
                >
                  {code}
                </button>
              </Fragment>
            ))}
          </div>

          <Link to="/about" aria-current={pathname === '/about' ? 'page' : undefined} className={linkClass(pathname === '/about')}>
            {t.nav.about}
          </Link>

          <Link
            to="/#contact"
            className="whitespace-nowrap rounded bg-[var(--brand)] px-2 py-1.5 md:px-3 text-[var(--on-brand)] transition-opacity duration-200 hover:opacity-85"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
