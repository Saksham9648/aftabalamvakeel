"use client"

import { motion } from "framer-motion"

export function BlogsHero() {
  return (
    <section className="hero-bg py-24">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Legal Insights & News
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-blue-100 max-w-3xl mx-auto"
        >
          Stay updated with the latest legal developments, case studies, and expert insights from our legal team.
        </motion.p>
      </div>
    </section>
  )
}
