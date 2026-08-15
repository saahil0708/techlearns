import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#FAFAFA]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row items-start rounded-xl"
      >
        
        {/* Column 1 */}
        <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="w-full bg-[#0B1F3A] text-white p-8 lg:p-10 relative h-[320px] lg:h-[380px] [clip-path:polygon(0_0,100%_0,100%_100%,48px_100%,0_calc(100%-48px))] transition-transform hover:-translate-y-1 duration-500">
            <div className="flex justify-between items-start w-full">
              <span className="text-[140px] lg:text-[220px] font-bebas tracking-normal leading-[0.75] -ml-2 mt-2">14</span>
              <span className="text-xl font-flexa font-bold text-white/50">(LPA)</span>
            </div>
            <div className="absolute bottom-8 left-8 flex gap-4 lg:gap-8 items-end text-xs font-flexa font-medium text-white/50">
              <span className="font-bebas text-base tracking-widest text-white/70 w-16 shrink-0">STAT 01/</span>
              <span className="text-left leading-tight text-white/80">/Average Package<br/><span className="font-bebas text-sm tracking-widest text-white">TECHLEARNS</span> Grads</span>
            </div>
          </div>
          <div className="p-8 lg:p-10 h-auto lg:h-[240px]">
            <h3 className="text-3xl lg:text-4xl font-flexa font-semibold tracking-tight text-[#0B1F3A] leading-[1.1]">
              Placement<br/>Statistics<br/><span className="font-bebas text-4xl lg:text-5xl text-[#8C52FF] tracking-widest uppercase relative top-2">VERIFIED</span>
            </h3>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="w-full bg-[#8C52FF] text-white p-8 lg:p-10 relative h-[320px] lg:h-[460px] [clip-path:polygon(0_0,100%_0,100%_100%,48px_100%,0_calc(100%-48px))] transition-transform hover:-translate-y-1 duration-500">
            <div className="flex justify-between items-start w-full">
              <span className="text-[140px] lg:text-[220px] font-bebas tracking-normal leading-[0.75] -ml-2 mt-2">500</span>
              <span className="text-xl font-flexa font-bold text-white/50">(+)</span>
            </div>
            <div className="absolute bottom-8 left-8 flex gap-4 lg:gap-8 items-end text-xs font-flexa font-medium text-white/50">
              <span className="font-bebas text-base tracking-widest text-white/70 w-16 shrink-0">STAT 02/</span>
              <span className="text-left leading-tight text-white/80">/Hiring Partners<br/><span className="font-bebas text-sm tracking-widest text-white">GLOBAL</span> Network</span>
            </div>
          </div>
          <div className="p-8 lg:p-10 h-auto lg:h-[160px]">
            <p className="text-base font-flexa font-medium text-gray-500 leading-relaxed max-w-[200px]">
              Based on rigorously verified placement data as of <span className="font-bebas text-xl tracking-wider text-[#0B1F3A]">2025</span>.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="w-full bg-[#111111] text-white p-8 lg:p-10 relative h-[320px] lg:h-[540px] [clip-path:polygon(0_0,100%_0,100%_100%,48px_100%,0_calc(100%-48px))] transition-transform hover:-translate-y-1 duration-500">
            <div className="flex justify-between items-start w-full">
              <span className="text-[140px] lg:text-[220px] font-bebas tracking-normal leading-[0.75] -ml-2 mt-2">95</span>
              <span className="text-xl font-flexa font-bold text-white/50">(%)</span>
            </div>
            <div className="absolute bottom-8 left-8 flex gap-4 lg:gap-8 items-end text-xs font-flexa font-medium text-white/50">
              <span className="font-bebas text-base tracking-widest text-white/70 w-16 shrink-0">STAT 03/</span>
              <span className="text-left leading-tight text-white/80">/Placement Rate<br/><span className="font-bebas text-sm tracking-widest text-white">STUDENT</span> Success</span>
            </div>
          </div>
          {/* Empty space to match the height */}
          <div className="hidden lg:block h-[80px]"></div>
        </div>

      </motion.div>
    </section>
  );
}
