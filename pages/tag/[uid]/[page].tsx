import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from "next"
import { castArray, head } from "lodash"
import { Pagination, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { RichTextField } from "@prismicio/types"

import {
  getTagByUID,
  getAllTags,
  getTagPage,
  getTotalTagPages,
  blogPostDocumentsToBlogrollItemProps,
} from "lib/prismic/util"
import { BlogPostDocument, TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"
import MuiRichText from "components/common/MuiRichText"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: GetStaticPathsResult["paths"] = []

  const tags = await getAllTags()

  for (const tag of tags) {
    const totalTagPages = await getTotalTagPages(tag.id)

    const pages = Array(Math.max(1, totalTagPages))
      .fill(null)
      .map((_, index) => `${index + 1}`)

    const newPaths = pages.map((page) => ({ params: { uid: tag.uid!, page } }))
    paths.push(...newPaths)
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<TagPageProps> = async ({
  params,
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

  const tag = await getTagByUID(uid)

  const blogPosts = await getTagPage(tag.id, page)

  const totalPages = await getTotalTagPages(tag.id)

  const tags = await getAllTags()

  return {
    props: {
      tag,
      page,
      totalPages,
      blogPosts,
      tags,
    },
  }
}

export interface TagPageProps {
  tag: TagDocument
  page: number
  totalPages: number
  blogPosts: BlogPostDocument[]
  tags: TagDocument[]
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
