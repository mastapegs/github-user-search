import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const TopBar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="h6">GitHub User Search</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopBar