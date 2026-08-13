import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SmoothScrolling from '@/components/SmoothScrolling';
import ScrollProgressCircle from '@/components/ScrollProgressCircle';

export default function App() {
  return (
    <div className="h-full antialiased min-h-full flex flex-col font-sans">
      <SmoothScrolling>
        <main className="min-h-screen bg-[#FFFAFA] text-white selection:bg-purple-500 selection:text-white overflow-x-clip relative">
          {/* Global Noise/Texture Overlay */}
          <div
            className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.15]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
          {/* Global Ambient Glow */}
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.8) 0%, transparent 50%)' }}
          />
          
          <Navbar />
          <Hero />
          
        </main>
        <ScrollProgressCircle />
      </SmoothScrolling>
    </div>
  );
}
