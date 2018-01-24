export default theme => ({
  Title: {
    fontWeight: 500,
    fontSize: 40,
    lineHeight: 1.05,
  },
  description: {
    fontSize: 16,
    padding: [0, theme.spacing.unit * 2],
  },
  [theme.breakpoints.up('md')]: {
    Title: {
      fontSize: 80,
    },
    description: {
      fontSize: 23,
      padding: 0,
    },
  },
});
