import { FadeIn } from '@/components/animations/FadeIn';

const differences = [
  {
    id: 1,
    title: "Corporate Work Rituals Embedded in Every Course",
    description: (
      <>
        Stand-ups, sprint planning, tickets, code and design reviews, <span className="font-bebas text-white text-xl tracking-wider uppercase">documentation, quality gates</span>, demos and retrospectives aren't case studies you read about — they're how you'll <span className="font-bebas text-white text-xl tracking-wider uppercase">actually work</span>, every week.
      </>
    )
  },
  {
    id: 2,
    title: "Mandatory Industry Exposure",
    description: (
      <>
        Expert sessions, workplace visits, <span className="font-bebas text-white text-xl tracking-wider uppercase">employer challenge briefs</span>, project reviews, internships and recruiter interactions are <span className="font-bebas text-white text-xl tracking-wider uppercase">scheduled curriculum milestones</span>, not optional events bolted onto the syllabus.
      </>
    )
  },
  {
    id: 3,
    title: "Competition as Pedagogy",
    description: (
      <>
        Hackathons, AI buildathons, datathons, cybersecurity CTFs, cloud challenges, bug bashes and demo days are built directly into your learning calendar — because <span className="font-bebas text-white text-xl tracking-wider uppercase">pressure, deadlines and public proof</span> build capability faster than passive study.
      </>
    )
  },
  {
    id: 4,
    title: "One Skill → One Proof",
    description: (
      <>
        Every important competency you learn generates an artifact, assessment, review, or <span className="font-bebas text-white text-xl tracking-wider uppercase">verified performance record</span> — all captured inside your <span className="font-bebas text-[#caff00] text-xl tracking-wider uppercase drop-shadow-md">Skill Passport</span>.
      </>
    )
  }
];

export default function TechlearnsDifference() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#05010a]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
         <div className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,10,80,0.2)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <FadeIn delay={0.1} direction="up" className="mb-16 sm:mb-24 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <p className="text-[#caff00] font-bebas text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold drop-shadow-md">
              The TechLearns Difference
            </p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[72px] leading-[1.05] font-flexa font-medium text-white tracking-tight max-w-4xl">
            Four things you won't find in a <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-[0.05em] uppercase font-black">typical course</span>
          </h2>
        </FadeIn>

        {/* 4 Vertical Straps (Grid Layout with Gaps) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 w-full relative">
          {differences.map((item, index) => {
            const isAlternate = index % 2 !== 0;
            return (
            <div 
              key={item.id} 
              className={`flex flex-col p-8 lg:p-10 xl:p-12 relative overflow-hidden rounded-3xl min-h-[500px] lg:min-h-[650px] transition-colors duration-500
                ${isAlternate ? 'bg-[#5B2D91] border border-white/5 shadow-2xl backdrop-blur-sm' : 'bg-transparent'}
              `}
            >
              
              {/* Huge Watermark Number */}
              <div className="absolute top-0 right-[-10px] lg:top-[-3px] lg:right-[-10px] text-[#FFFAFA] opacity-[0.15] font-bebas text-[200px] lg:text-[280px] leading-[0.8] tracking-tighter select-none pointer-events-none z-0">
                0{item.id}
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl xl:text-[32px] font-black text-white font-flexa leading-[1.1] mb-8 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-flexa text-[17px] xl:text-[19px] leading-relaxed mix-blend-screen">
                  {item.description}
                </p>
              </div>

            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
