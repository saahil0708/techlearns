import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ComparisonSection from "@/components/ComparisonSection";
import CelTimelineSection from "@/components/CelTimelineSection";
import SkillPassportSection from "@/components/SkillPassportSection";
import ProgramsAndCompetitions from "@/components/ProgramsAndCompetitions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ComparisonSection />
      <CelTimelineSection />
      <SkillPassportSection />
      <ProgramsAndCompetitions />
      <Footer />
    </main>
  );
}
