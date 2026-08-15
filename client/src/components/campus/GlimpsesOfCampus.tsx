import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
];

export default function GlimpsesOfCampus() {
  return (
    <section className="relative w-full h-[900px] md:h-[1050px] bg-[#111] overflow-hidden font-sans">
      
      {/* Background Noise & Gradients */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Cosmic Rainbow Light Leaks */}
      <div className="absolute left-[10%] bottom-[15%] w-[600px] h-[200px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500 blur-[100px] -rotate-45 opacity-40 pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[150px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-[90px] rotate-12 opacity-30 pointer-events-none z-0" />

      {/* Bottom Fade Overlay to prevent hard cuts */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#111] via-[#111]/90 to-transparent z-20 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="absolute top-8 w-full px-8 flex justify-between items-center z-30 pointer-events-none">
        <span className="text-neutral-400 text-xs tracking-[0.2em] border border-white/10 px-4 py-1.5 rounded-full">TECHLEARNS</span>
        <span className="text-neutral-400 text-xs tracking-[0.2em] uppercase hidden md:block">Campus Vibe & Culture</span>
        <span className="text-neutral-400 text-xs tracking-[0.2em] border border-white/10 px-4 py-1.5 rounded-full">2026</span>
      </div>

      {/* Responsive Arch CSS Variables */}
      <style>{`
        .arch-card {
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-300px);
        }
        @media (min-width: 768px) {
          .arch-card {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-450px);
          }
        }
      `}</style>

      {/* Arch Carousel */}
      <div className="absolute left-1/2 top-1/2 z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] -left-[300px] -top-[300px] md:-left-[450px] md:-top-[450px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
            className="w-full h-full"
          >
            {images.map((src, i) => {
              const angle = i * (360 / 8);
              return (
                <div 
                  key={i} 
                  className="absolute left-1/2 top-1/2 w-[160px] h-[200px] md:w-[220px] md:h-[280px] rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] arch-card pointer-events-auto"
                  style={{ '--angle': `${angle}deg` } as React.CSSProperties}
                >
                  <img 
                    src={src} 
                    className="w-full h-full object-cover brightness-[0.8] hover:brightness-110 hover:scale-105 transition-all duration-700 cursor-pointer" 
                    alt="Campus Glimpse" 
                  />
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-30 w-full px-4 pointer-events-none">
        <h2 className="text-5xl md:text-7xl lg:text-[85px] font-bebas uppercase text-white tracking-wider mb-2 leading-[0.85] drop-shadow-2xl">
          Engineered <span className="text-[#CCFF00]">For</span> <br className="hidden md:block" /> Builders
        </h2>
        <p className="text-neutral-300 text-sm md:text-lg font-flexa mb-8 max-w-xl drop-shadow-lg leading-relaxed">
          Professional grade facilities, world-class network, and an unforgettable engineering culture.
        </p>
        <button className="px-10 py-4 rounded-full bg-[#8C52FF] text-white font-bebas text-xl tracking-widest uppercase hover:bg-[#CCFF00] hover:text-[#0B1F3A] transition-colors duration-300 pointer-events-auto mt-2 shadow-[0_10px_30px_rgba(140,82,255,0.3)]">
          Book a Campus Tour
        </button>
      </div>

      {/* Bottom Features */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full px-4 z-30 pointer-events-none">
        <div className="text-center">
          <h4 className="text-white text-sm md:text-base font-medium mb-1">Fast Delivery</h4>
          <p className="text-neutral-400 text-[11px] md:text-xs">Ship products in record time</p>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/10" />
        <div className="text-center">
          <h4 className="text-white text-sm md:text-base font-medium mb-1">Elite Network</h4>
          <p className="text-neutral-400 text-[11px] md:text-xs">Connections that last a lifetime</p>
        </div>
        <div className="hidden md:block w-px h-8 bg-white/10" />
        <div className="text-center">
          <h4 className="text-white text-sm md:text-base font-medium mb-1">Natural Style</h4>
          <p className="text-neutral-400 text-[11px] md:text-xs">Authentic coding environments</p>
        </div>
      </div>

    </section>
  );
}
