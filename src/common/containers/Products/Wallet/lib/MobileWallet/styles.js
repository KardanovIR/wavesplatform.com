const styles = theme => ({
  root: {},
  buttonRow: {
    margin: 0,
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'visible',
  },
  image: {
    width: '100%',
  },
  imageCol: {
    display: 'block',
    order: -1,
  },

  buttonWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  [theme.breakpoints.up('sm')]: {
    imageCol: {
      display: 'block',
      // height: 0,
      overflow: 'visible',
      order: 1,
    },
    image: {
      top: '-200px',
      left: '-20%',
      position: 'absolute',
      zIndex: -1,
      width: 'auto',
    },
  },
  [theme.breakpoints.up('lg')]: {
    image: { top: 0 },
    imageWrapper: {
      paddingTop: '98%',
    },
  },
});

export default styles;
