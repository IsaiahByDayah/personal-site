import { Stack } from "@mui/material"
import {
  SliceZone as PrismicSliceZone,
  SliceZoneProps as PrismicSliceZoneProps,
} from "@prismicio/react"

import { sliceZoneComponents } from "lib/prismic/util"

export type SliceZoneProps = PrismicSliceZoneProps

const SliceZone = (props: SliceZoneProps) => (
  <Stack direction="column" spacing={2}>
    <PrismicSliceZone components={sliceZoneComponents} {...props} />
  </Stack>
)

export default SliceZone
