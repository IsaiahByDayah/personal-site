import { BlogPostCard } from "@/app/_components/BlogPostCard"
import { createClient } from "@/lib/prismicio"

const Page = async () => {
  const prismic = createClient()

  const blogPosts = await prismic.getAllByType("blog_post", {
    orderings: [
      { field: "my.blog_post.publication_datetime", direction: "desc" },
    ],
  })

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="txt-heading text-center">From the blog</h2>
          <p className="prose txt-prose mt-4 max-w-none text-center text-balance">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-16 space-y-20 lg:mt-24">
            {blogPosts.map((blogPost) => (
              <BlogPostCard key={blogPost.uid} blogPost={blogPost} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
