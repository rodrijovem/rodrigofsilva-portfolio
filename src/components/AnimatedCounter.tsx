import { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';
import { prefersReducedMotion } from '../lib/motion';

export function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const el = ref.current;
    if (!isInView || !el) return;

    // A animacao nao pode virar atraso de informacao: o numero final e o dado.
    if (prefersReducedMotion()) {
      el.textContent = String(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        el.textContent = String(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  // O valor real fica acessivel para leitores de tela desde o inicio
  return (
    <>
      <span ref={ref} aria-hidden="true">0</span>
      <span className="sr-only">{value}</span>
    </>
  );
}
