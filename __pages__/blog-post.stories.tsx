import { Meta, Story } from "@storybook/react"

import BlogPost, { BlogPostProps } from "src/pages/blog/post/[slug]"

import { generateBlogPostDocument } from "lib/prismic/util"

export default {
  title: "Pages/BlogPost",
  component: BlogPost,
  parameters: {
    storyshots: { disable: true },
  },
} as Meta

const Template: Story<BlogPostProps> = (args) => <BlogPost {...args} />

export const Basic = Template.bind({})
Basic.args = {
  blogPost: generateBlogPostDocument(),
  previous: generateBlogPostDocument(),
  next: generateBlogPostDocument(),
}

export const Updated = Template.bind({})
Updated.args = {
  ...Basic.args,
  blogPost: generateBlogPostDocument({
    last_publication_date: new Date("12/25/2000").toISOString(),
  }),
}
