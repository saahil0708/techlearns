"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const TIMELINE_PHASES = [
  { id: '01', title: 'ASSESS', description: 'Evaluate your current skill level, set baseline metrics, and map out your individualized corporate learning trajectory to guarantee growth.' },
  { id: '02', title: 'LEARN', description: 'Absorb industry-standard engineering concepts, modern tech stacks, and architectural best practices from senior engineering mentors.' },
  { id: '03', title: 'PRACTICE', description: 'Apply theoretical knowledge in safe, robust sandbox environments. Write raw code, break things, and master the art of debugging.' },
  { id: '04', title: 'BUILD', description: 'Develop production-ready features for real-world applications within a highly structured agile squad, identical to top tech firms.' },
  { id: '05', title: 'OPERATE', description: 'Deploy your code to live cloud environments, monitor performance metrics, and manage actual CI/CD pipelines under pressure.' },
  { id: '06', title: 'EXPERIENCE', description: 'Navigate sprint planning sessions, daily stand-ups, aggressive code reviews, and cross-functional team dynamics.' },
  { id: '07', title: 'COMPETE', description: 'Participate in intense internal hackathons and performance benchmarks to push your engineering limits against your peers.' },
  { id: '08', title: 'VALIDATE', description: 'Undergo rigorous technical assessments, mock interviews, and peer reviews to officially certify your newly acquired skills.' },
  { id: '09', title: 'HIRED', description: 'Graduate with a verified Skill Passport, a robust real-world portfolio, and the exact experience top tech companies demand.' },
];

export default function CorporateTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 400vh gives us plenty of scrolling distance for 9 items
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The angle between each item on the circle
  const anglePerItem = 20; // 20 degrees looks nice and spaced out
  const totalAngle = (TIMELINE_PHASES.length - 1) * anglePerItem;

  // As scroll goes from 0 to 1, the circle rotates from 0 to -totalAngle
  const circleRotation = useTransform(scrollYProgress, [0, 1], [0, -totalAngle]);

  return (
    <section ref={containerRef} className="h-[600vh] bg-[#FFFAFA] relative border-t border-black/5">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#FFFAFA]">

        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 z-30 pointer-events-none">
          <div className="max-w-[1300px] mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-start w-full">

              {/* Left: Star + 18px Heading */}
              <div className="flex items-center gap-3 shrink-0 lg:pt-3">
                <span className="text-[44px] font-serif text-purple-600 leading-[0] translate-y-[6px] drop-shadow-md">*</span>
                <span className="text-[18px] sm:text-[20px] tracking-widest uppercase text-gray-500 font-bold">
                  HOW IT WORKS
                </span>
              </div>

              {/* Right: 64px Subheading */}
              <div className="flex-1 max-w-4xl">
                <h2
                  className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] tracking-tight uppercase font-black"
                  style={{ color: '#111827' }}
                >
                  CORPORATE EXPERIENCE <br className="hidden lg:block" />
                  LEARNING
                </h2>
              </div>

            </div>
          </div>
        </div>

        {/* Giant Circle Container */}
        <motion.div
          className="absolute top-1/2 left-0 w-[140vh] h-[140vh] rounded-full border border-black/5 -translate-x-[65%] -translate-y-1/2 flex items-center justify-center pointer-events-none"
          style={{ rotate: circleRotation }}
        >
          {TIMELINE_PHASES.map((phase, i) => {
            const rotation = i * anglePerItem;
            const itemProgress = i / (TIMELINE_PHASES.length - 1);

            let opInput = [itemProgress - 0.1, itemProgress, itemProgress + 0.1];
            let opOutput = [0.2, 1, 0.2];
            let scaleOutput = [0.6, 1.2, 0.6];

            if (i === 0) {
              opInput = [0, 0.1, 1];
              opOutput = [1, 0.2, 0.2];
              scaleOutput = [1.2, 0.6, 0.6];
            } else if (i === TIMELINE_PHASES.length - 1) {
              opInput = [0, itemProgress - 0.1, 1];
              opOutput = [0.2, 0.2, 1];
              scaleOutput = [0.6, 0.6, 1.2];
            }

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, opInput, opOutput);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, opInput, scaleOutput);

            return (
              <div
                key={phase.id}
                className="absolute top-1/2 left-1/2 w-48 h-12 -ml-24 -mt-6 origin-center flex items-center justify-end pr-8"
                style={{
                  transform: `rotate(${rotation}deg) translateX(70vh)`
                }}
              >
                <motion.div className="flex items-center gap-6" style={{ opacity, scale }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                  <span className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter">
                    {phase.id}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Text Display Container (Right Side) */}
        <div className="absolute top-[55%] -translate-y-1/2 left-0 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-[1300px] mx-auto w-full flex justify-end">
            <div className="w-full lg:w-[60%] xl:w-[55%] relative h-[600px] flex flex-col justify-center items-center pointer-events-auto lg:-translate-x-28 xl:-translate-x-40">
              
              {/* Globe Background */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <Image 
                  src="/images/earth visual map.png" 
                  alt="Earth visual map" 
                  width={1000} 
                  height={1000} 
                  className="w-full h-auto object-contain scale-[1.4] lg:scale-[1.7] opacity-60"
                  priority
                />
              </div>

              {/* Dynamic Glass Cards */}
              <div className="relative w-full max-w-[550px] h-[200px]">
                {TIMELINE_PHASES.map((phase, i) => {
                  const itemProgress = i / (TIMELINE_PHASES.length - 1);
                  
                  let textOpInput = [itemProgress - 0.04, itemProgress - 0.01, itemProgress + 0.01, itemProgress + 0.04];
                  let textOpOutput = [0, 1, 1, 0];
                  
                  if (i === 0) {
                    textOpInput = [0, 0.01, 0.04, 1];
                    textOpOutput = [1, 1, 0, 0];
                  } else if (i === TIMELINE_PHASES.length - 1) {
                    textOpInput = [0, itemProgress - 0.04, itemProgress - 0.01, 1];
                    textOpOutput = [0, 0, 1, 1];
                  }

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const opacity = useTransform(scrollYProgress, textOpInput, textOpOutput);
                  
                  let yInput = [itemProgress - 0.04, itemProgress, itemProgress + 0.04];
                  let yOutput = [40, 0, -40];
                  
                  if (i === 0) {
                    yInput = [0, 0.04, 1];
                    yOutput = [0, -40, -40];
                  } else if (i === TIMELINE_PHASES.length - 1) {
                    yInput = [0, itemProgress - 0.04, 1];
                    yOutput = [40, 40, 0];
                  }

                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const y = useTransform(scrollYProgress, yInput, yOutput);

                  return (
                    <motion.div 
                      key={phase.id}
                      className="absolute inset-0 flex flex-col justify-center w-full"
                      style={{ opacity, y }}
                    >
                      <div className="w-full bg-white/70 backdrop-blur-xl rounded-[28px] border border-white/60 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(147,51,234,0.15)] flex items-center gap-6 group hover:shadow-[0_30px_70px_-15px_rgba(147,51,234,0.25)] transition-shadow duration-500">
                        
                        {/* Icon */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-gradient-to-br from-purple-50 to-white flex items-center justify-center border border-purple-100 shadow-[inset_0_2px_10px_rgba(168,85,247,0.1)] relative">
                          <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-[1.15]"></div>
                          <ClipboardCheck className="text-purple-600 w-8 h-8 sm:w-10 sm:h-10 opacity-80" strokeWidth={1.5} />
                        </div>
                        
                        {/* Vertical Line */}
                        <div className="w-[2px] h-24 bg-purple-200 shrink-0"></div>
                        
                        {/* Content */}
                        <div className="flex-1 flex flex-col gap-1.5">
                          <span className="text-purple-600 tracking-[0.2em] text-sm sm:text-base uppercase font-bold">
                            PHASE {phase.id}
                          </span>
                          <h3 className="text-3xl sm:text-[40px] text-gray-900 tracking-tight uppercase leading-none font-black">
                            {phase.title}
                          </h3>
                          <p className="text-sm sm:text-xs text-gray-600 mt-2 leading-relaxed max-w-[280px]">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
