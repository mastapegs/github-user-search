import React, { useState, useEffect } from 'react'
import {
  Grid,
  Fab,
} from '@material-ui/core'
import SingleUser from './SingleUser'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  navButtons: {
    fontSize: '2em',
  },
  usersGrid: {
    marginBottom: theme.spacing(6),
  },
  fabGrid: {
    position: 'fixed',
    bottom: theme.spacing(4),
  }
}))

const RenderUserData = ({ UserSearchData, getUsers, userInput }) => {

  const classes = useStyles()
  const [backButtonDisabled, setBackButtonDisabled] = useState(true)
  const [forwardButtonDisabled, setForwardButtonDisabled] = useState(true)

  useEffect(() => {
    if (UserSearchData) {
      const {
        search: {
          pageInfo: {
            hasPreviousPage,
            hasNextPage,
          },
        }
      } = UserSearchData
      setBackButtonDisabled(!hasPreviousPage)
      setForwardButtonDisabled(!hasNextPage)
    }
  }, [UserSearchData])

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
      <h2>Users Found: {parseFloat(userCount).toLocaleString('en')}</h2>
      <Grid className={classes.usersGrid} container spacing={2}>
        {edges
          .filter(({ node: { login } }) => !!login)
          .map(({ node: user, node: { login } }) => <SingleUser user={user} key={login} />)}
      </Grid>
      <Grid className={classes.fabGrid} container justify='center' spacing={5}>
        <Grid item>
          <Fab disabled={backButtonDisabled} color="primary" aria-label="previous-page"
            onClick={async () => {
              await getUsers({
                variables: {
                  last: 10,
                  before: startCursor,
                  query: userInput,
                  type: 'USER',
                }
              })
            }}>
            <NavigateBeforeIcon className={classes.navButtons} />
          </Fab>
        </Grid>
        <Grid item>
          <Fab disabled={forwardButtonDisabled} color="primary" aria-label="previous-page"
            onClick={async () => {
              await getUsers({
                variables: {
                  first: 10,
                  after: endCursor,
                  query: userInput,
                  type: 'USER',
                }
              })
            }}>
            <NavigateNextIcon className={classes.navButtons} />
          </Fab>
        </Grid>
      </Grid>
    </>
  )
}

export default RenderUserData