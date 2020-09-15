import React, { FC } from "react"

import TwoColumnLayout from "components/scaffold/TwoColumnLayout"
import SEO from "components/scaffold/SEO"

import Post, { PostProps } from "components/common/Post"

interface PostPropsWithKey extends PostProps {
  key: string
}

export type HomeProps = {
  posts: PostPropsWithKey[]
}

const Home: FC<HomeProps> = ({ posts }) => (
  <TwoColumnLayout>
    <SEO title="Hey! 👋🏾" />
    {posts.map(({ key, ...post }) => (
      <Post key={key} {...post} marginBottom={6} />
    ))}
  </TwoColumnLayout>
)

export default Home
