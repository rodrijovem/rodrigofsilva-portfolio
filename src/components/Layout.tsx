import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-[var(--brand-color)] selection:text-[var(--bg-color)] font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--brand-color)] focus:text-[var(--bg-color)] focus:font-semibold"
      >
        Ir para o conteúdo
      </a>
      <Navbar />
      {/* Sem padding aqui: cada pagina decide o proprio espacamento a partir
          de --nav-h, para o hero poder passar por baixo da chrome translucida */}
      <main id="main" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
