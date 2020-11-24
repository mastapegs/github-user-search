import React, { useEffect, useState } from "react"
import { gql, useLazyQuery } from '@apollo/client'
import {
  Button,
} from '@material-ui/core'

const TEST_QUERY = gql`
query UserSearch($first: Int, $query: String!, $type: SearchType!) {
  search(first: $first, query: $query, type: $type) {
    userCount
    edges {
      node {
        ... on User {
          email
        }
      }
    }
  }
}
`

const Home = () => {
  const [getUsers, { data: userData }] = useLazyQuery(TEST_QUERY)
  const [userDataToRender, setUserDataToRender] = useState(null)

  useEffect(() => {
    console.log(userData)
    setUserDataToRender({ ...userData })
  }, [userData])

  return (
    <>
      <h1>GitHub User Search</h1>
      <Button variant="contained" color="secondary" onClick={() => getUsers({
        variables: {
          first: 20,
          query: "mastapegs",
          type: "USER"
        }
      })}>Get Users</Button>
      <pre>{JSON.stringify(userDataToRender, null, 2)}</pre>
    </>
  )
}

export default Home