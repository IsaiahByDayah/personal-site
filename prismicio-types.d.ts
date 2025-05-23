// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.WriteClientConfig,
    ): prismic.WriteClient
  }

  interface CreateMigration {
    (): prismic.Migration
  }

  namespace Content {
    export type {}
  }
}
