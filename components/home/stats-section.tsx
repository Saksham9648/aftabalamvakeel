"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Users, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    number: "500+",
    label: "Cases Won",
    description: "Successfully resolved legal matters",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Happy Clients",
    description: "Satisfied with our services",
  },
  {
    icon: Clock,
    number: "15+",
    label: "Years Experience",
    description: "In legal practice",
  },
  {
    icon: Star,
    number: "98%",
    label: "Success Rate",
    description: "Client satisfaction guaranteed",
  },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding hero-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Track Record</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-blue-800" />
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
                >
                  {stat.number}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>

                <p className="text-blue-100 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
