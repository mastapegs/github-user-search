import React from "react"
import { gql, useQuery } from '@apollo/client'

const TEST_QUERY = gql`
  query UserSearch($query: String!, $type: SearchType!) {
    search(query: $query, type: $type) {
      userCount
    }
  }
`

const Home = () => {
  const { data: userData } = useQuery(TEST_QUERY, { variables: { query: "mastapegs", type: "USER" } })
  return (
    <>
      <h1>GitHub User Search</h1>
      <p>Env Test: {process.env.GITHUB_API_KEY}</p>
      <p>Env Test: {process.env.GITHUB_API_KEY}</p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  )
}

export default Home