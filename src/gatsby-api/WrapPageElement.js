import React from 'react'
import Layout from '../components/Layout'

const WrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export default WrapPageElement