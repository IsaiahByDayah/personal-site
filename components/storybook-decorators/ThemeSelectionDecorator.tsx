import { StoryContext, Story } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

const ThemeSelectionDecorator = (
  Story: Story,
  context: StoryContext
): JSX.Element => (
  <ThemeSelectionContext.Provider
    value={{
      themeSelection: context.globals.theme.toLowerCase(),
      setThemeSelection: action("Theme Selection Change!"),
      toggleThemeSelection: action("Toggle Theme Selection!"),
    }}
  >
    <Story />
  </ThemeSelectionContext.Provider>
)

export default ThemeSelectionDecorator
