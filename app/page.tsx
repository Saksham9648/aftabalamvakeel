import HeroSection from "@/components/home/hero-section"
import { AboutAftabSection } from "@/components/home/about-aftab-section"
import { ServicesIntro } from "@/components/home/services-intro"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { StatsSection } from "@/components/home/stats-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutAftabSection />
      <ServicesIntro />
      <StatsSection />
      <TestimonialsSection />
    </div>
  )
}
