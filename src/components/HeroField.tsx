import { useEffect, useRef } from 'react';

/*
  Campo de caracteres atras do hero.

  Uma grade de celulas em fonte mono. Em repouso, um padrao discreto de
  pontos e cruzes, mais denso a direita (onde nao ha texto), para nao
  competir com a leitura. Onde o mouse passa, as celulas "esquentam" e
  embaralham entre numeros, medidas e simbolos de ferramenta de design
  (grade, camadas, caneta, cursor, alinhamento...), e esfriam deixando um
  rastro que some. Sem mouse (toque), o rastro segue o dedo.

  Atras do texto (elementos com data-field-shield) o campo some, com um
  degrade nas bordas, para os caracteres nunca disputarem a leitura.

  Em repouso, alguns numeros e medidas aparecem devagar em pontos
  aleatorios, ficam um tempo e somem, enquanto outros surgem em outro
  lugar. O desenho e em canvas 2D, em ~20 quadros/s quando nada se mexe e
  pausado fora da tela. Com reduced motion, fica so o padrao parado.
*/

const CELL = 18; // px entre celulas
const RADIUS = 90; // alcance do mouse, em px
const DECAY = 0.93; // quanto do calor sobra a cada quadro
const FEATHER = 32; // px de degrade em volta do texto, onde o campo volta aos poucos

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
  density: number;
  shield: number; // 0 atras do texto, 1 longe dele
  heat: number;
  glyph: string;
  next: number; // quando troca de glifo de novo
};

// Glifo de repouso: nasce devagar, fica um tempo e some
type Spark = { glyph: string; born: number; hold: number };
const FADE = 1100; // ms para aparecer e para sumir

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
    let visible = true;
    let lastDraw = 0;
    let lastMove = 0;
    const sparks = new Map<number, Spark>();
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
          cells.push({
            x,
            y,
            base,
            baseAlpha: 0.16 + Math.min(density, 1) * 0.22,
            density: Math.max(0, Math.min(density, 1)),
            shield: 1,
            heat: 0,
            glyph: pick(),
            next: 0,
          });
        }
      }
      shield();
      sparks.clear();
      const now = performance.now();
      const target = Math.round(cells.length * 0.006);
      // Espalha o inicio para que nao nascam todos juntos
      for (let i = 0; i < target; i++) spawn(now - Math.random() * (FADE * 2 + 4000));
      draw(now);
    };

    // Quanto cada celula aparece: zero sobre o texto, subindo num degrade ate FEATHER px dele
    const shield = () => {
      const origin = canvas.getBoundingClientRect();
      const root = canvas.parentElement ?? document.body;
      // Caixas justas de cada linha de texto, nao do bloco inteiro: o campo
      // continua visivel entre colunas e no fim das linhas curtas
      const boxes = [...root.querySelectorAll<HTMLElement>('[data-field-shield]')].flatMap((el) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        return [...range.getClientRects()]
          .filter((r) => r.width > 0 && r.height > 0)
          .map((r) => ({ l: r.left - origin.left, t: r.top - origin.top, r: r.right - origin.left, b: r.bottom - origin.top }));
      });
      for (const cell of cells) {
        let near = Infinity;
        for (const box of boxes) {
          const dx = Math.max(box.l - cell.x, 0, cell.x - box.r);
          const dy = Math.max(box.t - cell.y, 0, cell.y - box.b);
          near = Math.min(near, Math.sqrt(dx * dx + dy * dy));
        }
        const k = Math.min(1, near / FEATHER);
        cell.shield = k * k * (3 - 2 * k); // suave nas duas pontas
      }
    };

    // Um glifo novo numa celula vazia de faisca, de preferencia onde o padrao e mais denso
    const spawn = (now: number) => {
      for (let tries = 0; tries < 40; tries++) {
        const i = Math.floor(Math.random() * cells.length);
        if (sparks.has(i) || cells[i].shield < 0.5 || Math.random() > cells[i].density + 0.15) continue;
        sparks.set(i, { glyph: pick(), born: now, hold: 1600 + Math.random() * 3200 });
        return;
      }
    };

    const sparkAlpha = (spark: Spark, now: number) => {
      if (reduce) return 1;
      const age = now - spark.born;
      if (age < FADE) return age / FADE;
      if (age < FADE + spark.hold) return 1;
      return Math.max(0, 1 - (age - FADE - spark.hold) / FADE);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      let hot = false;

      // Faiscas que acabaram dao lugar a outras, em outro ponto
      if (!reduce) {
        for (const [i, spark] of sparks) {
          if (now - spark.born > FADE * 2 + spark.hold) {
            sparks.delete(i);
            spawn(now);
          }
        }
      }

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (cell.shield === 0) {
          cell.heat = 0;
          continue;
        }
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
          ctx.globalAlpha = Math.min(0.85, 0.15 + cell.heat * 0.8) * cell.shield;
          ctx.fillText(cell.glyph, cell.x, cell.y);
          cell.heat *= DECAY;
        } else {
          cell.heat = 0;
          const spark = sparks.get(i);
          if (spark) {
            const a = sparkAlpha(spark, now);
            const small = spark.glyph.length > 1;
            ctx.font = `500 ${small ? 8 : 11}px ui-monospace, SFMono-Regular, Menlo, monospace`;
            ctx.fillStyle = muted;
            ctx.globalAlpha = a * 0.55 * cell.shield;
            ctx.fillText(spark.glyph, cell.x, cell.y);
            continue;
          }
          if (!cell.base) continue;
          ctx.font = '400 11px ui-monospace, SFMono-Regular, Menlo, monospace';
          ctx.fillStyle = muted;
          ctx.globalAlpha = cell.baseAlpha * cell.shield;
          ctx.fillText(cell.base, cell.x, cell.y);
        }
      }
      ctx.globalAlpha = 1;
      return hot;
    };

    // Com o mouse se mexendo (ou rastro quente), quadro a quadro; parado, ~20/s
    let hot = false;
    const loop = (now: number) => {
      if (!visible) {
        running = false;
        return;
      }
      const busy = hot || now - lastMove < 120;
      if (busy || now - lastDraw > 50) {
        hot = draw(now);
        lastDraw = now;
      }
      raf = requestAnimationFrame(loop);
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
      if (inside) lastMove = performance.now();
    };
    const onLeave = () => {
      pointer.active = false;
    };

    build();
    const resize = new ResizeObserver(() => build());
    resize.observe(canvas);
    canvas.parentElement?.querySelectorAll('[data-field-shield]').forEach((el) => resize.observe(el));
    // O texto entra deslizando e a fonte carrega depois: mede de novo quando assentar
    const settle = window.setTimeout(shield, 900);
    void document.fonts?.ready.then(shield);
    // Fora da tela, para
    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
    });
    seen.observe(canvas);
    wake();
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      seen.disconnect();
      window.clearTimeout(settle);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
