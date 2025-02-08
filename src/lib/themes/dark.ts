import { createTheme } from "@mui/material"

import baseThemeOptions from "lib/themes/baseThemeOptions"

const theme = createTheme({
  ...baseThemeOptions,

  palette: {
    ...baseThemeOptions.palette,
    mode: "dark",
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
    divider: "rgba(255, 255, 255, 0.12)",
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       p: {
  //         lineHeight: 1.5,
  //         fontSize: "1.2em",
  //       },
  //       a: {
  //         "&:link": {
  //           color: "#5DABE1",
  //         },
  //         "&:visited": {
  //           color: "#5DABE1",
  //         },
  //         "&:hover": {
  //           color: "#47a0dd",
  //         },
  //         "&:active": {
  //           color: "#73b6e5",
  //         },
  //       },
  //       // NOTE: Implements Prism Tomorrow Theme
  //       // REF: https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism-tomorrow.css
  //       'code[class*="language-"], pre[class*="language-"]': {
  //         color: "#ccc",
  //         background: "none",
  //         fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  //         textAlign: "left",
  //         whiteSpace: "pre",
  //         wordSpacing: "normal",
  //         wordBreak: "normal",
  //         wordWrap: "normal",
  //         lineHeight: 1.5,
  //         tabSize: 4,
  //         hyphens: "none",
  //       },
  //       /* Code blocks */
  //       'pre[class*="language-"]': {
  //         padding: "1em",
  //         margin: ".5em 0",
  //         overflow: "auto",
  //       },
  //       ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
  //         background: "#262626",
  //         borderRadius: "4px",
  //         boxShadow:
  //           "rgba(0, 0, 0, 0.25) 0px 4px 4px -4px inset, rgba(0, 0, 0, 0.25) 0px -4px 4px -4px inset, rgba(0, 0, 0, 0.25) 4px 0px 4px -4px inset, rgba(0, 0, 0, 0.25) -4px 0px 4px -4px inset",
  //       },
  //       /* Inline code */
  //       ':not(pre) > code[class*="language-"]': {
  //         padding: ".1em .3em",
  //         whiteSpace: "normal",
  //       },
  //       ".token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
  //         color: "#999",
  //       },
  //       ".token.punctuation": {
  //         color: "#ccc",
  //       },
  //       ".token.tag, .token.attr-name, .token.namespace, .token.deleted": {
  //         color: "#e2777a",
  //       },
  //       ".token.function-name": {
  //         color: "#6196cc",
  //       },
  //       ".token.boolean, .token.number, .token.function": {
  //         color: "#f08d49",
  //       },
  //       ".token.property, .token.class-name, .token.constant, .token.symbol": {
  //         color: "#f8c555",
  //       },
  //       ".token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin": {
  //         color: "#cc99cd",
  //       },
  //       ".token.string, .token.char, .token.attr-value, .token.regex, .token.variable": {
  //         color: "#7ec699",
  //       },
  //       ".token.operator, .token.entity, .token.url": {
  //         color: "#67cdcc",
  //       },
  //       ".token.important, .token.bold": {
  //         fontWeight: "bold",
  //       },
  //       ".token.italic": {
  //         fontStyle: "italic",
  //       },
  //       ".token.entity": {
  //         cursor: "help",
  //       },
  //       ".token.inserted": {
  //         color: "green",
  //       },
  //     },
  //   },
  // },
})

export default theme
