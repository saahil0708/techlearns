import { motion } from 'framer-motion';

export default function PlacementProcessSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white relative border-t border-white/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Heading & Subheading */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#8C52FF] font-bebas tracking-[0.2em] text-lg sm:text-xl mb-4 font-bold uppercase">
              Your Path to Success
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[55px] font-bold font-flexa tracking-tight text-white leading-[1.1] mb-6 inline-block relative">
              The Placement <span className="relative z-10">Pipeline
                {/* Curvy Underline */}
                <svg className="absolute w-[110%] h-auto -bottom-3 left-1/2 -translate-x-1/2 text-[#8C52FF] -z-10 drop-shadow-[0_0_15px_rgba(140,82,255,0.5)]" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 2 18 Q 50 -2 100 12 T 195 18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-flexa text-lg md:text-xl mt-6">
              From day one, every assignment and project is a calculated step towards landing your <span className="font-bebas text-[#8C52FF] tracking-wider uppercase text-2xl relative top-1">DREAM TECH ROLE</span>.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-none lg:grid-rows-2 gap-4 lg:gap-6 min-h-[600px]">
          
          {/* Block 1 - Step 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-[#151515] border border-white/10 rounded-[2rem] p-8 col-span-1 row-span-1 relative overflow-hidden group min-h-[280px] shadow-xl hover:border-[#8C52FF]/50 transition-colors flex flex-col justify-end"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -bottom-8 font-bebas text-[160px] leading-none text-white/[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0 select-none">01</div>
            
            {/* Decoration */}
            <svg className="absolute top-0 right-0 w-24 h-24 text-white/5 opacity-90 transition-transform group-hover:rotate-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
              <path d="M 100 20 A 40 40 0 0 0 60 60 A 15 15 0 0 1 30 60" />
              <circle cx="45" cy="60" r="15" />
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-flexa text-white/80 leading-relaxed max-w-[85%]">
                <span className="font-bebas text-3xl lg:text-4xl tracking-wider text-white uppercase block mb-1">Skill Building</span>
                Master the MERN stack through intensive hands-on coding.
              </h3>
            </div>
          </motion.div>

          {/* Block 2 - Step 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0B1F3A] rounded-[2rem] p-8 col-span-1 row-span-1 relative overflow-hidden group min-h-[280px] shadow-xl flex flex-col justify-end"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -bottom-8 font-bebas text-[160px] leading-none text-white/[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0 select-none">02</div>
            
            {/* Decoration */}
            <svg className="absolute top-4 right-4 w-20 h-20 text-[#8C52FF] opacity-30 transition-transform group-hover:-translate-y-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
              <ellipse cx="50" cy="30" rx="30" ry="12" />
              <path d="M 20 30 L 20 70 A 30 12 0 0 0 80 70 L 80 30" />
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-flexa text-white/80 leading-relaxed max-w-[85%]">
                <span className="font-bebas text-3xl lg:text-4xl tracking-wider text-[#8C52FF] uppercase block mb-1">Portfolio Prep</span>
                Deploy live projects to build a proof-of-work portfolio.
              </h3>
            </div>
          </motion.div>

          {/* Block 3 - Step 3 (Tall) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#8C52FF] rounded-[2rem] p-8 lg:p-10 col-span-1 lg:row-span-2 relative overflow-hidden group flex flex-col justify-between min-h-[500px] shadow-xl"
          >
            {/* Watermark Number */}
            <div className="absolute -bottom-10 right-0 font-bebas text-[240px] leading-none text-white/[0.15] pointer-events-none group-hover:scale-105 transition-transform duration-500 z-0 select-none">03</div>

            {/* Decoration Graphic */}
            <div className="relative w-full h-[200px] mb-8 flex items-center justify-center z-10">
              <div className="absolute w-32 h-32 bg-[#e5c058] rounded-full flex items-center justify-center border-4 border-[#111] shadow-[8px_8px_0px_#111] group-hover:scale-105 transition-transform z-10">
                <svg className="w-16 h-16 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 w-5 h-5 bg-[#111] rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-0 h-0 border-l-[14px] border-l-transparent border-b-[24px] border-b-[#111] border-r-[14px] border-r-transparent transform rotate-12"></div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
              <h3 className="text-lg lg:text-xl font-flexa font-medium text-white/90 leading-relaxed max-w-[95%]">
                <span className="font-bebas text-4xl lg:text-[42px] tracking-wider text-[#111] uppercase block mb-3 leading-[0.9]">Profile<br/>Optimization</span>
                Fine-tune your LinkedIn and GitHub to attract top recruiters automatically.
              </h3>
            </div>
          </motion.div>

          {/* Block 4 - Step 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#151515] border border-white/10 rounded-[2rem] p-8 col-span-1 row-span-1 relative overflow-hidden group min-h-[280px] shadow-xl hover:border-[#8C52FF]/50 transition-colors flex flex-col justify-end"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -bottom-8 font-bebas text-[160px] leading-none text-white/[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0 select-none">04</div>

            {/* Decoration */}
            <svg className="absolute top-6 right-6 w-16 h-16 text-white/5 transition-transform group-hover:scale-110" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
              <circle cx="70" cy="30" r="20" fill="#8C52FF" />
              <line x1="20" y1="80" x2="80" y2="20" strokeWidth="6" />
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-flexa text-white/80 leading-relaxed max-w-[85%]">
                <span className="font-bebas text-3xl lg:text-4xl tracking-wider text-white uppercase block mb-1">Mock Interviews</span>
                Clear rigorous technical rounds with senior engineers.
              </h3>
            </div>
          </motion.div>

          {/* Block 5 - Step 5 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#e5c058] rounded-[2rem] p-8 lg:p-10 col-span-1 lg:col-span-2 row-span-1 relative overflow-hidden group min-h-[280px] shadow-xl flex flex-col justify-end"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -bottom-10 font-bebas text-[200px] leading-none text-[#111]/[0.08] pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0 select-none">05</div>

            {/* Decoration */}
            <svg className="absolute top-4 right-8 w-32 h-32 text-[#111] opacity-10 transition-transform group-hover:rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <circle cx="80" cy="80" r="40" fill="#0B1F3A" />
              <circle cx="80" cy="80" r="60" />
              <line x1="0" y1="100" x2="50" y2="50" strokeWidth="6"/>
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-lg lg:text-xl font-flexa text-[#111]/80 leading-relaxed max-w-[90%] md:max-w-[70%]">
                <span className="font-bebas text-4xl lg:text-5xl tracking-wider text-[#111] uppercase block mb-2">Career Coaching</span>
                Receive 1-on-1 resume reviews and expert salary negotiation support.
              </h3>
            </div>
          </motion.div>

          {/* Block 6 - Step 6 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#caff00] rounded-[2rem] p-8 col-span-1 row-span-1 relative overflow-hidden group min-h-[280px] shadow-xl flex flex-col justify-end"
          >
            {/* Watermark Number */}
            <div className="absolute -right-4 -bottom-8 font-bebas text-[160px] leading-none text-[#111]/[0.08] pointer-events-none group-hover:scale-110 transition-transform duration-500 z-0 select-none">06</div>

            {/* Decoration */}
            <svg className="absolute top-6 right-6 w-14 h-14 text-[#111] opacity-30 transition-transform group-hover:-translate-x-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
              <path d="M 30 30 L 70 30 L 70 70" />
              <polygon points="50,50 70,50 70,70" fill="#111" />
              <circle cx="30" cy="70" r="4" fill="currentColor"/>
              <circle cx="50" cy="90" r="4" fill="currentColor"/>
            </svg>
            
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-flexa text-[#111]/80 leading-relaxed max-w-[85%]">
                <span className="font-bebas text-3xl lg:text-4xl tracking-wider text-[#111] uppercase block mb-1">Final Placement</span>
                Get fast-tracked interviews and secure your dream offer.
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
