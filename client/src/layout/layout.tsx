import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import SmoothScrolling from '@/components/home/SmoothScrolling';
import ScrollProgressCircle from '@/components/home/ScrollProgressCircle';

import Hero from '@/components/home/Hero';
import WhyWeExist from '@/components/home/WhyWeExist';
import TechlearnsDifference from '@/components/home/TechlearnsDifference';
import CelSystem from "@/components/home/CelSystem";
import LearningJourney from '@/components/home/LearningJourney';
import PreparationSection from '@/components/home/PreparationSection';
import CareerOpportunities from '@/components/home/CareerOpportunities';
import CareerTracks from '@/components/home/CareerTracks';
import Testimonials from '@/components/home/Testimonials';
import SuccessStories from '@/components/home/SuccessStories';
import Founder from '@/components/home/Founder';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';
import ContactUsButton from '@/utils/contact_us';

export default function Layout() {
  return (
    <div className="h-full antialiased min-h-full flex flex-col font-sans">
      <SmoothScrolling>
        <main className="min-h-screen bg-[#F3E5F5] text-[#0B1F3A] selection:bg-purple-500 selection:text-white overflow-x-clip relative">
          {/* Global Noise/Texture Overlay */}
          <div
            className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.10]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
          {/* Global Ambient Glow */}
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(206, 168, 240, 0.3) 0%, transparent 50%)' }}
          />

          <Navbar />
          
          <Hero />
          <CareerTracks />
          <WhyWeExist />
          <PreparationSection />
          <CelSystem />
          <LearningJourney />
          <CareerOpportunities />
          <TechlearnsDifference />
          <Founder />
          <SuccessStories />
          <CTA />
          <Testimonials />
          <FAQ />

          <Footer />
        </main>

        <ContactUsButton />
        <ScrollProgressCircle />
      </SmoothScrolling>
    </div>
  );
}
