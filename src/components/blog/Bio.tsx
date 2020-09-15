/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { Box } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import { makeStyles } from "@material-ui/core"

import { BioQuery } from "../../../graphql-types"

const useStyles = makeStyles(() => ({
  avatar: {},
}))

export type BioBaseProps = {
  avatar?: FixedObject
  name: string
  summary: string
  twitter?: string
}

export const BioBase: FC<BioBaseProps> = ({ avatar, name, summary, twitter }) => (
  <Box>
    {avatar && (
      <Image
        fixed={avatar}
        alt={name}

        // style={{
        //   marginBottom: 0,
        //   minWidth: 50,
        //   borderRadius: `100%`,
        // }}
        // imgStyle={{
        //   borderRadius: `50%`,
        // }}
      />
    )}
    <p>
      Written by <strong>{name}</strong>. {summary}
      {twitter && (
        <>
          {" "}
          <a href={`https://twitter.com/${twitter}`}>You should follow me on Twitter!</a>
        </>
      )}
    </p>
  </Box>
)

const Bio = (): JSX.Element => {
  const data: BioQuery = useStaticQuery(graphql`
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

  return (
    <BioBase
      avatar={(data.avatar?.childImageSharp?.fixed as FixedObject) ?? undefined}
      name={data.site?.siteMetadata?.author?.name ?? ""}
      summary={data.site?.siteMetadata?.author?.summary ?? ""}
      twitter={data.site?.siteMetadata?.social?.twitter ?? ""}
    />
  )

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
