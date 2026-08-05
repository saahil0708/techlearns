"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';

export default function CourseCard3D({ course, index = 0 }: { course: any, index?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const isHighlighted = index === 1; // Middle card logic

  // Dynamic Y translation to physically stagger the cards based on position (index 0, 1, 2)
  let positionClass = '';
  if (index === 0) positionClass = 'lg:translate-y-0';
  else if (index === 1) positionClass = 'lg:translate-y-0';
  else if (index === 2) positionClass = 'lg:translate-y-0';

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement using springs for a highly premium feel
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation degrees (-10 to 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Normalize coordinates from -0.5 to 0.5 based on mouse position within the card
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col cursor-pointer ${positionClass}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Exact SVG Clip Path based on User Request (Max Roundness S-Curve) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id={`notch-clip-${course.id}`} clipPathUnits="objectBoundingBox">
            <path d="M 0,0.06 Q 0,0 0.08,0 L 0.92,0 Q 1,0 1,0.06 L 1,0.67 Q 1,0.78 0.85,0.78 Q 0.70,0.78 0.70,0.89 Q 0.70,1 0.55,1 L 0.08,1 Q 0,1 0,0.94 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background & Border (with SVG Clipping) */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${isHighlighted ? 'from-purple-900/40' : 'from-[#1e1e1e]'} to-[#141414] border ${isHighlighted ? 'border-purple-500/50' : 'border-white/5'} shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[-20px_20px_60px_-15px_rgba(147,51,234,0.4)] group-hover:border-purple-500/50`}
        style={{ clipPath: `url(#notch-clip-${course.id})` }}
      >
        {/* Internal Hover Glow */}
        <div className={`absolute top-0 right-0 w-64 h-64 ${isHighlighted ? 'bg-purple-400/20' : 'bg-purple-500/10'} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
      </div>

      {/* 3D Content Container */}
      <div className="relative p-8 pb-10 sm:p-10 sm:pb-12 flex flex-col flex-grow transition-transform duration-500 group-hover:[transform:translateZ(40px)] z-10">

        {/* Duration Overlay Badge */}
        <div className={`absolute top-8 right-8 bg-black/40 border ${isHighlighted ? 'border-purple-500/30' : 'border-white/10'} px-4 py-1.5 rounded-full text-xs text-gray-300 tracking-wider uppercase font-bold`}>
          {course.duration}
        </div>

        {/* Level / Category */}
        <div className={`font-bold text-xs tracking-widest uppercase mb-3 pr-24 ${isHighlighted ? 'text-purple-300' : 'text-purple-400'}`}>
          {course.level}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 group-hover:text-purple-300 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed font-medium mb-8">
          {course.description}
        </p>

        {/* Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Benefits Checkpoints */}
        <ul className="space-y-4 mb-4 flex-grow pr-16">
          {course.benefits.map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
              <CheckCircle2 className={`w-5 h-5 ${isHighlighted ? 'text-purple-400' : 'text-purple-500'} shrink-0 opacity-80`} />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Squircle Download Button inside the Notch */}
        <button
          title="Download Brochure"
          className={`absolute bottom-4 right-6 w-16 h-16 flex items-center justify-center text-white transition-all duration-300 group/btn rounded-full ${isHighlighted ? 'bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)]' : 'bg-white/10 hover:bg-purple-600'}`}
        >
          <Download className="w-6 h-6 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </button>

      </div>
    </motion.div>
  );
}
