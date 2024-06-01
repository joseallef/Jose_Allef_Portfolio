import { GraphQLClient, gql as GraphQLTag } from 'graphql-request'
import { ICms } from './type'

export const gql = GraphQLTag

export const CMSGraphQLClient = () => {
  const TOKEN = process.env.DATO_CMS_TOKEN
  const DatoCMSUrl = 'https://graphql.datocms.com/'

  const client = new GraphQLClient(DatoCMSUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })

  return {
    async query(query: string) {
      const data: ICms = await client.request(query);
      return data;
    },
  }
}
