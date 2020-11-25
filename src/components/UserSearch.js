import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Grid,
  Card,
  CardContent,
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
      <Grid container spacing={3}>
        {data.edges.map(({ node: { name, login, url, avatarUrl, bioHTML } }) => {
          return (
            <Grid item xs={12} key={login}>
              <Card>
                <CardContent>
                  <Avatar src={avatarUrl} />
                  <a className={classes.links} href={url}>
                    {name}
                  </a>
                  {' '}
                  <a className={classes.links} href={url}>
                    {login}
                  </a>
                  <p dangerouslySetInnerHTML={{ __html: bioHTML }}></p>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default UserSearch