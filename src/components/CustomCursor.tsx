import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Main cursor
      cursor.style.transform = `translate(${clientX}px, ${clientY}px) scale(1)`;
      
      // Dot cursor (follows with slight delay)
      requestAnimationFrame(() => {
        cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      });

      // Add active state when clicking
      const handleMouseDown = () => {
        cursor.classList.add('scale-75');
        cursorDot.classList.add('scale-150');
      };

      const handleMouseUp = () => {
        cursor.classList.remove('scale-75');
        cursorDot.classList.remove('scale-150');
      };

      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Don't render on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-8 h-8 -ml-4 -mt-4 transition-transform duration-150 ease-out"
        style={{ 
          backgroundImage: 'url(/cursor.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div 
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-1 h-1 -ml-0.5 -mt-0.5 rounded-full bg-purple-500 transition-transform duration-150 ease-out"
      />
    </>
  );
}