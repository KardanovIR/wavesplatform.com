const styles = theme => ({
  root: {},
  imageWrapper: {
    position: 'relative',
    paddingTop: '98%',
    left: '-10%',
    overflow: 'visible',
  },
  imageCol: {
    display: 'none',
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
  [theme.breakpoints.up('sm')]: {
    root: {
      paddingTop: theme.spacing.unit * 7,
    },
    imageCol: {
      display: 'block',
      height: 0,
      overflow: 'visible',
    },
    image: {
      top: '-60%',
      left: '-90%',
      // bottom: '80%'
    },
  },
  [theme.breakpoints.up('md')]: {
    image: {
      left: 0,
    },
  },
});

export default styles;
