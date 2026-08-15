import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] lg:min-h-[550px] px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d0914] via-[#21113a] to-[#0a0a0a]">
        
      {/* Polka Dot Pattern Overlay */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-[-50px] z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px)',
          backgroundSize: '32px 32px'
        }}
      ></motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center mt-6 sm:mt-10">
        
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="w-full flex flex-col items-center">
          
          <h1 className="flex flex-col items-center justify-center text-center m-0 relative">
            <span className="text-[70px] sm:text-[120px] lg:text-[170px] font-black font-flexa leading-[1.1] sm:leading-[1] lg:leading-[0.7] tracking-tight text-white drop-shadow-lg relative inline-block w-max mx-auto z-10">
              We Build
              {/* Subtle Curvy underline SVG */}
              <svg className="absolute w-[180px] sm:w-[280px] h-auto -bottom-2 sm:-bottom-4 right-[-10px] sm:right-[-20px] text-[#caff00] drop-shadow-[0_0_15px_rgba(202,255,0,0.8)]" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 18 Q 100 2 195 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-[80px] sm:text-[140px] lg:text-[240px] font-bebas text-transparent tracking-[0.05em] uppercase leading-[0.85] drop-shadow-2xl mt-2 sm:mt-6 z-0" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.9)' }}>
              BUILDERS
            </span>
          </h1>

        </motion.div>

      </div>
    </section>
  );
}
