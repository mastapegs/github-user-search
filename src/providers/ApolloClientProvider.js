import React from 'react'
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from '@apollo/client'
import fetch from 'cross-fetch'

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${'1072e178c25786b2aedfd3321293039c25bc637f'}`
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