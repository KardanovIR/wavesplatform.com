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
      paddingBottom: 0
    },
    '&:last-child:after': {
      display: 'none'
    }
  },
  romb: {
    width: 25,
    height: 25,
    position: 'relative',
    transform: 'rotate(45deg)',
    transformOrigin: 'center',
    backgroundColor: theme.palette.blue[500],
  },
  date: {
    color: theme.palette.gray[600],
    fontSize: 12,
    padding: theme.spacing.getSpacing(.75, 0, 0)
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: theme.spacing.getSpacing(2, 0)
  },
  listItem: {
    fontSize: 20,
    lineHeight: 1.4,
    padding: theme.spacing.getSpacing(0, 0, 2)
  },
  [theme.mixins.atMedia('sm')]: {
    block: {
      padding: theme.spacing.getSpacing(0, 0, 9),

      '&:after': {
        left: 29,
      },
    },
    list: {
      margin: 0
    },
    date: {
      color: theme.palette.gray[600],
      fontSize: 13,
      padding: theme.spacing.getSpacing(1, 0, 0)
    },
    listItem: {
      fontSize: 24
    },
    romb: {
      width: 35,
      height: 35,
    },
  },
});

export default styles;
