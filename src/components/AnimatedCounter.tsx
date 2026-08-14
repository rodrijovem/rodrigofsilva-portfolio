import { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';
import { prefersReducedMotion } from '../lib/motion';

export function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const el = ref.current;
    if (!isInView || !el) return;

    // A animacao nao pode virar atraso de informacao: o numero final e o dado.
    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        el.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, prefix, suffix]);

  // O valor real fica acessivel para leitores de tela desde o inicio
  return (
    <>
      <span ref={ref} aria-hidden="true">{`${prefix}0${suffix}`}</span>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
    </>
  );
}
