import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';

export default function CorePrinciplesSection() {
  const cards = [
    {
      title: "Outcome-Driven Engineering",
      bullets: [
        "Curriculum strictly mapped to current industry demands.",
        "100% focus on skills that help you clear technical interviews."
      ],
      isDark: false
    },
    {
      title: "Proof Over Certificates",
      bullets: [
        "Build a dense portfolio of complex, deployed applications.",
        "Focus on real-world capabilities rather than paper certificates."
      ],
      isDark: true
    },
    {
      title: "Campus Immersion",
      bullets: [
        "Experience software engineering as a team sport.",
        "Simulates real tech companies to teach agile workflows."
      ],
      isDark: false
    },
    {
      title: "Elite Mentorship",
      bullets: [
        "Direct code reviews from senior engineers.",
        "Guidance from experts actively working at top tech companies."
      ],
      isDark: false
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-[1350px] mx-auto">
        
        {/* HEADING (Dynamic Alignment) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row justify-between items-end gap-8 lg:gap-16 mb-24"
        >
          <div className="lg:flex-1 mb-2">
            <p className="text-lg md:text-xl font-flexa text-neutral-400 font-medium leading-relaxed max-w-xl">
              An <span className="font-bold text-[#8C52FF] uppercase tracking-widest font-bebas text-2xl relative top-[2px]">Operating System</span> for your capability — exploring the <span className="font-bold text-[#8C52FF] uppercase tracking-widest font-bebas text-2xl relative top-[2px]">4 Core Pillars</span> of how we bridge the gap between academic theory and <span className="font-bold text-[#8C52FF] uppercase tracking-widest font-bebas text-2xl relative top-[2px]">Corporate Expectations</span>.
            </p>
          </div>
          
          <div className="text-right lg:flex-shrink-0">
            <p className="text-[#8C52FF] font-bebas tracking-[0.2em] text-lg sm:text-xl mb-4 font-bold uppercase">
              The TechLearns CEL System
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[55px] font-bold font-flexa tracking-tight text-white leading-[1.1]">
              Built by Industry Leaders<br/>to Shape Future Engineers
            </h2>
          </div>
        </motion.div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {cards.map((card, i) => {
            // Apply theme colors and specific transforms based on index
            let transformClass = "";
            let colorClass = "";
            let iconClass = "";
            
            if (i === 1) { // 2nd card
              transformClass = "transform lg:-translate-y-8 lg:rotate-6 z-10 relative";
              colorClass = "bg-gradient-to-br from-[#8C52FF] to-[#CB6CE6] text-white shadow-[0_20px_50px_rgba(140,82,255,0.3)]";
              iconClass = "bg-white text-[#8C52FF]";
            } else if (i === 2) { // 3rd card
              transformClass = "transform lg:-rotate-3";
              colorClass = "bg-[#111] text-white border border-white/10 hover:border-[#8C52FF]/50";
              iconClass = "bg-white/10 text-[#CB6CE6]";
            } else { // 1st & 4th
              transformClass = "";
              colorClass = "bg-[#111] text-white border border-white/10 hover:border-[#8C52FF]/50";
              iconClass = "bg-white/10 text-[#CB6CE6]";
            }

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:shadow-lg ${colorClass} ${transformClass}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-10 ${iconClass}`}>
                  <Asterisk className="w-6 h-6" />
                </div>
                
                <h3 className="text-3xl font-bebas uppercase tracking-widest mb-6 leading-none pr-2">
                  {card.title}
                </h3>
                
                <ul className="space-y-4 mt-auto font-flexa">
                  {card.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 opacity-60 shrink-0"></div>
                      <span className="text-sm font-medium opacity-80 leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
