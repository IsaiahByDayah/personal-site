import { asDate } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import dayjs from "dayjs"
import Link from "next/link"

import { createClient } from "@/lib/prismicio"
import { estimatedRichTextReadTime } from "@/utils/prismic"

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
            {blogPosts.map((blogPost, idx) => {
              const publicationDate = dayjs(
                asDate(blogPost.data.publication_datetime),
              ).format("MMM d, YYYY")

              return (
                <article
                  key={blogPost.uid + idx}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <Link href={`/blog/${blogPost.uid}`}>
                    <PrismicNextImage
                      className="border-jet-500 bg-jet-500 aspect-video w-full rounded-lg border-4 object-cover sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0"
                      field={blogPost.data.image}
                    />
                  </Link>
                  <div className="flex-grow">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time className="text-jet-400" dateTime={publicationDate}>
                        {publicationDate}
                      </time>
                      <span className="text-jet-400">
                        {estimatedRichTextReadTime(blogPost.data.content)} min
                        read
                      </span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="group-hover:text-jet-500 mt-2 line-clamp-2 text-xl font-black">
                        <Link href={`/blog/${blogPost.uid}`}>
                          <span className="absolute inset-0" />
                          {blogPost.data.title}
                        </Link>
                      </h3>
                      <p className="mt-3 line-clamp-3">
                        {blogPost.data.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
