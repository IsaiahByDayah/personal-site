import { z } from "zod"

export const toArray = <T>(itemOrArray: T | T[]) =>
  Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]

// Creates a slug formatted string from supplied string
export const slugify = (str: string): string => {
  return str
    .replace(/(_|-{2,}|\s+)/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/^(-*)/, "")
    .replace(/-{2,}/g, "-")
    .replace(/(-*)$/, "")
    .toLowerCase()
    .trim()
}

export const clamp = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(value, max))

// REF: https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
export const capitalize = (str: string): string =>
  str.replace(/^\w/, (c) => c.toUpperCase())

export const titleCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))

export const getInitials = (name: string) => {
  const names = name.trim().split(" ")
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return initials
}

export const isNonNullable = <T>(item: T | undefined | null): item is T =>
  item !== null && item !== undefined

export const filterNullables = <T>(arr: (T | undefined | null)[]): T[] => {
  const filteredArr: T[] = []

  arr?.forEach((item) => {
    if (item !== undefined && item !== null) filteredArr.push(item)
  })

  return filteredArr
}

export const exhaustiveGuard = (value: never): never => {
  throw new Error(
    `Reached forbidden guard function with unexpected value: ${JSON.stringify(
      value,
    )}`,
  )
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Returns the current number of seconds since January 1, 1970, UTC
 */
export const epoch = () => Math.floor(Date.now() / 1000)

export const buildNumberArray = (from: number, to: number) => {
  const length = to - from + 1
  return Array.from({ length }, (_, i) => from + i)
}

const buildPaginationItemsOptionsSchema = z
  .object({
    boundaryCount: z.number().default(1),
    siblingCount: z.number().default(1),
  })
  .prefault({})

// REF: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js#L4
export const buildPaginationItems = (
  currentPage: number,
  totalPages: number,
  options?: z.input<typeof buildPaginationItemsOptionsSchema>,
) => {
  const { boundaryCount, siblingCount } =
    buildPaginationItemsOptionsSchema.parse(options)

  const startPages = buildNumberArray(1, Math.min(boundaryCount, totalPages))
  const endPages = buildNumberArray(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages,
  )
  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      currentPage - siblingCount,
      // Lower boundary when page is high
      totalPages - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  )
  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      currentPage + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    totalPages - boundaryCount - 1,
  )
  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  return [
    ...startPages,

    // Start ellipsis
    ...(siblingsStart > boundaryCount + 2
      ? (["start-ellipsis"] as const)
      : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...buildNumberArray(siblingsStart, siblingsEnd),

    // End ellipsis
    ...(siblingsEnd < totalPages - boundaryCount - 1
      ? (["end-ellipsis"] as const)
      : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : []),
    ...endPages,
  ]
}
