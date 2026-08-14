import { useEffect, useRef } from 'react';

type Point = { x: number; y: number; life: number };

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Sem cursor fino nao ha o que desenhar — nao vale manter um rAF vivo no celular
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;

    const size = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr); // definir canvas.width ja reseta a transform
    };
    size();

    let points: Point[] = [];
    let frameId = 0;
    let running = false;

    // getComputedStyle a cada frame forca recalculo de estilo — lemos uma vez
    // e reavaliamos so quando o tema muda.
    let rgb = '0, 0, 0';
    const readBrandColor = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--brand-color')
        .trim();
      if (raw.startsWith('#')) {
        const hex =
          raw.length === 4
            ? raw[1] + raw[1] + raw[2] + raw[2] + raw[3] + raw[3]
            : raw.slice(1);
        const n = parseInt(hex, 16);
        rgb = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
      }
    };
    readBrandColor();

    const themeObserver = new MutationObserver(readBrandColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        if (p1.life <= 0) continue;

        // Quebra a linha se o cursor pulou
        if (Math.hypot(p2.x - p1.x, p2.y - p1.y) > 100) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${rgb}, ${p1.life})`;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        p1.life -= 0.02;
      }

      if (points.length > 0) {
        points[points.length - 1].life -= 0.02;
      }

      points = points.filter((p) => p.life > 0);

      // Nada para desenhar: para o loop em vez de queimar frames a toa
      if (points.length === 0) {
        running = false;
        return;
      }

      frameId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      frameId = requestAnimationFrame(draw);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -50 && x <= width + 50 && y >= -50 && y <= height + 50) {
        points.push({ x, y, life: 1.0 });
        start();
      }
    };

    window.addEventListener('resize', size);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('resize', size);
      window.removeEventListener('pointermove', handlePointerMove);
      themeObserver.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
}
