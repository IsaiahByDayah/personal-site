import { Pagination } from "@mui/material"
import { Content } from "@prismicio/client"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import Blogroll from "components/common/Blogroll"
import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import {
  BASE_BLOG_POSTS_FETCH_FIELDS,
  BASE_BLOG_POSTS_FETCH_LINKS,
  BASE_BLOG_POSTS_PREDICATES,
  BLOG_POST_PAGE_SIZE,
  BLOG_POSTS_DEFAULT_ORDERING,
  blogPostDocumentsToBlogrollItemProps,
  createClient,
} from "lib/prismic/util"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const blogPostsQuery = await client.getByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: ["blog-post.uid"],
    pageSize: BLOG_POST_PAGE_SIZE,
  })

  const pages = Array(blogPostsQuery.total_pages)
    .fill(null)
    .map((_, index) => `${index + 1}`)

  return {
    paths: pages.map((page) => ({ params: { page } })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
  previewData,
}) => {
  const page = parseInt(head(castArray(params?.page)) ?? "")

  if (isNaN(page)) {
    return {
      notFound: true,
    }
  }

  const client = createClient({ previewData })

  // const blogPosts = await getBlogPage(page)
  const blogPostsQuery = await client.getByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: BASE_BLOG_POSTS_FETCH_FIELDS,
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
    orderings: BLOG_POSTS_DEFAULT_ORDERING,
    pageSize: BLOG_POST_PAGE_SIZE,
    page,
  })

  const tags = await client.getAllByType("tag")

  return {
    props: {
      page,
      totalPages: blogPostsQuery.total_pages,
      blogPosts: blogPostsQuery.results,
      tags,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  blogPosts: Content.BlogPostDocument[]
  tags: Content.TagDocument[]
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
