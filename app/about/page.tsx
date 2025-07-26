import { TeamSection } from "@/components/about/team-section"
import { MissionSection } from "@/components/about/mission-section"
import { ExperienceSection } from "@/components/about/experience-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Vakeel Saab</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted legal partner with years of experience in providing comprehensive legal services
          </p>
        </div>
      </section>

      <MissionSection />
      <ExperienceSection />
      <TeamSection />
    </div>
  )
}
