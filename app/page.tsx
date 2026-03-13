import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { ImpactSection } from "@/components/impact-section"
import { AwardsSection } from "@/components/awards-section"
import { AboutSection } from "@/components/about-section"
import { SystemOverride } from "@/components/system-override"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black relative">
      
      {/* Top neubrutalist status navigation menu bar */}
      <Navigation />

      {/* Hero Header with neubrutalist details & mock git shell widget */}
      <HeroSection />

      {/* Neubrutalist infinite scrolling ticker marquee */}
      <LogoMarquee />

      {/* 01 — Selected Work (Projects) */}
      <PortfolioSection />

      {/* 02 — Journey (Experience & Timeline branches) */}
      <ExperienceSection />

      {/* 03 — Impact / The Numbers (Ticking counters) */}
      <ImpactSection />

      {/* 04 — Out of Syllabus (Hackathons & Certs Directory trees switcher) */}
      <AwardsSection />

      {/* 05 — About / Who I Am (IDE code tabs biography) */}
      <AboutSection />

      {/* System Override Game console (Snake & Brick breaker) */}
      <SystemOverride />

      {/* 06 — Contact / Let's Talk (Git PR playground and signatures) */}
      <Footer />

    </main>
  )
}
