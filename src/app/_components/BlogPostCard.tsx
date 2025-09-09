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
  responsive?: boolean
}

export const BlogPostCard = ({
  className,
  blogPost,
  responsive = true,
}: BlogPostCardProps) => {
  if (!blogPost) {
    return null
  }

  const publicationDate = dayjs(
    asDate(blogPost.data.publication_datetime),
  ).format("MMM d, YYYY")

  return (
    <article
      className={clsx(
        "relative isolate flex flex-col gap-8",
        {
          "lg:flex-row": responsive,
        },
        className,
      )}
    >
      <Link href={`/blog/${blogPost.uid}`}>
        <PrismicNextImage
          className={clsx(
            "border-jet-500 bg-jet-500 aspect-video w-full rounded-lg border-4 object-cover",
            {
              "sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0": responsive,
            },
          )}
          field={blogPost.data.image}
        />
      </Link>

      <div className="flex-grow">
        <div className="flex items-center gap-x-4 text-xs">
          <time className="text-jet-400" dateTime={publicationDate}>
            {publicationDate}
          </time>
          <span className="text-jet-400">
            {estimatedRichTextReadTime(blogPost.data.content)} min read
          </span>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="group-hover:text-jet-500 mt-2 line-clamp-2 text-xl font-black">
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
