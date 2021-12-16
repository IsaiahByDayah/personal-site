import { GetStaticProps, GetStaticPaths } from "next"
import Prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react"
import { castArray, head } from "lodash"

import { Client, sliceZoneComponents, getBlogSlugs } from "lib/prismic/util"
import { BlogPostDocument } from "lib/prismic/types"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogSlugs()

  console.log("All Blog Slugs: ", slugs)

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

  let document: BlogPostDocument | undefined = undefined
  try {
    document = (await Client().getByUID(
      "blog-post",
      slug,
      {}
    )) as BlogPostDocument
  } catch (e) {}

  if (!document)
    return {
      notFound: true,
    }

  const previous = (
    await await Client().query(
      Prismic.Predicates.at("document.type", "blog-post"),
      {
        pageSize: 1,
        after: `${document.id}`,
        orderings: "[document.last_publication_date desc]",
      }
    )
  ).results[0] as BlogPostDocument

  const next = (
    await await Client().query(
      Prismic.Predicates.at("document.type", "blog-post"),
      {
        pageSize: 1,
        after: `${document.id}`,
        orderings: "[document.last_publication_date]",
      }
    )
  ).results[0] as BlogPostDocument

  return {
    props: {
      document,
      previous: previous ?? null,
      next: next ?? null,
    },
  }
}

export interface BlogPostProps {
  document: BlogPostDocument
  previous: BlogPostDocument | null
  next: BlogPostDocument | null
}

const BlogPost = ({ document, previous, next }: BlogPostProps) => {
  console.log("Previous: ", previous)
  console.log("Next: ", next)
  return (
    <TwoColumnLayout sx={{ py: 2 }}>
      <SliceZone
        slices={document.data.slices}
        components={sliceZoneComponents}
      />
    </TwoColumnLayout>
  )
}

export default BlogPost
