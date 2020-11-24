import React from 'react'
import {
  Container,
} from '@material-ui/core'
import TopBar from './TopBar'

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout