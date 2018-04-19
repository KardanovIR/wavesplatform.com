export const styles = theme => ({
  textContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '110%', // needed to counter overscrolling
    zIndex: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textOuter: {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'flex-end',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
  },
  innerText: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    boxSizing: 'border-box',
  },
  [theme.breakpoints.up('tablet')]: {
    inner: {
      width: 800,
      height: 400,
      alignItems: 'center',
    },
    innerText: {
      height: 'auto',
      paddingTop: theme.spacing.unit * 8,
      paddingBottom: theme.spacing.unit * 8,
      width: '50%',
      alignItems: 'flex-start',
    },
    textOuter: {
      width: 'auto',
      height: 'auto',
    },
  },

  text: {
    width: '100%',
    height: '100%',
    display: 'inherit',
  },
});
export const stylesBg = theme => ({
  bg: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
    bottom: 0,
    left: 0,
  },
  img: {
    display: 'none',
  },
  imgMobile: {
    display: 'block',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.up('tablet')]: {
    img: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1,
      bottom: 0,
      width: 'auto',
    },
    imgMobile: {
      display: 'none',
    },
  },
});
