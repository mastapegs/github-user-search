import React from 'react'
import {
  Grid,
} from '@material-ui/core'
import SingleUser from './SingleUser'

const UserSearch = ({ data }) => {
  return (
    <>
      <h2>Users: {data.userCount}</h2>
      <Grid container spacing={3}>
        {data.edges.map(({ node: user }) => <SingleUser user={user} />)}
      </Grid>
    </>
  )
}

export default UserSearch