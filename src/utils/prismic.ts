import {
  asText,
  ContentRelationshipField,
  isFilled,
  RichTextField,
} from "@prismicio/client"

export const parseDocumentFromRelationshipField = <
  Document,
  Field extends ContentRelationshipField,
>(
  field: Field,
) => {
  try {
    if (
      field.link_type !== "Document" ||
      !isFilled.contentRelationship(field)
    ) {
      return null
    }

    const document = field as typeof field & Document

    if (document.isBroken) {
      return null
    }

    return document
  } catch (err) {
    console.log("Error parsing content from relationship field: ", err)
    return null
  }
}

const DEFAULT_ESTIMATED_WORDS_PER_MINUTE = 250

interface EstimatedReadTimeOptions {
  wordsPerMinute?: number
}

export const estimatedRichTextReadTime = (
  field: RichTextField | null | undefined,
  options?: EstimatedReadTimeOptions,
) => {
  if (!field) {
    return null
  }

  const { wordsPerMinute = DEFAULT_ESTIMATED_WORDS_PER_MINUTE } = options ?? {}

  const words = asText(field)
  const wordCount = words.trim().split(/\s+/).length

  return Math.ceil(wordCount / wordsPerMinute)
}
