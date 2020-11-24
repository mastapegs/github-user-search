import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  fetch,
})

const client = new ApolloClient({
  link,
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