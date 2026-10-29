import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

/*
  Stardust — base do Originkit (preset `custom-style-2`), adaptada ao repo.

  Tres desvios do codigo original, todos deliberados:

  1. Cor vem de CSS var, nao hardcoded. O preset trazia #1A1A1A/#52BA52, que
     sao os valores de dark. Em light o fundo viraria um retangulo escuro por
     cima da hero creme. Lemos --bg-color/--brand-color e reavaliamos quando o
     tema muda, igual o canvas antigo fazia.
  2. `prefers-reduced-motion` desenha um frame estatico em vez de rodar o rAF.
  3. O loop pausa fora da viewport e com a aba oculta. O original mantinha um
     requestAnimationFrame vivo pra sempre, inclusive com a hero fora da tela.
*/

/** Preset `custom-style-2`, na escala 1..10 da UI do Originkit. */
const DENSITY = 1;
const MIN_SIZE = 1;
const MAX_SIZE = 1.5;
const FLICKER = 2;
const PARTICLE_SPEED = 0;
const MOVEMENT = 2;
const ANGLE = 180;

/** UI 1..10 -> 0.5..12 (velocidade do piscar) */
function mapFlicker(ui: number): number {
  const clamped = Math.max(1, Math.min(10, ui));
  return 0.5 + ((clamped - 1) / 9) * 11.5;
}

/** UI 1..10 -> 5..60 (densidade) */
function mapDensity(ui: number): number {
  const clamped = Math.max(1, Math.min(10, ui));
  return 5 + ((clamped - 1) / 9) * 55;
}

/** 0deg = cima, 90deg = direita, horario. */
function angleToDrift(angleDeg: number): { vx: number; vy: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { vx: Math.cos(rad), vy: Math.sin(rad) };
}

/* As CSS vars do projeto sao sempre hex. Um hex invalido cai no fallback em vez
   de virar NaN e sumir com a particula. */
function hexToRgb(raw: string, fallback: string): string {
  const hex = raw.trim().replace(/^#/, '');
  const full =
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex.slice(0, 6);
  if (full.length !== 6 || !/^[0-9a-f]{6}$/i.test(full)) return fallback;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityVel: number;
};

export function StardustBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frameId = 0;
    let running = false;
    let visible = true;

    const seed = (count: number) => {
      const velocity = (PARTICLE_SPEED / 10) * 0.5;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * velocity,
        vy: (Math.random() - 0.5) * velocity,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        opacity: Math.random(),
        opacityVel: (Math.random() - 0.5) * 0.04,
      }));
    };

    /* Cores lidas uma vez e no troco de tema — getComputedStyle por frame
       forcaria recalculo de estilo a 60fps. */
    let bg = '26, 26, 26';
    let brand = '82, 186, 82';
    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      bg = hexToRgb(style.getPropertyValue('--bg-color'), bg);
      brand = hexToRgb(style.getPropertyValue('--brand-color'), brand);
    };

    const draw = () => {
      ctx.fillStyle = `rgb(${bg})`;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = `rgb(${brand})`;
      for (const p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const flicker = mapFlicker(FLICKER);
    const drift = angleToDrift(ANGLE);
    const driftVx = drift.vx * MOVEMENT * 0.1;
    const driftVy = drift.vy * MOVEMENT * 0.1;

    const step = () => {
      for (const p of particles) {
        p.x += p.vx + driftVx;
        p.y += p.vy + driftVy;

        // Envolve nas bordas
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.opacity += p.opacityVel * flicker * 0.5;
        if (p.opacity <= 0.1 || p.opacity >= 1) p.opacityVel *= -1;
        p.opacity = Math.max(0.1, Math.min(1, p.opacity));
      }

      draw();
      frameId = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || !visible || prefersReducedMotion()) return;
      running = true;
      frameId = requestAnimationFrame(step);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frameId);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.round(rect.width));
      const nextHeight = Math.max(1, Math.round(rect.height));
      if (nextWidth === width && nextHeight === height) return;

      /* Reposicionar so quando a largura muda. No celular a barra de URL
         entra e sai durante o scroll e mexe so na altura — resemear ali
         faria o campo de estrelas piscar inteiro a cada scroll. */
      const reseed = nextWidth !== width;
      width = nextWidth;
      height = nextHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (reseed) {
        seed(Math.floor(((width * height) / 1e4) * mapDensity(DENSITY)));
      } else {
        for (const p of particles) p.y = Math.min(p.y, height);
      }

      // setTransform limpa o buffer: sem um frame agora a hero fica vazia
      // ate o proximo rAF — e com reduced-motion nao existe proximo rAF.
      draw();
    };

    readColors();
    resize();

    const themeObserver = new MutationObserver(() => {
      readColors();
      if (!running) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    /* Hero fora da tela nao precisa de frame nenhum. */
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    start();

    return () => {
      stop();
      themeObserver.disconnect();
      resizeObserver.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
