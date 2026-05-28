import { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

export function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
