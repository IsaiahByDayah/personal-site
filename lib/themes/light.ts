import { createTheme } from "@mui/material"

import baseThemeOptions from "lib/themes/baseThemeOptions"

const theme = createTheme({
  ...baseThemeOptions,

  palette: {
    ...baseThemeOptions.palette,
    primary: {
      light: "#2f5975",
      main: "#284B63",
      dark: "#213d51",
    },
    secondary: {
      // main: "#F9F9F9",
      // dark: "#ECECEC",
      main: "#ECECEC",
      dark: "#DDDDDD",
      contrastText: "#2E2E2E",
    },
    text: {
      primary: "#2E2E2E",
    },
    background: {
      default: "#FFFFFF",
    },
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
  //           color: "#284B63",
  //         },
  //         "&:visited": {
  //           color: "#284B63",
  //         },
  //         "&:hover": {
  //           color: "#213d51",
  //         },
  //         "&:active": {
  //           color: "#2f5975",
  //         },
  //       },

  //       // NOTE: Implements Prism Base Theme
  //       // REF: https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism.css
  //       'code[class*="language-"], code[class*="language-"]': {
  //         color: "black",
  //         background: "none",
  //         textShadow: "0 1px white",
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

  //       'pre[class*="language-"]::selection, pre[class*="language-"] ::selection, code[class*="language-"]::selection, code[class*="language-"] ::selection': {
  //         textShadow: "none",
  //         background: "#b3d4fc",
  //       },

  //       "@media print": {
  //         'code[class*="language-"], pre[class*="language-"]': {
  //           textShadow: "none",
  //         },
  //       },

  //       /* Code blocks */
  //       'pre[class*="language-"]': {
  //         padding: "1em",
  //         margin: ".5em 0",
  //         overflow: "auto",
  //       },

  //       ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
  //         background: "#F9F9F9",
  //         borderRadius: "4px",
  //         boxShadow:
  //           "rgba(0, 0, 0, 0.25) 0px 4px 4px -4px inset, rgba(0, 0, 0, 0.25) 0px -4px 4px -4px inset, rgba(0, 0, 0, 0.25) 4px 0px 4px -4px inset, rgba(0, 0, 0, 0.25) -4px 0px 4px -4px inset",
  //       },

  //       /* Inline code */
  //       ':not(pre) > code[class*="language-"]': {
  //         padding: ".1em .3em",
  //         whiteSpace: "normal",
  //       },

  //       ".token.comment, .token.prolog, .token.doctype, .token.cdata": {
  //         color: "slategray",
  //       },

  //       ".token.punctuation": {
  //         color: "#999",
  //       },

  //       ".namespace": {
  //         opacity: 0.7,
  //       },

  //       ".token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted": {
  //         color: "#905",
  //       },

  //       ".token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted": {
  //         color: "#690",
  //       },

  //       ".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string": {
  //         color: "#a67f59",
  //         background: "hsla(0, 0%, 100%, .5)",
  //       },

  //       ".token.atrule, .token.attr-value, .token.keyword": {
  //         color: "#07a",
  //       },

  //       ".token.function": {
  //         color: "#DD4A68",
  //       },

  //       ".token.regex, .token.important, .token.variable": {
  //         color: "#e90",
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
  //     },
  //   },
  // },
})

export default theme
