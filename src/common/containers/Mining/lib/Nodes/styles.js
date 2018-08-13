export default theme => ({
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  text: {
    fontSize: 23,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 1.21,
    fontWeight: 500,
  },
  textQuote: {
    fontSize: 16,
    lineHeight: 1.35,
    fontWeight: 400,
  },
  forumLink: {
    display: 'inline-block',
  },
  [theme.breakpoints.up('md')]: {
    title: {
      fontSize: 23,
      fontWeight: 500,
    },
    text: {
      fontSize: 32,
    },
    titleText: {
      fontSize: 19,
      lineHeight: 1.35,
      fontWeight: 500,
    },
    textQuote: {
      fontSize: 17,
      lineHeight: 1.35,
      fontWeight: 400,
    },
  },
});
