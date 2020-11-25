import React, { useEffect, useState, useRef } from "react"
import { useLazyQuery } from '@apollo/client'
import {
  TextField,
  CircularProgress,
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
  const [getUsers, { data: userDataFromQuery, loading: userDataLoading }] = useLazyQuery(USER_SEARCH)
  const [userInput, setUserInput] = useState('')
  const inputRef = useRef(null)

  const classes = useStyles()

  useEffect(() => {
    inputRef.current.querySelector("input").focus()
  }, [inputRef])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = () => {
    getUsers({
      variables: {
        first: 10,
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
          ref={inputRef}
        />
      </form>

      {(() => {
        if (userDataLoading) return <CircularProgress />
        else if (userDataFromQuery?.search) return <UserSearch data={userDataFromQuery?.search} />
      })()}

    </>
  )
}

export default Home