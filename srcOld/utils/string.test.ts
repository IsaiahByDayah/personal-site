import { slugify } from "./string"

describe("String Utility Functions", () => {
  describe("slugify", () => {
    test("should replace underscores, excess dashes, and whitespace with a single dash", () => {
      const str = "abc_123---foo bar"
      const expected = "abc-123-foo-bar"
      expect(slugify(str)).toBe(expected)
    })
    test("should remove non alpha-numeric characters", () => {
      const str = "abc/123?def=456+ghi"
      const expected = "abc123def456ghi"
      expect(slugify(str)).toBe(expected)
    })
    test("should return string with only lowercase letter", () => {
      const str = "ABC123dEf zyX"
      const expected = "abc123def-zyx"
      expect(slugify(str)).toBe(expected)
    })
  })
})
