import { PrismicDocument } from "@prismicio/types"

import BlogPostMockData from ".slicemachine/assets/customtypes/blog-post/mocks.json"

type BlogPostDocument = PrismicDocument<typeof BlogPostMockData["data"]>

export default BlogPostDocument
