import React, { FC } from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/scaffold/SEO"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage: FC<PageProps> = ({ location }) => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
