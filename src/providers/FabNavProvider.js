import React, { useState } from 'react'
import FabNavContext from '../contexts/FabNavContext'

const FabNavProvider = ({ children }) => {
  const [backButtonDisabled, setBackButtonDisabled] = useState(true)
  const [forwardButtonDisabled, setForwardButtonDisabled] = useState(true)
  const []
  return (
    <>
      <FabNavContext.Provider value={{
        backButtonDisabled,
        setBackButtonDisabled,
        forwardButtonDisabled,
        setForwardButtonDisabled,
      }}>
        {children}
      </FabNavContext.Provider>
    </>
  )
}

export default FabNavProvider