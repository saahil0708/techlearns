import { motion } from 'framer-motion';
import { FluidArrowRight } from '@/utils/fluid_arrow';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/about/HeroSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#8C52FF]/30 selection:text-white font-sans overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: THE VISION */}
      <MissionVisionSection />

      {/* SECTION 3: JOIN US */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-center bg-[#0a0a0a]">
        <div className="max-w-[800px] mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold font-flexa mb-8">
              Be Part of the <span className="text-[#8C52FF]">Movement</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Whether you're looking to launch your career or partner with us to hire elite talent, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/programs" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-[#050505] font-bold transition-all shadow-lg"
              >
                View Our Programs
              </Link>
              <Link 
                to="#contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-white/50 text-white font-bold transition-all flex items-center justify-center gap-2"
              >
                Contact Us
                <FluidArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
