import { StoryContext, Story } from "@storybook/react"

import { DrawerContext } from "components/scaffold/DrawerProvider"

const DrawerDecorator = (Story: Story, context: StoryContext): JSX.Element => {
  return (
    <DrawerContext.Provider
      value={{
        drawerOpen: context.globals.drawerOpen === "Open",
        setDrawerOpen: () => null,
        toggleDrawer: () => null,
      }}
    >
      <Story />
    </DrawerContext.Provider>
  )
}

export default DrawerDecorator
