import React, { useState } from 'react'
import QueryVarContext from '../contexts/QueryVarContext'

const QueryVarProvider = ({ children }) => {
  const [first, setFirst] = useState(10)
  const [last, setLast] = useState(null)
  const [after, setAfter] = useState(null)
  const [before, setBefore] = useState(null)
  return (
    <>
      <QueryVarContext.Provider value={{
        first,
        last,
        after,
        setAfter,
        before,
        setBefore,
      }}>
        {children}
      </QueryVarContext.Provider>
    </>
  )
}

export default QueryVarProvider