import React, { FC } from "react"

import { generatePathForBlog } from "utils/blog"

import SideNavLayout from "components/scaffold/SideNavLayout"
import SEO from "components/scaffold/SEO"

import Post from "components/common/Post"

type Post = {
  excerpt: string
  slug: string
  date: string
  title: string
  thumbnail?: {
    src: string
    alt: string
  }
}

export type HomeProps = {
  posts: Post[]
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <SideNavLayout>
      <SEO title="Hey! 👋🏾" />
      {posts.map(post => (
        <Post
          key={post.slug}
          thumbnail={post.thumbnail}
          primary={post.title}
          secondary={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </SideNavLayout>
  )
}

export default Home
