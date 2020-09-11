import { createMuiTheme } from "@material-ui/core"

import baseTheme from "utils/themes/base"

const theme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    primary: {
      light: "#2f5975",
      main: "#284B63",
      dark: "#213d51",
    },
    secondary: {
      main: "#F9F9F9",
      dark: "#ECECEC",
      contrastText: "#2E2E2E",
    },
    text: {
      primary: "#2E2E2E",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          "&:link": {
            color: "#284B63",
          },
          "&:visited": {
            color: "#284B63",
          },
          "&:hover": {
            color: "#213d51",
          },
          "&:active": {
            color: "#2f5975",
          },
        },
      },
    },
  },
})

export default theme
