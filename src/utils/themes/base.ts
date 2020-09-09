import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#2E2E2E",
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       a: {
  //         "&:link": {
  //           color: "inherit",
  //         },
  //         "&:visited": {
  //           color: "inherit",
  //         },
  //         "&:hover": {
  //           color: "inherit",
  //         },
  //         "&:active": {
  //           color: "inherit",
  //         },
  //       },
  //     },
  //   },
  // },
})

export default theme
