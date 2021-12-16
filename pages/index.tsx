import { GetStaticProps } from "next"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import { getAllTags, getBlogPage, getTotalBlogPages } from "lib/prismic/util"
import { BlogPostDocument, TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const blogPosts = await getBlogPage()

  const totalPages = await getTotalBlogPages()

  const tags = await getAllTags()

  return {
    props: {
      totalPages,
      blogPosts,
      tags,
    },
  }
}

export interface HomeProps {
  totalPages: number
  blogPosts: BlogPostDocument[]
  tags: TagDocument[]
}

const Home = ({ totalPages, blogPosts, tags }: HomeProps) => {
  const router = useRouter()
  console.log("Tags: ", tags)
  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
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
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}

export default Home
