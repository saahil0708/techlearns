"use client";

import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Custom sharp 4-point brand star
const Star4Point = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
  </svg>
);

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress for a buttery smooth filling effect
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform the smoothed scale (0 to 1) into a percentage for the icon's left position
  const iconX = useTransform(scaleX, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-1.5 z-[100] pointer-events-none">
      {/* Background Track */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-t border-white/5" />
      
      {/* The filling bar (Solid Neon Green instead of Gradient) */}
      <motion.div 
        className="absolute inset-0 bg-[#CCFF00] origin-left shadow-[0_0_15px_rgba(204,255,0,0.6)]"
        style={{ scaleX }}
      />
      
      {/* Moving Graphic on the leading edge (Premium Custom Brand Star) */}
      <motion.div 
        className="absolute bottom-1/2 translate-y-1/2 -ml-3 sm:-ml-4 flex items-center justify-center"
        style={{ left: iconX }}
      >
        <div className="relative flex items-center justify-center">
          {/* Shooting star light trail */}
          <div className="absolute right-[50%] h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#CCFF00] opacity-80" />
          
          {/* Spinning Brand Star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="relative z-10"
          >
            <Star4Point className="text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,1)] w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          
          {/* Bright inner core for premium feel */}
          <div className="absolute z-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full shadow-[0_0_10px_white,0_0_20px_rgba(204,255,0,1)]" />
        </div>
      </motion.div>
    </div>
  );
}
