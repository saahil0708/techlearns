
import { FadeIn } from '../animations/FadeIn';

const steps = [
  { id: '01', title: 'Enroll', sub: 'begin. setup. onboard.' },
  { id: '02', title: 'Learn', sub: 'syntax. logic. structure.' },
  { id: '03', title: 'Practice', sub: 'commits. debugging. daily.' },
  { id: '04', title: 'Build', sub: 'projects. scalable. live.' },
  { id: '05', title: 'Certified', sub: 'verified. tested. ready.' },
  { id: '06', title: 'Career', sub: 'interviews. offers. hired.' }
];

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <path d="M50 0 C50 35, 65 50, 100 50 C65 50, 50 65, 50 100 C50 65, 35 50, 0 50 C35 50, 50 35, 50 0 Z" />
  </svg>
);

export default function LearningJourney() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050A1F] overflow-hidden font-sans">

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[#8C52FF] opacity-[0.15] blur-[150px] rounded-full pointer-events-none"></div>



      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

        <FadeIn delay={0.1} direction="up" className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h4 className="text-[#caff00] font-bebas tracking-widest text-xl uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#caff00]"></span>
            The Pipeline
            <span className="w-8 h-px bg-[#caff00]"></span>
          </h4>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wide text-white mb-4 drop-shadow-lg">
            YOUR LEARNING JOURNEY
          </h2>
          <p className="font-flexa text-lg font-medium text-white/70 max-w-2xl mx-auto">
            A systematic and structured planning process guiding you from <span className="font-bebas text-2xl text-[#8C52FF] tracking-wider relative top-[2px] drop-shadow-[0_0_8px_rgba(140,82,255,0.8)]">ABSOLUTE ZERO</span> to an <span className="font-bebas text-2xl text-[#8C52FF] tracking-wider relative top-[2px] drop-shadow-[0_0_8px_rgba(140,82,255,0.8)]">INDUSTRY-READY ENGINEER</span>.
          </p>
        </FadeIn>

        {/* --- DESKTOP: Sine Wave Pathway --- */}
        <div className="hidden lg:block relative w-full aspect-[10/3] max-h-[400px] mx-auto">

          {/* Sine Wave SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            {/* The Path: 6 nodes spaced at 50, 230, 410, 590, 770, 950 */}
            <path
              d="M -20 150 C 20 150, 20 50, 50 50 C 140 50, 140 250, 230 250 C 320 250, 320 50, 410 50 C 500 50, 500 250, 590 250 C 680 250, 680 50, 770 50 C 860 50, 860 250, 950 250 C 980 250, 980 150, 1020 150"
              fill="none"
              stroke="#8C52FF"
              strokeWidth="3"
              className="drop-shadow-[0_0_10px_rgba(140,82,255,0.8)]"
            />
          </svg>

          {/* Nodes and Text */}
          <div className="absolute inset-0 w-full h-full">
            {steps.map((step, i) => {
              const isPeak = i % 2 === 0;
              const xPos = 5 + i * 18;
              const yPos = isPeak ? 16.66 : 83.33;

              return (
                <div
                  key={step.id}
                  className="absolute"
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                >
                  <FadeIn delay={0.1 + i * 0.1} direction={isPeak ? 'down' : 'up'}>

                    {/* The Sparkle Node */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-[#caff00] z-20 drop-shadow-[0_0_15px_rgba(202,255,0,0.6)]">
                      <SparkleIcon className="w-full h-full" />
                    </div>

                    {/* The Text Block */}
                    <div
                      className={`absolute w-40 flex flex-col items-center text-center -translate-x-1/2 ${isPeak ? 'top-12' : 'bottom-12'
                        }`}
                    >
                      <span className="font-bebas text-5xl text-white leading-none mb-1 tracking-wider drop-shadow-md">
                        {step.id}.
                      </span>
                      <h3 className="font-bebas text-[32px] tracking-wide text-white leading-none mb-2 drop-shadow-md">
                        {step.title}
                      </h3>
                      <p className="font-flexa text-sm font-medium text-white/60 leading-snug px-2">
                        {step.sub}
                      </p>
                    </div>

                  </FadeIn>
                </div>
              )
            })}
          </div>
        </div>

        {/* --- MOBILE/TABLET: Vertical Layout --- */}
        <div className="lg:hidden flex flex-col gap-12 relative max-w-sm mx-auto mt-10">

          {/* Vertical Wavy Line Background */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[3px] bg-[#8C52FF] opacity-80 z-0 shadow-[0_0_10px_rgba(140,82,255,0.8)]"></div>

          {steps.map((step, i) => (
            <FadeIn key={step.id} delay={0.1 + i * 0.1} direction="left" className="relative z-10 flex flex-row items-center gap-6">

              <div className="w-[80px] h-[80px] rounded-full bg-[#050A1F] border border-[#8C52FF]/30 flex items-center justify-center flex-shrink-0 z-10 relative text-[#caff00] shadow-[0_0_15px_rgba(202,255,0,0.2)]">
                <SparkleIcon className="w-14 h-14 drop-shadow-[0_0_10px_rgba(202,255,0,0.6)]" />
              </div>

              <div className="flex-grow flex flex-col items-start text-left bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
                <span className="font-bebas text-3xl text-white leading-none mb-1">
                  {step.id}.
                </span>
                <h3 className="font-bebas text-2xl tracking-wide text-[#caff00] leading-none mb-2">
                  {step.title}
                </h3>
                <p className="font-flexa text-sm font-medium text-white/70 leading-snug">
                  {step.sub}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
