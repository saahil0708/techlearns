import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#FAFAFA] text-gray-900 overflow-hidden font-sans">
      
      {/* Ambient Purple Blobs in Background */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#8C52FF]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#CB6CE6]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#8C52FF]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#8C52FF 1px, transparent 1px), linear-gradient(90deg, #8C52FF 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1350px] mx-auto flex flex-col relative z-10">
        
        {/* Header Part */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col mb-24 lg:mb-32"
        >
          <div className="flex items-start gap-6 md:gap-10">
            {/* <div className="w-1.5 h-20 md:h-24 bg-gradient-to-b from-[#8C52FF] to-[#CB6CE6] rounded-full mt-2 shrink-0"></div> */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas mb-6 text-gray-900 tracking-widest uppercase">
                Our
                <span className="relative inline-block text-[#8C52FF] ml-3 md:ml-4 font-flexa tracking-tighter">
                  Mission
                  {/* Curvy underline SVG */}
                  <svg className="absolute w-full h-4 -bottom-3 left-0 text-[#8C52FF] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,25 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="ml-3 md:ml-4">& Vision</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-flexa tracking-tight mt-10">
                TechLearns is our answer. A place where passionate individuals are transformed into highly capable engineers through rigorous, immersive, and uncompromising training.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Vision Part */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-16 pb-10"
        >
          <h3 className="text-[#8C52FF] font-bold tracking-widest uppercase text-sm md:text-base mt-2">OUR VISION</h3>
          <div>
            <h4 className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed mb-6">
              A nationally trusted <span className="font-bebas text-[#8C52FF] tracking-wider text-3xl md:text-4xl translate-y-1 inline-block">CEL ECOSYSTEM</span>
            </h4>
            <p className="text-xl md:text-2xl text-gray-600 font-flexa leading-relaxed font-light">
              To become a nationally trusted next-generation Corporate Experience Learning ecosystem that enables learners from every background to build <span className="font-flexa text-gray-900">future-ready technological capability</span> through real corporate experience, measurable practice, and continuous access to opportunity.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-60"></div>

        {/* The Mission Part */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8 md:gap-16 py-16 md:py-20"
        >
          <h3 className="text-[#8C52FF] font-bold tracking-widest uppercase text-sm md:text-base mt-2">OUR MISSION</h3>
          <div>
            <h4 className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed mb-6">
              Bridge <span className="font-flexa text-[#8C52FF]">learning</span> and <span className="font-flexa text-[#8C52FF]">doing</span>
            </h4>
            <p className="text-xl md:text-2xl font-flexa text-gray-600 leading-relaxed font-light">
              We bridge the gap between learning technology and experiencing how technology is built, applied, and delivered — by combining current curriculum, expert mentorship, corporate operating practices, live projects, industry exposure, competitions, <span className="font-flexa text-gray-900">verified skill evidence</span>, and credible certification pathways.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
