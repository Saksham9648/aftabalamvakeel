"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, User } from "lucide-react"
import Link from "next/link"
import { staticBlogPosts } from "@/lib/static-blogs" // Import static data

export function BlogsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredPosts = staticBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(staticBlogPosts.flatMap((post) => post.tags || [])))

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      !selectedTag ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"
                    }`}
                  >
                    All Articles ({staticBlogPosts.length})
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedTag === tag ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"
                      }`}
                    >
                      {tag} ({staticBlogPosts.filter((p) => p.tags?.includes(tag)).length})
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {staticBlogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blogs/${post.slug}`}>
                      <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <img
                          src={post.image_url || "/placeholder.svg"}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{post.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{new Date(post.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-2">
                {selectedTag ? `Articles in "${selectedTag}"` : "Latest Articles"}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative">
                      <img
                        src={post.image_url || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        {post.tags?.slice(0, 1).map((tag) => (
                          <Badge key={tag} className="bg-blue-800 text-white">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-3 line-clamp-2 hover:text-blue-900 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            Aftab Alam Ansari
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.created_at).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />5 min read
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedTag(null)
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
