import { Box, Stack, Typography } from "@mui/material"
import { Content } from "@prismicio/client"
import { RichTextField } from "@prismicio/types"
import dayjs from "dayjs"
import { castArray, head } from "lodash"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import {
  BASE_PROJECTS_FETCH_LINKS,
  BASE_PROJECTS_PREDICATES,
  createClient,
} from "lib/prismic/util"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import MuiRichText from "components/common/MuiRichText"
import Tags from "components/common/Tags"
import { isNonNullable } from "lib/utils"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()

  const projects = await client.getAllByType("project", {
    predicates: BASE_PROJECTS_PREDICATES,
    fetch: ["project.uid"],
  })

  return {
    paths: projects.map((project) => ({
      params: { slug: project.uid },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params,
}) => {
  const slug = head(castArray(params?.slug))

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const client = createClient()

  const project = await client.getByUID("project", slug, {
    fetchLinks: BASE_PROJECTS_FETCH_LINKS,
  })

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}

export interface ProjectProps {
  project: Content.ProjectDocument
}

const Project = ({ project }: ProjectProps) => {
  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <Head>
        <title>{project.data.title} | Isaiah Smith</title>
      </Head>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          {Boolean(project.data.image.url) && (
            <Box
              maxWidth={({ breakpoints }) =>
                `min(100% ,${breakpoints.values.md}px)`
              }
              alignSelf="center"
              borderRadius={1}
              boxShadow={4}
              component="img"
              src={project.data.image.url!}
              alt={project.data.image.alt ?? ""}
            />
          )}
          <Typography variant="caption" color="primary.main">
            Last Updated:{" "}
            {dayjs(project.last_publication_date).format("MMMM D, YYYY")}
          </Typography>
          <Typography variant="h4" fontWeight={900}>
            {project.data.title}
          </Typography>
          <Tags
            tags={project.data.tags
              .map((t) => (t.tag as unknown as Content.TagDocument).data.name)
              .filter(isNonNullable)}
            label={false}
          />
        </Stack>
        <MuiRichText field={project.data.description as RichTextField} />
        {Boolean(project.data.highlights.length) && (
          <Stack direction="column">
            <Typography variant="h6" fontWeight={900}>
              Project Highlights
            </Typography>
            <ul>
              {project.data.highlights.map((h, index) => (
                <li key={index}>
                  <MuiRichText field={h.highlight as RichTextField} />
                </li>
              ))}
            </ul>
          </Stack>
        )}
      </Stack>
    </TwoColumnLayout>
  )
}

export default Project
