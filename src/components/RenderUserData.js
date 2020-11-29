import React from 'react'
import {
  Grid,
} from '@material-ui/core'
import SingleUser from './SingleUser'
import { makeStyles } from '@material-ui/core/styles'
import FabNav from './FabNav'
import formatNumber from '../utils/formatNumber'

const useStyles = makeStyles(theme => ({
  usersGrid: {
    marginBottom: theme.spacing(12),
  },
}))

const RenderUserData = ({ UserSearchData, getUsers, userInput }) => {

  const classes = useStyles()

  if (!UserSearchData) return <></>

  const {
    search: {
      userCount,
      edges,
      pageInfo: {
        startCursor,
        endCursor,
      },
    }
  } = UserSearchData

  return (
    <>
      <h2>Users Found: {formatNumber(userCount)}</h2>
      <Grid className={classes.usersGrid} container spacing={2}>
        {edges
          .filter(({ node: { login } }) => !!login)
          .map(({ node: user, node: { login } }) => <SingleUser user={user} key={login} />)}
      </Grid>
      <FabNav {...{ UserSearchData, getUsers, userInput, startCursor, endCursor }} />
    </>
  )
}

export default RenderUserData