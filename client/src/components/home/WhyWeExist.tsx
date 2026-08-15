import { FadeIn } from '@/components/animations/FadeIn';
import { MonitorPlay, Code2, Users, GraduationCap } from 'lucide-react';

export default function WhyWeExist() {
  return (
    <section className="py-24 sm:py-32 relative bg-white overflow-hidden">
      {/* Premium Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8C52FF0A_1px,transparent_1px),linear-gradient(to_bottom,#8C52FF0A_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8C52FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#F3E5F5]/40 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8EAF6]/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <FadeIn delay={0.1} direction="up" className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 flex flex-col items-center">
          <p className="text-[#5B2D91] font-bebas text-lg sm:text-xl tracking-[0.15em] uppercase font-bold mb-4 flex items-center justify-center flex-col gap-2">
            EXPERIENCE TECHLEARNS
            <span className="w-12 h-[3px] bg-[#8C52FF] rounded-full"></span>
          </p>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-flexa font-bold text-[#0B1F3A] tracking-tight leading-[1.1] mb-8">
            Where Learning Meets the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B2D91] via-[#8C52FF] to-[#CB6CE6] relative inline-block pb-2">
              Right Environment
              <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-[#5B2D91]/10 via-[#8C52FF]/10 to-[#CB6CE6]/10 -z-10 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-[22px] text-[#4A4A4A] font-medium max-w-3xl font-flexa leading-[1.7]">
            Modern classrooms. Practical labs. Collaborative spaces.<br className="hidden sm:block" />
            Everything designed to make learning more <span className="text-[#5B2D91] font-bebas text-[22px] sm:text-[26px] tracking-wide uppercase bg-[#5B2D91]/5 px-2 py-0.5 rounded-md inline-block translate-y-[2px]">focused</span>, <span className="text-[#5B2D91] font-bebas text-[22px] sm:text-[26px] tracking-wide uppercase bg-[#5B2D91]/5 px-2 py-0.5 rounded-md inline-block translate-y-[2px]">interactive</span> and <span className="text-[#5B2D91] font-bebas text-[22px] sm:text-[26px] tracking-wide uppercase bg-[#5B2D91]/5 px-2 py-0.5 rounded-md inline-block translate-y-[2px]">career-oriented</span>.
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 sm:gap-6 max-w-[1250px] mx-auto">
          
          {/* Card 1: Modern Classrooms */}
          <FadeIn delay={0.2} direction="up" className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 relative rounded-[2rem] overflow-hidden group h-[300px] md:h-[600px] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
            <img src="/images/modern_classrooms.png" alt="Modern Classrooms" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-flex items-center gap-2.5 bg-[#5B2D91] px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:bg-[#8C52FF] transition-colors duration-300 cursor-default">
                <MonitorPlay className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-white font-flexa font-bold text-[15px]">Modern Classrooms</span>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Hands-on Coding Labs */}
          <FadeIn delay={0.3} direction="up" className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 relative rounded-[2rem] overflow-hidden group h-[288px] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
            <img src="/images/coding_labs.png" alt="Hands-on Coding Labs" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-flex items-center gap-2.5 bg-[#5B2D91] px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:bg-[#8C52FF] transition-colors duration-300 cursor-default">
                <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-white font-flexa font-bold text-[15px]">Hands-on Coding Labs</span>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Interactive Learning */}
          <FadeIn delay={0.4} direction="up" className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 relative rounded-[2rem] overflow-hidden group h-[288px] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
            <img src="/images/interactive_learning.png" alt="Interactive Learning" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-flex items-center gap-2.5 bg-[#5B2D91] px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:bg-[#8C52FF] transition-colors duration-300 cursor-default">
                <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-white font-flexa font-bold text-[15px]">Interactive Learning</span>
              </div>
            </div>
          </FadeIn>

          {/* Card 4: Offline Learning Experience */}
          <FadeIn delay={0.5} direction="up" className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 relative rounded-[2rem] overflow-hidden group h-[300px] md:h-[600px] shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10"></div>
            <img src="/images/offline_experience.png" alt="Offline Learning Experience" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-flex items-center gap-2.5 bg-[#5B2D91] px-5 py-3 rounded-2xl shadow-lg border border-white/20 hover:bg-[#8C52FF] transition-colors duration-300 cursor-default">
                <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-white font-flexa font-bold text-[15px]">Offline Learning Experience</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
