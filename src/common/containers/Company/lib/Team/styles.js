const styles = theme => ({
  bg: {
    marginLeft: -theme.spacing.unit * 6,
    marginRight: -theme.spacing.unit * 6,
  },
  img: {
    display: 'none',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  imgMobile: {
    display: 'block',

    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.up('tablet')]: {
    img: {
      display: 'block',
    },
    imgMobile: {
      display: 'none',
    },
  },
});

export default styles;
