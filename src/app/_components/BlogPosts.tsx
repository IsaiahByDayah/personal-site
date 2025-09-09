import { KeyTextField, RichTextField } from "@prismicio/client"
import clsx from "clsx"
import Link from "next/link"
import { BlogPostDocument } from "prismicio-types"
import { HiArrowSmallRight } from "react-icons/hi2"

import { BlogPostCard } from "@/app/_components/BlogPostCard"
import { HomepageSection } from "@/app/_components/HomepageSection"

interface BlogPostsProps {
  className?: string
  title?: KeyTextField
  description?: RichTextField
  blogPosts?: BlogPostDocument[]
}

export const BlogPosts = ({
  className,
  title,
  description,
  blogPosts,
}: BlogPostsProps) => (
  <HomepageSection
    id="blogPosts"
    className={clsx("", className)}
    title={title}
    description={description}
  >
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {blogPosts?.map((blogPost) => (
        <BlogPostCard
          key={blogPost.uid}
          blogPost={blogPost}
          responsive={false}
        />
      ))}
    </div>
    <div className="mt-10 text-center">
      <Link
        className="btn btn-ghost btn--mist inline-flex flex-row items-center gap-1"
        href="/blog"
      >
        View All Blog Posts
        <HiArrowSmallRight className="stroke-[0.5]" />
      </Link>
    </div>
  </HomepageSection>
)
