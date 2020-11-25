import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

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
      {console.log(data)}
      <h2>Users: {data.userCount}</h2>
      {data.edges.map(({ node: { name, login, url } }) => {
        return (
          <div key={login}>
            <p>
              <a className={classes.links} href={url}>
                {name}
              </a>
              {' '}
              <a className={classes.links} href={url}>
                {login}
              </a>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default UserSearch