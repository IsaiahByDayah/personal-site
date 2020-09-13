import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"

import BlogPost, { BlogPostProps } from "components/page-templates/BlogPost"

const samplePost = {
  html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ipsum sit amet nisi consectetur varius. Quisque rutrum diam at ligula placerat pretium. Praesent eget porta diam, eu aliquet mi. Morbi vitae sem quam. Donec in ornare diam. Nullam sit amet mauris massa. In hac habitasse platea dictumst <a href="https://github.com/">github.com</a>. Phasellus a eros sit amet mauris tristique gravida. Proin quis sem quis odio pellentesque sodales. Nullam ac dictum orci. Nullam nec elit risus. Nulla tristique metus ut fringilla efficitur. Morbi sed ex et erat mattis tempor sit amet ac ipsum. Pellentesque in lacus venenatis, ultrices neque sit amet, tempus turpis.</p>\n<h1>The First Heading</h1>\n<p>Duis commodo ullamcorper dui, ut sodales sapien accumsan eget. Phasellus at est auctor, pretium velit eu, ultrices libero. Donec vitae magna turpis. Curabitur eget pellentesque augue. Integer iaculis, tellus in pulvinar interdum, nunc magna imperdiet diam, quis sollicitudin nisi velit id augue. Duis sagittis hendrerit neque, ullamcorper accumsan nulla sollicitudin sit amet. Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>\n<h1>The Second Heading</h1>\n<p>Vestibulum porta molestie risus eu condimentum. Nam pellentesque lectus et ultricies facilisis. Proin efficitur lacus eu arcu iaculis, vel laoreet augue posuere. Phasellus a efficitur nibh. Quisque ac lectus sed quam accumsan varius. Integer vulputate sapien a sagittis sodales. Aliquam ac turpis nec leo blandit elementum. Phasellus arcu dolor, condimentum ac nulla at, imperdiet pharetra ipsum. Aenean ornare urna rutrum, commodo eros sit amet, congue eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra imperdiet est nec cursus.</p>\n<h2>Smaller Heading?</h2>\n<p>Nunc ullamcorper rhoncus nibh, a consequat nisl fringilla vel. Nam purus libero, vehicula non nulla id, mollis consectetur elit. Curabitur interdum mauris et nisi consequat, a luctus sem lobortis. Nulla nec laoreet tellus. Aenean sagittis eleifend enim, vel aliquet quam. Aenean sem lacus, vehicula id dictum sed, vestibulum ac lectus. Aliquam accumsan ut nibh non placerat. Donec non turpis sit amet mauris imperdiet suscipit ac iaculis metus. Sed rutrum velit ac ante ultricies tincidunt. Proin porta mauris vel nulla congue mattis. Nam eget ex risus.</p>`,
  title: "Veniam Lorem consequat dolor Lorem occaecat",
  excerpt:
    "Occaecat occaecat ad nulla sint magna veniam sit cupidatat sunt nisi tempor eiusmod. Esse nostrud laboris voluptate tempor excepteur qui dolore sint magna ea voluptate. Culpa adipisicing amet...",
  thumbnail: {
    src: "https://source.unsplash.com/random/1080x720",
    alt: "random upsplash photo",
  },
}

export default {
  component: BlogPost,
  title: "Page Templates/BlogPost",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  args: {
    ...samplePost,
  },
} as Meta

export const Basic: Story<BlogPostProps> = args => <BlogPost {...args} />
