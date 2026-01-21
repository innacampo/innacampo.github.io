import React, { useState, useEffect } from 'react';

const LINES = [
  "Operating between theory and practice",
  "Building systems meant to last",
  "Human-in-the-loop, by design"
];

const STATUS_TIMING = {
  initialDelay: 5000,
  charInterval: 45,
  charJitter: 6,
  postTypePause: 1000,
  holdDuration: 3000,
  fadeOut: 300,
  silenceGap: 250,
  fadeIn: 300,
  loop: false,
};

export const StatusTypewriter: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      await new Promise(r => setTimeout(r, STATUS_TIMING.initialDelay));

      for (let i = 0; i < LINES.length; i++) {
        if (isCancelled) return;

        const line = LINES[i];
        const isLast = i === LINES.length - 1;
        
        // Adjust interval for final line
        const baseInterval = isLast ? 50 : STATUS_TIMING.charInterval;

        // Reset for typing
        setOpacity(1);
        setDisplayText('');

        // Typing loop
        for (let charIndex = 0; charIndex <= line.length; charIndex++) {
          if (isCancelled) return;
          setDisplayText(line.substring(0, charIndex));
          
          if (charIndex < line.length) {
            const jitter = Math.random() * STATUS_TIMING.charJitter * 2 - STATUS_TIMING.charJitter;
            await new Promise(r => setTimeout(r, baseInterval + jitter));
          }
        }

        // If it's the final line, we stop here (Infinite Hold)
        if (isLast) return;

        // Post-type pause (before hold)
        await new Promise(r => setTimeout(r, STATUS_TIMING.postTypePause));

        // Hold duration
        await new Promise(r => setTimeout(r, STATUS_TIMING.holdDuration));

        // Fade Out
        if (isCancelled) return;
        setOpacity(0);
        await new Promise(r => setTimeout(r, STATUS_TIMING.fadeOut));

        // Silence Gap
        if (isCancelled) return;
        setDisplayText('');
        await new Promise(r => setTimeout(r, STATUS_TIMING.silenceGap));

        // Fade In duration (we fade in the empty container/start of next loop)
        // The opacity is reset to 1 at the start of the loop
        await new Promise(r => setTimeout(r, STATUS_TIMING.fadeIn));
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="mt-4 mb-6">
      <h3 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-bold mb-1.5">
        Status
      </h3>
      <div className="h-6 flex items-center">
        <div 
          className="font-mono text-sm text-emerald-800 dark:text-emerald-300 transition-opacity ease-in-out"
          style={{ 
            opacity: opacity,
            transitionDuration: `${STATUS_TIMING.fadeOut}ms` 
          }}
        >
          {displayText}
          <span className="animate-pulse ml-1 inline-block w-1.5 h-3.5 bg-emerald-600 dark:bg-emerald-400 align-middle opacity-70"></span>
        </div>
      </div>
    </div>
  );
};