import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '../animations/FadeIn';
import { SiGoogle, SiMeta, SiNetflix, SiApple, SiUber, SiAirbnb, SiTesla, SiStripe, SiAtlassian, SiSpotify, SiIntel, SiNvidia } from 'react-icons/si';

const allCompanies = [
  { name: "Google", Icon: SiGoogle, color: "#4285F4" },
  { name: "Meta", Icon: SiMeta, color: "#0668E1" },
  { name: "Netflix", Icon: SiNetflix, color: "#E50914" },
  { name: "Apple", Icon: SiApple, color: "#000000" },
  { name: "Uber", Icon: SiUber, color: "#000000" },
  { name: "Airbnb", Icon: SiAirbnb, color: "#FF5A5F" },
  { name: "Stripe", Icon: SiStripe, color: "#008CDD" },
  { name: "Atlassian", Icon: SiAtlassian, color: "#0052CC" },
  { name: "Spotify", Icon: SiSpotify, color: "#1DB954" },
  { name: "Intel", Icon: SiIntel, color: "#0071C5" },
  { name: "NVIDIA", Icon: SiNvidia, color: "#76B900" },
  { name: "Tesla", Icon: SiTesla, color: "#E31937" }
];

// Provide enough duplicate cards to cover large screens smoothly
const duplicatedCompanies = [...allCompanies, ...allCompanies, ...allCompanies];

export default function CareerOpportunities() {
  const scrollX = useRef(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [dimensions, setDimensions] = useState({ w: 1920, cx: 960 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        w: window.innerWidth,
        cx: window.innerWidth / 2
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const CARD_WIDTH = 280; // Card width + spacing
    const TOTAL_WIDTH = CARD_WIDTH * duplicatedCompanies.length;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Move 80 pixels per second (leftwards)
      scrollX.current -= (80 * delta) / 1000;

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        let x = (idx * CARD_WIDTH + scrollX.current) % TOTAL_WIDTH;
        if (x < -CARD_WIDTH) x += TOTAL_WIDTH;

        const cardCenter = x + CARD_WIDTH / 2;

        const dipDepth = 120;
        const y = dipDepth * (1 - Math.pow((cardCenter - dimensions.cx) / dimensions.cx, 2));

        const slope = -2 * dipDepth / Math.pow(dimensions.cx, 2) * (cardCenter - dimensions.cx);
        const physicsAngle = Math.atan(slope) * (180 / Math.PI);

        const organicRotations = [-1, 2, -0.5, 1.5];
        const finalAngle = physicsAngle + organicRotations[idx % organicRotations.length];

        card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${finalAngle}deg)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions.cx]);

  return (
    <section className="relative py-24 bg-[#F3E5F5] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#8C52FF]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <FadeIn delay={0.1} direction="up" className="flex flex-col items-center text-center">
          <p className="text-[#8C52FF] font-bebas text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold drop-shadow-sm mb-4">
            Alumni Outcomes
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[60px] leading-[1.05] font-flexa font-medium text-[#0B1F3A] tracking-tight max-w-4xl">
            Career Opportunities Across <span className="font-bebas text-transparent bg-clip-text bg-gradient-to-r from-[#7237BC] to-[#5B2D91] tracking-[0.05em] uppercase font-black">Leading Companies</span>
          </h2>
        </FadeIn>
      </div>

      {/* Dynamic Physics Canvas */}
      <div className="relative w-[100vw] left-1/2 -translate-x-1/2 h-[400px] overflow-hidden group mt-10">

        {/* Parabolic String */}
        <svg className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-10" preserveAspectRatio="none">
          <path d={`M 0 10 Q ${dimensions.cx} 250 ${dimensions.w} 10`} fill="none" stroke="#8C52FF" strokeOpacity="0.4" strokeWidth="2.5" />
        </svg>

        {/* Cards Container */}
        <div className="absolute top-0 left-0 w-full h-full">
          {duplicatedCompanies.map((company, idx) => {
            return (
              <div
                key={idx}
                ref={el => { cardsRef.current[idx] = el; }}
                className="absolute top-0 left-0 w-[280px] flex flex-col items-center pointer-events-auto origin-[50%_15px] will-change-transform"
              >

                {/* The Hanging Clip */}
                <div className="relative w-5 h-8 bg-white border border-[#CEA8F0]/60 rounded-md z-20 flex flex-col items-center pt-1.5 shadow-[0_2px_5px_rgba(140,82,255,0.2)] -mb-2">
                  <div className="w-2 h-2 bg-[#8C52FF]/10 rounded-full shadow-inner" />
                  <div className="absolute bottom-1.5 w-3 h-[2px] bg-[#8C52FF]/20 rounded-full" />
                </div>

                {/* The Card */}
                <div className="w-[200px] bg-white border border-[#CEA8F0]/30 rounded-2xl shadow-sm hover:shadow-[0_5px_15px_rgba(140,82,255,0.3)] hover:border-[#8C52FF]/50 transition-colors duration-300 relative z-10 flex flex-col items-center justify-center gap-3 py-6 px-4">
                  <company.Icon size={36} color={company.color} />
                  <span className="font-bebas text-2xl tracking-widest text-[#0B1F3A] opacity-90">{company.name}</span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
