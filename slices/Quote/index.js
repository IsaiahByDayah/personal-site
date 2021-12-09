import { Typography } from "@mui/material"

const Quote = ({ slice }) => (
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
