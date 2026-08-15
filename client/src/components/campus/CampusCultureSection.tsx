import { motion } from 'framer-motion';

const CornerBite = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={`absolute w-[200px] h-[200px] text-[#F3E8FF] fill-current z-20 pointer-events-none ${className}`}
  >
    <path d="M 200,200 
             L 200,64 
             A 24,24 0 0,1 185.23,86.15 
             A 80,80 0 0,0 136.95,172.31 
             A 24,24 0 0,1 113.24,200 
             Z" />
  </svg>
);

const ScallopPill = ({ color, className }: { color: string, className?: string }) => (
  <svg width="12" height="80" viewBox="0 0 12 80" className={`shrink-0 pointer-events-none ${className || ''}`}>
    <path d="M 12,0 L 12,18 A 6,6 0 0,1 8,23.67 A 12,12 0 0,0 0,35 L 0,45 A 12,12 0 0,0 8,56.33 A 6,6 0 0,1 12,62 L 12,80 Z" fill={color} />
  </svg>
);

const FluidArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M4 20 Q 10 10 20 4 M 12 4 H 20 V 12" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function CampusCultureSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3E8FF] relative border-t border-[#8C52FF]/10 overflow-hidden">
      
      {/* Premium Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#8C52FF 1px, transparent 1px), linear-gradient(90deg, #8C52FF 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
      
      {/* Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8C52FF]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5B2D91]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1350px] mx-auto relative z-10">
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-flexa mb-8 text-[#0B1F3A] tracking-tight leading-[1.2]">
              A Campus Built For <br className="hidden md:block" />
              <span className="font-bebas text-[#8C52FF] text-[70px] md:text-[90px] lg:text-[110px] leading-[0.8] tracking-widest relative inline-block mt-2">
                BUILDERS
                <svg className="absolute -bottom-4 lg:-bottom-6 left-0 w-full h-4 lg:h-5 overflow-visible" viewBox="0 0 200 20" preserveAspectRatio="none">
                   <path d="M0 10 Q 50 25 100 10 T 200 10" stroke="#8C52FF" strokeWidth="6" strokeLinecap="round" fill="none" className="drop-shadow-sm" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-[#0B1F3A]/70 font-medium leading-relaxed max-w-2xl">
              Surround yourself with hyper-ambitious engineers. At TechLearns, we don't just learn about the future—we build it, ship it, and scale it.
            </p>
          </div>
        </div>

        {/* Custom 3-Card Interlocking Bento */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 w-full min-h-[500px]">
          
          {/* Card 1: Midnight Hackathons (Premium Yellow) */}
          <div className="relative flex">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-[#FDE68A] rounded-[3rem] p-10 lg:p-12 flex flex-col relative overflow-hidden"
            >
              {/* Exact fluid SVG cutout */}
              <CornerBite className="hidden xl:block bottom-0 right-0 scale-[1.01] origin-center" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[75px] lg:text-[90px] font-bebas uppercase text-[#0B1F3A] leading-[0.85] tracking-wider mb-2">
                  Midnight
                </h3>
                <p className="text-xl lg:text-2xl font-bold text-[#0B1F3A]/80 mb-12 font-flexa">Hackathons</p>
                
                <div className="mt-auto">
                  <p className="text-[#0B1F3A]/80 font-medium max-w-[220px] text-lg leading-relaxed">
                    Every weekend, the campus transforms. Pizza, energy drinks, and 48 hours to build and launch a product from scratch.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Spinning Badge Button */}
            <div className="hidden xl:flex absolute -bottom-[24px] -right-[80px] z-30 w-32 h-32 bg-[#0B1F3A] rounded-full items-center justify-center shadow-[0_20px_40px_rgba(11,31,58,0.2)] cursor-pointer group transition-colors">
              <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[13px] font-bebas fill-white uppercase" textLength="232" lengthAdjust="spacing">
                  <textPath href="#textPath" startOffset="0">
                    BOOK A TOUR • BOOK A TOUR • BOOK A TOUR • 
                  </textPath>
                </text>
              </svg>
              <div className="w-14 h-14 rounded-full bg-[#8C52FF] flex items-center justify-center z-10 group-hover:bg-[#CCFF00] transition-colors duration-300">
                <FluidArrow className="w-6 h-6 text-white group-hover:text-[#0B1F3A] transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Card 2: Open Source Nights (Dark Navy) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full bg-[#0B1F3A] rounded-[3rem] p-10 lg:p-12 relative overflow-hidden flex flex-col"
          >
            {/* Mirrored exact fluid SVG cutout */}
            <CornerBite className="hidden xl:block bottom-0 left-0 scale-x-[-1.01] scale-y-[1.01] origin-center" />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[75px] lg:text-[90px] font-bebas uppercase text-white leading-[0.85] tracking-wider mb-2">
                Open<br/>Source
              </h3>
              <p className="text-xl lg:text-2xl font-bold text-[#CCFF00] mb-12 font-flexa">Contribution Nights</p>
              
              <div className="mt-auto">
                <p className="text-white/70 font-medium max-w-[220px] text-lg leading-relaxed mb-8">
                  Collaborate with peers to push commits to major open-source repositories.
                </p>
                
                {/* Avatars Stack */}
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-4 border-[#0B1F3A] object-cover" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-4 border-[#0B1F3A] object-cover" alt="Avatar" />
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-4 border-[#0B1F3A] object-cover" alt="Avatar" />
                  <div className="w-14 h-14 rounded-full border-4 border-[#0B1F3A] bg-[#8C52FF] flex items-center justify-center text-white font-bold text-sm z-20 relative">30+</div>
                </div>
              </div>
            </div>

            {/* Right Edge Filleted Scallops */}
            <div className="hidden xl:flex absolute top-0 right-0 bottom-0 w-[12px] flex-col justify-around py-12 pointer-events-none z-10">
               {[1,2,3,4,5].map(i => <ScallopPill key={i} color="#F3E8FF" />)}
            </div>
          </motion.div>

          {/* Card 3: Masterclasses (Purple) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-[#8C52FF] rounded-[3rem] p-10 lg:p-12 relative flex flex-col overflow-hidden"
          >
            {/* Left Edge Filleted Cutouts (Creates Tabs inside card) */}
            <div className="hidden xl:flex absolute top-0 left-0 bottom-0 w-[12px] flex-col justify-around py-12 pointer-events-none z-10">
               {[1,2,3,4,5].map(i => <ScallopPill key={i} color="#F3E8FF" className="-scale-x-100 origin-center" />)}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[75px] lg:text-[90px] font-bebas uppercase text-white leading-[0.85] tracking-wider mb-2">
                Guest
              </h3>
              <p className="text-xl lg:text-2xl font-bold text-[#CCFF00] mb-8 font-flexa">Masterclasses</p>
              
              <p className="text-white/90 font-medium max-w-[220px] text-lg leading-relaxed relative z-20">
                Learn directly from senior engineers at Google, Meta, and top startups in exclusive sessions.
              </p>
            </div>
            
            {/* Embedded Hero PNG Image */}
            <img 
              src="/images/Hero-Picsart-AiImageEnhancer.png" 
              alt="TechLearns Student" 
              className="absolute bottom-0 right-[-10%] w-[90%] h-auto max-h-[85%] object-contain pointer-events-none z-0 drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
