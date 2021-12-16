import { GetStaticProps, GetStaticPaths } from "next"
import { castArray, head } from "lodash"
import { Pagination } from "@mui/material"
import { useRouter } from "next/router"

import { getTotalProjectsPages, getProjectsPage } from "lib/prismic/util"
import { ProjectDocument, TagDocument } from "lib/prismic/types"

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

  return {
    props: {
      page,
      totalPages,
      projects,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  projects: ProjectDocument[]
}

const BlogPage = ({ page, totalPages, projects }: BlogPageProps) => {
  const router = useRouter()

  return (
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
          tags: project.data.tags.map(
            (t) => (t.tag as unknown as TagDocument).data.name
          ),
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
  )
}

export default BlogPage
