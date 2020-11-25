import { gql } from '@apollo/client'

export const USER_SEARCH = gql`
  query UserSearch($first: Int, $query: String!, $type: SearchType!) {
    search(first: $first, query: $query, type: $type) {
      userCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          ... on User {
            name
            login
            email
            url
            avatarUrl
            bioHTML
            followers {
              totalCount
            }
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  }
`
