import { LinkType } from "@prismicio/types"
// REF: https://prismic.io/docs/technologies/nextjs#3.2.-prismic-helpers

// -- Prismic Repo Name
export const repoName = "isaiah"

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ""

////////////////////////////
// REF: https://prismic.io/docs/core-concepts/link-resolver-route-resolver
////////////////////////////

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  switch (doc.link_type) {
    case LinkType.Web:
      if (doc.url) return doc.url
      break
    case LinkType.Document:
      if (doc.url) return doc.url
      // MARK: Handle custom client side paths here
      break
    case LinkType.Media:
      if (doc.url) return doc.url
      break
  }

  if (doc.url) return doc.url
  return "/"
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
  routes: [
    {
      type: "homepage",
      path: "/",
    },
    {
      type: "about-page",
      path: "/about",
    },
    {
      type: "blog-post",
      path: "/blog/post/:uid",
    },
    {
      type: "tag",
      path: "/tag/:uid/1",
    },
    {
      type: "project",
      path: "/project/:uid",
    },
  ],
}
