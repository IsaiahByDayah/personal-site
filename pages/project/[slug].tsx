import { GetStaticProps, GetStaticPaths } from "next"
import Prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react"
import { castArray, head } from "lodash"

import { Client, sliceZoneComponents, getProjectSlugs } from "lib/prismic/util"
import { ProjectDocument } from "lib/prismic/types"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getProjectSlugs()

  console.log("All Project Slugs: ", slugs)

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

  let document: ProjectDocument | undefined = undefined
  try {
    document = (await Client().getByUID("project", slug, {})) as ProjectDocument
  } catch (e) {}

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

export interface BlogPostProps {
  document: ProjectDocument
}

const BlogPost = ({ document }: BlogPostProps) => (
  <TwoColumnLayout sx={{ py: 2 }}>
    {document.data.title}
    {/* <SliceZone
        slices={document.data.slices}
        components={sliceZoneComponents}
      /> */}
  </TwoColumnLayout>
)

export default BlogPost
