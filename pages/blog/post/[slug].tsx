import { GetStaticProps, GetStaticPaths } from "next"
import { SliceZone } from "@prismicio/react"
import { PrismicDocument, SliceZone as ISliceZone } from "@prismicio/types"
import { castArray, head } from "lodash"

import { Client, sliceZoneComponents, getBlogSlugs } from "lib/prismic/util"

import Slices from "slices/slice-types"

type BlogPostDocumentType = PrismicDocument<{ slices: ISliceZone<Slices> }>

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

  let document: BlogPostDocumentType | undefined = undefined
  try {
    document = (await Client().getByUID(
      "blog-post",
      slug,
      {}
    )) as BlogPostDocumentType
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

interface BlogPostProps {
  document: BlogPostDocumentType
}

const BlogPost = ({ document }: BlogPostProps) => (
  <SliceZone slices={document.data.slices} components={sliceZoneComponents} />
)

export default BlogPost
