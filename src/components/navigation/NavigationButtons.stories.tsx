import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import NavigationButtons, { NavigationButtonsProps } from "components/navigation/NavigationButtons"

export default {
  component: NavigationButtons,
  title: "Navigation/NavigationButtons",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<NavigationButtonsProps> = args => <NavigationButtons {...args} />
// Basic.argTypes = {
//   onClick: {},
// }
