import React, { useState, useEffect } from 'react'
import {
  Grid,
  IconButton,
} from '@material-ui/core'
import SingleUser from './SingleUser'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  navButtons: {
    fontSize: '3em',
  },
})

const RenderUserData = ({ UserSearchData, fetchMore, savedUserInput }) => {

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
      <Grid container spacing={2}>
        {edges
          .filter(({ node: { login } }) => !!login)
          .map(({ node: user, node: { login } }) => <SingleUser user={user} key={login} />)}
      </Grid>
      <Grid container justify='center' spacing={5}>
        <IconButton onClick={() => fetchMore({
          variables: {
            last: 10,
            before: startCursor,
            query: savedUserInput,
            type: 'USER',
          }
        })} disabled={backButtonDisabled} color='primary'>
          <NavigateBeforeIcon className={classes.navButtons} />
        </IconButton>
        <IconButton onClick={() => fetchMore({
          variables: {
            first: 10,
            after: endCursor,
            query: savedUserInput,
            type: 'USER',
          }
        })} disabled={forwardButtonDisabled} color='primary'>
          <NavigateNextIcon className={classes.navButtons} />
        </IconButton>
      </Grid>
    </>
  )
}

export default RenderUserData