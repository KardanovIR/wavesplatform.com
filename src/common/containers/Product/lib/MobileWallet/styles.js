const styles = theme => ({
  imageWrapper: {
    position: 'relative',
    paddingTop: '98%',
    overflow: 'visible',
  },
  imageCol: {
    display: 'none'
  },
  image: {
    position: 'absolute',
    zIndex: -1,
    top: 0,

  },
  buttonWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  [theme.breakpoints.up('md')]: {
    imageCol: {
      display: 'block',
      height: 0,
      overflow: 'visible',
    },
    image: {
      top: '-60%',
      // bottom: '80%'
    },
  },
});

export default styles;
