import React, { FC } from "react"

import SideNavLayout from "components/scaffold/SideNavLayout"
import SEO from "components/scaffold/SEO"

import Post, { PostProps } from "components/common/Post"

interface PostPropsWithKey extends PostProps {
  key: string
}

export type HomeProps = {
  posts: PostPropsWithKey[]
}

const Home: FC<HomeProps> = ({ posts }) => (
  <SideNavLayout>
    <SEO title="Hey! 👋🏾" />
    {posts.map(({ key, ...post }) => (
      <Post key={key} {...post} marginBottom={6} />
    ))}
  </SideNavLayout>
)

export default Home
