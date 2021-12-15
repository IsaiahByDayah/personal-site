import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import SideNavDrawerContent, {
  SideNavDrawerContentProps,
  SideNavDrawerContentBase,
  SideNavDrawerContentBaseProps,
} from "components/scaffold/SideNavDrawerContent"

export default {
  title: "Scaffold/SideNavDrawerContent",
  argTypes: {
    onClick: {},
  },
} as Meta

export const Basic: Story<SideNavDrawerContentBaseProps> = args => <SideNavDrawerContentBase {...args} />
Basic.args = {
  title: "Site Title",
  avatar: "https://api.adorable.io/avatars/100/sample.png",
}

export const Default: Story<SideNavDrawerContentProps> = args => <SideNavDrawerContent {...args} />
Default.parameters = {
  storyshots: {
    disable: true,
  },
}
