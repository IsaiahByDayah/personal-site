import { Meta, Story } from "@storybook/react"

import OnMobile, { OnMobileProps } from "components/common/OnMobile"

export default {
  title: "Components/OnMobile",
  component: OnMobile,
} as Meta

export const Basic: Story<OnMobileProps> = (args) => (
  <OnMobile {...args}>
    Only visible when {args.not ? "not " : ""}on mobile!
  </OnMobile>
)
Basic.args = {
  not: false,
}
