import { PrismicDocument, SliceZone } from "@prismicio/types"

import Slices from "slices/slice-types"

import AboutPageMockData from ".slicemachine/assets/customtypes/about-page/mocks.json"

type AboutPageDocument = PrismicDocument<
  typeof AboutPageMockData["data"] & { slices: SliceZone<Slices> }
>

export default AboutPageDocument
