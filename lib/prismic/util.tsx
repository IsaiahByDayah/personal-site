// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

import { Typography, Box, Link, Stack } from "@mui/material"
import Prismic from "@prismicio/client"
import { JSXMapSerializer, SliceZoneComponents } from "@prismicio/react"
import NextLink from "next/link"
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router,
} from "prismicConfiguration"

import {
  BlogPostDocument,
  TagDocument,
  ProjectDocument,
} from "lib/prismic/types"

import Slices from "slices/slice-types"
import RichText from "slices/RichText"
import Quote from "slices/Quote"

export const MAX_PAGE_SIZE = 100
export const BLOG_POST_PAGE_SIZE = 20

export const richTextComponents: JSXMapSerializer = {
  paragraph: ({ children, key }) => (
    <Typography key={key}>{children}</Typography>
  ),
  hyperlink: ({ children, node, key }) => {
    // console.log("hyperlink props: ", node, rest)
    return (
      // TODO: check the final href and if internal, use next/link, else use a tag (see PrismicLink compoennt)
      <NextLink key={key} href={linkResolver(node.data)} passHref>
        <Link rel="none" target={(node.data as any).target}>
          {children}
        </Link>
      </NextLink>
    )
  },
  image: ({ node, key }) => (
    <Box
      key={key}
      maxWidth={1}
      component="img"
      src={node.url}
      alt={node.alt ?? undefined}
    />
  ),
}

export const sliceZoneComponents: SliceZoneComponents<Slices> = {
  rich_text: (props) => (
    <Stack key={`${props.slice.slice_type}-${props.index}`} spacing={2}>
      <RichText {...props} />
    </Stack>
  ),
  quote: Quote,
}

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken, Router))

// Options to be passed to the Client
const createClientOptions = (
  req = null,
  prismicAccessToken: string | null | undefined = null,
  routes: any = null
) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  const routesOption = routes ? { routes: Router.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}

export const getBlogPage = async (page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
    ],
    {
      fetch: [
        "blog-post.uid",
        "blog-post.title",
        "blog-post.thumbnail",
        "blog-post.excerpt",
      ],
      orderings: `[last_publication_date]`,
      page,
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )

  return response.results as BlogPostDocument[]
}

export const getTotalBlogPages = async () => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
    ],
    {
      fetch: ["blog-post.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getBlogSlugs = async () => {
  const slugs: string[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    // console.log(`getBlogSlugs: Fetching page ${page}`)
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "blog-post"),
        Prismic.Predicates.has("my.blog-post.uid"),
      ],
      {
        fetch: "blog-post.uid",
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    const responseSlugs = response.results.map((blogPost) => blogPost.uid!)
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}

export const getTagPage = async (tagId: string, page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
      Prismic.Predicates.at("my.blog-post.tags.tag", tagId),
    ],
    {
      fetch: [
        "blog-post.uid",
        "blog-post.title",
        "blog-post.thumbnail",
        "blog-post.excerpt",
      ],
      orderings: `[last_publication_date]`,
      page,
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )

  return response.results as BlogPostDocument[]
}

export const getTotalTagPages = async (tagId: string) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "blog-post"),
      Prismic.Predicates.has("my.blog-post.uid"),
      Prismic.Predicates.at("my.blog-post.tags.tag", tagId),
    ],
    {
      fetch: ["blog-post.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getAllTags = async () => {
  const tags: TagDocument[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "tag"),
        Prismic.Predicates.has("my.tag.uid"),
      ],
      {
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    tags.push(...(response.results as TagDocument[]))
  } while (tags.length < response.total_results_size)

  return tags
}

export const getProjectsPage = async (page: number = 1) => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "project"),
      Prismic.Predicates.has("my.project.uid"),
    ],
    {
      orderings: `[last_publication_date]`,
      page,
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )

  return response.results as ProjectDocument[]
}

export const getTotalProjectsPages = async () => {
  const response = await Client().query(
    [
      Prismic.Predicates.at("document.type", "project"),
      Prismic.Predicates.has("my.project.uid"),
    ],
    {
      fetch: ["project.uid"],
      pageSize: BLOG_POST_PAGE_SIZE,
    }
  )
  return response.total_pages
}

export const getProjectSlugs = async () => {
  const slugs: string[] = []

  let response:
    | Awaited<ReturnType<ReturnType<typeof Client>["query"]>>
    | undefined = undefined

  do {
    const page: number = response ? response.page + 1 : 1
    // console.log(`getBlogSlugs: Fetching page ${page}`)
    response = await Client().query(
      [
        Prismic.Predicates.at("document.type", "project"),
        Prismic.Predicates.has("my.project.uid"),
      ],
      {
        fetch: "project.uid",
        pageSize: MAX_PAGE_SIZE,
        page,
      }
    )

    const responseSlugs = response.results.map((blogPost) => blogPost.uid!)
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}
