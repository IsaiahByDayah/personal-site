import { Pagination } from "@mui/material"
import { Content } from "@prismicio/client"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import {
  BASE_BLOG_POSTS_FETCH_FIELDS,
  BASE_BLOG_POSTS_FETCH_LINKS,
  BASE_BLOG_POSTS_PREDICATES,
  blogPostDocumentsToBlogrollItemProps,
  BLOG_POSTS_DEFAULT_ORDERING,
  BLOG_POST_PAGE_SIZE,
  createClient,
} from "lib/prismic/util"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = createClient()

  // const blogPosts = await getBlogPage()
  const blogPostsQuery = await client.getByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: BASE_BLOG_POSTS_FETCH_FIELDS,
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
    orderings: BLOG_POSTS_DEFAULT_ORDERING,
    pageSize: BLOG_POST_PAGE_SIZE,
    page: 1,
  })

  const tags = await client.getAllByType("tag")

  return {
    props: {
      totalPages: blogPostsQuery.total_pages,
      blogPosts: blogPostsQuery.results,
      tags,
    },
  }
}

export interface HomeProps {
  totalPages: number
  blogPosts: Content.BlogPostDocument[]
  tags: Content.TagDocument[]
}

const Home = ({ totalPages, blogPosts, tags }: HomeProps) => {
  const router = useRouter()

  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
        <Blogroll items={blogPostDocumentsToBlogrollItemProps(blogPosts)}>
          {totalPages > 1 && (
            <Pagination
              sx={{ alignSelf: "center" }}
              count={totalPages}
              page={1}
              onChange={(_, page) => router.push(`/blog/${page}`)}
              hidePrevButton={true}
            />
          )}
        </Blogroll>
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}

export default Home
