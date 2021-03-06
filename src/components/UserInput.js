import React, { useEffect, useRef } from 'react'
import {
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
}))

const UserInput = ({ getUsers, userInput, setUserInput }) => {

  const classes = useStyles()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.querySelector("input").focus()
  }, [inputRef])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleSearch()
  }

  const handleSearch = async () => {
    await getUsers({
      variables: {
        first: 10,
        last: null,
        after: null,
        before: null,
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
          onChange={async e => setUserInput(e.target.value)}
          ref={inputRef}
        />
      </form>
    </>
  )
}

export default UserInput