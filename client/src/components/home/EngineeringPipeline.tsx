import React from 'react';
import { FadeIn } from '../animations/FadeIn';
import { Mail, Users, Ticket, FileSignature, Rocket } from 'lucide-react';

const pipelineSteps = [
  {
    id: 1,
    title: "INITIATION",
    subtitle: "Qualify TLET Entrance Exam",
    description: "A systematic and structured planning process for identifying, organizing, and establishing the steps necessary to qualify the Techlearns Entrance Test.",
    icon: <FileSignature size={80} className="text-[#1a1a1a]" strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "PLANNING",
    subtitle: "Get the Ticket to Virtual Cyber Hub",
    description: "The initial stage in the development process where you secure your pass to India's most prestigious virtual developer district and get assigned repository trackers.",
    icon: <Ticket size={80} className="text-[#1a1a1a]" strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "EXECUTION",
    subtitle: "Be Part of Hiring Drive",
    description: "An important process in the project cycle where you showcase your initial baseline scores and diagnostic reports to top-tier technical recruiters and industry sponsors.",
    icon: <Users size={80} className="text-[#1a1a1a]" strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "MONITORING",
    subtitle: "Get the Pre-Placement Offer Letter",
    description: "Validate your logical eligibility milestones with a formal intent of employment before kicking off your tech domain sprints to ensure it meets requirements.",
    icon: <Mail size={80} className="text-[#1a1a1a]" strokeWidth={1.5} />
  },
  {
    id: 5,
    title: "LAUNCH",
    subtitle: "Start Your Experiential Learning",
    description: "The stage in the project life cycle where the product is complete. Bridge the gap between theory and code, operating in team sprints and review gates.",
    icon: <Rocket size={80} className="text-[#1a1a1a]" strokeWidth={1.5} />
  }
];

const DotGrid = ({ className }: { className: string }) => (
  <svg width="80" height="80" viewBox="0 0 60 60" className={`absolute opacity-20 ${className}`}>
    <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="2.5" fill="#1a1a1a" />
    </pattern>
    <rect x="0" y="0" width="60" height="60" fill="url(#dots)" />
  </svg>
);

export default function EngineeringPipeline() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F3E5F5] text-[#0B1F3A]">

      {/* Decorative Corner Dots */}
      <DotGrid className="top-8 left-8 md:top-12 md:left-12 hidden sm:block" />
      <DotGrid className="top-8 right-8 md:top-12 md:right-12 hidden sm:block" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full relative z-10">

        {/* Header */}
        <FadeIn delay={0.1} direction="up" className="mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-widest text-[#0B1F3A]">
            YOUR ENGINEERING PIPELINE
          </h2>
          <p className="mt-4 text-xl font-medium max-w-2xl text-[#604B7E]">
            Pathway to your success from logical orientation to an active corporate launch.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto pb-20">

          {/* Central Vertical Axis */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#5B2D91] z-0 hidden md:block"></div>

          <div className="flex flex-col space-y-16 md:space-y-8">
            {pipelineSteps.map((step, index) => {
              const isLeftCircle = index % 2 === 0; // 0, 2, 4 have Circle on Left

              // Mobile renders card then circle (or just card stacked). We'll handle mobile differently.
              // On mobile, the vertical line can just be on the left.

              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center w-full min-h-[300px]">

                  {/* Horizontal Branch Line (Desktop only) */}
                  <div className="absolute left-[25%] right-[25%] top-1/2 transform -translate-y-1/2 h-[2px] bg-[#5B2D91] z-0 hidden md:block"></div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 mb-8 md:mb-0">
                    <FadeIn delay={0.1} direction={isLeftCircle ? 'right' : 'left'} className="flex justify-center w-full">
                      {isLeftCircle ? (
                        // Circle on Left
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[2px] border-[#5B2D91] bg-white flex items-center justify-center relative shadow-[0_10px_30px_rgba(91,45,145,0.2)]">
                          {/* Small decorative squares behind icon could go here if needed */}
                          {step.icon}
                        </div>
                      ) : (
                        // Card on Left
                        <div className="w-11/12 md:w-[90%] max-w-[450px] bg-white border-[2px] border-[#5B2D91] rounded-2xl p-8 relative shadow-xl">
                          <h3 className="text-xl md:text-2xl font-bold font-flexa mb-4 text-[#0B1F3A] uppercase tracking-wide">
                            0{step.id}. {step.subtitle}
                          </h3>
                          <p className="text-sm md:text-base font-medium opacity-80 text-[#604B7E] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </FadeIn>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
                    <FadeIn delay={0.1} direction={!isLeftCircle ? 'left' : 'right'} className="flex justify-center w-full">
                      {!isLeftCircle ? (
                        // Circle on Right
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-[2px] border-[#5B2D91] bg-white flex items-center justify-center relative shadow-[0_10px_30px_rgba(91,45,145,0.2)]">
                          {step.icon}
                        </div>
                      ) : (
                        // Card on Right
                        <div className="w-11/12 md:w-[90%] max-w-[450px] bg-white border-[2px] border-[#5B2D91] rounded-2xl p-8 relative shadow-xl">
                          <h3 className="text-xl md:text-2xl font-bold font-flexa mb-4 text-[#0B1F3A] uppercase tracking-wide">
                            0{step.id}. {step.subtitle}
                          </h3>
                          <p className="text-sm md:text-base font-medium opacity-80 text-[#604B7E] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </FadeIn>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
