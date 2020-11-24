import React, { useEffect, useState } from "react"
import { gql, useLazyQuery } from '@apollo/client'
import {
  Button,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: theme.spacing(3),
  }
}))

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
  const [userInput, setUserInput] = useState('')

  const classes = useStyles()

  useEffect(() => {
    console.log(userData)
    setUserDataToRender({ ...userData })
  }, [userData])

  return (
    <>
      <form className={classes.form}>
        <TextField
          id="user"
          label="Search GitHub Users"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <Button variant="contained" color="secondary" onClick={() => getUsers({
        variables: {
          first: 20,
          query: userInput,
          type: "USER"
        }
      })}>Get Users</Button>
      <pre>{JSON.stringify(userDataToRender, null, 2)}</pre>
    </>
  )
}

export default Home