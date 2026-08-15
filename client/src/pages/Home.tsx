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

export default function Home() {
  return (
    <>
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
    </>
  );
}
