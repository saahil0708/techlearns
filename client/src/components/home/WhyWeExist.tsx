import { FadeIn } from '@/components/animations/FadeIn';
import { X, Check } from 'lucide-react';

const comparisons = [
  { old: "Watching content", new: "Building and explaining" },
  { old: "Attendance tracked", new: "Growth tracked" },
  { old: "One final project", new: "Continuous evidence" },
  { old: "A guest lecture", new: "Structured industry experience" },
  { old: "Practising alone", new: "Team execution and feedback" },
  { old: "Certificate collection", new: "Credential + proof stack" },
  { old: "Interview prep at the end", new: "Career readiness from Week 1" },
  { old: '"I completed a course"', new: '"Here\'s what I can do & the evidence"' },
];

export default function WhyWeExist() {
  return (
    <section 
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #F3E5F5 100%)'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header - Strictly matching theme colors */}
        <FadeIn delay={0.1} direction="up" className="mb-20 sm:mb-28 w-full flex flex-col items-start justify-start">
          <div className="text-left max-w-4xl relative">
            
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-gradient-to-r from-[#8C52FF] to-transparent rounded-full"></span>
              <p className="text-[#8C52FF] font-bebas text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold drop-shadow-sm">
                Why We Exist
              </p>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-[68px] lg:text-[76px] leading-[1.05] font-flexa font-medium text-[#0B1F3A] tracking-tight">
              A certificate has <span className="font-bebas text-[#7237BC] tracking-[0.05em] uppercase font-black">never proven</span> performance.
            </h2>
            
            <p className="mt-10 text-xl sm:text-[22px] text-[#604B7E] font-medium max-w-3xl font-flexa leading-[1.7]">
              Content without context and certificates without proof don't survive the real world. We measure what you can actually do.
            </p>
          </div>
        </FadeIn>

        {/* Comparison Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-stretch max-w-[1150px] mx-auto relative">
          
          {/* Traditional Platforms Card */}
          <FadeIn delay={0.2} direction="up" className="w-full lg:w-1/2 bg-white rounded-[2.5rem] p-10 sm:p-12 xl:p-16 relative flex flex-col justify-start shadow-[0_20px_80px_-15px_rgba(0,0,0,0.05)] border border-[#F3E5F5] group transition-all duration-300 hover:bg-gray-50">
            
            <h3 className="text-2xl sm:text-[28px] font-bebas text-[#B4B4B4] tracking-[0.1em] mb-12 text-left">
              MOST LEARNING PLATFORMS
            </h3>
            
            <ul className="space-y-6">
              {comparisons.map((item, i) => (
                <li key={i} className="flex items-center gap-5 p-2 -mx-2 rounded-2xl hover:bg-black/5 transition-colors duration-300">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 border border-red-200">
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#604B7E] font-flexa font-medium text-[19px] line-through decoration-red-500/30 decoration-2">{item.old}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* VS Badge */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full items-center justify-center z-20 shadow-xl border border-[#F3E5F5] transition-transform duration-500 hover:scale-105">
            <span className="font-bebas text-2xl text-[#8C52FF] tracking-wider italic font-black drop-shadow-sm">VS</span>
          </div>

          {/* TechLearns Card */}
          <FadeIn delay={0.3} direction="up" className="w-full lg:w-1/2 bg-[#5B2D91] rounded-[2.5rem] p-10 sm:p-12 xl:p-16 relative flex flex-col justify-start shadow-[0_20px_80px_-15px_rgba(91,45,145,0.3)] z-10 border border-[#7237BC] overflow-hidden group lg:scale-[1.02] transition-all duration-500">
            
            {/* Rich Inner Gradients & Reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-80" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#8C52FF]/30 rounded-full blur-[100px] group-hover:bg-[#8C52FF]/40 transition-colors duration-700" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#CB6CE6]/20 rounded-full blur-[100px]" />
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#8C52FF]/70 to-transparent" />
            
            <div className="flex items-center justify-start gap-4 mb-12 relative z-10">
              <h3 className="text-4xl sm:text-[54px] font-black text-white tracking-tight font-flexa uppercase drop-shadow-md">
                TECHLEARNS
              </h3>
              <span className="text-[#CB6CE6] text-5xl sm:text-6xl font-black leading-[0] translate-y-1 drop-shadow-[0_0_20px_rgba(203,108,230,0.4)]">*</span>
            </div>

            <ul className="space-y-6 relative z-10">
              {comparisons.map((item, i) => (
                <li key={i} className="flex items-center gap-5 p-2 -mx-2 rounded-2xl hover:bg-white/10 transition-colors duration-300 cursor-default">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/30 group-hover:border-[#CB6CE6]/50 group-hover:bg-[#CB6CE6]/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                    <Check className="w-3.5 h-3.5 text-[#CB6CE6]" strokeWidth={3.5} />
                  </div>
                  <span className="text-white/90 font-flexa font-medium text-[19px] group-hover:text-white transition-colors duration-300 drop-shadow-sm">{item.new}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
