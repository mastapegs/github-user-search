import React, { useState } from 'react'
import {
  Grid,
  IconButton,
  CircularProgress,
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

const RenderData = ({ data }) => {

  const classes = useStyles()
  const [backButtonDisabled, setBackButtonDisabled] = useState(true)
  const [forwardButtonDisabled, setForwardButtonDisabled] = useState(true)

  if (!data) return

  const {
    search: {
      userCount,
      edges,
    }
  } = data
  
  return (
    <>
      <h2>Users Found: {parseFloat(userCount).toLocaleString('en')}</h2>
      <Grid container spacing={2}>
        {edges
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

const UserSearch = ({
  userDataIsLoading,
  userDataFromQuery,
}) => {
  return (
    <>
      {userDataIsLoading && <CircularProgress />}
      <RenderData data={userDataFromQuery} />
    </>
  )
}

export default UserSearch