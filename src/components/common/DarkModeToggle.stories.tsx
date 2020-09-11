import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import { DarkModeToggleBase, DarkModeToggleBaseProps } from "components/common/DarkModeToggle"

export default {
  component: DarkModeToggleBase,
  title: "Common/DarkModeToggle",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<DarkModeToggleBaseProps> = args => <DarkModeToggleBase {...args} />
