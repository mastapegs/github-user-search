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
import BusinessIcon from '@material-ui/icons/Business'
import LanguageIcon from '@material-ui/icons/Language'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import useStyles from './useStyles'
import trimString from '../../utils/trimString'
import formatNumber from '../../utils/formatNumber'

const SingleUser = ({ user: {
  name,
  login,
  url,
  avatarUrl,
  bioHTML,
  location,
  company,
  email = null,
  twitterUsername,
  websiteUrl = null,
  repositories: { totalCount: repoCount },
  starredRepositories: { totalCount: starCount },
  followers: { totalCount: followerCount },
} }) => {

  const classes = useStyles()

  const formattedWebsiteURL = (() => {
    if (!websiteUrl) return null
    const createWebsiteAnchor = (websiteUrl) => {
      let href
      if (websiteUrl.substring(0, 4).toLowerCase() === 'http') href = websiteUrl
      else href = `http://${websiteUrl}`
      return (
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {websiteUrl}
        </a>
      )
    }
    return createWebsiteAnchor(websiteUrl)
  })()

  const createTwitterAnchor = twitter => {
    if (typeof twitter === 'string' && twitter.trim() === '') return ''
    if (!twitter) return ''
    return <a rel="noreferrer" target="_blank" href={`http://twitter.com/${twitter}`}>{twitter}</a>
  }
  
  const createEmailAnchor = email => {
    if (typeof email === 'string' && email.trim() === '') return ''
    return <a href={`mailto:${email}`}>{email}</a>
  }

  const additionalData = [
    {
      Icon: AccountTreeOutlinedIcon,
      text: '# of Repositories: ',
      data: repoCount,
    },
    {
      Icon: StarBorderRoundedIcon,
      text: 'Repositories Starred: ',
      data: starCount,
    },
    {
      Icon: PeopleAltOutlinedIcon,
      text: 'Followers: ',
      data: followerCount,
    },
    {
      Icon: EmailIcon,
      text: 'Email: ',
      data: createEmailAnchor(email),
    },
    {
      Icon: TwitterIcon,
      text: 'Twitter: ',
      data: createTwitterAnchor(twitterUsername),
    },
    {
      Icon: LocationOnIcon,
      text: 'Location: ',
      data: location,
    },
    {
      Icon: BusinessIcon,
      text: 'Company: ',
      data: company,
    },
    {
      Icon: LanguageIcon,
      text: 'Website: ',
      data: formattedWebsiteURL,
    },
  ]

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
              {additionalData
                .filter(({ data }) => {
                  if (typeof data === 'string') {
                    return !!(data.trim())
                  }
                  return data !== null
                })
                .map(({ Icon, text, data }) => (
                  <Grid container alignItems="center" item xs={12} key={text}>
                    <Icon className={classes.icon} />
                    <p>{text}{typeof data === 'number' ? formatNumber(data) : data}</p>
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default SingleUser