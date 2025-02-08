import { Typography } from "@mui/material"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

const Quote = ({ slice }: SliceComponentProps<Content.QuoteSlice>) => (
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
