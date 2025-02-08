import assert from "node:assert/strict"
import test, { describe } from "node:test"

void describe("Sanity", () => {
  void test("math works", () => {
    assert.equal(2 + 2, 4)
  })
})
