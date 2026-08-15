import HeroSection from '@/components/placements/HeroSection';
import StatsSection from '@/components/placements/StatsSection';
import CareerOpportunities from '@/components/home/CareerOpportunities';
import PlacementProcessSection from '@/components/placements/PlacementProcessSection';
import CTA from '@/components/home/CTA';

export default function Placements() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0B1F3A] selection:bg-[#8C52FF]/30 selection:text-[#5B2D91] font-sans overflow-hidden">
      <HeroSection />
      <StatsSection />
      <CareerOpportunities />
      <PlacementProcessSection />
      <CTA />
    </div>
  );
}
