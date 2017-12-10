const styles = theme => ({
  article: {
    margin: theme.spacing.getSpacing(8, 0, 0),
    textAlign: 'center',
  },
  quoteWrapper: {
    display: 'flex',
  },
  socialButtonsContainer: {
    margin: theme.spacing.getSpacing(5, 1.5, 2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    flex: '0 0 40px',
    marginRight: theme.spacing.unit * 3,
  },
  text: {
    fontWeight: 400,
  },
  [theme.mixins.atMedia('md')]: {
    root: {
      flexDirection: 'row-reverse',
    },
    article: {
      margin: 0,
      textAlign: 'left',
    },
    text: {
      fontWeight: 500,
    },
    feature: {
      marginBottom: theme.spacing.unit * 6,
    },
    iconWrapper: {
      marginRight: theme.spacing.unit * 4,
    },
  },
});

export default styles;
