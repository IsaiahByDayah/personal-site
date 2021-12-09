// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

import { Typography, Link } from "@mui/material"
import Prismic from "@prismicio/client"
import { Elements } from "prismic-reactjs"
import NextLink from "next/link"
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router,
} from "prismicConfiguration"

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <NextLink key={index} href={linkResolver(element.data)} passHref>
    <a>{content}</a>
  </NextLink>
)

// Helper function to convert Prismic Rich Text links to Next/Link components
export const htmlSerializer = (type, element, content, children, key) => {
  switch (type) {
    case Elements.paragraph:
      return <Typography>{children}</Typography>
    case Elements.hyperlink:
      return (
        <NextLink href={linkResolver(element.data)} passHref>
          <Link>{children}</Link>
        </NextLink>
      )
    default:
      return null
  }
}

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken, Router))

// Options to be passed to the Client
const createClientOptions = (
  req = null,
  prismicAccessToken = null,
  routes = null
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
