import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onHoverStart = () => setIsHovering(true);
    const onHoverEnd = () => setIsHovering(false);

    // Add listeners
    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    // Attach hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []); // Note: In a real heavy app, use mutation observer to attach listeners to new elements

  // Don't render on touch devices usually, but for this demo we'll keep it simple
  if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <style>{`
        body { cursor: none; } /* Hide default cursor */
        a, button, input, textarea { cursor: none; }
      `}</style>
      <div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* The Dot */}
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all duration-200 ease-out ${isHovering ? 'w-2 h-2' : 'w-2 h-2'}`} />
        
        {/* The Ring */}
        <div 
          className={`absolute -translate-x-1/2 -translate-y-1/2 border border-slate-400 dark:border-slate-500 rounded-full transition-all duration-500 ease-out ${
            isHovering 
              ? 'w-12 h-12 opacity-50 bg-emerald-500/10 border-emerald-500' 
              : 'w-8 h-8 opacity-30'
          }`} 
        />
      </div>
    </>
  );
};