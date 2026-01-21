import React from 'react';

export const OrganicBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950">

            {/* 1. The "Anti-Banding" Noise - Keeps it from looking patchy */}
            <div
                className="absolute inset-0 opacity-[0.3] mix-blend-soft-light"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* 2. Simplified "Comet" Glows */}
            {/* Instead of thin SVG lines, we use elongated radial gradients. 
                This creates the same "sweep" from right-middle to bottom-middle 
                but uses soft light instead of hard lines that can pixelate. */}
            {/* 1. Muted Watercolor Wash */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            /* Softened Amber head at Right Middle */
                            radial-gradient(ellipse at 100% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 60%),
                            
                            /* Softened Blue tail at Bottom Middle */
                            radial-gradient(ellipse at 30% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 60%),
                            
                            /* Very muted Emerald wash for overall softness */
                            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 40%)
                        `
                    }}
                />
            </div>

            {/* 3. The Decorative Arc */}
            {/* One single, thicker arc is easier for a monitor to render than three thin ones. */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                    d="M 100 50 C 100 80 80 100 50 100"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="0.15"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};