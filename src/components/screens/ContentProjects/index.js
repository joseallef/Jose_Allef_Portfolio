import { CMSGraphQLClient, gql } from '../../infra/cms/CMSGraphqlClient';

export async function getContent() {
  const query = gql`
    query  {
      allPageProjects {
        img {
          id
          url
        }
        title
        description
        link
      }
    }
  `;

  const client = CMSGraphQLClient();
  const response = await client.query(query);

  return response;
}
