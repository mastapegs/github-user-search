import { gql } from '@apollo/client'

export const USER_SEARCH = gql`
query UserSearch($first: Int, $after: String, $last: Int, $before: String, $query: String!, $type: SearchType!) {
  search(first: $first, after: $after, last: $last, before: $before, query: $query, type: $type) {
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
          location
          company
          websiteUrl
          email
          twitterUsername
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
