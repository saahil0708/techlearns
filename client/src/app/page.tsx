import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemSection from "@/components/ProblemSection";
import WhatWeDo from "@/components/WhatWeDo";
import CorporateTimeline from "@/components/CorporateTimeline";
import CoursesSection from "@/components/CoursesSection";
import FacultySection from "@/components/FacultySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#252525] text-white selection:bg-purple-500 selection:text-white overflow-x-clip relative">
      
      {/* Global Coal / Hazy Texture Overlays */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.15]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.2) 0%, transparent 50%)' }}
      />

      <Navbar />
      <Hero />
      <About />
      <ProblemSection />
      <WhatWeDo />
      <CorporateTimeline />
      <CoursesSection />
      <FacultySection />
      <Footer />

      {/* Floating Contact Button Wrapper */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] perspective-[200px]">
        <a 
          href="#contact"
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-6 px-3 rounded-l-xl shadow-2xl border border-r-0 border-purple-400 transition-all duration-300 origin-right [transform:perspective(200px)_rotateY(-12deg)] hover:[transform:perspective(200px)_rotateY(0deg)] flex items-center justify-center group"
        >
          <span 
            style={{ writingMode: 'vertical-rl' }} 
            className="rotate-180 tracking-[0.2em] text-sm uppercase group-hover:scale-105 transition-transform font-bold"
          >
            Contact Us
          </span>
        </a>
      </div>
    </main>
  );
}
