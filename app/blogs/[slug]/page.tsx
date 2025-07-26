import { BlogDetail } from "@/components/blogs/blog-detail"
import { staticBlogPosts } from "@/lib/static-blogs"
import { notFound } from "next/navigation"

interface BlogDetailPageProps {
  params: { slug: string }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params

  const post = staticBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
