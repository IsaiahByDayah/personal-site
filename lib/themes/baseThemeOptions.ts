import { ThemeOptions } from "@mui/material"

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  palette: {
    common: {
      black: "#2E2E2E",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "1px",
        },
      },
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     .firebase-emulator-warning {
    //       display: none;
    //     }
    //     html, body, #__next {
    //       height: 100%;
    //     }
    //   `,
    // },
  },
}

export default baseThemeOptions
