export default theme => ({
  bgDescriptions: {
    backgroundColor: '#f0f4fb',
  },
  footerMarginCompensate: {
    marginBottom: -theme.spacing.unit * 2,
  },
  bgSubscription: {
    backgroundColor: '#233556',
  },
  logo: {
    display: 'inline-block',
    verticalAlign: '-11%',
    marginRight: theme.spacing.unit / 2,
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
  },
  [theme.breakpoints.up('md')]: {
    logo: {
      marginRight: theme.spacing.unit,
      height: theme.spacing.unit * 6,
      width: theme.spacing.unit * 6,
    },
  },
});
