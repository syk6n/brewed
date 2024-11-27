import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    // Add active state when clicking
    const handleMouseDown = () => {
      cursor.classList.add('scale-75');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('scale-75');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Don't render on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <div 
      ref={cursorRef}
      style={{ zIndex: 9999 }}
      className="fixed pointer-events-none w-4 h-4 -ml-2 -mt-2 rounded-full transition-transform duration-150 ease-out mix-blend-difference bg-white"
    />
  );
}