import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSUrl = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query(query) {
      const data = await client.request(query);

      return data;
    },
  };
}
