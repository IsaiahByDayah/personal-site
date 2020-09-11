import React, { FC } from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"

type AboutData = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const About: FC<PageProps> = ({ location }) => {
  const data: AboutData = useStaticQuery(
    graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="About" />
      <p>This is my about page!</p>
    </Layout>
  )
}

export default About
