import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    height: 70,
  }
}))

const TopBar = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mastapegs/github-user-search"
            className={classes.icon}
            edge="start" color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <Typography component='h1' variant="h6">GitHub User Search</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.spacer}></div>
    </>
  )
}

export default TopBar