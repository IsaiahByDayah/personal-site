import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
})

export default theme
