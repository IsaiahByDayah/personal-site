import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#2E2E2E",
    },
  },
})

export default theme
