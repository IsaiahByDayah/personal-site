import { createMuiTheme } from "@material-ui/core"

import baseTheme from "utils/themes/base"

const theme = createMuiTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: "dark",
    primary: {
      light: "#73b6e5",
      main: "#5DABE1",
      dark: "#47a0dd",
    },
    secondary: {
      main: "#262626",
      dark: "#191919",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "#2E2E2E",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          "&:link": {
            color: "#5DABE1",
          },
          "&:visited": {
            color: "#5DABE1",
          },
          "&:hover": {
            color: "#47a0dd",
          },
          "&:active": {
            color: "#73b6e5",
          },
        },
      },
    },
  },
})

export default theme
