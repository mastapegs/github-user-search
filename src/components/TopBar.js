import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  }
}))

const TopBar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.icon} edge="start" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6">GitHub User Search</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopBar