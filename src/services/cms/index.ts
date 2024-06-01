import { CMSGraphQLClient, gql } from './CMSGraphqlClient'

export const getProjectsContent = async () => {
  const query = gql`
    query {
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
  `

  const client = CMSGraphQLClient()
  const response = await client.query(query)

  return response;
}
