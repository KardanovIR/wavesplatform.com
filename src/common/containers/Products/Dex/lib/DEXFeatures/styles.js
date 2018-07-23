const styles = theme => ({
  image: {
    width: '100%',
    [theme.breakpoints.up('tablet')]: {
      height: '100%',
      width: 'auto',
      left: 0,
      position: 'absolute',
    },
  },
  featuresContainer: {
    order: 1,
  },
  imageContainer: {
    order: 0,
    width: '100%',
    position: 'relative',
    [theme.breakpoints.up('tablet')]: {
      order: 2,
      width: 'auto',
    },
  },
});

export default styles;
