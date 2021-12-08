import React, { PropsWithChildren } from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import NavigationButton, {
  NavigationButtonProps,
} from "components/common/NavigationButton"

export default {
  component: NavigationButton,
  title: "Components/NavigationButton",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<PropsWithChildren<NavigationButtonProps>> = (
  args
) => <NavigationButton {...args} />
Basic.args = {
  children: "Hello, World!",
}
