"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-8 bg-gradient-to-b from-[#15111a] via-[#252525] to-[#15111a] min-h-[105vh] flex flex-col items-center justify-center overflow-visible z-20 w-full">

      {/* Hazy Dark Purple Glow Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Center Main Haze */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-purple-900/60 rounded-full blur-[140px] opacity-90" />
        {/* Top Left Deep Purple Haze */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-800/40 rounded-full blur-[120px] opacity-70" />
        {/* Bottom Right Deep Purple Haze */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-700/30 rounded-full blur-[120px] opacity-70" />
      </div>

      {/* Black Overlay Layers for depth */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90 z-0 pointer-events-none" />

      {/* Massive Background Text (Layer 1: Solid Fill Behind Image) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden mt-12">
        <h1 className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[320px] uppercase text-purple-600 leading-[0.85] text-center flex flex-col gap-0 overflow-hidden w-full">
          <motion.span 
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-bebas whitespace-nowrap"
          >
            CORPORATE
          </motion.span>
          <motion.span 
            initial={{ x: "20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-bebas whitespace-nowrap"
          >
            EXPOSURE
          </motion.span>
        </h1>
      </div>

      {/* Hero Content Container (Layer 2: Centered Image) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative z-20 w-full flex flex-col items-center justify-center flex-grow pointer-events-none mt-12"
      >
        <Image
          src="/images/removed_student.png"
          alt="Hero Student"
          width={1000}
          height={1200}
          className="w-auto h-auto max-h-[75vh] max-w-[90vw] sm:max-w-[550px] lg:max-w-[650px] scale-[2.8] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
          priority
        />
      </motion.div>

      {/* Massive Foreground Text (Layer 3: Thin Hollow Outline On Top Of Image) */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none select-none overflow-hidden mt-12">
        <h1 className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[320px] uppercase text-transparent leading-[0.85] text-center flex flex-col gap-0 overflow-hidden w-full">
          <motion.span 
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-bebas whitespace-nowrap" 
            style={{ WebkitTextStroke: '2px #a855f7' }}
          >
            CORPORATE
          </motion.span>
          <motion.span 
            initial={{ x: "20vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-bebas whitespace-nowrap" 
            style={{ WebkitTextStroke: '2px #a855f7' }}
          >
            EXPOSURE
          </motion.span>
        </h1>
      </div>

      {/* Floating UI Elements (Stats on Left, CTA on Right) */}
      <div className="absolute inset-0 z-40 w-full h-full pointer-events-none">
        
        {/* Left Side: Impact Stats */}
        <div className="hidden lg:block absolute left-4 xl:left-8 2xl:left-16 top-[55%] -translate-y-1/2 pointer-events-auto z-40">
          <FadeIn delay={0.2} direction="right" className="flex flex-col gap-10">
            <div className="flex flex-col group">
              <span className="text-5xl font-bebas tracking-wider text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:translate-x-2 transition-transform duration-300 origin-left">50K+</span>
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mt-1">Active Students</span>
            </div>
            <div className="w-8 h-[1px] bg-purple-500/30" />
            <div className="flex flex-col group">
              <span className="text-5xl font-bebas tracking-wider text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:translate-x-2 transition-transform duration-300 origin-left">98%</span>
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mt-1">Placement Rate</span>
            </div>
            <div className="w-8 h-[1px] bg-purple-500/30" />
            <div className="flex flex-col group">
              <span className="text-5xl font-bebas tracking-wider text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:translate-x-2 transition-transform duration-300 origin-left">200+</span>
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mt-1">Corporate Partners</span>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Rectangular CTA Button (Beside the foot of the E) */}
        <div className="hidden lg:block absolute right-4 xl:right-16 2xl:right-10 bottom-[18%] pointer-events-auto z-40">
          <FadeIn delay={0.4} direction="left" className="flex">
            <button className="group relative flex items-center justify-center px-5 py-3 bg-none text-lg text-white font-medium tracking-[6px] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] rounded-sm overflow-hidden border border-purple-400/50">
              <span className="relative z-10 flex font-bebas items-center gap-3">
                Get Started
                {/* <FluidArrowRight className="w-5 h-5" /> */}
              </span>
            </button>
          </FadeIn>
        </div>

      </div>

      {/* Tilted Marquee (Anchored to absolute bottom of section) */}
      <div className="absolute -bottom-16 md:-bottom-24 w-[120vw] -ml-[10vw] flex overflow-hidden -rotate-2 bg-purple-600 py-4 shadow-[0_0_50px_rgba(147,51,234,0.3)] select-none border-y border-purple-500/50 z-50">
        {/* First Loop */}
        <div className="animate-marquee font-bebas flex-shrink-0 items-center justify-around min-w-full gap-12 px-6" style={{ animationDuration: '45s' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>FULL STACK DEV</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>MACHINE LEARNING</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>CLOUD COMPUTING</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-black font-bebas uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>UI/UX DESIGN</span>
              <span className="text-purple-300 font-bebas text-4xl">✦</span>
            </React.Fragment>
          ))}
        </div>
        {/* Second Loop (For seamless infinite animation) */}
        <div className="animate-marquee flex-shrink-0 items-center justify-around min-w-full gap-12 px-6" aria-hidden="true" style={{ animationDuration: '45s' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>FULL STACK DEV</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>MACHINE LEARNING</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>CLOUD COMPUTING</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
              <span className="text-6xl md:text-8xl font-bebas font-black uppercase text-white tracking-[7px] drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>UI/UX DESIGN</span>
              <span className="text-purple-300 text-4xl font-bebas">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
