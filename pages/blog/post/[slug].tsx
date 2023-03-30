import { Box, Divider, Stack, Typography } from "@mui/material"
import { Content } from "@prismicio/client"
import dayjs from "dayjs"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"

import OtherPosts from "components/common/OtherPosts"
import SliceZone from "components/common/SliceZone"
import Tags from "components/common/Tags"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import {
  BASE_BLOG_POSTS_FETCH_LINKS,
  BASE_BLOG_POSTS_PREDICATES,
  createClient,
} from "lib/prismic/util"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const blogPosts = await client.getAllByType("blog-post", {
    predicates: BASE_BLOG_POSTS_PREDICATES,
    fetch: "blog-post.uid",
  })

  return {
    paths: blogPosts.map((blogPost) => ({
      params: { slug: blogPost.uid },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
  previewData,
}) => {
  const client = createClient({ previewData })
  const slug = head(castArray(params?.slug))

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const blogPost = await client.getByUID("blog-post", slug, {
    fetchLinks: BASE_BLOG_POSTS_FETCH_LINKS,
  })

  if (!blogPost) {
    return {
      notFound: true,
    }
  }

  const previousQuery = await client.getByType("blog-post", {
    pageSize: 1,
    after: blogPost.id,
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  })

  const nextQuery = await client.getByType("blog-post", {
    pageSize: 1,
    after: blogPost.id,
    orderings: {
      field: "document.last_publication_date",
      direction: "asc",
    },
  })

  return {
    props: {
      blogPost,
      previous: previousQuery.results.at(0) ?? null,
      next: nextQuery.results.at(0) ?? null,
    },
  }
}

export interface BlogPostProps {
  blogPost: Content.BlogPostDocument
  previous: Content.BlogPostDocument | null
  next: Content.BlogPostDocument | null
}

const BlogPost = ({ blogPost, previous, next }: BlogPostProps) => {
  const publishDates: string[] = []

  if (blogPost.first_publication_date === blogPost.last_publication_date) {
    publishDates.push(
      dayjs(blogPost.first_publication_date).format("MMMM D, YYYY")
    )
  } else {
    publishDates.push(
      `First Published: ${dayjs(blogPost.first_publication_date).format(
        "MMMM D, YYYY"
      )}`
    )
    publishDates.push(
      `Last Updated: ${dayjs(blogPost.last_publication_date).format(
        "MMMM D, YYYY"
      )}`
    )
  }

  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <Box
            maxWidth={({ breakpoints }) =>
              `min(100% ,${breakpoints.values.md}px)`
            }
            sx={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
            alignSelf="center"
            borderRadius={1}
            boxShadow={4}
            component="img"
            src={blogPost.data.thumbnail.url ?? undefined}
            alt={blogPost.data.thumbnail.alt ?? undefined}
          />

          <Box display="flex" flexWrap="wrap">
            {publishDates.map((value) => (
              <Typography
                mr={2}
                key={value}
                variant="caption"
                color="primary.main"
              >
                {value}
              </Typography>
            ))}
          </Box>

          <Typography variant="h4" fontWeight={900}>
            {blogPost.data.title}
          </Typography>

          <Tags
            tags={blogPost.data.tags.map(
              (t) => t.tag as unknown as Content.TagDocument
            )}
            label={false}
          />
        </Stack>

        <SliceZone slices={blogPost.data.slices} />
        <Divider />
        <OtherPosts previous={previous} next={next} />
      </Stack>
    </TwoColumnLayout>
  )
}

export default BlogPost
