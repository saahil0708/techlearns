
export default function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#fafafa]">
      {/* Hazy charcoal behavior: dark smokey coal gradients for a coal touch on light theme */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#2a2a2a] rounded-full blur-[140px] mix-blend-multiply pointer-events-none opacity-[0.07]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#1a1a1a] rounded-full blur-[120px] mix-blend-multiply pointer-events-none opacity-[0.09]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4a4a4a] rounded-full blur-[150px] mix-blend-multiply pointer-events-none opacity-[0.05]" />

      {/* Noise overlay specific to CTA for added gritty coal texture */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SVG Filter Definition for perfect, uniform corner rounding (gooey effect) */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="round-corners" x="-20%" y="-20%" width="140%" height="140%">
              {/* Blur the sharp polygon */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              {/* Sharpen the edges to create perfect circular rounding on all corners */}
              <feColorMatrix in="blur" mode="matrix" values="
                1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 40 -18
              " result="goo" />
              {/* Apply a drop shadow to the final rounded shape */}
              <feDropShadow in="goo" dx="0" dy="20" stdDeviation="25" floodOpacity="0.15" result="shadow" />
            </filter>

            {/* Smaller Filter for the Black Triangle to prevent over-rounding and distortion of the parallel edge */}
            <filter id="round-corners-small" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="
                1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 40 -18
              " result="goo" />
            </filter>
          </defs>
        </svg>

        {/* Outer container applies the layout */}
        <div className="w-[95%] lg:w-[90%] max-w-[1100px] mx-auto h-[400px] sm:h-[350px] lg:h-[400px] relative">

          {/* Black Triangle Shape Background (Gooey) */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ filter: 'url(#round-corners-small)' }}
          >
            <div
              className="absolute inset-0 bg-[#0a0a0a] max-md:[clip-path:polygon(0_0,6%_0,0_10%)] md:[clip-path:polygon(0_0,7.5%_0,0_20%)]"
            />
          </div>

          {/* Main Shape Background (Gooey) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ filter: 'url(#round-corners)' }}
          >
            {/* Inner container provides the sharp polygon which gets rounded by the filter */}
            <div 
              className="absolute inset-0 bg-[#2D0B5A] pointer-events-auto shadow-2xl transition-colors duration-500 overflow-hidden max-md:[clip-path:polygon(8%_0,100%_0,100%_86%,58%_86%,53%_100%,0_100%,0_12%)] md:[clip-path:polygon(12%_0,100%_0,100%_78%,78%_78%,73%_100%,0_100%,0_32%)]"
            >
              {/* Noise overlay inside the shape for coal texture */}
              <div 
                className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              />
              {/* Hazy gradients inside the shape */}
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4A148C] rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1F004D] rounded-full blur-[100px]" />
            </div>
          </div>

          {/* CTA Content Layer (Floating over the gooey shapes to prevent text distortion) */}
          <div className="absolute inset-0 z-40 flex flex-col justify-center p-8 md:p-12 lg:p-16 pointer-events-none">

            {/* Left Text Content */}
            <div className="flex flex-col md:pl-[8%] pointer-events-auto z-40 max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-white text-[10px] md:text-xs font-bold font-bebas tracking-[0.5em] uppercase">
                  Admissions Open 2026
                </span>
                <br /><br />
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bebas tracking-wide text-white uppercase leading-[0.9] drop-shadow-xl">
                Launch Your<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Tech Career</span>
              </h2>

              <p className="text-purple-50 text-xs sm:text-sm md:text-base mt-4 md:mt-6 font-light tracking-wide max-w-lg drop-shadow-md">
                Master <span className="font-bebas tracking-[2.2px] text-xl">Full-Stack Development</span>, <span className="font-bebas tracking-[2.2px] text-xl">Machine Learning</span>, and <span className="font-bebas tracking-[2.2x] text-xl">Cloud Computing</span>. Join 50K+ students getting placed in top global companies today.
              </p>
            </div>
          </div>

          {/* Fitted Button Background (Gooey) */}
          <div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{ filter: 'url(#round-corners-small)' }}
          >
            <button
              className="absolute inset-0 bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors duration-300 pointer-events-auto cursor-pointer max-md:[clip-path:polygon(59%_88.5%,100%_88.5%,100%_100%,54%_100%)] md:[clip-path:polygon(78.6%_82.5%,100%_82.5%,100%_100%,74.6%_100%)]"
              aria-label="Explore Button"
            />
          </div>

          {/* Fitted Button Content (Text & Icon) */}
          <div className="absolute bottom-[2%] right-[5%] md:bottom-[6%] z-40 flex items-center gap-1 md:gap-2 pointer-events-none">
            <span className="text-white text-[9px] md:text-sm font-black font-bebas scale-160 tracking-[2.5px] uppercase">
              Request CallBack
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
