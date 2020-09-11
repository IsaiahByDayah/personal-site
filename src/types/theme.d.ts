declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    elements: {
      header: string
    }
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    elements?: {
      header?: string
    }
  }
}
