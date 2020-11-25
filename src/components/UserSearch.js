import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  links: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: "underline",
    },
  },
}))

const UserSearch = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <h2>Users: {data.userCount}</h2>
      {data.edges.map(({ node: { name, login, url, avatarUrl } }) => {
        return (
          <div key={login}>
            <Avatar src={avatarUrl} />
            <a className={classes.links} href={url}>
              {name}
            </a>
            {' '}
            <a className={classes.links} href={url}>
              {login}
            </a>
          </div>
        )
      })}
    </>
  )
}

export default UserSearch