import React from 'react'
import ApolloClientProvider from '../providers/ApolloClientProvider'

const WrapRootElement = ({ element }) => {
  return (
    <>
      <ApolloClientProvider>
        {element}
      </ApolloClientProvider>
    </>
  )
}

export default WrapRootElement