import { GetStaticProps } from "next"

import SliceZone from "components/common/SliceZone"
import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import { AboutPageDocument, TagDocument } from "lib/prismic/types"
import { getAboutPage, getAllTags } from "lib/prismic/util"

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  const document = await getAboutPage()

  const tags = await getAllTags()

  return {
    props: {
      document,
      tags,
    },
  }
}

interface AboutProps {
  document: AboutPageDocument
  tags: TagDocument[]
}

const About = ({ document, tags }: AboutProps) => (
  <TagsContext.Provider value={tags}>
    <TwoColumnLayout sx={{ py: 2 }}>
      <SliceZone slices={document.data.slices} />
    </TwoColumnLayout>
  </TagsContext.Provider>
)

export default About
