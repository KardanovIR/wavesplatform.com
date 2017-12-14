const styles = theme => ({
  image: {
    display: 'block',
    maxWidth: '100%',
    //margin: [theme.spacing.unit * 8, 0, 0],
    padding: theme.spacing.getSpacing(3, 0, 3, 0),
    margin: [0, 'auto'],
  },
  /*image: {
    display: 'block',
    //maxWidth: '100%',
    margin: [0, 'auto'],

  },*/
  text: {
    lineHeight: 1.25,
    paddingRight: 0,
    fontSize: 26,
    fontWeight: 500,
  },
  title: {
    fontSize: 16,
  },
  twoblocks: {
    flexDirection: 'column-reverse',
  },
  svgrow: {
    display: 'none',
    boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .09)',
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.getSpacing(3, 1, 3, 1),
  },
  [theme.breakpoints.up('sm')]: {
    svgrow: {
      display: 'flex',
    }
  },
  [theme.breakpoints.up('tablet')]: {
    twoblocks: {
      flexDirection: 'row',
    },
    svgrow: {
      margin: 0,
      display: 'flex',
    },
    text: {
      fontSize: 32,
      lineHeight: 1.3,
    },
    title: {
      fontSize: 19,
    }
  },
});

export default styles;
