import React, { Suspense, lazy } from 'react';

// Lazy loading all components for maximum optimization
const Navbar = lazy(() => import('@/components/home/Navbar'));
const Footer = lazy(() => import('@/components/home/Footer'));
const SmoothScrolling = lazy(() => import('@/components/home/SmoothScrolling'));
const ScrollProgressCircle = lazy(() => import('@/components/home/ScrollProgressCircle'));

const Hero = lazy(() => import('@/components/home/Hero'));
const WhyWeExist = lazy(() => import('@/components/home/WhyWeExist'));
const TechlearnsDifference = lazy(() => import('@/components/home/TechlearnsDifference'));
const CelSystem = lazy(() => import('@/components/home/CelSystem'));
const LearningJourney = lazy(() => import('@/components/home/LearningJourney'));
const PreparationSection = lazy(() => import('@/components/home/PreparationSection'));
const CareerOpportunities = lazy(() => import('@/components/home/CareerOpportunities'));
const CareerTracks = lazy(() => import('@/components/home/CareerTracks'));
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const SuccessStories = lazy(() => import('@/components/home/SuccessStories'));
const Founder = lazy(() => import('@/components/home/Founder'));
const FAQ = lazy(() => import('@/components/home/FAQ'));
const CTA = lazy(() => import('@/components/home/CTA'));
const ContactUsButton = lazy(() => import('@/utils/contact_us'));

export default function Layout() {
  return (
    <div className="h-full antialiased min-h-full flex flex-col font-sans">
      <Suspense fallback={
        <div className="min-h-screen bg-[#F3E5F5] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#8C52FF] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
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
      </Suspense>
    </div>
  );
}
