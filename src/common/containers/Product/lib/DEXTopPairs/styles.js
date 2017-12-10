const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 2,
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
      backgroundColor: theme.palette.blue[300]
    }
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
      backgroundColor: 'rgba(255,255,255,0.1)'
    },

    '&:last-child::after': {
      display: 'none'
    }
  },
  [theme.breakpoints.up('md')]: {
    root: {
      marginTop: theme.spacing.unit * 9,
      paddingBottom: theme.spacing.unit * 30,
      maxWidth: 250,
      position: 'relative',
    },
    pairContainer: {
      marginBottom: theme.spacing.unit * 3,
    }
  },
});

export default styles;
