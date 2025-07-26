import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesCTA } from "@/components/services/services-cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  )
}
