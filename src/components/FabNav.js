import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Grid,
  Fab,
} from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  navButtons: {
    fontSize: '2em',
  },
  fabGrid: {
    position: 'fixed',
    bottom: theme.spacing(4),
    width: '100%',
  }
}))

const FabNav = ({ UserSearchData, getUsers, userInput, userDataIsLoading }) => {

  const classes = useStyles()
  const [backButtonDisabled, setBackButtonDisabled] = useState(true)
  const [forwardButtonDisabled, setForwardButtonDisabled] = useState(true)

  useEffect(() => {
    if (userDataIsLoading || !UserSearchData) {
      setBackButtonDisabled(true)
      setForwardButtonDisabled(true)
    } else if (UserSearchData) {
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
  }, [UserSearchData, userDataIsLoading])

  let startCursor
  let endCursor
  if (UserSearchData) {
    startCursor = UserSearchData.search.pageInfo.startCursor
    endCursor = UserSearchData.search.pageInfo.endCursor
  } else {
    startCursor = ''
    endCursor = ''
  }

  if (typeof window === 'undefined') return <></>
  else return createPortal(
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
    </Grid>,
    document.getElementById('fab')
  )
}

export default FabNav