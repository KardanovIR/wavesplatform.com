const styles = theme => ({
  title: {
    display: 'inline-block',
    paddingBottom: theme.spacing.unit * 2,
  },
  quote: {
    display: 'inline-block',
  },
  column: {
    display: 'flex',
  },
  columnContent: {
    flex: 1,
    display: 'flex',
  },
  [theme.mixins.atMedia('md')]: {
    title: {
      maxWidth: 540,
      display: 'inline-block',
      paddingBottom: 0,
    },
  }
});

export default styles;
