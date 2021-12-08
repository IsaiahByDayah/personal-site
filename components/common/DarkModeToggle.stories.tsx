import React from "react"
import { Meta, Story } from "@storybook/react"

import DarkModeToggle, {
  DarkModeToggleProps,
} from "components/common/DarkModeToggle"

export default {
  component: DarkModeToggle,
  title: "Components/DarkModeToggle",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<DarkModeToggleProps> = (args) => (
  <DarkModeToggle {...args} />
)
