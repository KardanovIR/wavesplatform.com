const styles = theme => ({
  block: {
    position: 'relative',
    padding: theme.spacing.getSpacing(0, 0, 3),

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 24,
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.blue[500],
    },
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  romb: {
    width: 25,
    height: 25,
    position: 'relative',
    transform: 'rotate(45deg)',
    transformOrigin: 'center',
    backgroundColor: theme.palette.blue[500],
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: theme.spacing.getSpacing(2, 0),
  },
  [theme.mixins.atMedia('sm')]: {
    block: {
      padding: theme.spacing.getSpacing(0, 0, 9),

      '&:after': {
        left: 29,
      },
    },
    list: {
      margin: 0,
    },
    romb: {
      width: 35,
      height: 35,
    },
  },
});

export default styles;
