import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from "next"
import { castArray, head } from "lodash"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

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

  const blogPosts = await getTagPage(tag.id)

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

export default TagPage
