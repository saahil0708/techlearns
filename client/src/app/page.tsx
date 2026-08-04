import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <About />

      {/* Floating Contact Button Wrapper */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] perspective-[200px]">
        <a 
          href="#contact"
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-6 px-3 rounded-l-xl shadow-2xl border border-r-0 border-purple-400 transition-all duration-300 origin-right [transform:perspective(200px)_rotateY(-12deg)] hover:[transform:perspective(200px)_rotateY(0deg)] flex items-center justify-center group"
        >
          <span 
            style={{ writingMode: 'vertical-rl' }} 
            className="rotate-180 tracking-[0.2em] text-sm uppercase group-hover:scale-105 transition-transform"
          >
            Contact Us
          </span>
        </a>
      </div>
    </main>
  );
}
