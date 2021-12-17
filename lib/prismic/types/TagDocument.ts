import { PrismicDocument } from "@prismicio/types"

import TagMockData from ".slicemachine/assets/customtypes/tag/mocks.json"

type TagDocument = PrismicDocument<typeof TagMockData["data"]>

export default TagDocument
