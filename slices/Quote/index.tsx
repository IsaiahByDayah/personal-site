import { Typography } from "@mui/material"
import { SliceComponentProps } from "@prismicio/react"
import { Slice, KeyTextField } from "@prismicio/types"

export type QuoteSlice = Slice<
  "quote",
  {
    content: KeyTextField
  }
>

const Quote = ({ slice }: SliceComponentProps<QuoteSlice>) => (
  <Typography
    variant="h3"
    color="primary.main"
    fontWeight={900}
    align="center"
    my={5}
  >
    &quot;{slice.primary.content}&quot;
  </Typography>
)

export default Quote
