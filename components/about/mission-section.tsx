"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accessible, reliable, and effective legal services that protect our clients' rights and interests while maintaining the highest standards of professional integrity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted legal firm in the region, known for our expertise, dedication, and commitment to justice for all our clients.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Excellence, Compassion, and Client-focused service form the foundation of everything we do in our legal practice.",
  },
  {
    icon: Award,
    title: "Our Commitment",
    description:
      "We are committed to delivering exceptional legal outcomes while building lasting relationships based on trust, transparency, and professional excellence.",
  },
]

export function MissionSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Foundation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on strong principles and unwavering commitment to justice
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <value.icon className="w-16 h-16 mb-4 text-blue-800" />
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-lg text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
