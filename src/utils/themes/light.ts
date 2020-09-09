import { createMuiTheme } from "@material-ui/core"

import baseTheme from "utils/themes/base"

const theme = createMuiTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#284B63",
    },
    text: {
      primary: "#2E2E2E",
    },
    common: {
      black: "#2E2E2E",
    },
    background: {
      default: "#ffffff",
    },
  },
})

export default theme
