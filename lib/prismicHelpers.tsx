// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

import { Typography, Link, Stack } from "@mui/material"
import Prismic from "@prismicio/client"
import { JSXMapSerializer, SliceZoneComponents } from "@prismicio/react"
import NextLink from "next/link"
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router,
} from "prismicConfiguration"

import Slices from "slices/slice-types"
import RichText from "slices/RichText"
import Quote from "slices/Quote"

export const richTextComponents: JSXMapSerializer = {
  paragraph: ({ children }) => <Typography>{children}</Typography>,
  hyperlink: ({ children, node }) => (
    // TODO: check the final href and if internal, use next/link, else use a tag (see PrismicLink compoennt)
    <NextLink href={linkResolver(node.data)} passHref>
      <Link>{children}</Link>
    </NextLink>
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

export default Client
