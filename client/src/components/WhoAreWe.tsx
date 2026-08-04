"use client";
import React, { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const PILLARS = [
  {
    id: '01',
    title: 'AGILE ECOSYSTEM',
    color: 'text-purple-700',
    description: 'We abandon traditional classrooms. You are dropped into an elite engineering team running real sprint cycles, daily standups, and rigorous code reviews from day one.',
  },
  {
    id: '02',
    title: 'REAL PRODUCTS',
    color: 'text-blue-700',
    description: 'No more toy projects. You will architect, build, and deploy highly scalable applications that solve actual problems for real-world users.',
  },
  {
    id: '03',
    title: 'SKILL PASSPORT',
    color: 'text-[#111]',
    description: 'Certificates are dead. Graduate with a verifiable, blockchain-backed portfolio that proves exactly what you built and how you contributed.',
  },
  {
    id: '04',
    title: 'THE CHALLENGES',
    color: 'text-purple-700',
    description: 'Test your mettle against the best. Compete in nationwide hackathons and engineering challenges to fast-track your recognition in the tech industry.',
  }
];

export default function WhoAreWe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="who-are-we" className="relative py-24 sm:py-32 bg-[#F4F5F7] overflow-hidden border-t border-black/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] bg-purple-300/30 blur-[150px] rounded-full absolute mix-blend-multiply transition-all duration-1000" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-16 sm:mb-24">
          
          {/* Left: Tag (Heading) */}
          <div className="flex items-center gap-3 shrink-0 lg:pt-3">
            <Star className="w-5 h-5 text-purple-600 fill-purple-600" />
            <span className="text-[18px] font-bold tracking-widest uppercase text-gray-900">
              WHO WE ARE
            </span>
          </div>
          
          {/* Right: Massive Text (Subheading) */}
          <div className="flex-1 max-w-5xl">
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-black text-gray-900 leading-[0.95] tracking-tight uppercase">
              WE BRIDGE THE GAP BETWEEN CAMPUS & CORPORATE.
            </h2>
          </div>
          
        </div>

        {/* Interactive Kinetic List */}
        <div className="flex flex-col w-full border-t border-black/10">
          {PILLARS.map((pillar, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <div 
                key={pillar.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col xl:flex-row xl:items-center justify-between py-10 sm:py-14 xl:py-16 border-b border-black/10 cursor-default transition-all duration-500 ease-out ${isAnyHovered && !isHovered ? 'opacity-30 blur-[2px]' : 'opacity-100'}`}
              >
                {/* Index & Huge Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full xl:w-2/3">
                  <span className={`text-xl md:text-3xl font-mono font-black transition-colors duration-500 ${isHovered ? pillar.color : 'text-black/30'}`}>
                    {pillar.id}
                  </span>
                  
                  <h2 
                    className={`text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black uppercase tracking-tight transition-all duration-500 select-none ${isHovered ? pillar.color : 'text-transparent'}`}
                    style={!isHovered ? { WebkitTextStroke: `1.5px rgba(0,0,0,0.25)` } : {}}
                  >
                    {pillar.title}
                  </h2>
                </div>

                {/* Sliding Description Area */}
                <div className="w-full xl:w-1/3 mt-8 xl:mt-0 overflow-hidden pr-4">
                  {/* On Mobile: Always visible but fades color. On Desktop: Slides in and fades in. */}
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-6 ${isHovered ? 'xl:translate-y-0 xl:opacity-100' : 'xl:translate-y-[120%] xl:opacity-0'}`}>
                    <p className={`text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed transition-colors duration-500 ${isHovered ? 'text-gray-900' : 'text-gray-500 xl:text-gray-900'}`}>
                      {pillar.description}
                    </p>
                    <button className={`inline-flex items-center gap-3 font-bold tracking-widest uppercase text-sm sm:text-base group/btn transition-colors duration-300 ${isHovered ? pillar.color : 'text-gray-400 xl:text-gray-900'}`}>
                      Discover More
                      <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Background Hover Flare */}
                <div 
                  className={`absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-black/[0.02] to-transparent opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : ''}`}
                ></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
