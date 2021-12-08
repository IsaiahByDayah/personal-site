import { StoryContext, Story } from "@storybook/react"
import { LocationProvider } from "@reach/router"

const RouterDecorator = (Story: Story, context: StoryContext): JSX.Element => (
  <LocationProvider>
    <Story />
  </LocationProvider>
)

export default RouterDecorator
