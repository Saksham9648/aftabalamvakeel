"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
        throw new Error("Please fill in all required fields")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      console.log("Simulating form submission for:", formData)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted successfully (simulated).")

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form and show success state
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitted(true)

      // Reset success state after 8 seconds
      setTimeout(() => setIsSubmitted(false), 8000)
    } catch (error: any) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg text-center border border-green-200"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">Message Sent Successfully!</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Thank you for contacting us. We'll review your message and get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Call Response</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Email Reply</span>
          </div>
          <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">WhatsApp</span>
          </div>
        </div>

        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Send us a Message</h2>
        <p className="text-gray-600 text-lg">
          Fill out the form below and we'll get back to you as soon as possible. All consultations are confidential.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              placeholder="Enter your full name"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              placeholder="Enter your phone number"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl resize-none"
            placeholder="Describe your legal matter or question in detail..."
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 h-14 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-3 h-6 w-6 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-3 h-6 w-6" />
              Send Message
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-sm text-blue-800 text-center">
          <strong>🔒 Your privacy is protected.</strong> All information shared is confidential and secure.
        </p>
      </div>
    </motion.div>
  )
}
