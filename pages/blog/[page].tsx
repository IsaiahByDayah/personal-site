import { GetStaticProps, GetStaticPaths } from "next"
import { castArray, head } from "lodash"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import { getTotalBlogPages, getBlogPage } from "lib/prismic/util"
import { BlogPostDocument } from "lib/prismic/types"

import Blogroll from "components/common/Blogroll"

export const getStaticPaths: GetStaticPaths = async () => {
  const totalBlogPages = await getTotalBlogPages()

  const pages = Array(totalBlogPages)
    .fill(null)
    .map((_, index) => `${index + 1}`)

  return {
    paths: pages.map((page) => ({ params: { page } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
}) => {
  const page = parseInt(head(castArray(params?.page)) ?? "")

  if (isNaN(page))
    return {
      notFound: true,
    }

  const blogPosts = await getBlogPage(page)

  const totalPages = await getTotalBlogPages()

  return {
    props: {
      page,
      totalPages,
      blogPosts,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  blogPosts: BlogPostDocument[]
}

const BlogPage = ({ page, totalPages, blogPosts }: BlogPageProps) => {
  const router = useRouter()
  return (
    <Blogroll
      posts={blogPosts.map((blogPost) => ({
        href: blogPost.url ?? "/",
        publishDate: new Date(blogPost.last_publication_date),
        thumbnailProps: {
          src: blogPost.data.thumbnail.url,
          alt: blogPost.data.thumbnail.alt,
        },
        title: blogPost.data.title,
        excerpt: blogPost.data.excerpt,
      }))}
    >
      {totalPages > 1 && (
        <Pagination
          sx={{
            alignSelf: "center",
          }}
          count={totalPages}
          page={page}
          onChange={(_, page) => router.push(`/blog/${page}`)}
        />
      )}
    </Blogroll>
  )
}

export default BlogPage
