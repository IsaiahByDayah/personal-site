import { Pagination, Stack, Typography } from "@mui/material"
import { Content, predicate } from "@prismicio/client"
import { RichTextField } from "@prismicio/types"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next"
import { useRouter } from "next/router"

import {
  BASE_BLOG_POSTS_FETCH_FIELDS,
  BASE_BLOG_POSTS_FETCH_LINKS,
  BASE_BLOG_POSTS_PREDICATES,
  BASE_TAGS_PREDICATES,
  blogPostDocumentsToBlogrollItemProps,
  BLOG_POSTS_DEFAULT_ORDERING,
  BLOG_POST_PAGE_SIZE,
  createClient,
} from "lib/prismic/util"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"
import MuiRichText from "components/common/MuiRichText"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()
  const paths: GetStaticPathsResult["paths"] = []

  const tags = await client.getAllByType("tag")

  for (const tag of tags) {
    const blogPostsQuery = await client.getByType("blog-post", {
      predicates: [
        ...BASE_BLOG_POSTS_PREDICATES,
        predicate.at("my.blog-post.tags.tag", tag.id),
      ],
      fetch: ["blog-post.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    })

    const pages = Array(Math.max(1, blogPostsQuery.total_pages))
      .fill(null)
      .map((_, index) => `${index + 1}`)

    const newPaths = pages.map((page) => ({ params: { uid: tag.uid!, page } }))
    paths.push(...newPaths)
  }

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<TagPageProps> = async ({
  params,
  previewData,
}) => {
  const uid = head(castArray(params?.uid))
  if (!uid) {
    return {
      notFound: true,
    }
  }

  const page = parseInt(head(castArray(params?.page)) ?? "")
  if (isNaN(page)) {
    return {
      notFound: true,
    }
  }

  const client = createClient({ previewData })

  const tag = await client.getByUID("tag", uid, {
    predicates: BASE_TAGS_PREDICATES,
  })

  const blogPostsQuery = await client.getByType("blog-post", {
    predicates: [
      ...BASE_BLOG_POSTS_PREDICATES,
      predicate.at("my.blog-post.tags.tag", tag.id),
    ],
    fetch: BASE_BLOG_POSTS_FETCH_FIELDS,
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
    orderings: BLOG_POSTS_DEFAULT_ORDERING,
    pageSize: BLOG_POST_PAGE_SIZE,
    page,
  })

  const tags = await client.getAllByType("tag")

  return {
    props: {
      tag,
      page,
      totalPages: blogPostsQuery.total_pages,
      blogPosts: blogPostsQuery.results,
      tags,
    },
    revalidate: 60,
  }
}

export interface TagPageProps {
  tag: Content.TagDocument
  page: number
  totalPages: number
  blogPosts: Content.BlogPostDocument[]
  tags: Content.TagDocument[]
}

const TagPage = ({ tag, page, totalPages, blogPosts, tags }: TagPageProps) => {
  const router = useRouter()
  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
        <Stack direction="column" spacing={5}>
          <Stack direction="column" spacing={1}>
            <Typography variant="h4" fontWeight={900} align="center">
              {tag.data.name}
            </Typography>
            <MuiRichText
              field={tag.data.description as RichTextField}
              getSx={() => ({ textAlign: "center" })}
            />
          </Stack>

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
        </Stack>
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}

export default TagPage
