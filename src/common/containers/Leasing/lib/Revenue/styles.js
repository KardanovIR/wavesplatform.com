export default theme => ({
  title: {
    fontSize: 16,
    fontWeight: 400,
  },
  titleTwo: {
    fontSize: 26,
    fontWeight: 400,
  },
  text: {
    fontSize: 23,
  },
  textDescription: {
    fontSize: 16,
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleBox: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  calculator: {
    maxWidth: 650,
    marginBottom: theme.spacing.unit * 2,
  },
  [theme.breakpoints.up('md')]: {
    title: {
      fontSize: 23,
      fontWeight: 400,
    },
    titleTwo: {
      fontSize: 32,
      fontWeight: 400,
    },
    text: {
      fontSize: 32,
    },
    textDescription: {
      fontSize: 17,
    },
    cards: {
      display: 'flex',
      flexDirection: 'row',
    },
    calcDescription: {
      order: 2
    }
  },
});
