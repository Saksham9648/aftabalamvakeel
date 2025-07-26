"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Users, Scale, Shield, Building } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description: "Over a decade and a half of dedicated legal practice with consistent success",
  },
  {
    icon: Users,
    title: "500+ Cases Won",
    description: "Successfully represented clients in various courts with a 98% success rate",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Regular participation in legal seminars and continuing education programs",
  },
  {
    icon: Scale,
    title: "Multi-Practice Expertise",
    description: "Comprehensive knowledge across civil, criminal, family, and corporate law",
  },
  {
    icon: Shield,
    title: "Client Protection",
    description: "Unwavering commitment to protecting client rights and interests",
  },
  {
    icon: Building,
    title: "Court Recognition",
    description: "Recognized by peers and courts for professional excellence and integrity",
  },
]

export function ExperienceSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Experience & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Years of dedicated service and proven track record in delivering exceptional legal outcomes
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <achievement.icon className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
