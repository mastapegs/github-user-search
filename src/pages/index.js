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

const RenderData = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <h2>Users: {data.userCount}</h2>
      {data.edges.map(({ node: { name, login, url } }) => {
        return (
          <div key={login}>
            <p><a href={url}>{name}</a> <a href={url}>{login}</a></p>
          </div>
        )
      })}
    </>
  )
}

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
        if (userDataToRender?.search) return <RenderData data={userDataToRender?.search} />
      })()}

    </>
  )
}

export default Home