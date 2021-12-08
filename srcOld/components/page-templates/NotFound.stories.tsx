import { Meta, Story } from "@storybook/react"

import NotFound from "components/page-templates/NotFound"

export default {
  component: NotFound,
  title: "Page Templates/NotFound",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
} as Meta

export const Basic: Story = () => <NotFound />
