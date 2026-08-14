import type { Transition } from 'framer-motion';

/**
 * Constantes de movimento do site.
 *
 * A Apple substitui o trio massa/rigidez/amortecimento por dois parametros:
 * bounce (overshoot) e duration (quao rapido chega ao alvo).
 *
 * Padrao: criticamente amortecido, sem overshoot. Bounce so entra quando o
 * proprio gesto carregou momento — um flick, um arraste solto.
 */

/** Padrao para tudo: sem overshoot, assenta com elegancia. */
export const calm: Transition = { type: 'spring', bounce: 0, duration: 0.4 };

/** Um pouco mais lento, para entradas de blocos grandes. */
export const calmSlow: Transition = { type: 'spring', bounce: 0, duration: 0.55 };

/** Só onde houve momento fisico (arraste, flick). */
export const springy: Transition = { type: 'spring', bounce: 0.2, duration: 0.4 };

/** Entrada padrao de secoes reveladas no scroll. */
export const revealFrom = { opacity: 0, y: 24 };
export const revealTo = { opacity: 1, y: 0 };

/** Escalona uma lista sem deixar o ultimo item esperar demais. */
export const stagger = (index: number, step = 0.08, max = 0.32): Transition => ({
  ...calm,
  delay: Math.min(index * step, max),
});

/** O usuario pediu menos movimento? */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
