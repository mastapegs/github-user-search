import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    fontWeight: 'bold',
    color: 'hsla(240, 100%, 70%, 1)',
    textShadow: '1px 1px 1px black',
    letterSpacing: '2px',
  },
  avatar: {
    height: 80,
    width: 80,
    marginRight: theme.spacing(3),
  },
  bioHTML: {
    fontSize: '1.4em'
  },
  login: {
    color: 'hsla(0, 0%, 50%, 1)',
  }
}))

const SingleUser = ({ user: { name, login, url, avatarUrl, bioHTML } }) => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} sm={6} key={login}>
        <Card style={{ height: '100%', }}>
          <CardContent>
            <Grid style={{
              alignItems: 'center',
            }} container spacing={1}>
              <Avatar className={classes.avatar} src={avatarUrl} />
              <div>
                <div className={classes.name}>
                  <a className={classes.links} href={url} target="_blank">
                    {name}
                  </a>
                </div>
                {' '}
                <div className={classes.login}>
                  <a className={classes.links} href={url} target="_blank">
                    {login}
                  </a>
                </div>
              </div>
            </Grid>
            <p className={classes.bioHTML} dangerouslySetInnerHTML={{ __html: bioHTML }}></p>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SingleUser