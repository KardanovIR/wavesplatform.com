export default theme => ({
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  titleTwo: {
    fontSize: 26,
    fontWeight: 500,
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
    '& div': {
      marginBottom: theme.spacing.unit * 2,
    },
  },
  titleBox: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  calculator: {
    maxWidth: 650,
    order:2
  },
  revDescr: {
    marginTop: theme.spacing.unit * 2,
  },
  [theme.breakpoints.up('md')]: {
    title: {
      fontSize: 23,
      fontWeight: 500,
    },
    titleTwo: {
      fontSize: 32,
      fontWeight: 500,
    },
    calculator: {
      order:0
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
  },
});
