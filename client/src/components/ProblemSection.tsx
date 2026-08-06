import { X } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const PROBLEM_CARDS = [
  {
    title: "ILLUSION OF WORK",
    description: "Endless tutorials create a false sense of progress without actual skill acquisition.",
    items: ["Watched 300 hours", "Completed assignments"]
  },
  {
    title: "FALSE SECURITY",
    description: "Relying on course certificates that hold zero weight in the real job market.",
    items: ["Got certificate"]
  },
  {
    title: "THE DECAY",
    description: "Theoretical knowledge fades rapidly when not applied to real-world engineering.",
    items: ["Forgot everything"]
  },
  {
    title: "THE REALITY",
    description: "Facing recruiters empty-handed without tangible proof of your capabilities.",
    items: ["No portfolio", "No recruiter proof"]
  }
];

export default function ProblemSection() {
  const bgColors = ['bg-[#1e1136]', 'bg-[#2a174a]', 'bg-[#371f5e]', 'bg-[#452673]'];
  const textColors = ['text-[#1e1136]', 'text-[#2a174a]', 'text-[#371f5e]', 'text-[#452673]'];

  return (
    <section className="py-24 sm:py-32 bg-[#252525] relative overflow-hidden flex flex-col items-center justify-center">

      {/* Background glow indicating a 'problem/warning' area but kept premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-purple-600/10 blur-[150px] rounded-[100%] pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Title */}
        <FadeIn delay={0.1} direction="up" className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-start mb-16 w-full">
          {/* Left: Star + 18px Heading */}
          <div className="flex items-center gap-3 shrink-0 lg:pt-1">
            <span className="text-[44px] font-serif text-purple-600 leading-[0] translate-y-[6px] drop-shadow-md">*</span>
            <span className="text-[36px] tracking-widest font-bebas uppercase text-gray-300 font-bold">
              THE REALITY
            </span>
          </div>

          {/* Right: 64px Subheading */}
          <div className="flex-1 max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-[56px] text-white leading-[1.1] uppercase font-bold">
              Most Students Struggle After Completing Courses
            </h2>
          </div>
        </FadeIn>

        {/* Overlapping Cards Layout */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-stretch lg:-space-x-8 xl:-space-x-12 mt-16 max-w-7xl mx-auto">
          {PROBLEM_CARDS.map((card, i) => (
            <FadeIn
              key={i}
              delay={0.2 + (i * 0.15)}
              direction="up"
              className="relative flex flex-col flex-1 my-6 lg:my-0 transition-transform duration-500 hover:-translate-y-4"
              style={{ zIndex: i + 10 }}
            >
              {/* Title Above Card */}
              <h3 className={`text-base sm:text-lg xl:text-3xl relative top-6 font-bebas text-white/90 uppercase tracking-widest mb-4 pl-4 lg:pl-12 xl:pl-16 z-20 font-bold`}>
                {card.title}
              </h3>

              <div
                className="relative flex-1 min-h-[200px] lg:min-h-[280px] w-full"
                style={{ filter: 'drop-shadow(-15px 0 25px rgba(0,0,0,0.6))' }}
              >
                {/* Desktop Number protruding to the left */}
                <div className={`hidden lg:block absolute left-[-60px] xl:left-[-75px] top-1/2 -translate-y-1/2 text-[250px] xl:text-[300px] font-black ${textColors[i]} leading-[0.75] select-none tracking-tighter z-0`}>
                  {i + 1}
                </div>

                {/* Mobile Number */}
                <div className={`lg:hidden absolute -top-12 left-6 text-[120px] font-black ${textColors[i]} leading-[0.75] select-none z-0`}>
                  {i + 1}
                </div>

                {/* Main Card Body */}
                <div className={`relative ${bgColors[i]} w-full h-full rounded-[2rem] p-6 sm:p-8 xl:p-10 flex flex-col justify-center pl-6 lg:pl-12 xl:pl-16 pr-6 lg:pr-[5.5rem] z-10`}>
                  
                  {/* Paragraph */}
                  <p className="text-sm xl:text-base text-gray-300 text-left mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Underline Divider */}
                  <div className="w-full border-b border-white/10 mb-5 xl:mb-6"></div>

                  <ul className="space-y-4 xl:space-y-6">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 xl:gap-4">
                        <div className="flex-shrink-0">
                          <X className="w-5 h-5 xl:w-6 xl:h-6 text-red-400" strokeWidth={3} />
                        </div>
                        <span className="text-base xl:text-lg sm:text-xl font-bold text-gray-200">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Concluding Statement */}
        {/* <div className="text-center flex flex-col items-center gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 uppercase tracking-widest font-black">
            The Industry Doesn't Hire <span className="line-through decoration-red-500/50">Certificates.</span>
          </h3>
          <h2 className="text-5xl sm:text-[110px] md:text-[130px] lg:text-[9vw] uppercase tracking-tighter leading-[0.9] text-white font-black">
            It Hires{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              Evidence.
            </span>
          </h2>
        </div> */}

      </div>
    </section>
  );
}
