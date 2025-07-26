"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import type { StaticBlogPost } from "@/lib/static-blogs" // Use StaticBlogPost type

interface BlogDetailProps {
  post: StaticBlogPost
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-16">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blogs">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag) => (
                <Badge key={tag} className="bg-yellow-500 text-black">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Aftab Alam Ansari
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(post.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />5 min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Found this article helpful?</h3>
                    <p className="text-gray-600">Share it with others who might benefit from this information.</p>
                  </div>
                  <Button className="bg-blue-800 hover:bg-blue-900">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Aftab Alam Ansari"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Aftab Alam Ansari</h3>
                    <p className="text-gray-600 mb-4">
                      Senior Advocate with over 15 years of experience in Civil Law, Criminal Law, Property Disputes,
                      and Family Law. Dedicated to providing expert legal guidance and representation.
                    </p>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white bg-transparent"
                      >
                        Contact for Legal Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
