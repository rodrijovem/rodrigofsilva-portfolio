import { useEffect, useRef } from 'react';

/*
  Campo de caracteres atras do hero.

  Uma grade de celulas em fonte mono. Em repouso, um padrao discreto de
  pontos e cruzes, mais denso a direita (onde nao ha texto), para nao
  competir com a leitura. Onde o mouse passa, as celulas "esquentam" e
  embaralham entre numeros, medidas e simbolos de ferramenta de design
  (grade, camadas, caneta, cursor, alinhamento...), e esfriam deixando um
  rastro que some. Sem mouse (toque), o rastro segue o dedo.

  Desenho em canvas 2D, so enquanto houver celula quente; parado, nao gasta
  nada. Com reduced motion, mostra so o padrao em repouso.
*/

const CELL = 18; // px entre celulas
const RADIUS = 150; // alcance do mouse, em px
const DECAY = 0.93; // quanto do calor sobra a cada quadro

// Numeros, medidas e glifos de ferramenta de design
const GLYPHS = [
  ...'0123456789',
  ...'0123456789',
  '%', '#', '+', '×', '÷', '=', '±',
  'px', 'Aa', '8pt', '4:3', '1fr', 'Hz',
  '□', '○', '△', '◇', '◐', '◧', '▦', '⊞', '⊡', '⌗',
  '↗', '↘', '↔', '↕', '⤢', '⟂', '∥', '⌖', '✎', '✦', '⌘', '⇧', '⌥',
];

type Cell = {
  x: number;
  y: number;
  base: string; // caractere em repouso ('' = vazio)
  baseAlpha: number;
  heat: number;
  glyph: string;
  next: number; // quando troca de glifo de novo
};

const pick = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export function HeroField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const styles = getComputedStyle(document.documentElement);
    const brand = styles.getPropertyValue('--brand').trim() || '#003235';
    const muted = styles.getPropertyValue('--muted').trim() || '#5C6A6B';

    let cells: Cell[] = [];
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    const pointer = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL + CELL / 2;
          const y = r * CELL + CELL / 2;
          // Densidade: cresce para a direita e tem ondas suaves, como um mapa
          const along = x / width;
          const wave = (Math.sin(c * 0.21 + r * 0.09) + Math.sin(c * 0.07 - r * 0.17)) / 4 + 0.5;
          const density = along * 0.85 + wave * 0.35 - 0.35;
          const roll = Math.random();
          let base = '';
          if (roll < density * 0.9) base = '·';
          if (roll < density * 0.45) base = '+';
          if (roll < density * 0.12) base = String(Math.floor(Math.random() * 10));
          cells.push({
            x,
            y,
            base,
            baseAlpha: 0.16 + Math.min(density, 1) * 0.22,
            heat: 0,
            glyph: pick(),
            next: 0,
          });
        }
      }
      draw(performance.now());
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let hot = false;

      for (const cell of cells) {
        if (pointer.active && !reduce) {
          const dx = cell.x - pointer.x;
          const dy = cell.y - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < RADIUS) cell.heat = Math.max(cell.heat, 1 - d / RADIUS);
        }

        if (cell.heat > 0.03) {
          hot = true;
          if (now > cell.next) {
            cell.glyph = pick();
            cell.next = now + 60 + Math.random() * 260;
          }
          const small = cell.glyph.length > 1;
          ctx.font = `500 ${small ? 8 : 11}px ui-monospace, SFMono-Regular, Menlo, monospace`;
          ctx.fillStyle = brand;
          ctx.globalAlpha = Math.min(0.85, 0.15 + cell.heat * 0.8);
          ctx.fillText(cell.glyph, cell.x, cell.y);
          cell.heat *= DECAY;
        } else {
          cell.heat = 0;
          if (!cell.base) continue;
          ctx.font = '400 11px ui-monospace, SFMono-Regular, Menlo, monospace';
          ctx.fillStyle = muted;
          ctx.globalAlpha = cell.baseAlpha;
          ctx.fillText(cell.base, cell.x, cell.y);
        }
      }
      ctx.globalAlpha = 1;
      return hot;
    };

    const loop = (now: number) => {
      const hot = draw(now);
      if (hot || pointer.active) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const wake = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= -RADIUS && y >= -RADIUS && x <= rect.width + RADIUS && y <= rect.height + RADIUS;
      pointer.x = x;
      pointer.y = y;
      pointer.active = inside;
      if (inside) wake();
    };
    const onLeave = () => {
      pointer.active = false;
    };

    build();
    const resize = new ResizeObserver(() => build());
    resize.observe(canvas);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
