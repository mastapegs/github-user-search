import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'

const trimString = string => {
  const trimLength = 20
  if (string.length <= trimLength) return string
  return `${string.slice(0, trimLength)}...`
}

const useStyles = makeStyles(theme => {
  const avatarShadow = 4
  return ({
    userCard: {
      backgroundColor: 'hsl(240, 20%, 95%)',
    },
    links: {
      color: 'inherit',
      textDecoration: 'inherit',
      '&:hover': {
        textDecoration: "underline",
      },
    },
    name: {
      fontSize: '1.3em',
      marginRight: theme.spacing(3),
      fontWeight: 'bold',
      color: 'hsla(30, 100%, 70%, 1)',
      textShadow: '1px 1px 1px black',
      letterSpacing: '2px',
    },
    avatar: {
      height: 50,
      width: 50,
      boxShadow: `${avatarShadow}px ${avatarShadow}px ${avatarShadow}px hsla(0, 0%, 0%, 0.5)`,
      marginRight: theme.spacing(2),
    },
    bioHTML: {
      fontSize: '1.6em',
    },
    login: {
      color: 'hsla(0, 0%, 50%, 1)',
    },
    icon: {
      display: 'inline-block',
      marginRight: theme.spacing(1),
    },
    additionalData: {
      '& p': {
        marginTop: 0,
        marginBottom: 0,
      },
    },
  })
})

const SingleUser = ({ user: {
  name,
  login,
  url,
  avatarUrl,
  bioHTML,
  repositories: { totalCount: repoCount },
  starredRepositories: { totalCount: starCount },
  followers: { totalCount: followerCount },
} }) => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Card className={classes.userCard} style={{ height: '100%', }}>
          <CardContent>
            <Grid style={{
              alignItems: 'center',
            }} container spacing={1}>
              <Avatar variant="rounded" className={classes.avatar} src={avatarUrl} />
              <div>
                <div className={classes.name}>
                  <a className={classes.links} href={url} rel="noreferrer" target="_blank">
                    {trimString(name)}
                  </a>
                </div>
                {' '}
                <div className={classes.login}>
                  <a className={classes.links} href={url} rel="noreferrer" target="_blank">
                    {login}
                  </a>
                </div>
              </div>
            </Grid>
            <Grid>
              <p className={classes.bioHTML} dangerouslySetInnerHTML={{ __html: bioHTML }}></p>
            </Grid>
            <Grid className={classes.additionalData} container spacing={1}>
              <Grid container alignItems="center" item xs={12}>
                <AccountTreeOutlinedIcon className={classes.icon} />
                <p># of Repositories: {parseFloat(repoCount).toLocaleString('en')}</p>
              </Grid>
              <Grid container alignItems="center" item xs={12}>
                <StarBorderRoundedIcon className={classes.icon} />
                <p>Repositories Starred: {parseFloat(starCount).toLocaleString('en')}</p>
              </Grid>
              <Grid container alignItems="center" item xs={12}>
                <PeopleAltOutlinedIcon className={classes.icon} />
                <p>Followers: {parseFloat(followerCount).toLocaleString('en')}</p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SingleUser