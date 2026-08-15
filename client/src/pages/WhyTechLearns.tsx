import HeroSection from '@/components/why_techlearns/HeroSection';
import BentoGridSection from '@/components/why_techlearns/BentoGridSection';
import CorePrinciplesSection from '@/components/why_techlearns/CorePrinciplesSection';
import CTA from '@/components/home/CTA';

export default function WhyTechLearns() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#0B1F3A] selection:bg-[#8C52FF]/30 selection:text-[#0B1F3A] font-sans overflow-hidden">
      <HeroSection />
      <BentoGridSection />
      <CorePrinciplesSection />
      <CTA />
    </div>
  );
}
