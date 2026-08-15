import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FluidArrowRight } from '@/utils/fluid_arrow';

export default function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative text-center overflow-hidden bg-white">
      {/* Massive Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#5B2D91]/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[#8C52FF]/10 blur-[150px] pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
      >
        <h2 className="text-5xl md:text-7xl font-black font-flexa mb-8 text-[#0B1F3A]">
          Ready to <span className="text-[#8C52FF]">Start Building?</span>
        </h2>
        <p className="text-xl md:text-2xl text-neutral-500 mb-12 max-w-2xl mx-auto font-medium">
          Join the next cohort of elite engineers and transform your career with TechLearns.
        </p>
        
        <Link 
          to="/apply" 
          className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-2xl bg-[#5B2D91] text-white font-bebas text-2xl tracking-widest uppercase overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_rgba(91,45,145,0.2)] hover:shadow-[0_20px_50px_rgba(140,82,255,0.4)] border border-[#a855f7]/40"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7237BC] to-[#5B2D91] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Shimmer */}
          <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-15deg] group-hover:animate-[shine_1.5s_ease-in-out]"></div>
          
          <span className="relative z-10 flex items-center gap-2 pt-1">
            Apply Now
            <div className="w-6 h-6 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300 text-white">
              <FluidArrowRight />
            </div>
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
