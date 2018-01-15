export default theme => ({
  title: {
    fontSize: 16,
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
  infograph: {
    maxWidth: '80%',
  },
  [theme.breakpoints.up('md')]: {
    title: {
      fontSize: 23,
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
      justifyContent: 'space-between',
    },
  },
});
