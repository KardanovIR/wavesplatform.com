const styles = theme => ({
  root: {},
  centered: {
    textAlign: 'center',
  },
  image: {
    display: 'block',
    width: '100%',
    paddingBottom: '60%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  narrow: {
    display: 'inline-block',
    maxWidth: 400,
  },
  link: {
    ...theme.typography.display1,
  },
  div: {
    padding: theme.spacing.getSpacing(0, 2),
  },
  title: {
    fontSize: 16,
  },
  text: {
    fontSize: 26,
    fontWeight: 500,
  },
  [theme.breakpoints.up('md')]: {
    title: { fontSize: 19 },
    text: { fontSize: 32 },
  },
});

export default styles;
