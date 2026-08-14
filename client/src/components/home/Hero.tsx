import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center bg-gradient-to-b from-[#0A0216] via-[#14062E] to-[#0A0216] overflow-hidden font-flexa">

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[#8C52FF]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-[#4B2579]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] bg-[#6B21A8]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 lg:mt-0">

        {/* Left Column (Span 7) */}
        <div className="lg:col-span-7 flex flex-col items-start w-full relative">

          <FadeIn direction="up" delay={0.1} className="w-full">
            {/* Headline */}
            <h1 className="text-[52px] sm:text-[64px] xl:text-[72px] font-semibold leading-[1.1] tracking-tight mb-6 text-white">
              <span className="text-[#8C52FF]">Learn</span> Today. <span className="text-[#8C52FF]">Lead Tomorrow.</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-gray-400 text-lg sm:text-[20px] leading-relaxed mb-10 max-w-[90%] font-medium">
              India's Premier Academy for <span className="text-white font-bold">Future-Ready Tech Professionals.</span> We build integrated learning ecosystems that replace fragmented education with predictable, automated career growth.
            </p>

            {/* 3-Column Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pt-5">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-[#8C52FF] shrink-0 -translate-y-1" strokeWidth={3} />
                <p className="text-sm text-gray-400 leading-tight">
                  <strong className="text-white">Live Training</strong> — Instructor-Led
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-[#8C52FF] shrink-0 -translate-y-1" strokeWidth={3} />
                <p className="text-sm text-gray-400 leading-tight">
                  <strong className="text-white">Modern Tech</strong> — AI Tools included
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-[#8C52FF] shrink-0 -translate-y-1" strokeWidth={3} />
                <p className="text-sm text-gray-400 leading-tight">
                  <strong className="text-white">Certification</strong> — & Placement Support
                </p>
              </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-wrap items-center gap-4 mb-16">
              <button className="bg-[#8C52FF] hover:bg-[#7a41ec] text-white font-bold text-[15px] px-8 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(140,82,255,0.4)]">
                Explore Programs
              </button>
              <button className="bg-transparent border border-[#8C52FF] text-white hover:bg-[#8C52FF]/10 font-bold text-[15px] px-8 py-3.5 rounded-full transition-colors">
                Book Counselling
              </button>
            </div> */}

            {/* 3-Column Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-7">
              <div className="flex flex-col">
                <span className="text-[#8C52FF] text-[32px] sm:text-[40px] font-semibold leading-none mb-1 drop-shadow-[0_0_10px_rgba(140,82,255,0.3)]">120+</span>
                <span className="text-gray-500 text-[13px] font-medium tracking-wide">Hours of Training</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8C52FF] text-[32px] sm:text-[40px] font-semibold leading-none mb-1 drop-shadow-[0_0_10px_rgba(140,82,255,0.3)]">8+</span>
                <span className="text-gray-500 text-[13px] font-medium tracking-wide">Real-World Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8C52FF] text-[32px] sm:text-[40px] font-semibold leading-none mb-1 drop-shadow-[0_0_10px_rgba(140,82,255,0.3)]">100%</span>
                <span className="text-gray-500 text-[13px] font-medium tracking-wide">Placement Support</span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Right Column (Span 5) - Isometric Illustration Placeholder */}
        <div className="lg:col-span-5 relative w-full h-[500px] flex items-center justify-center">
          <FadeIn direction="left" delay={0.3} className="w-full h-full relative">

            <div className="absolute inset-0 flex items-center justify-center perspective-[2000px]">

              {/* Phone Frame */}
              <div className="relative w-[280px] h-[550px] bg-[#0A0514] border border-white/20 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col p-4 backdrop-blur-md">

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-[40px] border border-[#8C52FF]/30 pointer-events-none" />

                {/* Header inside phone */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-[#8C52FF] rounded-md shrink-0 shadow-[0_0_10px_rgba(140,82,255,0.5)]" />
                  <div className="h-3 w-24 bg-white/20 rounded-full" />
                  <div className="ml-auto w-12 h-3 bg-white/10 rounded-full" />
                </div>

                {/* Chat Bubbles / Data rows */}
                <div className="flex flex-col gap-4 mb-auto">
                  <div className="w-full h-12 border border-white/10 rounded-2xl p-2 flex items-center gap-2 bg-white/5">
                    <div className="w-6 h-6 rounded-full border border-white/20 bg-white/10" />
                    <div className="h-2 w-16 bg-white/20 rounded-full" />
                  </div>
                  <div className="w-[80%] ml-auto h-12 bg-[#8C52FF]/20 border border-[#8C52FF]/40 rounded-2xl rounded-tr-sm p-2 flex items-center justify-end gap-2 shadow-[0_0_15px_rgba(140,82,255,0.1)]">
                    <div className="h-2 w-12 bg-white/50 rounded-full" />
                    <div className="w-6 h-6 rounded-full bg-[#8C52FF]" />
                  </div>
                </div>

                {/* Floating elements outside the phone */}
                <div className="absolute top-1/4 -left-[40%] w-[200px] h-[100px] bg-[#0A0514] border border-white/20 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex p-3 backdrop-blur-xl">
                  <div className="w-1/3 border-r border-white/10 pr-2 flex flex-col gap-1 justify-center text-[8px] font-bold text-gray-500">
                    <span className="text-right w-full">MON</span>
                    <span className="text-right w-full">TUE</span>
                    <span className="text-right w-full">WED</span>
                  </div>
                  <div className="w-2/3 pl-2 flex items-center justify-center">
                    <div className="w-[80%] h-[60%] bg-[#8C52FF]/30 border border-[#8C52FF]/50 rounded-lg shadow-[0_0_10px_rgba(140,82,255,0.2)]" />
                  </div>
                </div>

                {/* Floating Stats Card at bottom right */}
                <div className="absolute bottom-1/4 -right-[20%] w-[180px] h-[80px] bg-[#0A0514] border border-white/20 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col p-3 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold leading-tight text-gray-400">Cumulative<br />Career Growth</span>
                    <div className="flex gap-1 items-end">
                      <div className="w-2 h-8 bg-[#8C52FF]/40 rounded-sm" />
                      <div className="w-2 h-10 bg-[#8C52FF]/70 rounded-sm" />
                      <div className="w-2 h-12 bg-[#8C52FF] rounded-sm shadow-[0_0_10px_rgba(140,82,255,0.5)]" />
                    </div>
                  </div>
                  <span className="text-lg font-bold text-white">85.3%</span>
                </div>

              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
