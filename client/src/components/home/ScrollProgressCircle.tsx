

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ScrollProgressCircle() {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const fillProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform progress (0 to 1) into Y translation to hide wave completely at 0%
  const fillY = useTransform(fillProgress, [0, 1], ["130%", "0%"]);

  const textRef = useRef<HTMLSpanElement>(null);

  useMotionValueEvent(fillProgress, "change", (latest) => {
    if (textRef.current) {
      textRef.current.textContent = `${Math.round(latest * 100)}%`;
    }
  });

  return (
    <div className="fixed cursor-pointer bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100]">
      <style>{`
        @keyframes liquid-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-liquid-wave {
          animation: liquid-wave 3s linear infinite;
        }
        .animate-liquid-wave-slow {
          animation: liquid-wave 5s linear infinite;
        }
      `}</style>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative cursor-pointer flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 group pointer-events-auto rounded-full overflow-hidden border-2 border-purple-500/30 bg-black/40 backdrop-blur-md transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        aria-label="Scroll to top"
      >
        {/* The solid fill that translates up from the bottom */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          style={{ y: fillY }}
        >
          {/* Animated Wave SVGs at the liquid surface */}
          <div className="absolute bottom-full left-0 w-[200%] h-3 sm:h-4 pointer-events-none">
            {/* Back wave (slower, opposite phase) */}
            <svg viewBox="0 0 800 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full fill-purple-800/60 animate-liquid-wave-slow">
              <path d="M 0 50 Q 100 0 200 50 T 400 50 T 600 50 T 800 50 V 100 H 0 Z" />
            </svg>
            {/* Front wave */}
            <svg viewBox="0 0 800 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full fill-purple-600 animate-liquid-wave">
              <path d="M 0 50 Q 100 100 200 50 T 400 50 T 600 50 T 800 50 V 100 H 0 Z" />
            </svg>
          </div>
        </motion.div>

        {/* Percentage text on top */}
        <div className="relative z-10 flex items-center justify-center">
          <span
            ref={textRef}
            className="text-white font-bebas text-sm sm:text-lg tracking-wider drop-shadow-md transition-transform"
          >
            0%
          </span>
        </div>
      </button>
    </div>
  );
}
