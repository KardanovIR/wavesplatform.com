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
    right: 0,
    width: '100%',
    bottom: -100,
    margin: [theme.spacing.unit * 4, 0, theme.spacing.unit * 2],
    maxWidth: 420,
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
  [theme.breakpoints.up('tablet')]: {
    imageCol: {
      right: '10vw',
    },
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      marginBottom: 0,
    },
    imageCol: {
      bottom: -110,
      width: '50%',
      maxWidth: '100%',
    },
    image: {
      width: 'auto',
    },
  },

  [theme.breakpoints.up('lg')]: {
    imageCol: {
      overflow: 'hidden',
      right: 0,
    },
  },
});

export default styles;
