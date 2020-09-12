import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import Home, { HomeProps } from "components/page-templates/Home"

export default {
  component: Home,
  title: "Page Templates/Home",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  args: {
    posts: [],
  },
} as Meta

export const Basic: Story<HomeProps> = args => <Home {...args} />
