import React from "react"
import { StoryContext, Story } from "@storybook/react/types-6-0"
import { LocationProvider } from "@reach/router"

const RouterDecorator = (Story: Story, context: StoryContext): JSX.Element => (
  <LocationProvider>
    <Story />
  </LocationProvider>
)

export default RouterDecorator
