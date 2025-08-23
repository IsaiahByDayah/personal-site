import { asDate } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"
import dayjs from "dayjs"
import Link from "next/link"
import { BlogPostDocument } from "prismicio-types"

import { estimatedRichTextReadTime } from "@/utils/prismic"

interface BlogPostCardProps {
  className?: string
  blogPost?: BlogPostDocument
}

export const BlogPostCard = ({ className, blogPost }: BlogPostCardProps) => {
  if (!blogPost) {
    return null
  }

  const publicationDate = dayjs(
    asDate(blogPost.data.publication_datetime),
  ).format("MMM d, YYYY")

  return (
    <article
      className={clsx("flex flex-col items-start justify-between", className)}
    >
      <Link href={`/blog/${blogPost.uid}`}>
        <PrismicNextImage
          className="border-jet-500 bg-jet-500 aspect-video w-full rounded-lg border-4 object-cover sm:aspect-2/1 lg:aspect-3/2"
          field={blogPost.data.image}
        />
      </Link>

      <div className="flex max-w-xl grow flex-col justify-between">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time className="text-jet-400" dateTime={publicationDate}>
            {publicationDate}
          </time>
          <span className="text-jet-400">
            {estimatedRichTextReadTime(blogPost.data.content)} min read
          </span>
        </div>

        <div className="group relative grow">
          <h3 className="group-hover:text-jet-500 mt-2 text-xl font-black">
            <Link href={`/blog/${blogPost.uid}`}>
              <span className="absolute inset-0" />
              {blogPost.data.title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-3">{blogPost.data.description}</p>
        </div>
      </div>
    </article>
  )
}
