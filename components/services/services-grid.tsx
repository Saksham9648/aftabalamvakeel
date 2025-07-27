"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Scale,
  Shield,
  Home,
  Heart,
  Building,
  FileText,
  Users,
  Briefcase,
  Globe,
  Lock,
  BrainCircuit,
  Landmark,
  Gavel,
  UserCheck
} from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Civil Law",
    description:
      "Comprehensive civil litigation services including contract disputes, property matters, tort claims, and commercial disputes. We handle cases in district courts, high courts, and supreme court.",
    features: ["Contract Disputes", "Property Litigation", "Tort Claims", "Commercial Disputes", "Recovery Suits"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description:
      "Expert criminal defense representation for all types of criminal charges. From bail applications to trial advocacy, we provide comprehensive criminal law services.",
    features: ["Bail Applications", "Trial Defense", "Appeals", "White Collar Crimes", "Investigation Support"],
    color: "bg-red-100 text-red-800",
  },
  {
    icon: Home,
    title: "Property Disputes",
    description:
      "Specialized in resolving property disputes, title verification, landlord-tenant matters, and real estate transactions. Protecting your property rights effectively.",
    features: ["Title Disputes", "Landlord-Tenant", "Property Registration", "Boundary Disputes", "Possession Suits"],
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Heart,
    title: "Family Law",
    description:
      "Sensitive handling of family matters including divorce, child custody, adoption, domestic violence, and matrimonial disputes with care and confidentiality.",
    features: ["Divorce Proceedings", "Child Custody", "Adoption", "Domestic Violence", "Maintenance Cases"],
    color: "bg-pink-100 text-pink-800",
  },
  {
    icon: Building,
    title: "Corporate Law",
    description:
      "Complete corporate legal services including company formation, compliance, mergers & acquisitions, and corporate governance for businesses of all sizes.",
    features: ["Company Formation", "Compliance", "M&A", "Corporate Governance", "Contract Drafting"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: FileText,
    title: "Documentation Services",
    description:
      "Professional legal documentation services including agreements, contracts, wills, power of attorney, and other legal paperwork with precision and care.",
    features: ["Legal Agreements", "Will Drafting", "Power of Attorney", "Affidavits", "Legal Notices"],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: Users,
    title: "Labour Law",
    description:
      "Comprehensive labour law services for both employers and employees including industrial disputes, employment contracts, and workplace compliance.",
    features: [
      "Industrial Disputes",
      "Employment Contracts",
      "Workplace Compliance",
      "Labour Court Cases",
      "PF/ESI Matters",
    ],
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    icon: Briefcase,
    title: "Consumer Protection",
    description:
      "Consumer protection services including consumer court cases, product liability, service deficiency claims, and consumer rights advocacy.",
    features: [
      "Consumer Court Cases",
      "Product Liability",
      "Service Deficiency",
      "Consumer Rights",
      "Compensation Claims",
    ],
    color: "bg-teal-100 text-teal-800",
  },
  {
    icon: Lock,
    title: "Cyber Law",
    description:
      "Legal services related to cyber crimes, data breaches, online frauds, social media misuse, and IT Act compliance. Stay protected in the digital world.",
    features: ["Cyber Crime Cases", "Data Breach Action", "Online Fraud", "IT Act Compliance", "Digital Evidence"],
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    icon: BrainCircuit,
    title: "Intellectual Property Law",
    description:
      "Protect your creative works, innovations, and brands. We offer services for trademark registration, copyrights, patents, and IP infringement litigation.",
    features: ["Trademark Registration", "Copyrights", "Patent Filing", "Design Protection", "IP Litigation"],
    color: "bg-orange-100 text-orange-800",
  },
  {
    icon: Globe,
    title: "Environmental Protection Law",
    description:
      "Legal assistance with environmental regulations, pollution control laws, sustainability compliance, and forest and wildlife conservation matters.",
    features: ["Pollution Control Cases", "Environmental Clearances", "Waste Management Laws", "EIA Reports", "Wildlife Protection"],
    color: "bg-lime-100 text-lime-800",
  },
  {
    icon: UserCheck,
    title: "Human Rights Law",
    description:
      "Defending fundamental rights and liberties including discrimination, unlawful detention, refugee protection, and access to justice for all.",
    features: ["Discrimination Cases", "Custodial Violence", "Refugee Rights", "Access to Justice", "Minority Rights"],
    color: "bg-rose-100 text-rose-800",
  },
  {
    icon: Gavel,
    title: "Arbitration & Mediation",
    description:
      "Alternative dispute resolution services through arbitration, mediation, and conciliation. Resolve disputes efficiently and amicably without litigation.",
    features: ["Commercial Arbitration", "Family Mediation", "Conciliation Proceedings", "Enforcement of Awards", "Pre-litigation Settlement"],
    color: "bg-gray-100 text-gray-800",
  },
]

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Practice Areas</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center flex-shrink-0`}>
                  <service.icon className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
