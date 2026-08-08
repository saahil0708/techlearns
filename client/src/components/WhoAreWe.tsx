"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PILLARS = [
  {
    id: '01',
    title: 'AGILE ECOSYSTEM',
    color: 'text-purple-600',
    bgHover: 'bg-purple-100/40',
    description: 'We abandon traditional classrooms. You are dropped into an elite engineering team running real sprint cycles, daily standups, and rigorous code reviews from day one.',
  },
  {
    id: '02',
    title: 'REAL PRODUCTS',
    color: 'text-blue-600',
    bgHover: 'bg-blue-100/40',
    description: 'No more toy projects. You will architect, build, and deploy highly scalable applications that solve actual problems for real-world users.',
  },
  {
    id: '03',
    title: 'SKILL PASSPORT',
    color: 'text-zinc-800',
    bgHover: 'bg-zinc-200/40',
    description: 'Certificates are dead. Graduate with a verifiable, blockchain-backed portfolio that proves exactly what you built and how you contributed.',
  },
  {
    id: '04',
    title: 'THE CHALLENGES',
    color: 'text-fuchsia-600',
    bgHover: 'bg-fuchsia-100/40',
    description: 'Test your mettle against the best. Compete in nationwide hackathons and engineering challenges to fast-track your recognition in the tech industry.',
  }
];

export default function WhoAreWe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="who-are-we" className="relative pt-36 pb-24 sm:pt-48 sm:pb-32 bg-[#e4e6ea] overflow-hidden border-t border-black/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-purple-300/30 blur-[150px] rounded-full absolute mix-blend-multiply transition-all duration-1000" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-16 sm:mb-24">
          
          {/* Left: Tag (Heading) */}
          <div className="flex items-center gap-3 shrink-0 lg:pt-3">
            <span className="text-[44px] font-serif text-purple-600 leading-[0] translate-y-2 drop-shadow-md">*</span>
            <span className="text-[18px] tracking-widest uppercase text-gray-900 font-bold">
              WHO WE ARE
            </span>
          </div>
          
          {/* Right: Massive Text (Subheading) */}
          <div className="flex-1 max-w-5xl">
            <h2 className="text-4xl sm:text-5xl md:text-[64px] text-gray-900 leading-[0.95] tracking-tight uppercase font-black">
              WE BRIDGE THE GAP BETWEEN CAMPUS & CORPORATE.
            </h2>
          </div>
          
        </div>

        {/* Massive Typographic Split Layout (No Cards) */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[70vh] min-h-[600px] mt-10 lg:mt-20 gap-16 lg:gap-8 items-center border-t border-black/10 pt-16">
          
          {/* Left: Giant Navigation Titles */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center gap-6 lg:gap-4">
            {PILLARS.map((pillar, index) => {
              const isActive = hoveredIndex === null ? index === 0 : hoveredIndex === index;
              
              return (
                <div 
                  key={pillar.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="group cursor-pointer flex items-center gap-4 sm:gap-8 lg:gap-6"
                >
                  <span className={`text-2xl md:text-3xl font-mono font-bold transition-all duration-500 ease-out w-12
                    ${isActive ? `${pillar.color} translate-x-2` : 'text-black/20'}
                  `}>
                    {pillar.id}
                  </span>
                  <h2 
                    className={`text-[40px] sm:text-6xl md:text-7xl lg:text-[4.5vw] xl:text-[5vw] font-black uppercase tracking-tighter leading-[0.9] transition-all duration-500 ease-out
                      ${isActive ? `${pillar.color} lg:translate-x-4` : 'text-transparent'}
                    `}
                    style={!isActive ? { WebkitTextStroke: '1.5px rgba(0,0,0,0.15)' } : {}}
                  >
                    {pillar.title}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Content Display */}
          <div className="flex-1 w-full relative h-[400px] lg:h-full flex flex-col justify-center items-start lg:pl-16 overflow-hidden">
            
            {PILLARS.map((pillar, index) => {
              const isActive = hoveredIndex === null ? index === 0 : hoveredIndex === index;
              
              return (
                <div 
                  key={`content-${pillar.id}`}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-16 pointer-events-none z-0'}
                  `}
                >
                  {/* The Huge Background Number */}
                  <div className="absolute inset-0 flex items-center justify-end -z-10 pointer-events-none">
                    <span className={`text-[200px] sm:text-[300px] lg:text-[450px] font-black leading-none select-none transition-colors duration-700
                      ${isActive ? 'text-black/[0.04]' : 'text-transparent'}
                    `}>
                      {pillar.id}
                    </span>
                  </div>

                  {/* The Content */}
                  <div className="relative z-10 max-w-xl">
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 leading-[1.6] mb-12">
                      {pillar.description}
                    </p>
                    
                    <button className={`inline-flex items-center gap-4 tracking-widest uppercase text-sm sm:text-base group/btn transition-colors duration-300 ${pillar.color} font-bold`}>
                      Discover More
                      <div className={`p-3 sm:p-4 rounded-full bg-white shadow-sm border border-black/5 group-hover/btn:shadow-md transition-all`}>
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
