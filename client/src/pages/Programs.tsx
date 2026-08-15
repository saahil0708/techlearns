import { Link } from 'react-router-dom';
import { FadeIn } from '@/components/animations/FadeIn';
import { courses } from '@/data/courses';
import { Clock, Award } from 'lucide-react';
import ContactUsButton from '@/utils/contact_us';
import { useEffect } from 'react';
import { FluidArrowRight } from '@/utils/fluid_arrow';

export default function Programs() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F3E5F5]/60 to-[#F9F9FB] pt-[120px] font-flexa pb-24 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#8C52FF]/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#5B2D91]/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[30%] w-[800px] h-[800px] bg-[#CB6CE6]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* Header Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 relative z-10 mb-20 text-center">
        <FadeIn direction="up" delay={0.1}>
          <p className="text-[#7539BE] font-bebas text-xl sm:text-2xl tracking-[0.2em] mb-4 uppercase drop-shadow-sm">
            OUR OFFERINGS
          </p>
          <h1 className="text-[50px] sm:text-[64px] font-bebas tracking-wider leading-[1.05] text-[#0B1F3A] mb-8">
            MASTER THE{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7237BC] to-[#8C52FF]">TECHNOLOGIES</span>
              {/* Curvy underline SVG */}
              <svg className="absolute w-full h-3 sm:h-4 -bottom-1 sm:-bottom-2 left-0 text-[#8C52FF] opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q25,25 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            {' '}OF TOMORROW
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Discover our industry-aligned programs designed to transform you into a highly sought-after professional.
          </p>
        </FadeIn>
      </section>

      {/* Courses Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <FadeIn key={course.id} direction="up" delay={0.2 + (idx * 0.1)}>
              <Link 
                to={`/program/${course.slug}`} 
                className="group flex flex-col h-full bg-white rounded-[32px] border border-gray-100 shadow-lg hover:shadow-[0_20px_50px_rgba(91,45,145,0.15)] transition-all duration-500 overflow-hidden relative transform hover:-translate-y-2"
              >
                {/* Image Header */}
                <div className="w-full h-[200px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={course.heroImage} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#5B2D91] font-bebas tracking-widest text-sm rounded-full shadow-sm">
                      {course.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-20">
                  <h3 className="text-[26px] font-bebas uppercase tracking-wide text-[#0B1F3A] mb-3 group-hover:text-[#5B2D91] transition-colors leading-[1.1]">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Clock className="w-3.5 h-3.5 text-[#8C52FF]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <Award className="w-3.5 h-3.5 text-[#8C52FF]" />
                      {course.level}
                    </div>
                  </div>

                  {/* Tech Stack Preview (max 4) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[11px] font-bold text-[#5B2D91] bg-[#5B2D91]/10 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {course.technologies.length > 4 && (
                      <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        +{course.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Footer */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-bebas text-lg text-[#5B2D91] tracking-widest">
                      VIEW DETAILS
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F3E5F5] flex items-center justify-center group-hover:bg-[#5B2D91] group-hover:text-white text-[#5B2D91] transition-colors duration-300">
                      <FluidArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactUsButton />
    </div>
  );
}
