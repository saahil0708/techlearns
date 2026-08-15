import { Link } from "react-router-dom";
import { FadeIn } from "../animations/FadeIn";
import { LuChevronRight } from 'react-icons/lu';

const stories = [
  {
    id: '01',
    name: 'Shubham Rane',
    role: 'Product Analyst',
    company: 'cult.fit',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    beforeRole: 'Fresher',
    afterRole: 'Product Analyst',
    linkedin: '#'
  },
  {
    id: '02',
    name: 'Megha Chouhan',
    role: 'Data Analyst',
    company: 'ROCKET LEARNING',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    beforeRole: 'Research Analyst',
    afterRole: 'Data Analyst',
    linkedin: '#'
  },
  {
    id: '03',
    name: 'Mansi Mishra',
    role: 'MIS Executive',
    company: 'IndiGo',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    beforeRole: 'HR Consultant',
    afterRole: 'MIS Executive',
    linkedin: '#'
  },
  {
    id: '04',
    name: 'Yash Kumar',
    role: 'Product Analyst Intern',
    company: 'Spinny',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800',
    beforeRole: 'Fresher',
    afterRole: 'Product Analyst Intern',
    linkedin: '#'
  }
];

export default function SuccessStories() {
  return (
    <section className="relative py-24 pb-32 bg-gradient-to-br from-[#F5F0FF] via-white to-[#EDE0FF] overflow-hidden font-sans">

      {/* Decorative background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8C52FF] rounded-full blur-[150px] opacity-[0.12] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9D6CFF] rounded-full blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <FadeIn delay={0.1} direction="up" className="flex flex-col items-start mb-16 md:mb-24 text-left">
          <p className="text-[#8C52FF] font-bebas text-xl md:text-2xl tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#8C52FF]"></span>
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bebas text-[#0B1F3A] tracking-wide mb-6">
            From Learning to Career Growth
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl font-flexa leading-relaxed">
            Discover how our alumni transformed their <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">Careers</span>. From absolute beginners to landing roles at <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">World-Class Tech Companies</span>, read the <span className="font-bebas text-2xl text-[#8C52FF] tracking-wide uppercase inline-block translate-y-1">Inspiring Journeys</span> of those who took the leap with TechLearns.
          </p>
        </FadeIn>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {stories.map((story, i) => (
            <FadeIn key={story.id} delay={0.2 + i * 0.15} direction="up" className="w-full max-w-[400px]">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white to-[#FCFAFF] shadow-[0_4px_20px_rgba(140,82,255,0.04)] hover:shadow-[0_15px_40px_rgba(140,82,255,0.12)] border border-[#8C52FF]/10 hover:border-[#8C52FF]/30 transition-all duration-500 flex flex-col h-full font-flexa group hover:-translate-y-1">
                
                {/* Top Image */}
                <div className="h-[200px] w-full shrink-0 relative overflow-hidden bg-purple-50/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 via-transparent to-transparent z-10 opacity-70"></div>
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  
                  {/* Floating Company Badge over image */}
                  <div className="absolute bottom-3 right-3 z-20 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg shadow-sm border border-[#8C52FF]/10">
                    <span className="font-extrabold text-[11px] text-[#0B1F3A] tracking-wider uppercase">{story.company}</span>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="relative z-20 p-5 flex flex-col flex-grow text-center">
                  <h3 className="text-[19px] font-bold text-[#0B1F3A] mb-1 group-hover:text-[#8C52FF] transition-colors duration-300">{story.name}</h3>
                  <p className="text-[13px] text-[#8C52FF] font-semibold mb-4">{story.role}</p>
                  
                  {/* Divider */}
                  <div className="w-10 h-px bg-[#8C52FF]/20 mx-auto mb-4"></div>
                  
                  {/* Before / After Section (Clean Infographic style) */}
                  <div className="w-full mb-5 mt-auto">
                    <div className="flex items-center justify-between px-1">
                      <div className="flex flex-col items-start w-[42%]">
                        <span className="text-[9px] font-bold px-2 py-1 bg-gray-100/80 text-gray-500 rounded uppercase tracking-wider mb-1.5">Before</span>
                        <span className="text-left text-[12px] font-semibold text-gray-700 leading-snug">{story.beforeRole}</span>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center w-[16%]">
                        <div className="flex text-gray-300 group-hover:text-[#8C52FF]/60 transition-colors duration-300">
                           <LuChevronRight size={16} strokeWidth={3} />
                           <LuChevronRight size={16} strokeWidth={3} className="-ml-2.5" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end w-[42%]">
                        <span className="text-[9px] font-bold px-2 py-1 bg-[#F0FDF4] text-[#16A34A] rounded uppercase tracking-wider mb-1.5">After</span>
                        <span className="text-right text-[12px] font-semibold text-[#0B1F3A] leading-snug">{story.afterRole}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* LinkedIn Button */}
                  <Link to={story.linkedin} className="w-full flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-[#F3F6FB] border border-[#8C52FF]/15 hover:border-[#0A66C2] rounded-md text-[13px] font-semibold text-gray-600 hover:text-[#0A66C2] transition-all duration-300 shadow-sm group/btn">
                    {/* SVG for solid filled LinkedIn Icon */}
                    <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-[#0A66C2] transition-colors duration-300 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
