import React, { FC } from "react"
import { Link } from "gatsby"

import SideNavLayout from "components/scaffold/SideNavLayout"
import SEO from "components/scaffold/SEO"

import Bio from "components/Bio"

type Post = {
  excerpt: string
  slug: string
  date: string
  title: string
}

export type IndexProps = {
  posts: Post[]
}

const Index: FC = () => {
  return (
    <SideNavLayout>
      <SEO title="Hey! 👋🏾" />
      <Bio />
      <p>
        This is my home page. Visit my <Link to="/blog">blog</Link>
      </p>
    </SideNavLayout>
  )
}

export default Index
