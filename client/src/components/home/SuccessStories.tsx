import React from 'react';
import { FadeIn } from "../animations/FadeIn";
import { LuLinkedin, LuGithub, LuCode, LuBriefcase, LuBuilding2, LuTrendingUp } from 'react-icons/lu';

const stories = [
  {
    id: '01',
    name: "Daniel Jackson",
    handle: "@DanielJackson",
    color: "#8C52FF",
    colorClass: "bg-[#8C52FF]",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    productivity: "67",
    success: "85",
    grid: [
      { label: "Before", value: "Self-Taught", icon: LuCode },
      { label: "After", value: "Frontend Dev.", icon: LuBriefcase },
      { label: "Company", value: "Stripe", icon: LuBuilding2 },
      { label: "Growth", value: "+140%", icon: LuTrendingUp }
    ]
  },
  {
    id: '02',
    name: "Sarah Chen",
    handle: "@SarahCodes",
    color: "#8C52FF",
    colorClass: "bg-[#8C52FF]",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    productivity: "92",
    success: "100",
    grid: [
      { label: "Before", value: "Bootcamp", icon: LuCode },
      { label: "After", value: "ML Researcher", icon: LuBriefcase },
      { label: "Company", value: "OpenAI", icon: LuBuilding2 },
      { label: "Growth", value: "+200%", icon: LuTrendingUp }
    ]
  },
  {
    id: '03',
    name: "David Kim",
    handle: "@DavidK",
    color: "#8C52FF",
    colorClass: "bg-[#8C52FF]",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    productivity: "88",
    success: "95",
    grid: [
      { label: "Before", value: "Junior Dev", icon: LuCode },
      { label: "After", value: "Tech Lead", icon: LuBriefcase },
      { label: "Company", value: "Vercel", icon: LuBuilding2 },
      { label: "Growth", value: "+110%", icon: LuTrendingUp }
    ]
  }
];

export default function SuccessStories() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#F5F0FF] via-white to-[#EDE0FF] overflow-hidden font-sans">

      {/* Decorative background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8C52FF] rounded-full blur-[150px] opacity-[0.12] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9D6CFF] rounded-full blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <FadeIn delay={0.1} direction="up" className="flex flex-col items-start mb-16 md:mb-24 text-left">
          <p className="text-[#8C52FF] font-bebas text-xl md:text-2xl tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#8C52FF]"></span>
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas text-[#0B1F3A] tracking-wide mb-6">
            From Learning to Career Growth
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl font-flexa leading-relaxed">
            Discover how our alumni transformed their <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">Careers</span>. From absolute beginners to landing roles at <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">World-Class Tech Companies</span>, read the <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">Inspiring Journeys</span> of those who took the leap with TechLearns.
          </p>
        </FadeIn>

        {/* 3-Column Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {stories.map((story, i) => (
            <FadeIn key={story.id} delay={0.2 + i * 0.15} direction="up" className="w-full max-w-[400px]">

              <div className="w-full bg-white rounded-[2rem] overflow-hidden relative border border-gray-100 flex flex-col group shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(140,82,255,0.15)] transition-shadow duration-500">

                {/* Image Section */}
                <div className={`relative h-[320px] ${story.colorClass} overflow-hidden`}>
                  <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10"></div>
                </div>

                {/* Floating Data Panel (overlaps top section) */}
                <div className="relative z-20 -mt-8 mx-6 bg-white rounded-full py-3 px-5 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex justify-between items-center">
                  <h3 className="text-[#0B1F3A] font-bold font-flexa text-xl">{story.name}</h3>
                  <div className="flex gap-2">
                    <a href="#" aria-label="LinkedIn Profile" className="w-8 h-8 rounded-full bg-[#F3F6FB] flex items-center justify-center hover:bg-[#E1EAF6] transition-colors border border-[#E1EAF6] text-[#0A66C2]">
                      <LuLinkedin size={14} className="fill-current" />
                    </a>
                    <a href="#" aria-label="GitHub Profile" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100 text-gray-700">
                      <LuGithub size={14} className="fill-current" />
                    </a>
                  </div>
                </div>

                {/* Bottom 2x2 Grid */}
                <div className="pt-8 pb-8 px-8 grid grid-cols-2 gap-y-8 gap-x-4">
                  {story.grid.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <item.icon className="text-gray-300 shrink-0 mt-0.5" size={16} />
                      <div className="flex flex-col">
                        <span className="text-gray-400 font-semibold text-[11px] uppercase tracking-wide mb-1">{item.label}</span>
                        <span className="text-[#0B1F3A] text-[13px] font-bold leading-tight">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom 3 dots */}
                <div className="flex justify-center pb-6">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

              </div>

            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
