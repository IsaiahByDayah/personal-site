import { ContentRelationshipField, isFilled } from "@prismicio/client"

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
