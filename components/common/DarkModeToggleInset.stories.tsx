import { Meta, Story } from "@storybook/react"

import DarkModeToggleInset, {
  DarkModeToggleInsetProps,
} from "components/common/DarkModeToggleInset"

export default {
  component: DarkModeToggleInset,
  title: "Components/DarkModeToggleInset",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<DarkModeToggleInsetProps> = (args) => (
  <DarkModeToggleInset {...args} />
)
