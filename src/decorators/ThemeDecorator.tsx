import React from "react"
import { StoryContext, Story } from "@storybook/react/types-6-0"
import { ThemeProvider, CssBaseline } from "@material-ui/core"

import { getTheme } from "utils/themes"

const ThemeDecorator = (Story: Story, context: StoryContext): JSX.Element => {
  // Check for selected theme here
  const theme = getTheme(context.globals.theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
}

export default ThemeDecorator
