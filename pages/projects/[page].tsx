import { Pagination } from "@mui/material"
import { Content } from "@prismicio/client"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import {
  BASE_PROJECTS_FETCH_FIELDS,
  BASE_PROJECTS_FETCH_LINKS,
  BASE_PROJECTS_PREDICATES,
  createClient,
  PROJECTS_DEFAULT_ORDERING,
  PROJECT_PAGE_SIZE,
} from "lib/prismic/util"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Blogroll from "components/common/Blogroll"
import { isNonNullable } from "lib/utils"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const projectsQuery = await client.getByType("project", {
    predicates: BASE_PROJECTS_PREDICATES,
    fetch: ["project.uid"],
    pageSize: PROJECT_PAGE_SIZE,
  })

  const pages = Array(projectsQuery.total_pages)
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

  if (isNaN(page)) {
    return {
      notFound: true,
    }
  }

  const client = createClient()

  const projectsQuery = await client.getByType("project", {
    predicates: BASE_PROJECTS_PREDICATES,
    fetch: BASE_PROJECTS_FETCH_FIELDS,
    fetchLinks: BASE_PROJECTS_FETCH_LINKS,
    orderings: PROJECTS_DEFAULT_ORDERING,
    pageSize: PROJECT_PAGE_SIZE,
    page,
  })

  return {
    props: {
      page,
      totalPages: projectsQuery.total_pages,
      projects: projectsQuery.results,
    },
  }
}

export interface BlogPageProps {
  page: number
  totalPages: number
  projects: Content.ProjectDocument[]
}

const BlogPage = ({ page, totalPages, projects }: BlogPageProps) => {
  const router = useRouter()

  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <Blogroll
        items={projects.map((project) => ({
          href: project.url ?? "/",
          thumbnailProps: {
            src: project.data.image.url ?? undefined,
            alt: project.data.image.alt ?? undefined,
          },
          primary: project.data.title ?? "",
          secondary: project.data.summary ?? undefined,
          tags: project.data.tags
            .map((t) => (t.tag as unknown as Content.TagDocument).data.name)
            .filter(isNonNullable),
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
