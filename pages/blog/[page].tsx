import { Pagination } from "@mui/material"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import { BlogPostDocument, TagDocument } from "lib/prismic/types"
import {
  blogPostDocumentsToBlogrollItemProps,
  getAllTags,
  getBlogPage,
  getTotalBlogPages,
} from "lib/prismic/util"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

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

  console.log({ blogPosts })

  const totalPages = await getTotalBlogPages()

  const tags = await getAllTags()

  return {
    props: {
      page,
      totalPages,
      blogPosts,
      tags,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  blogPosts: BlogPostDocument[]
  tags: TagDocument[]
}

const BlogPage = ({ page, totalPages, blogPosts, tags }: BlogPageProps) => {
  const router = useRouter()
  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
        <Blogroll items={blogPostDocumentsToBlogrollItemProps(blogPosts)}>
          {totalPages > 1 && (
            <Pagination
              sx={{
                alignSelf: "center",
              }}
              count={totalPages}
              page={page}
              onChange={(_, page) => router.push(`/blog/${page}`)}
              hidePrevButton={page === 1}
              hideNextButton={page === totalPages}
            />
          )}
        </Blogroll>
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}

export default BlogPage
