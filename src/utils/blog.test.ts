import { Blog, generatePathForBlog } from "utils/blog"

describe("Blog Utils", () => {
  const defaultBlog: Blog = {
    frontmatter: {
      date: new Date("12/25/2000").toDateString(),
      slug: "sample-blog-slug",
    },
  }
  const formattedDateBlog: Blog = {
    frontmatter: {
      date: "Dec | 25 - 2000",
      slug: "sample-blog-slug",
    },
  }

  test("generates path for valid blog", () => {
    const path = generatePathForBlog(defaultBlog)
    expect(path).toEqual("/blog/12-25-2000-sample-blog-slug")
  })

  test("returns path to root when blog not supplied", () => {
    const path = generatePathForBlog()
    expect(path).toEqual("/")
  })

  test("returns path to root when blog not supplied", () => {
    const path = generatePathForBlog(formattedDateBlog, "MMM | D - YYYY")
    expect(path).toEqual("/blog/12-25-2000-sample-blog-slug")
  })
})
