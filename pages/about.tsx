import { GetStaticProps } from "next"
import { Stack } from "@mui/material"
import { Document } from "@prismicio/client/types/documents"

import { Client } from "lib/prismicHelpers"

import RichText from "slices/RichText"
import Quote from "slices/Quote"

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  let document: Document | undefined = undefined
  try {
    document = await Client().getSingle("about_page", {})
  } catch (e) {}

  if (!document)
    return {
      notFound: true,
    }

  return {
    props: {
      document,
    },
  }
}

interface AboutProps {
  document: Document
}

const About = ({ document }: AboutProps) => {
  console.log("Document: ", document)
  return (
    <>
      {document.data.slices.map((slice: any) => {
        switch (slice.slice_type) {
          case "rich_text":
            return (
              <Stack spacing={2}>
                <RichText slice={slice} />
              </Stack>
            )
          case "quote":
            return <Quote slice={slice} />
        }
      })}
    </>
  )
}

export default About
