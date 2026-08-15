import { FadeIn } from "../animations/FadeIn";
import { GraduationCap, Users, Briefcase, TrendingUp, CheckCircle2, Download, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen pb-24 flex items-center justify-center bg-gradient-to-br from-[#F9F9FB] via-[#F3E5F5]/40 to-[#F9F9FB] overflow-hidden font-flexa">
      
      {/* Premium Polka Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(#8C52FF 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>

      {/* Subtle background ambient blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#8C52FF]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#5B2D91]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column (Span 6) */}
        <div className="lg:col-span-6 flex flex-col items-start w-full relative z-20">
          <FadeIn direction="up" delay={0.1} className="w-full">
            
            {/* Outline Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B2D91]/30 bg-white/80 backdrop-blur-sm shadow-sm mb-8">
              <GraduationCap className="text-[#5B2D91] w-5 h-5" />
              <span className="text-[#5B2D91] font-bebas text-lg tracking-widest uppercase mt-0.5">Corporate Learning Experience</span>
            </div>

            {/* Headline */}
            <h1 className="text-[52px] sm:text-[64px] lg:text-[64px] font-medium font-flexa leading-[1.05] mb-6 text-[#0B1F3A]">
              Corporate Learning <span className="text-[#5B2D91] font-bebas tracking-[0.1em] font-semibold">Experience</span> that Drives Results
            </h1>
            <div className="w-24 h-1.5 bg-[#5B2D91] mb-8 rounded-full" />

            {/* Sub-paragraph */}
            <p className="text-gray-600 text-lg sm:text-[20px] leading-relaxed mb-12 max-w-[90%] font-medium">
              Empowering teams with industry-relevant skills, expert mentorship and real-world learning.
            </p>

            {/* 3 Horizontal Features */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start max-w-[180px]">
                <div className="w-14 h-14 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4 border border-[#5B2D91]/20 shadow-[0_0_15px_rgba(91,45,145,0.1)]">
                  <Users className="text-[#5B2D91] w-7 h-7" />
                </div>
                <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">Expert-Led Training</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">Learn from industry professionals</p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-start max-w-[180px]">
                <div className="w-14 h-14 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4 border border-[#5B2D91]/20 shadow-[0_0_15px_rgba(91,45,145,0.1)]">
                  <Briefcase className="text-[#5B2D91] w-7 h-7" />
                </div>
                <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">Job-Ready Skills</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">Build practical skills that employers value</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start max-w-[180px]">
                <div className="w-14 h-14 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4 border border-[#5B2D91]/20 shadow-[0_0_15px_rgba(91,45,145,0.1)]">
                  <TrendingUp className="text-[#5B2D91] w-7 h-7" />
                </div>
                <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">Measurable Impact</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">Boost productivity and business growth</p>
              </div>
            </div>
            
          </FadeIn>
        </div>

        {/* Right Column (Span 6) - White Card with Student Image */}
        <div className="lg:col-span-6 relative w-full h-[650px] lg:h-[700px] flex items-end justify-center pt-10 mt-10 lg:mt-0">
          
          <FadeIn direction="left" delay={0.3} className="w-full h-full relative flex items-end">
            
            {/* The White Background Card */}
            <div className="absolute inset-x-0 bottom-0 top-12 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(91,45,145,0.08)] border border-white overflow-hidden z-10">
              
              {/* Decorative Purple Quarter Circle Top Right */}
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-bl from-[#8C52FF]/15 to-transparent rounded-bl-full pointer-events-none" />
              
              {/* Glowing Soft Purple Circle Bottom Left */}
              <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#5B2D91]/5 rounded-full blur-[60px] pointer-events-none" />

              {/* Decorative Dot Matrix Top Right */}
              <div className="absolute top-8 right-8 w-32 h-32 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5B2D91 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
              
              {/* Faint Watermark Logo */}
              <Code2 className="absolute -bottom-12 -right-4 w-72 h-72 text-[#5B2D91]/[0.03] -rotate-12 pointer-events-none" />

              <div className="p-8 lg:p-12 relative z-10 w-full h-full flex flex-col justify-center">
                
                {/* Refined Heading */}
                <div className="mb-6 relative z-30">
                  <h3 className="text-[#0B1F3A] text-xl font-bold font-flexa tracking-tight">
                    Start Your Journey With
                  </h3>
                  <h2 className="text-[40px] lg:text-[46px] font-bebas tracking-wide bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] bg-clip-text text-transparent leading-[1.1] mt-1 drop-shadow-sm">
                    TECHLEARNS ACADEMY
                  </h2>
                </div>
                
                {/* Sleek Subtitle Badge */}
                <div className="inline-flex items-center gap-2 py-2.5 mb-8 relative z-30">
                  <Code2 className="w-4 h-4 text-[#5B2D91]" />
                  <span className="text-[#0B1F3A] font-bold text-[13px] tracking-wide">
                    Full Stack Web Development with <span className="text-[#5B2D91] font-extrabold py-0.5 text-xs">AI</span>
                  </span>
                </div>

                {/* Enhanced List */}
                <ul className="flex flex-col gap-4 mb-10 relative z-30">
                  {[
                    "4 Months Intensive Program",
                    "Live Instructor-Led Training",
                    "Real-world Hands-on Projects",
                    "AI Tools & Modern Technologies",
                    "100% Placement Assistance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group cursor-default">
                      <div className="w-6 h-6 rounded-full border-2 border-[#5B2D91]/20 flex items-center justify-center shrink-0 bg-white shadow-sm group-hover:border-[#5B2D91] group-hover:bg-[#5B2D91] transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B2D91] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-[15px] font-semibold tracking-wide group-hover:text-[#0B1F3A] group-hover:translate-x-1 transition-all duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className="relative z-30 flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] text-white font-bebas text-lg rounded-xl hover:shadow-[0_15px_30px_rgba(91,45,145,0.3)] hover:-translate-y-1 transition-all duration-300 tracking-widest self-start overflow-hidden group">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10">DOWNLOAD DOSSIER</span> 
                  <Download className="w-4 h-4 mb-0.5 relative z-10 group-hover:animate-bounce" />
                </button>
              </div>
            </div>

            {/* Student Image */}
            <img 
              src="/images/Hero-Picsart-AiImageEnhancer.png" 
              alt="Student holding laptop" 
              className="absolute bottom-0 -right-16 lg:-right-44 w-[85%] lg:w-[105%] max-w-none h-auto object-contain pointer-events-none mix-blend-darken z-20"
            />
            
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
