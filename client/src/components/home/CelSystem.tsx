
import { FadeIn } from '@/components/animations/FadeIn';
import { FluidArrowRight } from '@/utils/fluid_arrow';

const segments = [
  {
    id: 1,
    title: "Best in Class Industry Instructors",
    bgColor: "#5B2D91", // purpleDark
    transformClass: "lg:rotate-6 lg:-translate-y-8",
    description: "Learn from engineering leads and architects who build production systems at scale, bringing real-world blueprints directly into the classroom."
  },
  {
    id: 2,
    title: "Corporate Workflow Curricula",
    bgColor: "#7237BC", // purple
    transformClass: "lg:-rotate-6 lg:translate-y-12",
    description: "No static slides. Sprints, GitHub PR reviews, code standards, CI tests, and documentation gates are baked into your daily schedule."
  },
  {
    id: 3,
    title: "Specialised High-Demand Tech Tracks",
    bgColor: "#8C52FF", // purpleLight
    transformClass: "lg:rotate-6 lg:-translate-y-8",
    description: "Focus on AI Engineering, Cloud Platform Engineering, MLOps, Cybersecurity SOC operations, and Modern Analytics rather than generic code paths."
  },
  {
    id: 4,
    title: "Individual Skill Pathways",
    bgColor: "#B174E7", // amethyst
    transformClass: "lg:-rotate-6 lg:translate-y-12",
    description: "Get assigned your own industry practitioner for PR review gates, helping you review architecture trade-offs and code structure weekly."
  },
  {
    id: 5,
    title: "Engineering Team Ritual Immersion",
    bgColor: "#CEA8F0", // mauve
    transformClass: "lg:rotate-6 lg:-translate-y-8",
    description: "Operate in structured stand-ups, retro reviews, and cross-functional incident simulations to acquire the soft execution habits of real engineering leads."
  }
];

export default function CelSystem() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F3E5F5]">

      {/* Textured Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #FFFFFF 0%, #F0E1F9 60%, #E0C3F2 100%)'
        }}
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-40"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header */}
        <FadeIn delay={0.1} direction="up" className="mb-20 flex flex-col items-start justify-start text-left">
          <p className="text-[#7237BC] font-bebas tracking-[0.2em] uppercase text-xl mb-6 font-bold drop-shadow-sm">
            THE TECHLEARNS CEL SYSTEM
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0B1F3A] tracking-tight mb-8 font-flexa leading-[1.05]">
            Built by Industry Leaders to<br />Shape Future Engineers
          </h2>
          <p className="text-[#604B7E] text-lg sm:text-xl max-w-3xl font-medium leading-relaxed">
            An <span className="font-bebas text-[#5B2D91] text-[22px] tracking-wide uppercase drop-shadow-sm">operating system</span> for your capability — exploring the <span className="font-bebas text-[#5B2D91] text-[22px] tracking-wide uppercase drop-shadow-sm">5 core pillars</span> of how we bridge the gap between academic theory and <span className="font-bebas text-[#5B2D91] text-[22px] tracking-wide uppercase drop-shadow-sm">corporate expectations</span>.
          </p>
        </FadeIn>

        {/* Fanned Cards Layout */}
        <div className="mt-32 pb-32 flex justify-center items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-0 lg:-space-x-12 xl:-space-x-16 perspective-1000">
          {segments.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={0.1 * index}
              direction="up"
              className="z-10 hover:z-50"
            >
              <div
                className={`
                  w-[280px] md:w-[300px] xl:w-[320px] min-h-[420px] rounded-2xl p-8 flex flex-col
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-white/20
                  transform transition-all duration-500 ease-out origin-bottom
                  ${item.transformClass}
                  hover:!rotate-0 hover:!-translate-y-12 hover:!scale-105 hover:!translate-x-0 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  cursor-pointer
                `}
                style={{ backgroundColor: item.bgColor }}
              >
                {/* Custom Decorative Sticker Accent */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg rotate-12 text-[#5B2D91]">
                  <FluidArrowRight />
                </div>

                <h3 className="text-3xl font-black text-white font-flexa tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>

                <div className="w-full h-[3px] bg-white/30 rounded-full mb-6 mt-auto"></div>

                <p className="text-white/90 font-medium text-lg leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
