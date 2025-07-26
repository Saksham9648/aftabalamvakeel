"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Shield, Home, Heart, Building, FileText } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scale,
    title: "Civil Law",
    description:
      "Comprehensive civil litigation services including contract disputes, property matters, and tort claims.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: Shield,
    title: "Criminal Law",
    description: "Expert criminal defense representation for all types of criminal charges and proceedings.",
    color: "bg-red-100 text-red-800",
  },
  {
    icon: Home,
    title: "Property Disputes",
    description:
      "Resolution of property disputes, title issues, landlord-tenant matters, and real estate transactions.",
    color: "bg-green-100 text-green-800",
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Sensitive handling of divorce, custody, adoption, and other family-related legal matters.",
    color: "bg-pink-100 text-pink-800",
  },
  {
    icon: Building,
    title: "Corporate Law",
    description: "Business formation, contracts, compliance, and corporate governance for companies of all sizes.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Legal documentation, agreements, contracts, and other legal paperwork services.",
    color: "bg-yellow-100 text-yellow-800",
  },
]

export function ServicesIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Legal Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs. We provide expert guidance across
            multiple areas of law.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <Button
                variant="ghost"
                className="text-blue-800 hover:text-blue-900 hover:bg-blue-50 p-0 h-auto font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
