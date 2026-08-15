import { motion } from 'framer-motion';
import { FluidArrowRight } from '@/utils/fluid_arrow';

const BentoCard = ({ color, title, subtitle, textDark = false, delay = 0.1, className = "" }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }}
    className={`rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between ${className}`}
    style={{ backgroundColor: color }}
  >
    <div>
      <h3 className={`text-4xl sm:text-5xl font-bebas uppercase tracking-wide leading-none ${textDark ? 'text-[#111]' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`text-xs sm:text-sm font-bold uppercase tracking-widest mt-2 ${textDark ? 'text-[#111]/70' : 'text-white/80'}`}>
        {subtitle}
      </p>
    </div>
    <button className="w-14 h-14 rounded-full bg-[#111] flex items-center justify-center mt-4 shadow-lg shadow-black/20">
      <div className="w-6 h-6 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"><FluidArrowRight /></div>
    </button>
  </motion.div>
);

export default function BentoGridSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#f2e8ff] to-[#fdfdfd] border-t border-gray-100">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Headings */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <p className="text-[#8C52FF] font-bebas tracking-[0.2em] text-lg sm:text-xl mb-4 font-bold uppercase">
            PROVEN TRACK RECORD
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[70px] font-bold font-flexa tracking-tight text-[#0B1F3A] mb-8 max-w-4xl leading-[1.1]">
            Impact In Numbers
          </h2>
          <p className="text-lg md:text-xl font-flexa text-neutral-600 font-medium max-w-3xl leading-relaxed">
            We focus on <span className="text-[#8C52FF] font-bold uppercase tracking-[0.1em] font-bebas">Measurable Outcomes</span>. Our curriculum is directly tied to your career growth and <span className="text-[#8C52FF] font-bold uppercase tracking-[0.1em] font-bebas">Industry Success</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Main Box - Brand Gold */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] p-8 sm:p-10 lg:p-12 relative overflow-hidden group flex flex-col justify-between"
            style={{ backgroundColor: '#e5c058' }}
          >
            <h3 className="text-[50px] sm:text-[70px] lg:text-[85px] font-bebas leading-[0.85] text-[#111] uppercase tracking-wide z-10 w-full max-w-[500px]">
              Experience <span className="relative inline-block px-1">
                100%
                {/* Hand-drawn circle SVG */}
                <svg className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] text-[#111]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 C 20 10, 5 30, 10 60 C 15 90, 40 95, 70 85 C 95 75, 95 40, 80 20 C 65 5, 45 10, 40 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span> <br/>
              Offline <br/>
              Masterclasses
            </h3>
            
            <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#111] flex items-center justify-center mt-8 shadow-xl shadow-black/20">
              <div className="w-8 h-8 flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300"><FluidArrowRight /></div>
            </button>
          </motion.div>

          {/* Small Boxes - Stats & Brand Colors */}
          <BentoCard delay={0.1} color="#8C52FF" title="98%" subtitle="PLACEMENT RATE" />
          <BentoCard delay={0.2} color="#F8F9FA" title="150+" subtitle="HIRING PARTNERS" textDark />
          <BentoCard delay={0.3} color="#CB6CE6" title="40+" subtitle="REAL-WORLD PROJECTS" />
          <BentoCard delay={0.4} color="#0B1F3A" title="10K+" subtitle="ACTIVE ALUMNI" />
          
          {/* Wide Box - Light Gray */}
          <BentoCard delay={0.5} color="#F3F4F6" title="24/7" subtitle="EXPERT MENTORSHIP SUPPORT" textDark className="md:col-span-2" />
          
          {/* Dark Violet & White Boxes */}
          <BentoCard delay={0.6} color="#4B207E" title="100%" subtitle="SATISFACTION" />
          <BentoCard delay={0.7} color="#ffffff" title="12+" subtitle="INDUSTRY CERTS" textDark className="border border-gray-200" />
          
        </div>
      </div>
    </section>
  );
}
