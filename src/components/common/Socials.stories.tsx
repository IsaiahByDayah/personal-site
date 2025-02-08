import { Meta, Story } from "@storybook/react"

import Socials, { SocialsProps } from "components/common/Socials"

export default {
  component: Socials,
  title: "Components/Socials",
  parameters: {
    layout: "centered",
  },
} as Meta

export const Basic: Story<SocialsProps> = (args) => <Socials {...args} />
