import { GetStaticProps } from "next"
import { SliceZone } from "@prismicio/react"
import { PrismicDocument, SliceZone as ISliceZone } from "@prismicio/types"

import { Client, sliceZoneComponents } from "lib/prismic/util"

import Slices from "slices/slice-types"

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

  return {
    props: {
      document,
    },
  }
}

interface AboutProps {
  document: AboutPageDocumentType
}

const About = ({ document }: AboutProps) => {
  console.log("Document: ", document)
  return (
    <SliceZone slices={document.data.slices} components={sliceZoneComponents} />
  )
}

export default About
