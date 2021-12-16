import { PrismicDocument, SliceZone } from "@prismicio/types"

import Slices from "slices/slice-types"

import BlogPostMockData from ".slicemachine/assets/customtypes/blog-post/mocks.json"

type BlogPostDocument = PrismicDocument<
  typeof BlogPostMockData["data"] & { slices: SliceZone<Slices> }
>

export default BlogPostDocument
