/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { SeoQuery } from "../../../graphql-types"

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: { [key: string]: string }[]
}

const SEO: FC<SEOProps> = ({ title, description = "", lang = "en", meta = [] }) => {
  const data: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author {
              social {
                twitter
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = (description || data.site?.siteMetadata?.description) ?? ""

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site?.siteMetadata?.title ?? ""}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site?.siteMetadata?.author?.social?.twitter ?? "",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ]}
    />
  )
}

export default SEO
