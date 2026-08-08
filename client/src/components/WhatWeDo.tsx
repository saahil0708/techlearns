import { ArrowUpRight } from 'lucide-react';
import { FluidArrowRight } from '@/utils/fluid_arrow';
import { FadeIn } from './animations/FadeIn';

const WHAT_WE_DO_CARDS = [
  {
    title: "BUILD REAL\nSOFTWARE.",
    description: "Move beyond dummy projects. We build production-ready applications solving actual business problems in a corporate setup.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    isAccent: false,
    imagePosition: 'bottom'
  },
  {
    title: "AGILE SQUADS\nCOLLABORATION.",
    description: "Work in cross-functional teams with PMs, Designers, and Engineers, exactly how modern tech companies operate.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    isAccent: true,
    imagePosition: 'top'
  },
  {
    title: "VERIFIED\nEVIDENCE.",
    description: "Graduate with a Skill Passport containing verified proof of work, replacing the traditional useless certificate.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    isAccent: false,
    imagePosition: 'bottom'
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-10 bg-[#252525] relative overflow-hidden pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header Section */}
        <FadeIn delay={0.1} direction="up" className="flex flex-col lg:flex-row items-start lg:items-center justify-end gap-8 lg:gap-12 mb-16 sm:mb-24 w-full">
          
          {/* Left: Subheading (Big Text) */}
          <div className="text-left">
            <h2
              className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1]  uppercase font-black"
              style={{ color: '#FFFAFA' }}
            >
              WE SIMULATE THE <br className="hidden lg:block" />
              TECH INDUSTRY
            </h2>
          </div>

          {/* Right: Heading + Star */}
          <div className="flex items-center justify-start lg:justify-end gap-2 lg:gap-3 shrink-0 lg:-translate-y-10 mt-2 lg:mt-0 w-full lg:w-auto">
            <span className="text-[18px] sm:text-[33px] font-bebas tracking-widest uppercase text-gray-300 font-bold">
              WHY CHOOSE TECHLEARNS
            </span>
            <span className="text-[34px] sm:text-[44px] font-serif text-purple-500 leading-[0] translate-y-[2px] sm:translate-y-[6px] drop-shadow-sm">*</span>
          </div>
          
        </FadeIn>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {WHAT_WE_DO_CARDS.map((card, i) => (
            <FadeIn
              key={i}
              delay={0.2 + (i * 0.15)}
              direction="up"
              className={`flex flex-col ${card.isAccent ? 'bg-purple-700 shadow-2xl scale-100 lg:scale-[1.02]' : 'bg-[#1e1e1e] border border-white/5'} p-6 sm:p-8 xl:p-10 transition-all duration-300 group rounded-2xl`}
            >
              {card.imagePosition === 'top' && (
                <div className="w-full h-[250px] sm:h-[300px] lg:h-[250px] xl:h-[300px] mb-8 overflow-hidden relative rounded-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={card.image}
                    alt="Work"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex justify-between items-start gap-4 mb-6">
                <h3 className="text-3xl xl:text-5xl font-bebas text-white uppercase tracking-[2px] leading-[0.9] whitespace-pre-line font-black">
                  {card.title}
                </h3>
                <button className="w-12 h-12 xl:w-14 xl:h-14 shrink-0 rounded-full bg-[#caff00] text-black flex items-center justify-center transition-transform duration-300 shadow-lg">
                  <FluidArrowRight className="w-6 h-6 xl:w-7 xl:h-7 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              </div>

              <p className={`text-sm xl:text-base leading-relaxed font-medium mb-8 flex-1 ${card.isAccent ? 'text-white/90' : 'text-gray-400'}`}>
                {card.description}
              </p>

              {card.imagePosition === 'bottom' && (
                <div className="w-full h-[250px] sm:h-[300px] lg:h-[250px] xl:h-[300px] mt-auto overflow-hidden relative rounded-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={card.image}
                    alt="Work"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              )}
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
