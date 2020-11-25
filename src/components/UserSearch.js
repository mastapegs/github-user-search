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
  name: {
    fontSize: '1.7em',
    marginRight: theme.spacing(3),
  },
  avatar: {
    height: 80,
    width: 80,
    marginRight: theme.spacing(3),
  },
  bioHTML: {
    fontSize: '1.4em'
  }
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
              <Card style={{ height: '100%', }}>
                <CardContent>
                  <Grid style={{
                    alignItems: 'center',
                  }} container spacing={1}>
                    <Avatar className={classes.avatar} src={avatarUrl} />
                    <span className={classes.name}>
                      <a className={classes.links} href={url}>
                        {name}
                      </a>
                    </span>
                    {' '}
                    <span>
                      <a className={classes.links} href={url}>
                        {login}
                      </a>
                    </span>
                  </Grid>
                  <p className={classes.bioHTML} dangerouslySetInnerHTML={{ __html: bioHTML }}></p>
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