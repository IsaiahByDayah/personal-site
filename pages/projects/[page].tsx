import { GetStaticProps, GetStaticPaths } from "next"
import { castArray, head } from "lodash"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import {
  getTotalProjectsPages,
  getProjectsPage,
  getAllTags,
} from "lib/prismic/util"
import { ProjectDocument, TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = await getTotalProjectsPages()

  const pages = Array(totalPages)
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

  const projects = await getProjectsPage(page)

  const totalPages = await getTotalProjectsPages()

  const tags = await getAllTags()

  return {
    props: {
      page,
      totalPages,
      projects,
      tags,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  projects: ProjectDocument[]
  tags: TagDocument[]
}

const BlogPage = ({ page, totalPages, projects, tags }: BlogPageProps) => {
  const router = useRouter()
  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
        <Blogroll
          items={projects.map((project) => ({
            href: project.url ?? "/",
            thumbnailProps: {
              src: project.data.image.url,
              alt: project.data.image.alt,
            },
            primary: project.data.title,
            secondary: project.data.summary,
          }))}
          emptyMessage="No Projects."
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

export default BlogPage
