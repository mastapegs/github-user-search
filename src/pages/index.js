import React, { useEffect, useState } from "react"
import { useLazyQuery } from '@apollo/client'
import {
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserSearch from '../components/UserSearch'
import { USER_SEARCH } from '../queries'

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
}))

const Home = () => {
  const [getUsers, { data: userDataFromQuery }] = useLazyQuery(USER_SEARCH)
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

      {userDataToRender?.search && <UserSearch data={userDataToRender?.search} /> }

    </>
  )
}

export default Home