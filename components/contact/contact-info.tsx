"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 9876543210", "+91 9876543211"],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@vakeelsaab.in", "legal@vakeelsaab.in"],
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Legal Street, Law District", "City - 123456, State, India"],
    action: "Get Directions",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed (Emergency calls accepted)"],
    action: "Schedule Meeting",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We're here to help you with all your legal needs. Contact us through any of the following methods, and we'll
          respond promptly to discuss your case.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <item.icon className="h-6 w-6 text-blue-800" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white bg-transparent"
                >
                  {item.action}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-green-50 border border-green-200 rounded-xl p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-green-500 p-3 rounded-full">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-green-800 mb-2">WhatsApp Consultation</h3>
            <p className="text-green-700 mb-4">
              Get instant legal advice through WhatsApp. Available 24/7 for urgent matters.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Chat on WhatsApp</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
