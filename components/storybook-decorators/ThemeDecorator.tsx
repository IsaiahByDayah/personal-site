import React from "react"
import { StoryContext, Story } from "@storybook/react/types-6-0"
import { ThemeProvider as MuiThemeProvider } from "@mui/material"

import { getTheme } from "lib/themes"

const ThemeDecorator = (Story: Story, context: StoryContext): JSX.Element => {
  // Check for selected theme here
  const theme = getTheme(context.globals.theme)

  return (
    <MuiThemeProvider theme={theme}>
      <Story />
    </MuiThemeProvider>
  )
}

export default ThemeDecorator
