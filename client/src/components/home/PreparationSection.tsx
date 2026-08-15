import { FluidArrowRight } from '@/utils/fluid_arrow';
import { FadeIn } from '../animations/FadeIn';

const cards = [
  {
    title: "INDUSTRY-ORIENTED\nCURRICULUM.",
    description: "An updated curriculum engineered to teach you only what the industry demands.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    isAccent: false,
    imagePosition: 'bottom'
  },
  {
    title: "AI-DRIVEN\nLEARNING.",
    description: "AI-based IDE with real-time support and help, AI-based mock interviews, and smart evaluation systems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    isAccent: true,
    imagePosition: 'top'
  },
  {
    title: "EXPERIENCED\nINSTRUCTORS.",
    description: "Courses taught only by people who have already aced it! 1000+ tech professionals to guide you.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
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
              Why TechLearns Academy
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[72px] leading-[1.05] font-flexa font-medium text-[#0B1F3A] tracking-tight">
              Industry-tailored <br className="hidden md:block" />
              <span className="font-bebas text-[#7237BC] tracking-[0.05em] uppercase font-black">learning</span>
            </h2>
            <p className="mt-8 text-xl sm:text-2xl text-[#604B7E] font-medium max-w-3xl font-flexa leading-relaxed">
              Everything we do is designed to make you <span className="text-[#0B1F3A] font-bold">job-ready</span> and <span className="text-[#0B1F3A] font-bold">future-ready</span>.
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
              className="relative flex flex-col justify-end min-h-[450px] sm:min-h-[500px] xl:min-h-[550px] p-8 xl:p-10 transition-all duration-500 group rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              
              {/* Conditional Purple Tint for Accent Card */}
              {card.isAccent && (
                <div className="absolute inset-0 bg-[#5B2D91]/40 z-[5] mix-blend-multiply group-hover:opacity-75 transition-opacity duration-500"></div>
              )}
              
              {/* Gradient Overlay for Text Readability */}
              <div className={`absolute inset-0 bg-gradient-to-t ${card.isAccent ? 'from-[#3D1466]/90 via-[#5B2D91]/60 to-transparent' : 'from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent'} z-10 group-hover:from-[#5B2D91]/90 transition-colors duration-500`}></div>

              {/* Content Layer */}
              <div className="relative z-20 flex flex-col mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end gap-4 mb-4">
                  <h3 className="text-3xl xl:text-[40px] font-bebas uppercase tracking-[2px] leading-[1.05] whitespace-pre-line font-black text-white drop-shadow-md">
                    {card.title}
                  </h3>
                  <button className="w-12 h-12 xl:w-14 xl:h-14 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 shadow-lg bg-[#caff00] text-black mb-1 group-hover:scale-110 group-hover:bg-white">
                    <FluidArrowRight className="w-6 h-6 xl:w-7 xl:h-7 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>

                <p className="text-lg xl:text-[22px] leading-relaxed font-flexa font-medium text-white/90 drop-shadow-md max-w-[90%]">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
