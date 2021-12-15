import { BlogData, generatePathForBlog } from "utils/blog"

describe("Blog Utils", () => {
  const defaultBlogData: BlogData = {
    date: new Date("12/25/2000").toDateString(),
    slug: "sample-blog-slug",
  }
  const formattedDateBlogData: BlogData = {
    date: "Dec | 25 - 2000",
    slug: "sample-blog-slug",
  }
  const formattedDateBlogDataFormat = "MMM | D - YYYY"

  test("generates path for valid blog", () => {
    const path = generatePathForBlog(defaultBlogData)
    expect(path).toEqual("/blog/12-25-2000-sample-blog-slug")
  })

  test("returns path to root when blog not supplied", () => {
    const path = generatePathForBlog()
    expect(path).toEqual("/")
  })

  test("generates path for formatted date", () => {
    const path = generatePathForBlog(formattedDateBlogData, formattedDateBlogDataFormat)
    expect(path).toEqual("/blog/12-25-2000-sample-blog-slug")
  })
})
