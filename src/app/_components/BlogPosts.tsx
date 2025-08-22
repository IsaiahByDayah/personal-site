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
    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
      <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
        {blogPosts?.map((blogPost) => (
          <BlogPostCard
            key={blogPost.uid}
            className="pt-8 sm:inline-block sm:w-full sm:px-4"
            blogPost={blogPost}
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
    </div>
  </HomepageSection>
)
