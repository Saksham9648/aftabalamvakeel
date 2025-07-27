"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Aftab Alam Ansari",
    role: "Senior Advocate & Founder",
    experience: "15+ Years",
    specialization: "Civil Law, Criminal Law, Property Disputes",
    image: "https://www.vakeel-saab.in/assets/aboutalam-CaB-KjeH.jpg",
    email: "aftab8490@live.com",
    phone: "+91 9554505557",
    bio: "Leading legal expert with extensive experience in civil and criminal law. Known for his strategic approach and successful track record in complex legal matters.",
  },
  {
    name: "Saif Ali Ansari",
    role: "Junior Associate",
    experience: "8+ Years",
    specialization: "Family Law, Corporate Law",
    image: "https://i.ibb.co/JwQYMYp8/2.jpg",
    email: "saifaliansari@vakeelsaab.in",
    phone: "+91 9876543211",
    bio: "Specialized in family law and corporate legal matters. Dedicated to providing compassionate and effective legal solutions for clients.",
  },
  {
    name: "Ad Moid Khan",
    role: "Senior Associate",
    experience: "10+ Years",
    specialization: "Property Law, Documentation",
    image: "https://i.ibb.co/yBbs0hDv/5.jpg",
    email: "admoidkhan@vakeelsaab.in",
    phone: "+91 9876543212",
    bio: "Expert in property law and legal documentation. Ensures all legal paperwork is handled with precision and attention to detail.",
  },
  {
    name: "Mohammad Aman Ansari",
    role: "Junior Associate",
    experience: "7+ Years",
    specialization: "Property Law, Documentation",
    image: "https://i.ibb.co/hFQfpSmq/4.jpg",
    email: "admoidkhan@vakeelsaab.in",
    phone: "+91 9876543212",
    bio: "Expert in property law and legal documentation. Ensures all legal paperwork is handled with precision and attention to detail.",
  },
]

export function TeamSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Legal Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced legal professionals dedicated to providing exceptional legal services
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-yellow-400 font-semibold">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Experience</span>
                    <span className="text-sm font-bold text-blue-800">{member.experience}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Specialization:</strong> {member.specialization}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="p-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
