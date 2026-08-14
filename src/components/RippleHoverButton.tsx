import React, { useRef, useState, PointerEvent } from 'react';
import { Link } from 'react-router-dom';

interface RippleHoverButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  /** Rota interna — navega pelo router, sem recarregar a pagina */
  to?: string;
  /** Link externo */
  href?: string;
}

/**
 * Pointer Events cobrem mouse e toque com o mesmo codigo: o ripple existe
 * tanto para quem tem cursor quanto para quem toca a tela.
 */
export function RippleHoverButton({
  children,
  className = '',
  to,
  href,
  ...props
}: RippleHoverButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [origin, setOrigin] = useState({ left: '50%', top: '50%' });
  const [open, setOpen] = useState(false);

  const originFrom = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setOrigin({ left: `${e.clientX - rect.left}px`, top: `${e.clientY - rect.top}px` });
  };

  const handlePointerEnter = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType === 'touch') return; // no toque quem manda e o pointerdown
    originFrom(e);
    setOpen(true);
  };

  const handlePointerLeave = (e: PointerEvent<HTMLAnchorElement>) => {
    originFrom(e);
    setOpen(false);
  };

  const handlePointerDown = (e: PointerEvent<HTMLAnchorElement>) => {
    originFrom(e);
    setOpen(true);
  };

  const handlePointerUp = () => {
    if (ref.current?.matches(':hover')) return; // mouse continua sobre o botao
    setOpen(false);
  };

  const handlers = {
    onPointerEnter: handlePointerEnter,
    onPointerLeave: handlePointerLeave,
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerCancel: () => setOpen(false),
  };

  const inner = (
    <>
      <span className="absolute pointer-events-none z-0" style={origin} aria-hidden="true">
        <span
          className={`block w-[400px] h-[400px] bg-[var(--bg-color)] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-350 ease-out ${
            open ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDuration: '350ms' }}
        />
      </span>
      <span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${
          open ? 'text-[var(--brand-color)]' : 'text-[var(--bg-color)]'
        }`}
      >
        {children}
      </span>
    </>
  );

  const classes = `relative overflow-hidden ${className}`;

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...handlers} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <a ref={ref} href={href} className={classes} {...handlers} {...props}>
      {inner}
    </a>
  );
}
