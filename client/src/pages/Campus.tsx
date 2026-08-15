import HeroSection from '@/components/campus/HeroSection';
import CampusCultureSection from '@/components/campus/CampusCultureSection';
import GlimpsesOfCampus from '@/components/campus/GlimpsesOfCampus';
import ProductivitySection from '@/components/campus/ProductivitySection';
import CTA from '@/components/home/CTA';

export default function Campus() {
  return (
    <div className="min-h-screen text-white selection:bg-[#8C52FF]/30 selection:text-white font-sans overflow-hidden">

      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: CAMPUS CULTURE */}
      <CampusCultureSection />

      {/* SECTION 3: GLIMPSES OF CAMPUS */}
      <GlimpsesOfCampus />

      {/* SECTION 4: PRODUCTIVITY GALLERY */}
      <ProductivitySection />

      {/* SECTION 4: CALL TO ACTION */}
      <CTA />

    </div>
  );
}
