import { Meta, Story } from "@storybook/react"

import Project, { ProjectProps } from "pages/project/[slug]"

import { generateProjectDocument } from "lib/prismic/util"

export default {
  title: "Pages/Project",
  component: Project,
  parameters: {
    storyshots: { disable: true },
  },
} as Meta

const Template: Story<ProjectProps> = (args) => <Project {...args} />

export const Basic = Template.bind({})
Basic.args = {
  document: generateProjectDocument(),
}

export const Updated = Template.bind({})
Updated.args = {
  ...Basic.args,
  document: generateProjectDocument({
    last_publication_date: new Date("12/25/2000").toISOString(),
  }),
}
