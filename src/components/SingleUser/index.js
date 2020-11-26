import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
} from '@material-ui/core'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import useStyles from './useStyles'
import trimString from '../../utils/trimString'
import formatNumber from '../../utils/formatNumber'

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
                <p># of Repositories: {formatNumber(repoCount)}</p>
              </Grid>
              <Grid container alignItems="center" item xs={12}>
                <StarBorderRoundedIcon className={classes.icon} />
                <p>Repositories Starred: {formatNumber(starCount)}</p>
              </Grid>
              <Grid container alignItems="center" item xs={12}>
                <PeopleAltOutlinedIcon className={classes.icon} />
                <p>Followers: {formatNumber(followerCount)}</p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SingleUser