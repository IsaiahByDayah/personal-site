import { Meta, Story } from "@storybook/react"

import SingleColumnLayout from "components/scaffold/SingleColumnLayout"

export default {
  component: SingleColumnLayout,
  title: "Scaffold/SingleColumnLayout",
} as Meta

export const Basic: Story = () => (
  <SingleColumnLayout>Hello, World!</SingleColumnLayout>
)
