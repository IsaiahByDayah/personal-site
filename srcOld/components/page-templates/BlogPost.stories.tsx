import { Meta, Story } from "@storybook/react"

import BlogPost, { BlogPostProps } from "components/page-templates/BlogPost"

const thumbnail = {
  src: "https://source.unsplash.com/random/1080x720",
  alt: "random upsplash photo",
}

const otherPost = {
  to: "/",
  title: "Incididunt tempor non consequat labore?",
}

const samplePost = {
  html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ipsum sit amet nisi consectetur varius. Quisque rutrum diam at ligula placerat pretium. Praesent eget porta diam, eu aliquet mi. Morbi vitae sem quam. Donec in ornare diam. Nullam sit amet mauris massa. In hac habitasse platea dictumst <a href="https://github.com/">github.com</a>. Phasellus a eros sit amet mauris tristique gravida. Proin quis sem quis odio pellentesque sodales. Nullam ac dictum orci. Nullam nec elit risus. Nulla tristique metus ut fringilla efficitur. Morbi sed ex et erat mattis tempor sit amet ac ipsum. Pellentesque in lacus venenatis, ultrices neque sit amet, tempus turpis.</p>\n<p>Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>\n<h1>An H1 Heading</h1>\n<p>Duis commodo ullamcorper dui, ut sodales sapien accumsan eget. Phasellus <code class="language-text">const foo = &quot;Hello, world!</code> at est auctor, pretium velit eu, ultrices libero. Donec vitae magna turpis. Curabitur eget pellentesque augue. Integer iaculis, tellus in pulvinar interdum, nunc magna imperdiet diam, quis sollicitudin nisi velit id augue. Duis sagittis hendrerit neque, ullamcorper accumsan nulla sollicitudin sit amet. Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>\n<h3>An H3 Heading</h3>\n<p>Vestibulum porta molestie risus eu condimentum. Nam pellentesque lectus et ultricies facilisis. Proin efficitur lacus eu arcu iaculis, vel laoreet augue posuere. Phasellus a efficitur nibh. Quisque ac lectus sed quam accumsan varius. Integer vulputate sapien a sagittis sodales. Aliquam ac turpis nec leo blandit elementum. Phasellus arcu dolor, condimentum ac nulla at, imperdiet pharetra ipsum. Aenean ornare urna rutrum, commodo eros sit amet, congue eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra imperdiet est nec cursus.</p>\n<p>Duis commodo ullamcorper dui, ut sodales sapien accumsan eget. Phasellus at est auctor, pretium velit eu, ultrices libero. Donec vitae magna turpis. Curabitur eget pellentesque augue. Integer iaculis, tellus in pulvinar interdum, nunc magna imperdiet diam, quis sollicitudin nisi velit id augue. Duis sagittis hendrerit neque, ullamcorper accumsan nulla sollicitudin sit amet. Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>\n<h3>Another H3!</h3>\n<p>Nunc ullamcorper rhoncus nibh, a consequat nisl fringilla vel. Nam purus libero, vehicula non nulla id, mollis consectetur elit. Curabitur interdum mauris et nisi consequat, a luctus sem lobortis. Nulla nec laoreet tellus. Aenean sagittis eleifend enim, vel aliquet quam. Aenean sem lacus, vehicula id dictum sed, vestibulum ac lectus. Aliquam accumsan ut nibh non placerat. Donec non turpis sit amet mauris imperdiet suscipit ac iaculis metus. Sed rutrum velit ac ante ultricies tincidunt. Proin porta mauris vel nulla congue mattis. Nam eget ex risus.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ipsum sit amet nisi consectetur varius. Quisque rutrum diam at ligula placerat pretium. Praesent eget porta diam, eu aliquet mi. Morbi vitae sem quam. Donec in ornare diam. Nullam sit amet mauris massa. In hac habitasse platea dictumst <a href="https://github.com/">github.com</a>. Phasellus a eros sit amet mauris tristique gravida. Proin quis sem quis odio pellentesque sodales. Nullam ac dictum orci. Nullam nec elit risus. Nulla tristique metus ut fringilla efficitur. Morbi sed ex et erat mattis tempor sit amet ac ipsum. Pellentesque in lacus venenatis, ultrices neque sit amet, tempus turpis.</p>\n<h1>Some other topic</h1>\n<p>Duis commodo ullamcorper dui, ut sodales sapien accumsan eget. Phasellus at est auctor, pretium velit eu, ultrices libero. Donec vitae magna turpis. Curabitur eget pellentesque augue. Integer iaculis, tellus in pulvinar interdum, nunc magna imperdiet diam, quis sollicitudin nisi velit id augue. Duis sagittis hendrerit neque, ullamcorper accumsan nulla sollicitudin sit amet. Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>\n<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">    <span class="token comment">// Declare a variable</span>\n    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">"Hello, World!"</span>\n\n    <span class="token operator">...</span>\n\n    <span class="token comment">// Do something with that variable</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span></code></pre></div>\n<p>Vestibulum porta molestie risus eu condimentum. Nam pellentesque lectus et ultricies facilisis. Proin efficitur lacus eu arcu iaculis, vel laoreet augue posuere. Phasellus a efficitur nibh. Quisque ac lectus sed quam accumsan varius. Integer vulputate sapien a sagittis sodales. Aliquam ac turpis nec leo blandit elementum. Phasellus arcu dolor, condimentum ac nulla at, imperdiet pharetra ipsum. Aenean ornare urna rutrum, commodo eros sit amet, congue eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra imperdiet est nec cursus.</p>\n<p>Duis commodo ullamcorper dui, ut sodales sapien accumsan eget. Phasellus at est auctor, pretium velit eu, ultrices libero. Donec vitae magna turpis. Curabitur eget pellentesque augue. Integer iaculis, tellus in pulvinar interdum, nunc magna imperdiet diam, quis sollicitudin nisi velit id augue. Duis sagittis hendrerit neque, ullamcorper accumsan nulla sollicitudin sit amet. Nullam pharetra, enim quis tristique luctus, lorem urna venenatis metus, venenatis viverra elit orci et lorem. Sed sapien erat, tincidunt at eros non, suscipit volutpat ligula. Vestibulum sed mi ipsum. Vivamus at ligula dictum, eleifend mi tincidunt, mollis ex.</p>`,
  title: "Veniam Lorem consequat dolor Lorem occaecat",
  excerpt:
    "Occaecat occaecat ad nulla sint magna veniam sit cupidatat sunt nisi tempor eiusmod. Esse nostrud laboris voluptate tempor excepteur qui dolore sint magna ea voluptate. Culpa adipisicing amet...",
  date: "December 25, 2000",
  readTime: 4,
}

export default {
  component: BlogPost,
  title: "Page Templates/BlogPost",
  parameters: {
    storyshots: {
      disable: true,
    },
  },
  argTypes: {
    thumbnail: {
      control: {
        type: "select",
        options: [undefined, thumbnail],
      },
    },
    previous: {
      control: {
        type: "select",
        options: [undefined, otherPost],
      },
    },
    next: {
      control: {
        type: "select",
        options: [undefined, { ...otherPost, thumbnail }],
      },
    },
  },
  args: {
    ...samplePost,
    thumbnail,
  },
} as Meta

const Template: Story<BlogPostProps> = (args) => <BlogPost {...args} />

export const Basic = Template.bind({})
