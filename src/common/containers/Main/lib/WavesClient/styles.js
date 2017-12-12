const styles = theme => ({
  // widthSetter: {
  //     height: 0,
  //     overflow: 'visible',
  //     width: '100%',
  // },
  root: {
    marginBottom: theme.spacing.unit * 18,
  },
  imageCol: {
    position: 'absolute',
    right: -20,
    width: '100%',
    bottom: -100,
    margin: [theme.spacing.unit * 4, 0, theme.spacing.unit * 2],
  },
  imageWrapper: {
    position: 'relative',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    display: 'block',
    zIndex: -1,
    top: 0,
    left: 0,
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      marginBottom: 0,
    },
    imageCol: {
      right: -theme.spacing.unit * 3,
      bottom: -110,
      width: '50%',
    },
    image: {
      width: 'auto',
    },
  },
  [theme.breakpoints.up('md')]: {
    imageCol: {
      right: theme.spacing.unit * 1.5,
    },
  },
  [theme.breakpoints.up('lg')]: {},
});

export default styles;
