import { FluidArrowRight } from '@/utils/fluid_arrow';
import { FadeIn } from '../animations/FadeIn';

const cards = [
  {
    title: "GET HIRED\nFIRST.",
    description: "By Top-Tier MNCs & Big Consulting Firms. Step into roles that define the global financial landscape.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80",
    isAccent: false,
    imagePosition: 'bottom'
  },
  {
    title: "GLOBALLY-ALIGNED\nSKILLS.",
    description: "Get Trained In Globally-Aligned Skills GCCs Actually Need. Master the tools and frameworks that matter.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    isAccent: true,
    imagePosition: 'top'
  },
  {
    title: "TOP-TIER DREAM\nORGANIZATION.",
    description: "Build Career In Your Top-Tier Dream Organization. We prepare you to lead and innovate on day one.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    isAccent: false,
    imagePosition: 'bottom'
  }
];

export default function PreparationSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F3E5F5] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#8C52FF]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-[#CB6CE6]/10 blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Header Section */}
        <FadeIn delay={0.1} direction="up" className="mb-16 w-full flex flex-col items-start justify-start">
          <div className="text-left max-w-5xl">
            <p className="text-[#7539BE] font-bebas text-xl sm:text-2xl tracking-[0.15em] mb-4 uppercase drop-shadow-md">
              At TechLearns Academy
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[72px] leading-[1.05] font-flexa font-medium text-[#0B1F3A] tracking-tight">
              We prepare <span className="font-bebas text-[#7237BC] tracking-[0.05em] uppercase font-black">Leaders</span><br className="hidden md:block" />
              to achieve the <span className="font-bebas text-[#5B2D91] tracking-[0.05em] uppercase font-black">Next Elevation</span>
            </h2>
            <p className="mt-8 text-xl sm:text-2xl text-[#604B7E] font-medium max-w-3xl font-flexa leading-relaxed">
              Delivering impact <span className="text-[#0B1F3A] font-bold">for their organisations</span> and <span className="text-[#0B1F3A] font-bold">for themselves</span>.
            </p>
          </div>
        </FadeIn>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, i) => (
            <FadeIn
              key={i}
              delay={0.2 + (i * 0.15)}
              direction="up"
              className={`flex flex-col ${card.isAccent ? 'bg-[#5B2D91] shadow-[0_20px_50px_rgba(91,45,145,0.4)] scale-100 lg:scale-[1.02]' : 'bg-white shadow-xl border border-[#F3E5F5]'} p-6 sm:p-8 xl:p-10 transition-all duration-300 group rounded-2xl`}
            >
              {card.imagePosition === 'top' && (
                <div className="w-full h-[250px] sm:h-[300px] lg:h-[250px] xl:h-[300px] mb-8 overflow-hidden relative rounded-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex justify-between items-start gap-4 mb-6">
                <h3 className={`text-3xl xl:text-5xl font-bebas uppercase tracking-[2px] leading-[0.9] whitespace-pre-line font-black ${card.isAccent ? 'text-white' : 'text-[#0B1F3A]'}`}>
                  {card.title}
                </h3>
                <button className={`w-12 h-12 xl:w-14 xl:h-14 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg ${card.isAccent ? 'bg-[#caff00] text-black' : 'bg-[#caff00] text-black'}`}>
                  <FluidArrowRight className="w-6 h-6 xl:w-7 xl:h-7 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              </div>

              <p className={`text-sm xl:text-base leading-relaxed font-flexa font-medium mb-8 flex-1 ${card.isAccent ? 'text-white/90' : 'text-[#604B7E]'}`}>
                {card.description}
              </p>

              {card.imagePosition === 'bottom' && (
                <div className="w-full h-[250px] sm:h-[300px] lg:h-[250px] xl:h-[300px] mt-auto overflow-hidden relative rounded-xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
