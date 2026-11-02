import { useRef } from 'react';
import { MagnifyingGlassPlus, X } from '@phosphor-icons/react';
import { useAppContext } from '../contexts/useAppContext';

const LABELS = {
  pt: { open: 'Ampliar imagem', close: 'Fechar' },
  en: { open: 'Enlarge image', close: 'Close' },
} as const;

/*
  Imagem de case que abre em tela cheia. Usa o <dialog> nativo: o Esc, o foco
  preso dentro dele e a camada acima de tudo vem do navegador, sem biblioteca.
  Clicar em qualquer ponto fecha, porque nao ha nada para fazer la dentro alem
  de olhar.
*/
export function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const { lang } = useAppContext();
  const dialog = useRef<HTMLDialogElement>(null);
  const label = LABELS[lang];

  const open = () => {
    dialog.current?.showModal();
    document.documentElement.style.overflow = 'hidden';
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`${label.open}: ${alt}`}
        className="group relative block w-full cursor-zoom-in"
      >
        <img src={src} alt={alt} className="h-auto w-full object-cover" />
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--bg)]/90 text-[var(--ink)] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <MagnifyingGlassPlus size={18} weight="bold" />
        </span>
      </button>

      <dialog
        ref={dialog}
        onClick={close}
        onClose={() => (document.documentElement.style.overflow = '')}
        aria-label={alt}
        className="lightbox m-0 h-full max-h-none w-full max-w-none cursor-zoom-out bg-transparent p-4 md:p-10"
      >
        <img src={src} alt={alt} className="mx-auto h-full w-full object-contain" />
        <button
          type="button"
          onClick={close}
          aria-label={label.close}
          className="fixed right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--ink)] shadow-md"
        >
          <X size={20} weight="bold" />
        </button>
      </dialog>
    </>
  );
}
