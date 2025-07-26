"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-96 bg-gray-200"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Location</h3>
          <p className="text-gray-600 mb-4">123 Legal Street, Law District, City - 123456</p>
          <p className="text-sm text-gray-500">Interactive map will be embedded here with Google Maps integration</p>
        </div>
      </div>
    </motion.section>
  )
}
