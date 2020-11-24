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
  },
  textField: {
    marginBottom: theme.spacing(3),
  }
}))

const TEST_QUERY = gql`
query UserSearch($first: Int, $query: String!, $type: SearchType!) {
  search(first: $first, query: $query, type: $type) {
    userCount
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        ... on User {
          name
          login
          email
          url
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

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClick()
  }

  const handleClick = () => {
    getUsers({
      variables: {
        first: 20,
        query: userInput,
        type: "USER"
      }
    })
    setUserInput('')
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="user"
          label="Search GitHub Users"
          className={classes.textField}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <Button variant="contained" color="secondary" onClick={handleClick}>Get Users</Button>
      </form>

      {(() => {
        if (userDataToRender?.search?.userCount && userDataToRender?.search?.userCount !== 0) return (
          <>
            <h2>Users: {userDataToRender.search.userCount}</h2>
          </>
        )
      })()}
      

      <pre>{JSON.stringify(userDataToRender, null, 2)}</pre>
    </>
  )
}

export default Home