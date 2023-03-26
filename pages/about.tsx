import { Content } from "@prismicio/client"
import { GetStaticProps } from "next"

import SliceZone from "components/common/SliceZone"
import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import { createClient } from "lib/prismic/util"

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const client = createClient()

  const document = await client.getSingle("about-page")

  const tags = await client.getAllByType("tag")

  return {
    props: {
      document,
      tags,
    },
    revalidate: 60 * 60 * 24, // 60s * 60m * 24h
  }
}

interface AboutProps {
  document: Content.AboutPageDocument
  tags: Content.TagDocument[]
}

const About = ({ document, tags }: AboutProps) => (
  <TagsContext.Provider value={tags}>
    <TwoColumnLayout sx={{ py: 2 }}>
      <SliceZone slices={document.data.slices} />
    </TwoColumnLayout>
  </TagsContext.Provider>
)

export default About
