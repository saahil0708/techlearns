
import { motion } from 'framer-motion';
import { Monitor, Clock, Coffee, Wifi, Users2, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: "Dual-Monitor Workstations",
    desc: "Enterprise-grade setups with mechanical keyboards, ergonomic chairs, and ultra-wide curved displays.",
    bgClass: "bg-[#0B203B]",
    textClass: "text-white",
    descClass: "text-white/80",
    iconContainerClass: "bg-white/10 text-white",
    buttonClass: "text-[#FDE78C]",
  },
  {
    icon: Clock,
    title: "24/7 Campus Access",
    desc: "Inspiration doesn't sleep. Build, deploy, and debug anytime.",
    bgClass: "bg-[#FDE78C]",
    textClass: "text-gray-900",
    descClass: "text-gray-700",
    iconContainerClass: "bg-black/5 text-gray-900",
  },
  {
    icon: Coffee,
    title: "Unlimited Caffeine",
    desc: "Fully stocked premium coffee bars and energy drinks.",
    bgClass: "bg-[#8C52FF]",
    textClass: "text-white",
    descClass: "text-white/90",
    iconContainerClass: "bg-white/20 text-white",
  },
  {
    icon: Wifi,
    title: "Gigabit Infrastructure",
    desc: "Dedicated fiber lines ensuring zero latency for deployments.",
    bgClass: "bg-gray-300",
    textClass: "text-gray-900",
    descClass: "text-gray-600",
    iconContainerClass: "bg-gray-200 text-gray-900",
  },
  {
    icon: Users2,
    title: "Collaboration Pods",
    desc: "Sound-proof glass rooms equipped with massive whiteboards.",
    bgClass: "bg-[#0B203B]",
    textClass: "text-white",
    descClass: "text-white/80",
    iconContainerClass: "bg-white/10 text-white",
  }
];

export default function ProductivitySection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F0FF] overflow-hidden font-flexa flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Subtle Polka Dot Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #8C52FF 2px, transparent 2px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Ambient Purple Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8C52FF]/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#8C52FF]/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-[#CCFF00]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Header */}
      <div className="relative z-20 flex flex-col items-center mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas mb-6 text-gray-900 tracking-widest uppercase">
          Engineered for
          <span className="relative inline-block text-[#8C52FF] ml-3 md:ml-4">
            Productivity
            {/* Curvy underline SVG */}
            <svg className="absolute w-full h-4 -bottom-3 left-0 text-[#8C52FF] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q25,25 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mt-4">
          Every square foot of our campus is optimized to eliminate distractions and accelerate your growth.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 w-full max-w-[1200px] mx-auto">
        {features.map((feature, i) => {
          const isBig = i === 0;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 ${feature.bgClass} ${feature.textClass} ${
                isBig ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
              }`}
            >
              
              <div className="relative z-10 flex flex-col">
                <div className={`rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${feature.iconContainerClass} ${
                  isBig ? 'w-16 h-16 shadow-sm' : 'w-12 h-12'
                }`}>
                  <feature.icon className={isBig ? "w-8 h-8" : "w-6 h-6"} />
                </div>
                <h3 className={`font-bebas leading-tight mb-3 uppercase tracking-wider ${feature.textClass} ${
                  isBig ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl'
                }`}>
                  {feature.title}
                </h3>
              </div>
              
              <div className="relative z-10 mt-2 flex flex-col gap-4">
                <p className={`font-light ${feature.descClass} ${
                  isBig ? 'text-lg leading-relaxed max-w-md' : 'text-sm md:text-sm leading-relaxed'
                }`}>
                  {feature.desc}
                </p>
                {isBig && feature.buttonClass && (
                  <button className={`flex items-center gap-2 font-medium w-fit hover:gap-4 transition-all duration-300 ${feature.buttonClass}`}>
                    Explore Workstations <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
