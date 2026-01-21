import React, { useEffect, useState } from 'react';

export const DNALoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  // 1. Increased to 20 dots for a denser, more scientific look
  const dots = Array.from({ length: 20 }).map((_, i) => i);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* 2. Added h-64 to give the helix more vertical breathing room */}
      <div className="relative flex items-center justify-center h-64 w-24">

        {/* 3. The Base Pairs (Connecting Lines) */}
        <div className="absolute flex flex-col gap-[11.5px]">
          {dots.map((i) => (
            <div
              key={`line-${i}`}
              className="h-[1px]"
              style={{
                width: '32px',
                // Alternating gradients to look like genomic base pairs
                background: i % 2 === 0
                  ? 'linear-gradient(90deg, #059669 0%, #64748b 100%)'
                  : 'linear-gradient(90deg, #64748b 0%, #059669 100%)',
                animation: 'lineStretch 2s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        {/* Left Helix Strand */}
        <div className="flex flex-col gap-2 z-10">
          {dots.map((i) => (
            <div
              key={`l-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"
              style={{
                animation: `helixMove 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Right Helix Strand */}
        <div className="flex flex-col gap-2 z-10">
          {dots.map((i) => (
            <div
              key={`r-${i}`}
              className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"
              style={{
                animation: `helixMoveInverse 2s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 4. Increased mt-12 (from mt-8) to push the text further down */}
      <div className="mt-12 text-slate-500 dark:text-slate-400 font-mono text-xs tracking-[0.3em] animate-pulse">
        LOADING...
      </div>

      <style>{`
        @keyframes helixMove {
          0%, 100% { transform: translateX(-16px) scale(0.8); z-index: 0; }
          50% { transform: translateX(16px) scale(1.2); z-index: 20; }
        }
        @keyframes helixMoveInverse {
          0%, 100% { transform: translateX(16px) scale(1.2); z-index: 20; }
          50% { transform: translateX(-16px) scale(0.8); z-index: 0; }
        }
        @keyframes lineStretch {
          0%, 50%, 100% { transform: scaleX(1); opacity: 0.3; }
          25%, 75% { transform: scaleX(0.1); opacity: 0.05; }
        }
      `}</style>
    </div>
  );
};