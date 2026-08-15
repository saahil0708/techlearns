import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HiringPartnersSection() {
  return (
    <section id="companies" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold font-flexa mb-16 text-[#0B1F3A]">
          Where Our Alumni <span className="text-[#8C52FF]">Work</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-[1000px] mx-auto"
        >
          {['TechCorp', 'InnoSoft', 'CloudSync', 'DataFlow', 'FinTech Solutions', 'AppWorks', 'GlobalSystems', 'NextGen AI'].map((company, i) => (
            <div key={i} className="flex items-center justify-center h-24 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-colors grayscale hover:grayscale-0 cursor-default">
              <span className="font-bebas text-2xl tracking-widest text-gray-400 uppercase">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
