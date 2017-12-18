const styles = theme => ({
  image: {
    display: 'block',
    maxWidth: '100%',
  },
  [theme.breakpoints.up('md')]: {
    image: {
      margin: [0, 'auto'],
    },
  },
});

export default styles;
