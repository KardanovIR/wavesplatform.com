const styles = theme => ({
  text: {
    marginBottom: theme.spacing.unit,
    textAlign: 'justify',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  container: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 2,

    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      ['& *']: {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      ['& *']: {
        fontSize: '11px',
      },
    },
  },
  allowAllLink: {
    color: theme.palette.gray[0],
    padding: '5px',
    paddingRight: 0,
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  disallowLink: {
    padding: '5px',
    display: 'inline-block',
    marginRight: theme.spacing.unit * 2,
  },
  policyLink: {
    color: theme.palette.gray[0],
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  rightColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },

  snackbar: {
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 100,
    bottom: '-1px',
    background: '#4f77fc',
    transform: 'translateY(1111%)',
    transition: theme.transitions.create(
      'transform',
      theme.transitions.durationLong
    ),
    maxHeight: '35%',
  },
  open: {
    transform: 'translateY(0%)',
  },
});

export default styles;
