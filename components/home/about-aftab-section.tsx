"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Users, Target } from "lucide-react"

export function AboutAftabSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">About Aftab Alam Ansari</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://advocateaftabalam.com/images/aftab2.jpg"
                alt="Aftab Alam Ansari"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-yellow-500">15+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Senior Advocate & Legal Consultant</h3>
              <p className="text-yellow-600 font-semibold text-lg">15+ Years of Legal Excellence</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p className="text-lg">
                Aftab Alam Ansari is a distinguished legal professional with over 15 years of experience in providing
                comprehensive legal services. His expertise spans across Civil Law, Criminal Law, Property Disputes,
                Family Law, and Corporate Legal matters.
              </p>

              <p>
                With a strong educational background and a commitment to justice, Mr. Ansari has successfully
                represented clients in various courts and tribunals. His approach combines deep legal knowledge with
                practical solutions, ensuring the best possible outcomes for his clients.
              </p>

              <p>
                Known for his integrity, dedication, and client-focused approach, he has built a reputation as one of
                the most trusted legal advisors in the region. His mission is to provide accessible, reliable, and
                effective legal services to individuals and businesses alike.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-semibold text-blue-800">Excellence</div>
                  <div className="text-sm text-gray-600">Award Winner</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-semibold text-blue-800">Education</div>
                  <div className="text-sm text-gray-600">LLB, LLM</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-semibold text-blue-800">Clients</div>
                  <div className="text-sm text-gray-600">500+ Served</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-semibold text-blue-800">Success</div>
                  <div className="text-sm text-gray-600">98% Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
