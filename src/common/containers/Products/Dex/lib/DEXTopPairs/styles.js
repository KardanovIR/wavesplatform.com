const styles = theme => ({
  container: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginBottom: -5 * theme.spacing.unit,
    },
  },
  root: {
    paddingBottom: theme.spacing.unit * 2,
  },
  image: {
    width: '102%',
    // marginTop: -40,
    marginBottom: 20,
    position: 'relative',
    right: '1%',
  },

  headers: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 2,
      backgroundColor: theme.palette.blue[300],
    },
  },
  pairContainer: {
    position: 'relative',
    marginBottom: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 1,
      backgroundColor: 'rgba(255,255,255,0.1)',
    },

    '&:last-child::after': {
      display: 'none',
    },
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      marginTop: theme.spacing.unit * 1.5,
      paddingBottom: theme.spacing.unit * 5,
      maxWidth: 280,
      position: 'relative',
    },
    pairContainer: {
      marginBottom: theme.spacing.unit * 3,
      paddingBottom: 0,

      '&::after': {
        display: 'none',
      },
    },
    image: {
      position: 'absolute',
      top: -30,
      right: '-40%',
      width: '100%',
      marginTop: 0,
      marginBottom: 0,
    },
  },
  [theme.breakpoints.up('md')]: {
    root: {
      marginTop: theme.spacing.unit * 9,
      paddingBottom: theme.spacing.unit * 30,
      maxWidth: 250,
    },
    image: {
      top: -60,
      right: '-20%',
    },
  },
});

export default styles;
