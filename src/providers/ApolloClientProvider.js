import React from 'react'
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from '@apollo/client'
import fetch from 'cross-fetch'

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${process.env.GITHUB_API_KEY}`
    }
  })
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  fetch,
})

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            keyArgs: ['query'],
            merge(existingUsers = {}, incomingUsers, { args: { first, last, after, before } }) {
              console.log('existingUsers')
              console.log(existingUsers)
              console.log('incomingUsers')
              console.log(incomingUsers)
              console.log('first')
              console.log(first)
              console.log('after')
              console.log(after)

              

              return incomingUsers
            },
          }
        }
      },
    },
  }),
})

const ApolloClientProvider = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </>
  )
}

export default ApolloClientProvider