import flexCentered from '../../../../styles/flexCentered';

export default theme => ({
  wrapper: {
    margin: 0,
    borderTop: `1px solid ${theme.palette.opaque(theme.palette.gray[400], .3)}`,
    borderBottom: `1px solid ${theme.palette.opaque(theme.palette.gray[400], .3)}`,
    padding: theme.spacing.getSpacing(2, 0),
  },
  icon: {
    ...flexCentered,
    width: 30,
    height: 30,
    margin: [theme.spacing.unit, 0],
    color: theme.palette.gray[400],
    transition: theme.transitions.create('opacity'),
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
  },
  col: flexCentered,
  [theme.breakpoints.down('sm')]: {
    col: {
      flexBasis: '20%',
    },
  },
  [theme.breakpoints.only('sm')]: {
    wrapper: {
      justifyContent: 'space-around',
    },
  },
  [theme.breakpoints.up('md')]: {
    icon: {
      margin: 0,
    },
    wrapper: {
      margin: theme.spacing.getSpacing(0, -1.5),
      border: 0,
      padding: 0
    },
  },
});
