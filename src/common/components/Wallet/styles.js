const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 6,
  },
  feature: {
    marginBottom: theme.spacing.unit * 3,
  },
  [theme.mixins.atMedia('sm')]: {
    root: {
      marginTop: 0,
    },
  },
  [theme.mixins.atMedia('md')]: {
    feature: {
      marginBottom: theme.spacing.unit * 6,
    },
  },
  [theme.mixins.atMedia('lg')]: {
    featuresRow: {
      justifyContent: 'space-around',
    },
  },
});

export default styles;
