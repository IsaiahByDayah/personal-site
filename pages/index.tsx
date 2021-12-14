import { GetStaticProps } from "next"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import { getBlogPage, getTotalBlogPages } from "lib/prismic/util"
import { BlogPostDocument } from "lib/prismic/types"

import Blogroll from "components/common/Blogroll"

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const blogPosts = await getBlogPage()

  const totalPages = await getTotalBlogPages()

  return {
    props: {
      totalPages,
      blogPosts,
    },
  }
}

export interface HomeProps {
  totalPages: number
  blogPosts: BlogPostDocument[]
}

const Home = ({ totalPages, blogPosts }: HomeProps) => {
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
          sx={{ alignSelf: "center" }}
          count={totalPages}
          page={1}
          onChange={(_, page) => router.push(`/blog/${page}`)}
        />
      )}
    </Blogroll>
  )
}

export default Home
