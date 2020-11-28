import React from 'react'
import ApolloClientProvider from '../providers/ApolloClientProvider'
import QueryVarProvider from '../providers/QueryVarProvider'

const WrapRootElement = ({ element }) => {
  return (
    <>
      <QueryVarProvider>
        <ApolloClientProvider>
          {element}
        </ApolloClientProvider>
      </QueryVarProvider>
    </>
  )
}

export default WrapRootElement