import { createMuiTheme } from "@material-ui/core"

import baseTheme from "utils/themes/base"

const theme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark",
  },
})

export default theme
