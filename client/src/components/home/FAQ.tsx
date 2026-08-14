import React from 'react';
import { FadeIn } from '../animations/FadeIn';

const faqs = [
  {
    id: 1,
    question: "Do I need prior coding experience?",
    answer: "No! Our Foundations track starts from absolute zero. We build you up from the ground floor. Intermediate tracks do require some basic logic.",
    rotation: "rotate(-8deg)",
    x: 15,
    y: 8
  },
  {
    id: 2,
    question: "What's the total time commitment?",
    answer: "Expect to sweat it out for 15-20 hours a week for part-time, or 40+ hours if you're going full-time intensive. It's tough, but worth it.",
    rotation: "rotate(5deg)",
    x: 50,
    y: 2
  },
  {
    id: 3,
    question: "Are live sessions recorded?",
    answer: "Yes! Every single live session, workshop, and mentor code review is recorded and instantly drops into your Skill Passport.",
    rotation: "rotate(-6deg)",
    x: 88,
    y: 12
  },
  {
    id: 4,
    question: "Do you offer job placement?",
    answer: "Absolutely. We partner with top tech companies, run intensive mock interviews, and give you direct referrals. We don't stop until you're hired.",
    rotation: "rotate(7deg)",
    x: 22,
    y: 45
  },
  {
    id: 5,
    question: "How does the SkillOS platform work?",
    answer: "SkillOS is our proprietary learning engine. It tracks your commits, verifies your practice consistency, and builds your dynamic Skill Passport.",
    rotation: "rotate(-5deg)",
    x: 78,
    y: 52
  },
  {
    id: 6,
    question: "What if I fall behind in the curriculum?",
    answer: "We have built-in buffer weeks and dedicated 1-on-1 mentor office hours. If you put in the effort, we will ensure you cross the finish line.",
    rotation: "rotate(4deg)",
    x: 50,
    y: 70
  }
];

// Define the connections (strings) between the pins
const connections = [
  [1, 2],
  [2, 3],
  [1, 4],
  [2, 5],
  [3, 5],
  [4, 6],
  [5, 6],
  [2, 6]
];

const getPaperRadius = (index: number) => {
  const radiuses = [
    "2px 20px 4px 15px",
    "15px 3px 25px 2px",
    "4px 18px 2px 22px",
    "20px 4px 15px 3px"
  ];
  return radiuses[index % 4];
};

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 bg-[#F3E5F5] flex flex-col items-center justify-center z-20 w-full overflow-hidden">

      {/* Stylized Light Corkboard Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'multiply' }}
      ></div>
      <div className="absolute inset-0 bg-white opacity-40 pointer-events-none"></div>

      <div className="w-full mx-auto relative z-10">

        <FadeIn delay={0.2} direction="up" className="flex flex-col items-start mb-12 md:mb-16 relative z-20 w-full text-left px-4 lg:px-8 max-w-[1300px] mx-auto">
          <h4 className="text-[#8C52FF] font-bebas tracking-widest text-xl md:text-2xl uppercase mb-4 drop-shadow-sm">
            Got Questions?
          </h4>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-[#0B1F3A] mb-6 drop-shadow-sm">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-flexa text-lg md:text-2xl font-medium text-[#604B7E] max-w-3xl leading-relaxed">
            Everything you need to know about our programs, the commitment, and how we guarantee your success.
          </p>
        </FadeIn>

        {/* --- DESKTOP LAYOUT (Scattered Detective Board) --- */}
        <div className="hidden lg:block relative w-full max-w-[1500px] mx-auto h-[950px] mt-6">

          {/* SVG Strings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ filter: 'drop-shadow(0px 8px 4px rgba(0,0,0,0.15))' }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {connections.map(([id1, id2], i) => {
              const node1 = faqs.find(f => f.id === id1);
              const node2 = faqs.find(f => f.id === id2);
              if (!node1 || !node2) return null;

              const sag = 8; // % droop down
              const dx = node2.x - node1.x;
              const dy = node2.y - node1.y;
              const cx1 = node1.x + dx * 0.33;
              const cy1 = node1.y + dy * 0.33 + sag;
              const cx2 = node1.x + dx * 0.67;
              const cy2 = node1.y + dy * 0.67 + sag;

              return (
                <path
                  key={i}
                  d={`M ${node1.x} ${node1.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${node2.x} ${node2.y}`}
                  stroke="#8C52FF"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="4 2"
                  className="opacity-80"
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </svg>

          {faqs.map((faq, i) => {
            const isAlt = i % 2 !== 0;
            const bgClass = isAlt ? "bg-[#5B2D91]" : "bg-[#FFFDF5]";
            const qLabelClass = isAlt ? "text-[#caff00]" : "text-[#5B2D91]";
            const headingClass = isAlt ? "text-white" : "text-[#1A1110]";
            const textClass = isAlt ? "text-[#E6D5F5]" : "text-[#4A3D3C]";

            return (
              <FadeIn
                key={i}
                delay={0.2 + i * 0.1}
                direction="up"
                className={`absolute z-20`}
                style={{
                  left: `${faq.x}%`,
                  top: `${faq.y}%`
                }}
              >
                <div style={{ transform: `translate(-50%, 0) ${faq.rotation}` }} className="w-[340px]">
                  {/* Pinned Card */}
                  <div
                    className={`${bgClass} p-7 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col gap-4 group min-h-[220px] cursor-pointer hover:z-50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300`}
                    style={{ borderRadius: getPaperRadius(i) }}
                  >

                    {/* The Push Pin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#caff00] border border-black/20 shadow-[0_5px_10px_rgba(0,0,0,0.6)] z-30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/60 absolute top-1 left-1"></div>
                    </div>

                    {/* Subtle paper texture effect */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-sm"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'multiply' }}></div>

                    <div className="flex flex-col flex-grow relative z-10 pt-2">
                      <div className="flex items-start gap-3 mb-3">
                        <span className={`${qLabelClass} font-bebas text-2xl mt-0.5 leading-none`}>Q{i + 1}.</span>
                        <h3 className={`font-bebas text-[26px] tracking-wide ${headingClass} leading-[1.1]`}>
                          {faq.question}
                        </h3>
                      </div>
                      <p className={`font-flexa text-[15px] font-medium ${textClass} leading-relaxed pl-9`}>
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>


        {/* --- MOBILE/TABLET LAYOUT (Grid) --- */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10 max-w-3xl mx-auto relative z-20">
          {faqs.map((faq, i) => {
            const isAlt = i % 2 !== 0;
            const bgClass = isAlt ? "bg-[#5B2D91]" : "bg-[#FFFDF5]";
            const qLabelClass = isAlt ? "text-[#caff00]" : "text-[#5B2D91]";
            const headingClass = isAlt ? "text-white" : "text-[#1A1110]";
            const textClass = isAlt ? "text-[#E6D5F5]" : "text-[#4A3D3C]";

            return (
              <FadeIn key={`mobile-${i}`} delay={0.2 + i * 0.1} direction="up" className="w-full relative">
                <div
                  className={`${bgClass} p-8 shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex flex-col gap-4 relative min-h-[220px]`}
                  style={{ transform: faq.rotation, borderRadius: getPaperRadius(i) }}
                >
                  {/* The Push Pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#caff00] border border-black/20 shadow-[0_5px_10px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60 absolute top-1 left-1"></div>
                  </div>

                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-sm"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'multiply' }}></div>

                  <div className="flex flex-col flex-grow relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`${qLabelClass} font-bebas text-2xl mt-0.5 leading-none`}>Q{i + 1}.</span>
                      <h3 className={`font-bebas text-[26px] tracking-wide ${headingClass} leading-[1.1]`}>
                        {faq.question}
                      </h3>
                    </div>
                    <p className={`font-flexa text-[15px] font-medium ${textClass} leading-relaxed pl-9`}>
                      {faq.answer}
                    </p>
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
