import React, { useEffect, useState } from "react"
import { gql, useLazyQuery } from '@apollo/client'
import {
  Button,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserSearch from '../components/UserSearch'

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
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
  const [getUsers, { data: userDataFromQuery }] = useLazyQuery(TEST_QUERY)
  const [userDataToRender, setUserDataToRender] = useState(null)
  const [userInput, setUserInput] = useState('')

  const classes = useStyles()

  useEffect(() => {
    setUserDataToRender({ ...userDataFromQuery })
  }, [userDataFromQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = () => {
    getUsers({
      variables: {
        first: 20,
        query: userInput,
        type: "USER"
      }
    })
  }

  return (
    <>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="user"
          label="Search GitHub Users"
          className={classes.textField}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>

      {(() => {
        if (userDataToRender?.search) return <UserSearch data={userDataToRender?.search} />
      })()}

    </>
  )
}

export default Home