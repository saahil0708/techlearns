import React from 'react';
import { FadeIn } from '../animations/FadeIn';

export default function Founder() {
  return (
    <section className="relative py-24 md:py-40 bg-[#F3E5F5] flex flex-col items-center justify-center z-20 w-full overflow-hidden">

      {/* Giant Typography Background */}
      <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0">
        <h1 className="font-bebas text-[25vw] leading-[0.8] text-[#5B2D91]">
          VISIONARY LEADERSHIP
        </h1>
      </div>

      {/* Abstract Right Shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[80vw] md:w-[600px] h-[600px] md:h-[800px] bg-[#E1C4FF] rounded-tl-full rounded-bl-full z-0 opacity-60 mix-blend-multiply"></div>



      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

        {/* Decorative Vertical Text */}
        <div className="hidden xl:flex items-center absolute -left-12 top-0 bottom-0 z-0">
          <span className="transform -rotate-90 font-bebas text-2xl text-[#8C52FF] tracking-[0.5em] whitespace-nowrap opacity-60">
            MEET THE FOUNDER — EST. 2024
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center relative z-10 mt-10">

          {/* Text / Quote Card (Overlaps Image) */}
          <div className="w-full lg:w-6/12 z-20 lg:-mr-16 xl:-mr-24 mb-16 lg:mb-0">
            <FadeIn delay={0.2} direction="right">
              <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-14 rounded-3xl shadow-[0_30px_60px_rgba(91,45,145,0.12)] border border-white relative">

                {/* Giant Quote Mark */}
                <div className="absolute -top-12 -left-4 md:-left-8 text-[120px] font-serif text-[#caff00] leading-none drop-shadow-sm pointer-events-none">
                  "
                </div>

                <h4 className="text-[#8C52FF] font-bebas tracking-widest text-xl uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-[#8C52FF]"></span>
                  The Vision
                </h4>

                <p className="font-flexa text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B1F3A] leading-[1.2] mb-8">
                  Education shouldn't just teach. It should{" "}
                  <span className="relative inline-block text-[#8C52FF] whitespace-nowrap">
                    transform
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,15 Q50,25 100,5" stroke="#caff00" strokeWidth="6" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>{" "}
                  you into an engineer companies fight to hire.
                </p>

                <p className="font-flexa text-base md:text-lg text-[#604B7E] leading-relaxed mb-6 font-medium">
                  When I started TechLearns, I saw a massive gap between traditional education and what top-tier tech companies actually demand. We were surrounded by bootcamps that taught syntax, but ignored engineering culture and complex problem-solving.
                </p>
                <p className="font-flexa text-base md:text-lg text-[#604B7E] leading-relaxed mb-10 font-medium">
                  I built this platform to be the crucible I wish I had. We don't just hand you a certificate; we push you to your absolute limits.
                </p>

                {/* Founder Info & Signature */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="font-bebas text-3xl text-[#0B1F3A] tracking-wide">Alex Mercer</span>
                    <span className="font-flexa text-[#8C52FF] font-bold uppercase tracking-widest text-xs mt-1">Founder & CEO</span>
                  </div>

                  <div className="h-12 w-px bg-[#0B1F3A]/10 mx-2"></div>

                  {/* Stylized Signature */}
                  <div className="font-serif italic text-3xl md:text-4xl text-[#0B1F3A]/30 -rotate-3 ml-2">
                    A. Mercer
                  </div>
                </div>

                {/* Spinning Neon Badge */}
                <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-32 h-32 md:w-40 md:h-40 bg-[#caff00] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(202,255,0,0.4)] z-30">
                  <div className="animate-[spin_12s_linear_infinite] w-full h-full relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 scale-[0.85]">
                      <path id="textCircle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                      <text className="font-bebas text-[11.5px] tracking-[0.22em] fill-[#0B1F3A]">
                        <textPath href="#textCircle" startOffset="0%">
                          TECHLEARNS VISIONARY LEADER • TECHLEARNS VISIONARY LEADER •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="absolute w-4 h-4 bg-[#0B1F3A] rounded-full shadow-inner"></div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Image Block */}
          <div className="w-full lg:w-6/12 relative z-10 flex justify-end">
            <FadeIn delay={0.4} direction="left" className="relative w-full max-w-[550px] mx-auto lg:mr-0 flex flex-col justify-end">

              {/* Pattern block behind image */}
              <div className="absolute top-1/4 -right-10 w-40 h-40 opacity-30 z-0"
                style={{ backgroundImage: 'radial-gradient(#5B2D91 3px, transparent 3px)', backgroundSize: '20px 20px' }}>
              </div>

              {/* Main Portrait Cutout */}
              <div className="relative w-full h-[500px] md:h-[700px] z-10 flex items-end justify-center">
                <img
                  // Actual transparent PNG
                  src="https://www.pngarts.com/files/3/Business-Man-PNG-Image.png"
                  alt="Founder Portrait Cutout"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(91,45,145,0.3)]"
                />
              </div>

              {/* Secondary Floating Image (Polaroid style) */}
              <div className="absolute bottom-10 -left-6 md:bottom-20 md:-left-20 w-40 md:w-56 aspect-square border-[10px] border-white rounded-sm shadow-[0_20px_40px_rgba(91,45,145,0.2)] -rotate-6 z-20 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                  alt="Team working"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
