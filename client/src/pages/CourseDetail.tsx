import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import { FadeIn } from '@/components/animations/FadeIn';
import { ChevronRight, Clock, MonitorPlay, Award, Code2, CheckCircle2, X } from 'lucide-react';
import ContactUsButton from '@/utils/contact_us';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full min-h-screen bg-[#F9F9FB] pt-[10px] font-flexa pb-24 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8C52FF]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#5B2D91]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Breadcrumbs */}
      <div className="w-full max-w-[1280px] mx-auto px-6 pt-12 pb-6 relative z-10">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#5B2D91] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/Programs" className="hover:text-[#5B2D91] transition-colors">Programs</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#5B2D91]">{course.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B2D91]/30 bg-white/80 backdrop-blur-sm shadow-sm mb-6">
                <span className="text-[#5B2D91] font-bebas text-lg tracking-widest uppercase mt-0.5">{course.subtitle}</span>
              </div>

              <h1 className="text-[48px] sm:text-[60px] font-bebas tracking-wide leading-[1.05] mb-6 text-[#0B1F3A]">
                {course.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B2D91] to-[#8C52FF]">
                  {course.title.split(' ').slice(-1)}
                </span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-[90%] font-medium">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-12 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#5B2D91]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#5B2D91]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Duration</p>
                    <p className="text-[#0B1F3A] font-bold">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#5B2D91]/10 flex items-center justify-center">
                    <MonitorPlay className="w-5 h-5 text-[#5B2D91]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Format</p>
                    <p className="text-[#0B1F3A] font-bold">{course.format}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#5B2D91]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#5B2D91]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Level</p>
                    <p className="text-[#0B1F3A] font-bold">{course.level}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="flex items-center justify-center gap-3 px-10 py-3 bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] text-white font-bebas text-xl rounded-md hover:shadow-[0_15px_30px_rgba(91,45,145,0.3)] hover:-translate-y-1 transition-all duration-300 tracking-widest overflow-hidden group relative"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">ENROLL NOW</span>
              </button>
            </FadeIn>
          </div>

          {/* Right: Image Component */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <FadeIn direction="left" delay={0.3} className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#CB6CE6]/20 to-[#8C52FF]/20 rounded-full blur-[60px] z-0" />
              <div className="absolute inset-0 bg-white/40 p-3 backdrop-blur-md border border-white/60 rounded-full shadow-2xl z-10 flex items-center justify-center overflow-hidden">
                <img src={course.heroImage} alt={course.title} className="w-full h-full object-cover rounded-full shadow-inner" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-12 -right-6 bg-white py-3 px-6 rounded-xl shadow-xl border border-[#5B2D91]/10 z-20 animate-[bounce_4s_infinite]">
                <span className="font-bebas text-xl text-[#5B2D91] tracking-widest">INDUSTRY READY</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* Left: Curriculum Accordion */}
        <div className="lg:col-span-2">
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-3xl font-bebas tracking-wide text-[#0B1F3A] mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#5B2D91] rounded-full inline-block" />
              Course Curriculum
            </h2>

            <div className="flex flex-col gap-4">
              {course.curriculum.map((module, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow cursor-default group">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#0B1F3A]">{module.title}</h3>
                    <span className="text-sm font-bold text-[#8C52FF] bg-[#8C52FF]/10 px-3 py-1 rounded-full">{module.duration}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 border-t border-gray-100 pt-4">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#5B2D91] mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-[15px] font-medium leading-tight">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Tech Stack */}
        <div className="lg:col-span-1">
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-white rounded-[32px] p-8 shadow-xl border border-[#5B2D91]/5 sticky top-[120px]">
              <h3 className="text-2xl font-bebas tracking-wide text-[#0B1F3A] mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-[#5B2D91]" />
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {course.technologies.map((tech, idx) => (
                  <div key={idx} className="px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-bold text-sm shadow-sm hover:border-[#5B2D91]/30 hover:bg-[#5B2D91]/5 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-[#5B2D91] to-[#8C52FF] rounded-2xl text-white">
                <h4 className="font-bebas text-xl tracking-widest mb-2">Need Help Deciding?</h4>
                <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">Speak with our career advisors to see if this program is the right fit for your goals.</p>
                <button className="w-full py-3 bg-white text-[#5B2D91] font-bold rounded text-sm uppercase tracking-wide hover:shadow-lg transition-shadow">
                  Request Callback
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Uses & Why Learn Sections - Article Form */}
      <section className="w-full max-w-[1280px] mx-auto px-6 relative z-10 mb-24 mt-12 font-flexa">
        <FadeIn direction="up" delay={0.2}>
          <article className="max-w-none text-gray-700">

            {/* Premium Header */}
            <div className="mb-12 text-center md:text-left mt-8">
              <p className="text-gray-500 font-bold uppercase tracking-wider text-[13px] mb-3">
                USE OF {course.title}
              </p>
              <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold tracking-tight text-[#1F2937] leading-[1.1]">
                {course.title.split(' ').slice(0, 2).join(' ')} <br className="hidden md:block" />
                Powers your <span className="relative inline-block whitespace-nowrap">
                  Favourite Apps
                  <svg className="absolute w-[105%] h-3 sm:h-4 -bottom-1 sm:-bottom-2 -left-2 text-[#22C55E]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 12, 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
              {course.uses?.map((item, idx) => (
                <div key={idx} className="bg-[#F9FAFB] rounded-2xl p-5 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 border border-gray-100/50">
                  {/* Image wrapper */}
                  <div className="relative w-full h-[180px] sm:h-[200px] mb-8 rounded-xl overflow-visible">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-sm" />
                    
                    {/* Floating Brand Badge */}
                    {item.brand && (
                      <div className="absolute -bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-gray-100 z-10">
                        {item.brandLogo ? (
                          <img src={item.brandLogo} alt={item.brand} className="w-5 h-5 object-contain" />
                        ) : (
                          <div className="w-4 h-4 rounded-[4px] bg-gradient-to-tr from-pink-500 to-orange-400 flex shrink-0"></div>
                        )}
                        <span className="font-bold text-gray-900 text-[13px]">{item.brand}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="px-1">
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111827] mb-2.5 leading-snug">{item.title}</h3>
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#6B7280] font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#5B2D91]/20 to-transparent my-20"></div>

            <h2 className="text-[40px] md:text-5xl font-bebas tracking-wide text-[#0B1F3A] mb-6 uppercase text-center md:text-left">
              Why Learn This?
            </h2>
            <p className="text-xl md:text-2xl font-medium text-[#604B7E] mb-12 leading-relaxed max-w-4xl text-center md:text-left mx-auto md:mx-0">
              Investing time into mastering these frameworks is one of the most powerful career moves you can make. Here's why.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
              {course.whyLearn?.map((item, idx) => (
                <div key={idx} className="relative pl-6 border-l-[3px] border-[#CB6CE6]/30 hover:border-[#5B2D91] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

          </article>
        </FadeIn>
      </section>

      <ContactUsButton />

      {/* Dynamic Premium Enroll Modal */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1F3A]/70 backdrop-blur-md">
          <div className="bg-white rounded-[32px] w-full max-w-5xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 font-flexa flex flex-col md:flex-row relative max-h-[95vh] overflow-y-auto md:overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Course Summary Sidebar */}
            <div className="w-full md:w-5/12 bg-[#1A0B38] relative overflow-hidden flex flex-col p-8 sm:p-12 text-white border-r border-[#5B2D91]/30 shadow-[inset_-10px_0_30px_rgba(0,0,0,0.2)]">
              {/* Background ambient blurs */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#8C52FF]/25 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[#5B2D91]/25 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#CB6CE6] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Application Form</span>
                <h2 className="text-[40px] lg:text-[50px] font-bebas tracking-wide mb-8 leading-[1.05]">{course.title}</h2>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-[#8C52FF]/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#CB6CE6]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Duration</p>
                      <p className="font-bold text-[15px]">{course.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-full bg-[#8C52FF]/20 flex items-center justify-center shrink-0">
                      <MonitorPlay className="w-5 h-5 text-[#CB6CE6]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Format</p>
                      <p className="font-bold text-[15px]">{course.format}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#CB6CE6] to-[#8C52FF] rounded-full mb-4"></div>
                  <p className="text-white/60 text-[15px] font-medium leading-relaxed italic">
                    "Taking the {course.title.split(' ')[0]} program at TechLearns was the defining moment of my career."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Application Form */}
            <div className="w-full md:w-7/12 p-8 sm:p-12 md:pl-16 relative bg-white md:overflow-y-auto">
              <h3 className="text-3xl font-bebas text-[#0B1F3A] tracking-wide mb-3">Secure Your Spot</h3>
              <p className="text-gray-500 font-medium mb-8 text-[15px] leading-relaxed">Tell us a bit about yourself to initiate the enrollment process for the <strong className="text-[#5B2D91]">{course.title}</strong> program. Our advisors will contact you.</p>

              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Application submitted successfully!");
                  setIsEnrollModalOpen(false);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">First Name</label>
                    <input type="text" required className="w-full px-4 py-3.5 bg-[#F9F9FB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D91]/30 focus:border-[#5B2D91] transition-all font-medium text-gray-900 placeholder-gray-400 shadow-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3.5 bg-[#F9F9FB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D91]/30 focus:border-[#5B2D91] transition-all font-medium text-gray-900 placeholder-gray-400 shadow-sm" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3.5 bg-[#F9F9FB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D91]/30 focus:border-[#5B2D91] transition-all font-medium text-gray-900 placeholder-gray-400 shadow-sm" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3.5 bg-[#F9F9FB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D91]/30 focus:border-[#5B2D91] transition-all font-medium text-gray-900 placeholder-gray-400 shadow-sm" placeholder="+1 (234) 567-8900" />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Why are you interested in this program?</label>
                  <textarea rows={3} required className="w-full px-4 py-3.5 bg-[#F9F9FB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2D91]/30 focus:border-[#5B2D91] transition-all font-medium text-gray-900 placeholder-gray-400 resize-none shadow-sm" placeholder="I want to upskill in..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 mt-6 bg-[#0B1F3A] text-white font-bold rounded-xl hover:bg-[#5B2D91] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-[16px] tracking-wide relative overflow-hidden group">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10">Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
