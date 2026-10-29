import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[var(--bg)] font-sans selection:bg-[var(--brand)] selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--brand)] focus:px-4 focus:py-2 focus:font-medium focus:text-white"
      >
        Ir para o conteúdo
      </a>
      <Navbar />
      {/* Sem padding aqui: cada pagina decide o proprio espacamento a partir
          de --nav-h */}
      <main id="main" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
