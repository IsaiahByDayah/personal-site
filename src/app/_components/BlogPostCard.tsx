import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"
import Link from "next/link"
import { BlogPostDocument } from "prismicio-types"
import { HiArrowSmallRight } from "react-icons/hi2"

interface BlogPostCardProps {
  className?: string
  blogPost?: BlogPostDocument
}

export const BlogPostCard = ({ className, blogPost }: BlogPostCardProps) => {
  if (!blogPost) {
    return null
  }

  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
      <PrismicNextImage
        className="border-jet-500 bg-jet-500 min-w-0 basis-1/2 self-start rounded-lg border-4"
        field={blogPost.data.image}
      />
      <div className="basis-1/2">
        <Link
          className="text-xl font-black underline"
          href={`/blog/${blogPost.uid}`}
        >
          {blogPost.data.title}
        </Link>
        <p className="mt-2">{blogPost.data.description}</p>
        <Link
          className="btn btn-outline btn--jet mt-4 inline-flex flex-row items-center gap-1"
          href={`/blog/${blogPost.uid}`}
        >
          Read More <HiArrowSmallRight className="stroke-[0.5]" />
        </Link>
      </div>
    </div>
  )
}
