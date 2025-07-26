import { BlogsHero } from "@/components/blogs/blogs-hero"
import { BlogsList } from "@/components/blogs/blogs-list"

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogsHero />
      <BlogsList />
    </div>
  )
}
