import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          "&:link": {
            color: "inherit",
          },
          "&:visited": {
            color: "inherit",
          },
          "&:hover": {
            color: "inherit",
          },
          "&:active": {
            color: "inherit",
          },
        },
      },
    },
  },
})

export default theme
