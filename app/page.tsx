import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ClosingSection } from "@/components/closing-section";
import { Footer } from "@/components/footer";
import { ElevenLabsWidget } from "@/components/elevenlabs-widget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ClosingSection />
      <Footer />
      <ElevenLabsWidget />
    </main>
  );
}
