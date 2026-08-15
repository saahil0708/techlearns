import { Link } from 'react-router-dom';
import { FadeIn } from '../animations/FadeIn';
import { Clock, Brain, Cpu, Globe, ScatterChart } from 'lucide-react';
import { FluidArrowRight } from '@/utils/fluid_arrow';

const tracks = [
  {
    title: "AI Foundations & Productivity",
    slug: "data-science-ai",
    duration: "4–6 weeks",
    tags: ["AI Literacy", "Prompting", "Workflow Design", "Responsible Use"],
    icon: Brain,
    colSpan: "col-span-1",
    accentColor: "from-[#5B2D91] via-[#CB6CE6] to-[#5B2D91]",
    tagColor: "text-[#5B2D91] bg-[#5B2D91]/10 border-[#5B2D91]/30"
  },
  {
    title: "GenAI & Agentic AI",
    slug: "data-science-ai",
    duration: "5–6 months",
    tags: ["Python", "APIs", "RAG", "Agents", "LLMOps"],
    icon: Cpu,
    colSpan: "col-span-1",
    accentColor: "from-[#7237BC] via-[#8C52FF] to-[#7237BC]",
    tagColor: "text-[#7237BC] bg-[#7237BC]/10 border-[#7237BC]/30"
  },
  {
    title: "Full-Stack Software Engineering with AI",
    slug: "full-stack-web-development",
    duration: "6–9 months",
    tags: ["DSA", "Frontend", "Backend", "Cloud"],
    icon: Globe,
    colSpan: "col-span-1",
    accentColor: "from-[#604B7E] via-[#B174E7] to-[#604B7E]",
    tagColor: "text-[#604B7E] bg-[#604B7E]/10 border-[#604B7E]/30"
  },
  {
    title: "Data Analytics + BI + GenAI",
    slug: "data-science-ai",
    duration: "4–6 months",
    tags: ["SQL", "Python", "Power BI", "Statistics"],
    icon: ScatterChart,
    colSpan: "col-span-1",
    accentColor: "from-[#8C52FF] via-[#CEA8F0] to-[#8C52FF]",
    tagColor: "text-[#8C52FF] bg-[#8C52FF]/10 border-[#8C52FF]/30"
  }
];

export default function CareerTracks() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F3E5F5]">

      {/* Abstract Purple Blurred Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Light deep base */}
        <div className="absolute inset-0 bg-[#F3E5F5]"></div>

        {/* Massive soft purple/magenta orbs - opacity reduced for light theme */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#5B2D91] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[80%] bg-[#7237BC] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.08] animate-[pulse_12s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute top-[40%] left-[30%] w-[50%] h-[50%] bg-[#3D1466] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

        {/* Noise overlay for premium texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'multiply' }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Left-Aligned Header */}
        <FadeIn delay={0.1} direction="up" className="mb-20 text-left">
          <h2 className="text-6xl md:text-7xl font-bebas tracking-wide text-[#5B2D91] mb-2 drop-shadow-sm">
            WHERE TO START
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold font-flexa text-[#0B1F3A] mb-6 leading-tight max-w-4xl">
            Career tracks built for actual demand.
          </h3>
          <p className="text-lg md:text-xl text-[#604B7E] max-w-3xl leading-relaxed font-medium font-flexa">
            AI plus execution. Every program pairs current curriculum with corporate practice, real projects, industry exposure and competition.
          </p>
        </FadeIn>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full max-w-6xl mx-auto">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isAlt = index % 2 === 1;

            const cardBg = isAlt ? "bg-[#5B2D91]" : "bg-white/90 backdrop-blur-md";
            const titleColor = isAlt ? "text-white group-hover:from-white group-hover:to-[#E3D9F0]" : "text-[#0B1F3A] group-hover:from-[#0B1F3A] group-hover:to-[#604B7E]";
            const durationColor = isAlt ? "text-[#caff00] group-hover:text-[#e0ff33]" : "text-[#8C52FF] group-hover:text-[#5B2D91]";

            const bgIconColor = isAlt ? "text-white opacity-[0.03] group-hover:opacity-[0.08]" : "text-[#5B2D91] opacity-5 group-hover:opacity-10 drop-shadow-[0_0_30px_rgba(91,45,145,0.2)]";

            return (
              <FadeIn key={index} delay={0.1 * index} direction="up" className={`h-full ${track.colSpan}`}>

                {/* Outer Wrapper for Spinning Border */}
                <div
                  className="group relative p-[2px] h-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer shadow-2xl overflow-hidden rounded-3xl"
                >

                  {/* Spinning Gradient Border */}
                  <div className={`absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${track.accentColor} animate-[spin_6s_linear_infinite] opacity-40 group-hover:opacity-100 transition-opacity duration-700 z-0`}></div>

                  {/* Inner Tech Card */}
                  <div
                    className={`relative h-full w-full ${cardBg} min-h-[480px] p-8 md:p-10 flex flex-col z-10 overflow-hidden rounded-[22px]`}
                  >

                    {/* Immersive 3D Background Icon */}
                    <div className={`absolute -bottom-12 -right-12 ${bgIconColor} transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0`}>
                      <Icon size={250} />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col h-full">

                      {/* Duration */}
                      <div className={`flex items-center gap-2 ${durationColor} font-bebas tracking-[0.2em] text-sm mb-6 opacity-90 transition-colors duration-300`}>
                        <Clock size={16} />
                        <span>[ {track.duration} ]</span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-3xl md:text-[34px] font-bebas tracking-wide ${titleColor} mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500 leading-[1.1]`}>
                        {track.title}
                      </h3>

                      {/* Glowing LED Tags */}
                      <div className="flex flex-wrap gap-2.5 mb-8">
                        {track.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1.5 rounded-sm text-[11px] font-flexa uppercase tracking-wider font-bold border transition-all duration-300 shadow-sm backdrop-blur-sm ${isAlt ? 'text-white bg-white/10 border-white/20' : track.tagColor}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Features List */}
                      <div className="flex flex-col gap-3 mb-8 flex-grow">
                        {[
                          "Get a professional certificate on completion of course",
                          "Unlimited mock interviews for your interview practice",
                          "Access to 10,000+ coding questions in our Arena",
                          "100% Placement Assistance (Lifetime)",
                          "No coding experience required"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`mt-1 shrink-0 p-[3px] rounded-full flex items-center justify-center ${isAlt ? 'bg-white/10 border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'bg-gradient-to-br from-[#8C52FF] to-[#5B2D91] shadow-[0_0_10px_rgba(140,82,255,0.2)]'}`}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className={`text-sm md:text-[15px] font-flexa font-medium leading-relaxed ${isAlt ? "text-gray-300" : "text-gray-700"}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className={`mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t ${isAlt ? 'border-white/10' : 'border-gray-200'}`}>
                        <Link to={`/program/${track.slug}`} className={`group/btn w-full sm:w-1/2 flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-flexa font-bold text-[16px] tracking-wide transition-all duration-500 overflow-hidden relative ${isAlt ? 'bg-gradient-to-r from-[#caff00] to-[#b3e600] text-[#14062E] hover:shadow-[0_0_30px_rgba(202,255,0,0.5)] hover:-translate-y-1' : 'bg-gradient-to-r from-[#7237BC] via-[#8C52FF] to-[#5B2D91] bg-[length:200%_auto] hover:bg-[100%_center] text-white border border-[#a855f7]/50 shadow-[0_4px_25px_-5px_rgba(140,82,255,0.5)] hover:shadow-[0_8px_30px_-5px_rgba(140,82,255,0.6)] hover:-translate-y-1'}`}>
                          {/* Inner glow/sheen effect */}
                          <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-15deg] group-hover/btn:animate-[shine_1.5s_ease-in-out]"></div>
                          <span className="relative z-10 flex items-center gap-2">
                            Explore Course
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </span>
                        </Link>
                        <button className={`w-full sm:w-1/2 flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-flexa font-bold text-[16px] tracking-wide transition-all duration-500 backdrop-blur-sm ${isAlt ? "border-2 border-white/20 text-white bg-white/5 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" : "border-2 border-[#5B2D91]/20 text-[#5B2D91] bg-[#5B2D91]/5 hover:bg-[#5B2D91]/10 hover:border-[#5B2D91]/40 hover:-translate-y-1 hover:shadow-[0_4px_15px_-5px_rgba(91,45,145,0.2)]"}`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-y-0.5 transition-transform duration-300">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download Brochure
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </FadeIn>
            );
          })}
        </div>

        {/* View All Programs Button */}
        <FadeIn delay={0.4} direction="up" className="mt-16 flex justify-center">
          <Link to="/programs" className="group relative px-8 py-4 bg-[#5B2D91] text-white font-bebas text-xl tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)] border border-[#a855f7]/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7237BC] to-[#5B2D91] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              VIEW ALL PROGRAMS
              <FluidArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
