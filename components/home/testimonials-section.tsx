"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Roli Mehrotra",
    role: "Client",
    content:
      "Hi, I am Roli Mehrotra. My Matrimonial Dispute was resolved by Aftab Sir in 06 Months. Thanks to Aftab Sir 🙏🏻",
    rating: 5,
    image: "https://i.ibb.co/WvZGSXkh/IMG-20250130-WA0040.jpg",
  },
  {
    name: "Srikant Verma",
    role: "Client",
    content:
      "Competent lawyer with professional approach to his work and client. My experience with him in a civil suit was quite satisfactory. He understands and adjusts himself for his clients requirements and believes in results.",
    rating: 5,
    image: "https://i.ibb.co/Lzqr2Qxd/IMG-20250201-WA0001.jpg",
  },
  {
    name: "Mumtaz",
    role: "Client",
    content:
      "Hi, I am Mumtaz. My Civil Dispute Of Arbitration and Conciliation Matter was Resolved By Aftab Sir. Very Thanks to Aftab Sir.",
    rating: 5,
    image: "https://i.ibb.co/dsZTBbWM/IMG-20250130-WA0041.jpg",
  },
]

export function TestimonialsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="h-8 w-8 text-yellow-500 mb-4" />

              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-blue-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
