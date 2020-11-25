import React, { useState } from 'react'
import {
  Grid,
  IconButton,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SingleUser from './SingleUser'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles({
  navButtons: {
    fontSize: '3em',
  },
})

const UserSearch = ({ data }) => {
  const classes = useStyles()
  const [backButtonDisabled, setBackButtonDisabled] = useState(true)
  const [forwardButtonDisabled, setForwardButtonDisabled] = useState(true)
  return (
    <>
      <h2>Users Found: {parseFloat(data.userCount).toLocaleString('en')}</h2>
      <Grid container spacing={2}>
        {data.edges
          .filter(({ node: { login } }) => !!login)
          .map(({ node: user, node: { login } }) => <SingleUser user={user} key={login} />)}
      </Grid>
      <Grid container justify='center' spacing={5}>
        <IconButton disabled={backButtonDisabled} color='primary'>
          <NavigateBeforeIcon className={classes.navButtons} />
        </IconButton>
        <IconButton disabled={forwardButtonDisabled} color='primary'>
          <NavigateNextIcon className={classes.navButtons} />
        </IconButton>
      </Grid>
    </>
  )
}

export default UserSearch