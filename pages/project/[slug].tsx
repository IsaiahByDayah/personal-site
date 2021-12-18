import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { RichTextField } from "@prismicio/types"
import { castArray, head } from "lodash"
import { Typography, Box, Stack } from "@mui/material"
import dayjs from "dayjs"

import { getProjectSlugs, getProjectBySlug } from "lib/prismic/util"
import { ProjectDocument, TagDocument } from "lib/prismic/types"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

import Tags from "components/common/Tags"
import MuiRichText from "components/common/MuiRichText"

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getProjectSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params,
}) => {
  const slug = head(castArray(params?.slug))

  if (!slug)
    return {
      notFound: true,
    }

  const document = await getProjectBySlug(slug)

  if (!document)
    return {
      notFound: true,
    }

  return {
    props: {
      document,
    },
  }
}

export interface ProjectProps {
  document: ProjectDocument
}

const Project = ({ document }: ProjectProps) => {
  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <Head>
        <title>{document.data.title} | Isaiah Smith</title>
      </Head>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          {Boolean(document.data.image.url) && (
            <Box
              maxWidth={({ breakpoints }) =>
                `min(100% ,${breakpoints.values.md}px)`
              }
              alignSelf="center"
              borderRadius={1}
              boxShadow={4}
              component="img"
              src={document.data.image.url!}
              alt={document.data.image.alt ?? ""}
            />
          )}
          <Typography variant="caption" color="primary.main">
            Last Updated:{" "}
            {dayjs(document.last_publication_date).format("MMMM D, YYYY")}
          </Typography>
          <Typography variant="h4" fontWeight={900}>
            {document.data.title}
          </Typography>
          <Tags
            tags={document.data.tags.map(
              (t) => (t.tag as unknown as TagDocument).data.name
            )}
            label={false}
          />
        </Stack>
        <MuiRichText field={document.data.description as RichTextField} />
        {Boolean(document.data.highlights.length) && (
          <Stack direction="column">
            <Typography variant="h6" fontWeight={900}>
              Project Highlights
            </Typography>
            <ul>
              {document.data.highlights.map((h, index) => (
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
