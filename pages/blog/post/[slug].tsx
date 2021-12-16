import { GetStaticProps, GetStaticPaths } from "next"
import { SliceZone } from "@prismicio/react"
import { castArray, head } from "lodash"
import { Box, Stack, Typography, Divider } from "@mui/material"
import dayjs from "dayjs"

import {
  sliceZoneComponents,
  getBlogSlugs,
  getBlogBySlug,
  getSurroundingBlogPosts,
} from "lib/prismic/util"
import { BlogPostDocument } from "lib/prismic/types"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import OtherPosts from "components/common/OtherPosts"

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = head(castArray(params?.slug))

  if (!slug)
    return {
      notFound: true,
    }

  const document = await getBlogBySlug(slug)

  const { previous, next } = await getSurroundingBlogPosts(document.id)

  return {
    props: {
      document,
      previous,
      next,
    },
  }
}

export interface BlogPostProps {
  document: BlogPostDocument
  previous: BlogPostDocument | null
  next: BlogPostDocument | null
}

const BlogPost = ({ document, previous, next }: BlogPostProps) => {
  const publishDates: string[] = []

  if (document.first_publication_date === document.last_publication_date) {
    publishDates.push(
      dayjs(document.first_publication_date).format("MMMM D, YYYY")
    )
  } else {
    publishDates.push(
      `First Published: ${dayjs(document.first_publication_date).format(
        "MMMM D, YYYY"
      )}`
    )
    publishDates.push(
      `Last Updated: ${dayjs(document.last_publication_date).format(
        "MMMM D, YYYY"
      )}`
    )
  }

  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <Stack direction="column" spacing={2}>
        <Box
          maxWidth={({ breakpoints }) =>
            `min(100% ,${breakpoints.values.md}px)`
          }
          alignSelf="center"
          borderRadius={1}
          boxShadow={4}
          component="img"
          src={document.data.thumbnail.url}
          alt={document.data.thumbnail.alt}
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
          {document.data.title}
        </Typography>

        <Box display="flex" flexWrap="wrap" alignItems="space-between"></Box>

        <SliceZone
          slices={document.data.slices}
          components={sliceZoneComponents}
        />
        <Divider />
        <OtherPosts previous={previous} next={next} />
      </Stack>
    </TwoColumnLayout>
  )
}

export default BlogPost
