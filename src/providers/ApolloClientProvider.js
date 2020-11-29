import React from 'react'
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from '@apollo/client'
import fetch from 'cross-fetch'
import mergeSearchQuery from '../utils/mergeSearchQuery'
import readSearchCache from '../utils/readSearchCache'

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