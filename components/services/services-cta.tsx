"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="hero-bg section-padding">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Legal Help?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Don't wait until it's too late. Contact us today for expert legal advice and representation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 rounded-full"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg px-8 py-4 rounded-full bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 9876543210
            </Button>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
