import { FadeIn } from '../animations/FadeIn';

export default function Founder() {
  return (
    <section className="relative py-32 bg-[#FAFAFC] text-[#0B1F3A] overflow-hidden selection:bg-[#8C52FF] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0 flex flex-col justify-center">

        {/* Giant Watermark Typography */}
        <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none flex justify-center">
          <div className="font-bebas text-[20vw] md:text-[18vw] leading-[0.8] text-[#0B1F3A] tracking-wider uppercase">
            VISIONARY LEADER
          </div>
        </div>

        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#8C52FF] opacity-[0.08] blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#caff00] opacity-[0.1] blur-[100px]"></div>

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B1F3A08_1px,transparent_1px),linear-gradient(to_bottom,#0B1F3A08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <FadeIn delay={0.2} direction="right" className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 md:-inset-6 border border-[#0B1F3A]/5 rounded-2xl md:rounded-3xl z-0 transition-colors duration-500 group-hover:border-[#0B1F3A]/15">
                <div className="absolute top-0 left-0 w-8 h-px bg-[#caff00]"></div>
                <div className="absolute top-0 left-0 w-px h-8 bg-[#caff00]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-px bg-[#8C52FF]"></div>
                <div className="absolute bottom-0 right-0 w-px h-8 bg-[#8C52FF]"></div>
              </div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden z-10 group aspect-[4/5] bg-white shadow-[0_20px_50px_rgba(11,31,58,0.1)]">
                <div className="absolute inset-0 bg-[#8C52FF]/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img
                  src="/images/Founder.png"
                  alt="Prof. Ankur Gill - Founder"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />

                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 z-20 overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-[#caff00] to-[#8C52FF] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                  <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full">
                    <p className="font-bebas text-sm tracking-[0.2em] text-[#0B1F3A] pt-1">Est. 2024</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn delay={0.3} direction="left">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[2px] bg-[#8C52FF]"></div>
                <span className="font-bebas text-lg tracking-[0.3em] text-[#8C52FF] pt-1">The Visionary</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
              <div className="relative mb-12">
                <span className="absolute -top-12 -left-8 md:-left-12 text-[100px] md:text-[140px] font-serif text-[#caff00] leading-none opacity-70 pointer-events-none select-none drop-shadow-sm">
                  "
                </span>
                <h2 className="font-flexa text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[#0B1F3A]">
                  Education shouldn't just teach. It should{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8C52FF] to-[#0B1F3A]">
                    transform
                    <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,15 Q50,25 100,5" stroke="#caff00" strokeWidth="6" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>{" "}
                  you into an engineer companies fight to hire.
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="left">
              <div className="space-y-6 font-flexa text-lg md:text-xl text-[#604B7E] leading-relaxed max-w-2xl font-medium">
                <p>
                  When I started TechLearns, I saw a <span className="font-bebas text-2xl md:text-3xl text-[#8C52FF] tracking-wide relative top-[2px]">MASSIVE GAP</span> between traditional education and what top-tier tech companies actually demand. We were surrounded by bootcamps that taught syntax, but ignored <span className="font-bebas text-2xl md:text-3xl text-[#8C52FF] tracking-wide relative top-[2px]">ENGINEERING CULTURE</span> and <span className="font-bebas text-2xl md:text-3xl text-[#8C52FF] tracking-wide relative top-[2px]">COMPLEX PROBLEM-SOLVING</span>.
                </p>
                <p>
                  I built this platform to be the crucible I wish I had. We don't just hand you a certificate; we push you to your <span className="font-bebas text-2xl md:text-3xl text-[#8C52FF] tracking-wide relative top-[2px]">ABSOLUTE LIMITS</span>.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="left" className="mt-14 pt-10 border-t border-[#0B1F3A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div>
                <p className="font-bebas text-3xl md:text-4xl tracking-wide text-[#0B1F3A] mb-1">Prof. Ankur Gill</p>
                <p className="font-flexa text-xs md:text-sm font-bold tracking-[0.2em] text-[#8C52FF] uppercase">Founder & CEO</p>
              </div>

              <div className="font-serif italic text-4xl md:text-5xl text-[#0B1F3A]/20 -rotate-3 pr-4 select-none">
                A. Gill
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
