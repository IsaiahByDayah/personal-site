import { GetStaticProps, GetStaticPaths, GetStaticPathsResult } from "next"
import { castArray, head } from "lodash"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import {
  Client,
  getTotalBlogPages,
  getBlogPage,
  getAllTags,
  getTagPage,
  getTotalTagPages,
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
    // paths: pages.map((page) => ({ params: { page } })),
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<TagPageProps> = async ({
  params,
}) => {
  const uid = head(castArray(params?.uid))
  if (!uid) {
    console.log("No [uid] parameter...")
    return {
      notFound: true,
    }
  }

  const page = parseInt(head(castArray(params?.page)) ?? "")
  if (isNaN(page)) {
    console.log("No [page] parameter...")
    return {
      notFound: true,
    }
  }

  let tag: TagDocument | undefined = undefined
  try {
    tag = (await Client().getByUID("tag", uid, {})) as TagDocument
  } catch (e) {}

  if (!tag) {
    console.log(`No tag found for uid "${uid}"`)
    return {
      notFound: true,
    }
  }

  console.log("Tag: ", tag)

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
        <Blogroll
          items={blogPosts.map((blogPost) => ({
            href: blogPost.url ?? "/",
            meta: new Date(blogPost.last_publication_date),
            thumbnailProps: {
              src: blogPost.data.thumbnail.url,
              alt: blogPost.data.thumbnail.alt,
            },
            primary: blogPost.data.title,
            secondary: blogPost.data.excerpt,
          }))}
        >
          {totalPages > 1 && (
            <Pagination
              sx={{
                alignSelf: "center",
              }}
              count={totalPages}
              page={page}
              onChange={(_, page) => router.push(`/blog/${page}`)}
            />
          )}
        </Blogroll>
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}

export default TagPage
