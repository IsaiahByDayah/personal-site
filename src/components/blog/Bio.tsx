/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export type BioBaseProps = {
  avatar?: string
  blurb?: string
}

export const BioBase: FC<BioBaseProps> = () => (
  <Box>
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author.name}
      style={{
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
    <p>
      Written by <strong>{author.name}</strong> {author.summary}
      {` `}
      <a href={`https://twitter.com/${social.twitter}`}>You should follow him on Twitter!</a>
    </p>
  </Box>
)

const Bio = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return <BioBase />

  // return (
  //   <div
  //     style={{
  //       display: `flex`,
  //     }}
  //   >
  //     <Image
  //       fixed={data.avatar.childImageSharp.fixed}
  //       alt={author.name}
  //       style={{
  //         marginBottom: 0,
  //         minWidth: 50,
  //         borderRadius: `100%`,
  //       }}
  //       imgStyle={{
  //         borderRadius: `50%`,
  //       }}
  //     />
  //     <p>
  //       Written by <strong>{author.name}</strong> {author.summary}
  //       {` `}
  //       <a href={`https://twitter.com/${social.twitter}`}>You should follow him on Twitter!</a>
  //     </p>
  //   </div>
  // )
}

export default Bio
