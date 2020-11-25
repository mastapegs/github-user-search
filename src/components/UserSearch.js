import React from 'react'
import {
  Grid,
  IconButton,
} from '@material-ui/core'
import SingleUser from './SingleUser'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const UserSearch = ({ data }) => {
  return (
    <>
      <h2>Users Found: {parseFloat(data.userCount).toLocaleString('en')}</h2>
      <Grid container spacing={3}>
        {data.edges
          .filter(({ node: { login } }) => !!login)
          .map(({ node: user, node: { login } }) => <SingleUser user={user} key={login} />)}
      </Grid>
      <Grid container justify='center' spacing={5}>
        <IconButton color='primary'>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton color='primary'>
          <NavigateNextIcon />
        </IconButton>
      </Grid>
    </>
  )
}

export default UserSearch