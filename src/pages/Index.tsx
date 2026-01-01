
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Career } from "@/components/portfolio/Career";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Tools } from "@/components/portfolio/Tools";
import { Languages } from "@/components/portfolio/Languages";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

const Index = () => {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      {/* Background Effect */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* Main Content Sections */}
        <Hero />
        <About />
        <Career />
        <Tools />
        <Languages />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
