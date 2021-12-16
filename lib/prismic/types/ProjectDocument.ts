import { PrismicDocument } from "@prismicio/types"

import ProjectMockData from ".slicemachine/assets/customtypes/project/mocks.json"

type ProjectDocument = PrismicDocument<typeof ProjectMockData["data"]>

export default ProjectDocument
