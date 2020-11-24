import React from 'react'
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from '@apollo/client'
import fetch from 'cross-fetch'

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${'2e7e1be6500c4cc4a24fc5ab4f67f64ec4a7a55c'}`
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
  cache: new InMemoryCache(),
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