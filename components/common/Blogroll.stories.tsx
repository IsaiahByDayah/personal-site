import { Meta, Story } from "@storybook/react"

import Blogroll, { BlogrollProps } from "components/common/Blogroll"

export default {
  component: Blogroll,
  title: "Components/Blogroll",
} as Meta

const Template: Story<BlogrollProps> = (args) => <Blogroll {...args} />

export const Basic = Template.bind({})
Basic.args = {
  items: [
    {
      primary: "Quis nulla magna ad dolor.",
      thumbnailProps: {
        src: "https://picsum.photos/1920/1080",
        alt: "some random photo",
      },
      href: "/",
      meta: new Date("6/13/1993"),
      secondary:
        "Et nisi laboris nisi culpa consequat. Veniam sint fugiat est duis sint ullamco officia et incididunt exercitation commodo. Sint et quis ad consectetur dolor excepteur consectetur. Excepteur laboris ad cillum minim tempor. Exercitation excepteur aute minim laborum ipsum laboris amet adipisicing ad non fugiat. Sint magna mollit mollit labore sit. Reprehenderit esse aliqua aliqua ipsum aute in elit eiusmod consequat cupidatat ullamco.",
    },
    {
      primary:
        "Est pariatur sit reprehenderit excepteur veniam eu quis enim irure ea dolor eiusmod.",
      thumbnailProps: {
        src: "https://picsum.photos/1920/1080",
        alt: "some random photo",
      },
      href: "/",
      meta: new Date("6/14/1993"),
      secondary:
        "Esse quis esse quis velit amet magna exercitation excepteur veniam eiusmod labore eiusmod nostrud labore. Dolor exercitation amet qui sint. Excepteur enim esse ex eiusmod incididunt adipisicing commodo ex. Ex do eu do consectetur sit nostrud magna laborum sit. Anim cillum id nulla nostrud pariatur est velit cupidatat. Ad cillum laborum laboris ea reprehenderit sint.",
    },
    {
      primary:
        "Culpa officia ipsum eu laboris dolor incididunt elit eiusmod tempor aliquip.",
      thumbnailProps: {
        src: "https://picsum.photos/1920/1080",
        alt: "some random photo",
      },
      href: "/",
      meta: new Date("6/15/1993"),
      secondary:
        "Veniam occaecat commodo adipisicing cillum officia fugiat. Eiusmod eiusmod minim id dolor ex cupidatat magna consectetur magna enim. Minim amet exercitation elit proident duis pariatur sint. Cillum occaecat veniam non exercitation non consequat. Reprehenderit ex exercitation reprehenderit fugiat.",
    },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  items: [],
}

export const Loading = Template.bind({})
