import React, { useContext } from 'react'
import {
  Grid,
  Fab,
} from '@material-ui/core'
import FabNavContext from '../contexts/FabNavContext'
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

const FabNav = () => {

  const classes = useStyles()

  const {
    backButtonDisabled,
    setBackButtonDisabled,
    forwardButtonDisabled,
    setForwardButtonDisabled,
  } = useContext(FabNavContext)

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

  const {
    search: {
      pageInfo: {
        startCursor,
        endCursor,
      },
    }
  } = UserSearchData

  return (
    <>
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

export default FabNav