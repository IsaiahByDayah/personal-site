import { GetStaticProps } from "next"
import { SliceZone } from "@prismicio/react"
import { PrismicDocument, SliceZone as ISliceZone } from "@prismicio/types"

import { Client, getAllTags, sliceZoneComponents } from "lib/prismic/util"

import Slices from "slices/slice-types"

import { TagDocument } from "lib/prismic/types"

import { TagsContext } from "components/scaffold/TagsProvider"
import TwoColumnLayout from "components/scaffold/TwoColumnLayout"

type AboutPageDocumentType = PrismicDocument<{ slices: ISliceZone<Slices> }>

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  let document: AboutPageDocumentType | undefined = undefined
  try {
    document = (await Client().getSingle(
      "about-page",
      {}
    )) as AboutPageDocumentType
  } catch (e) {}

  if (!document)
    return {
      notFound: true,
    }

  const tags = await getAllTags()

  return {
    props: {
      document,
      tags,
    },
  }
}

interface AboutProps {
  document: AboutPageDocumentType
  tags: TagDocument[]
}

const About = ({ document, tags }: AboutProps) => (
  <TagsContext.Provider value={tags}>
    <TwoColumnLayout sx={{ py: 2 }}>
      <SliceZone
        slices={document.data.slices}
        components={sliceZoneComponents}
      />
    </TwoColumnLayout>
  </TagsContext.Provider>
)

export default About
