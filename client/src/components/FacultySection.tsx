import { FadeIn } from './animations/FadeIn';
import Image from 'next/image';

const Star4Point = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
  </svg>
);

const FACULTY = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "VP Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Noah Smith",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
  }
];

export default function FacultySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#2D0B5A] via-[#4A148C] to-[#1F004D]">
      {/* Texture / Glow overlays to keep the premium purple vibe */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[4.5fr_7.5fr] gap-16 lg:gap-18 items-center">

          {/* Left Column: Text & Stats */}
          <FadeIn delay={0.1} direction="right" className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Star4Point className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-gray-200 tracking-[3px] font-bebas text-[30px] uppercase font-bold">Meet The Experts</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] text-white uppercase leading-[0.95] mb-8 tracking-normal drop-shadow-md lg:whitespace-nowrap font-black">
              TEAM OF EXPERTS
            </h2>

            <p className="text-gray-300 mb-16 max-w-md text-lg leading-relaxed font-medium">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur. Aptent malesuada sit conubia tincidunt iaculis faucibus Arcu et aliquet ad.
            </p>

            <div className="flex flex-wrap gap-12 sm:gap-16">
              {/* Stat 1 */}
              <div className="flex flex-col relative z-10">
                <div className="relative inline-flex items-center">
                  <Star4Point className="absolute -left-4 -top-3 sm:-left-6 sm:-top-5 w-10 h-10 sm:w-14 sm:h-14 text-[#CCFF00] -z-10 opacity-90" />
                  <h3 className="text-5xl sm:text-6xl font-black text-white flex items-center tracking-tighter">
                    300 <span className="text-blue-500 text-4xl sm:text-5xl ml-2 font-black leading-none">+</span>
                  </h3>
                </div>
                <span className="text-[13px] uppercase text-gray-200 tracking-wider mt-3 font-bold">Successful Projects</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col relative z-10">
                <div className="relative inline-flex items-center">
                  <Star4Point className="absolute -left-4 -top-3 sm:-left-6 sm:-top-5 w-10 h-10 sm:w-14 sm:h-14 text-[#CCFF00] -z-10 opacity-90" />
                  <h3 className="text-5xl sm:text-6xl font-black text-white flex items-center tracking-tighter">
                    200 <span className="text-blue-500 text-4xl sm:text-5xl ml-2 font-black leading-none">+</span>
                  </h3>
                </div>
                <span className="text-[13px] uppercase text-gray-200 tracking-wider mt-3 font-bold">Brands Grown Globally</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Pure CSS Interactive Image Accordion */}
          <div className="h-[800px] lg:h-[600px] flex flex-col lg:flex-row gap-4 sm:gap-6 group w-full">
            {FACULTY.map((member, idx) => {
              // The last item is expanded by default when nothing is hovered
              const isDefault = idx === FACULTY.length - 1;

              // CSS logic: Container hover makes all items narrow, then individual hover makes specific item wide
              const flexClasses = isDefault
                ? 'flex-[10] group-hover:flex-[3] hover:!flex-[10]'
                : 'flex-[3] hover:!flex-[10]';

              const textClasses = isDefault
                ? 'opacity-100 group-hover:opacity-0 group-hover/item:!opacity-100 translate-y-0 group-hover:translate-y-4 group-hover/item:!translate-y-0'
                : 'opacity-0 group-hover/item:!opacity-100 translate-y-4 group-hover/item:!translate-y-0';

              return (
                <FadeIn
                  key={member.id}
                  delay={0.2 + (idx * 0.15)}
                  direction="up"
                  className={`group/item relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer min-w-0 min-h-0 ${flexClasses}`}
                >
                  <div className="absolute inset-0 bg-purple-900/10 group-hover/item:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[20%] group-hover/item:grayscale-0 transition-all duration-700"
                  />

                  {/* Text Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 z-20 pointer-events-none transition-all duration-700 delay-100 ${textClasses}`}>
                    <h3 className="text-white text-2xl font-bebas lg:text-[30px] uppercase tracking-[3px] mb-1 drop-shadow-md line-clamp-1 font-black">
                      {member.name}
                    </h3>
                    <p className="text-[#CCFF00] text-[13px] tracking-widest uppercase drop-shadow-md line-clamp-1 font-bold">
                      {member.role}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
