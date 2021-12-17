import { Meta, Story } from "@storybook/react"

import TwoColumnLayout, {
  TwoColumnLayoutProps,
} from "components/scaffold/TwoColumnLayout"

export default {
  component: TwoColumnLayout,
  title: "Scaffold/TwoColumnLayout",
  parameters: {
    storyshots: { disable: true },
  },
} as Meta

export const Basic: Story<TwoColumnLayoutProps> = (args) => (
  <TwoColumnLayout {...args}>Hello, World!</TwoColumnLayout>
)
