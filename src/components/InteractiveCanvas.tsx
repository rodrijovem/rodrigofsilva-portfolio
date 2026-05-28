import { useEffect, useRef } from 'react';

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let points: { x: number; y: number; life: number }[] = [];
    let animationFrameId: number;

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Capturar o movimento apenas se estiver na área do canvas
      if (x >= -50 && x <= width + 50 && y >= -50 && y <= height + 50) {
        points.push({ x, y, life: 1.0 });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      if (points.length > 1) {
        const computedStyle = getComputedStyle(document.documentElement);
        let brandColor = computedStyle.getPropertyValue('--brand-color').trim() || '#000000';
        
        let r = 0, g = 0, b = 0;
        if (brandColor.startsWith('#')) {
          if (brandColor.length === 4) {
            r = parseInt(brandColor[1] + brandColor[1], 16);
            g = parseInt(brandColor[2] + brandColor[2], 16);
            b = parseInt(brandColor[3] + brandColor[3], 16);
          } else if (brandColor.length === 7) {
            r = parseInt(brandColor.substring(1, 3), 16);
            g = parseInt(brandColor.substring(3, 5), 16);
            b = parseInt(brandColor.substring(5, 7), 16);
          }
        }
        
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          
          if (p1.life <= 0) continue;
          
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
          if (dist > 100) continue; // Quebra a linha se o mouse pulou
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${p1.life})`;
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          p1.life -= 0.02; // Velocidade de fade da linha
        }
        if (points.length > 0) {
            points[points.length - 1].life -= 0.02;
        }
      }
      
      points = points.filter(p => p.life > 0);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
}
