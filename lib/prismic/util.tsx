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

import { BlogPostDocument } from "lib/prismic/types"

import Slices from "slices/slice-types"
import RichText from "slices/RichText"
import Quote from "slices/Quote"

export const PAGE_SIZE = 20

export const richTextComponents: JSXMapSerializer = {
  paragraph: ({ children }) => <Typography>{children}</Typography>,
  hyperlink: ({ children, node, ...rest }) => {
    // console.log("hyperlink props: ", node, rest)
    return (
      // TODO: check the final href and if internal, use next/link, else use a tag (see PrismicLink compoennt)
      <NextLink href={linkResolver(node.data)} passHref>
        <Link rel="none" target={(node.data as any).target}>
          {children}
        </Link>
      </NextLink>
    )
  },
  image: ({ node }) => (
    <Box
      maxWidth={1}
      component="img"
      src={node.url}
      alt={node.alt ?? undefined}
    />
  ),
}

export const sliceZoneComponents: SliceZoneComponents<Slices> = {
  rich_text: (props) => (
    <Stack spacing={2}>
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
      pageSize: PAGE_SIZE,
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
      pageSize: PAGE_SIZE,
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
        // pageSize: 100,
        pageSize: PAGE_SIZE,
        page,
      }
    )

    const responseSlugs = response.results.map((blogPost) => blogPost.uid!)
    slugs.push(...responseSlugs)
  } while (slugs.length < response.total_results_size)

  return slugs
}
