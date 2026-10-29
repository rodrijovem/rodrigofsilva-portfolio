import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/useAppContext';
import { translations } from '../i18n';

const LINKEDIN = 'https://www.linkedin.com/in/rodrigo-fsilva/';
const EMAIL = 'mailto:rodrigo_silva05@live.com';

export function Footer() {
  const { lang } = useAppContext();
  const t = translations[lang];

  const links = [
    { href: LINKEDIN, label: 'LinkedIn', external: true },
    { href: EMAIL, label: 'Email', external: false },
    { href: t.resumeFile, label: t.nav.resume, external: true },
  ];

  return (
    <footer className="px-6 pb-16 pt-20 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="rule flex flex-col gap-8 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.9375rem] font-medium text-[var(--ink)]">Rodrigo Silva</p>
            <p className="meta mt-1">{t.footer.role}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link to="/about" className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                {t.nav.about}
              </Link>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="meta">{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
