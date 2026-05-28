import React, { useRef, useState, MouseEvent } from 'react';

interface RippleHoverButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function RippleHoverButton({ children, className = '', ...props }: RippleHoverButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [spanStyle, setSpanStyle] = useState({ left: '50%', top: '50%' });

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpanStyle({ left: `${x}px`, top: `${y}px` });
    }
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpanStyle({ left: `${x}px`, top: `${y}px` });
    }
    if (props.onMouseLeave) props.onMouseLeave(e);
  };

  return (
    <a
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <div 
        className="absolute pointer-events-none z-0" 
        style={{ left: spanStyle.left, top: spanStyle.top }}
      >
        <span
          className="block w-[400px] h-[400px] bg-[var(--bg-color)] rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-[600ms] ease-out"
        />
      </div>
      <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 text-[var(--bg-color)] group-hover:text-[var(--brand-color)]">
        {children}
      </span>
    </a>
  );
}
