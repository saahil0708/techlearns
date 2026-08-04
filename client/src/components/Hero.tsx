"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-8 bg-black min-h-[100vh] flex flex-col items-center justify-center overflow-visible z-20">

      {/* Hazy Dark Purple Glow Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-purple-900/50 rounded-full blur-[120px] opacity-80" />
      </div>

      {/* Black Overlay Layers */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center flex-grow">
        <p className="text-sm text-gray-500/70 uppercase tracking-widest font-mono">Hero Section To be developed</p>
      </div>

      {/* Tilted Marquee (Anchored to absolute bottom of section) */}
      <div className="absolute -bottom-16 md:-bottom-24 w-[120vw] -ml-[10vw] flex overflow-hidden -rotate-2 bg-purple-600 py-4 shadow-[0_0_50px_rgba(147,51,234,0.3)] select-none border-y border-purple-500/50 z-50">
        {/* First Loop */}
        <div className="animate-marquee flex-shrink-0 items-center justify-around min-w-full gap-12 px-6" style={{ animationDuration: '45s' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>FULL STACK DEV</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>MACHINE LEARNING</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>CLOUD COMPUTING</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>UI/UX DESIGN</span>
              <span className="text-purple-300 text-4xl">✦</span>
            </React.Fragment>
          ))}
        </div>
        {/* Second Loop (For seamless infinite animation) */}
        <div className="animate-marquee flex-shrink-0 items-center justify-around min-w-full gap-12 px-6" aria-hidden="true" style={{ animationDuration: '45s' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>FULL STACK DEV</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>MACHINE LEARNING</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>CLOUD COMPUTING</span>
              <span className="text-purple-300 text-4xl">✦</span>
              <span className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter drop-shadow-md" style={{ WebkitTextStroke: '2.5px white' }}>UI/UX DESIGN</span>
              <span className="text-purple-300 text-4xl">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
