import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { translations } from '../i18n';

export function Footer() {
  const { lang } = useAppContext();
  const t = translations[lang];

  return (
    <footer className="pt-8 pb-28 md:py-8 px-6 md:px-12 lg:px-24 bg-[var(--bg-alt)] border-t border-[var(--glass-border)]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        
        {/* Left: Info */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-sm text-center md:text-left">
          <span className="font-bold text-[var(--text-primary)] text-lg">Rodrigo Silva</span>
          <span className="text-[var(--text-secondary)]">Product Designer</span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {t.nav.about}
          </Link>
          <a href={t.resumeFile} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {t.nav.resume}
          </a>
        </div>

      </div>
    </footer>
  );
}
