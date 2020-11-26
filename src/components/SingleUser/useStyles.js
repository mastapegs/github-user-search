import { makeStyles } from '@material-ui/core/styles'

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

export default useStyles