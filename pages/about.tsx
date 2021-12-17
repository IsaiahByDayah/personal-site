import { GetStaticProps } from "next"
import { SliceZone } from "@prismicio/react"

import { getAboutPage, getAllTags, sliceZoneComponents } from "lib/prismic/util"

import { AboutPageDocument, TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

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

const About = ({ document, tags }: AboutProps) => {
  console.log("About Document Slices: ", document.data.slices)
  return (
    <TagsContext.Provider value={tags}>
      <TwoColumnLayout sx={{ py: 2 }}>
        <SliceZone
          slices={document.data.slices}
          components={sliceZoneComponents}
        />
      </TwoColumnLayout>
    </TagsContext.Provider>
  )
}
// const About = ({ document, tags }: AboutProps) => (
//   <TagsContext.Provider value={tags}>
//     <TwoColumnLayout sx={{ py: 2 }}>
//       <SliceZone
//         slices={document.data.slices}
//         components={sliceZoneComponents}
//       />
//     </TwoColumnLayout>
//   </TagsContext.Provider>
// )

export default About
