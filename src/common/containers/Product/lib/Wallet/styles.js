const styles = theme => ({
  image: {
    display: 'block',
    margin: `${theme.spacing.unit * 8}px auto`,
    maxWidth: '100%',
  },
  [theme.breakpoints.up('md')]: {
    image: {
      margin: '0 auto'
    },
  },
});

export default styles;
