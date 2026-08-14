
import { FadeIn } from "../animations/FadeIn";

const testimonials = [
  {
    name: "Alex Mercer",
    role: "Computer Science Senior",
    text: "The sheer volume of deep-tech literature available physically is unparalleled. It's my absolute go-to sanctuary for researching systems architecture away from distracting screens.",
    rotation: "-rotate-2"
  },
  {
    name: "Sarah Chen",
    role: "Robotics Engineering",
    text: "Having access to classic hardware manuals and modern robotics journals in one physical space has completely transformed my thesis research.",
    rotation: "rotate-1"
  },
  {
    name: "David Kim",
    role: "Software Developer",
    text: "TechLearns Academy isn't just a learning platform; it's a focus environment. The rigorous curriculum and practical approach effortlessly saves me hours.",
    rotation: "-rotate-1"
  },
  {
    name: "Elena Rodriguez",
    role: "AI Researcher",
    text: "The curation here is phenomenal. It's incredibly refreshing to dive deep into complex ML concepts with structure rather than piecing it together from scattered docs.",
    rotation: "rotate-2"
  },
  {
    name: "James Wilson",
    role: "Data Scientist",
    text: "The combination of hands-on project work and theoretical depth is perfect. I was able to transition into a senior role within months of completing the track.",
    rotation: "-rotate-2"
  },
  {
    name: "Priya Patel",
    role: "UX/UI Engineer",
    text: "Even coming from a design background, the curriculum was accessible and incredibly empowering. I now build my own prototypes with full confidence.",
    rotation: "rotate-1"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#050A1F] flex flex-col items-center justify-center z-20 w-full overflow-hidden">

      {/* Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#8C52FF]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-[#CB6CE6]/15 blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Elegant Heading */}
        <FadeIn delay={0.2} direction="up" className="flex flex-col items-center mb-24 relative z-20 w-full text-center">
          <p className="text-[#5C2E93] font-bebas text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold drop-shadow-sm mb-4">
            Student Voices
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[72px] leading-[1.05] font-flexa font-medium text-white tracking-tight max-w-4xl flex items-center justify-center gap-3">
            WORD ON THE STREET
          </h2>
          <p className="font-flexa text-lg md:text-2xl font-medium text-[#D0C4E8] max-w-3xl text-center leading-relaxed mt-6">
            Don't just take our word for it. Here's what <span className="font-bebas tracking-[0.05em] text-[#caff00] uppercase">the students</span> have to say about their transformations.
          </p>
        </FadeIn>

        {/* Stacked Cards Layout */}
        <div className="flex flex-col items-center max-w-4xl mx-auto -space-y-4 md:-space-y-6 relative z-20 mt-10">
          {testimonials.map((test, i) => {
            const isAlt = i % 2 === 1;

            // Elegant gradient avatars
            const avatarGradients = [
              "bg-gradient-to-br from-[#8C52FF] to-[#5B2D91]",
              "bg-gradient-to-br from-[#CB6CE6] to-[#8C52FF]",
              "bg-gradient-to-br from-[#7237BC] to-[#3D1466]",
              "bg-gradient-to-br from-[#B174E7] to-[#7237BC]"
            ];
            const aGradient = avatarGradients[i % avatarGradients.length];

            const cardBg = isAlt
              ? "bg-[#5B2D91] border-[#7237BC] shadow-[0_15px_40px_-15px_rgba(202,255,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(202,255,0,0.15)]"
              : "bg-white border-[#CEA8F0]/30 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-15px_rgba(140,82,255,0.25)]";

            const nameColor = isAlt ? "text-white" : "text-[#0B1F3A]";
            const roleColor = isAlt ? "text-[#caff00]" : "text-[#8C52FF]";
            const textColor = isAlt ? "text-white/90" : "text-[#604B7E]";
            const badgeBg = isAlt
              ? "bg-black/20 border-white/10 text-white"
              : "bg-white/90 backdrop-blur-md border-[#CEA8F0]/40 text-[#0B1F3A]";

            return (
              <FadeIn key={i} delay={0.2 + i * 0.15} direction="up" className="w-full relative" style={{ zIndex: 10 + i }}>
                <div
                  className={`${cardBg} border rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-none p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${test.rotation} hover:scale-[1.02] hover:-translate-y-3 hover:rotate-0 transition-all duration-500 ease-out relative group`}
                >

                  {/* Avatar */}
                  <div className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-bebas text-4xl md:text-5xl font-bold shadow-lg ${aGradient} group-hover:scale-110 transition-transform duration-500`}>
                    {test.name.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col pr-0 md:pr-24">
                    <h3 className={`font-bebas text-3xl md:text-4xl tracking-wide ${nameColor} mb-1`}>{test.name}</h3>
                    <p className={`${roleColor} font-mono text-sm md:text-xs tracking-wider uppercase font-bold mb-4`}>{test.role}</p>
                    <p className={`font-flexa text-base md:text-[19px] font-medium ${textColor} leading-relaxed`}>
                      "{test.text}"
                    </p>
                  </div>

                  {/* Premium 5/5 Badge */}
                  <div className={`absolute -top-4 -right-2 md:-right-4 ${badgeBg} px-4 py-2 rounded-2xl flex items-center gap-1.5 border shadow-[0_5px_15px_rgba(0,0,0,0.2)] rotate-3 group-hover:-rotate-3 transition-transform duration-500`}>
                    <svg className="w-5 h-5 text-[#caff00] drop-shadow-[0_2px_4px_rgba(202,255,0,0.4)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-bebas text-xl md:text-2xl mt-1 tracking-wide">5/5</span>
                  </div>

                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
