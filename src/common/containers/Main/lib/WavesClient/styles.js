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
    width: '100%',
    left: 0,
    right: 0,
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
    maxWidth: 420,
    display: 'block',
    zIndex: -1,
    top: 0,
    width: '100%',
    margin: '0 auto',
  },

  [theme.breakpoints.up('sm')]: {
    root: {
      marginBottom: 0,
    },
    imageCol: {
      left: 'auto',
      right: '10%',
      bottom: -110,
      width: '50%',
    },
    image: {
      maxWidth: 'none',
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
