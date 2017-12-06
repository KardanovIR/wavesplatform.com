const styles = theme => ({
  // widthSetter: {
  //     height: 0,
  //     overflow: 'visible',
  //     width: '100%',
  // },
  imageCol: {
    margin: [theme.spacing.unit * 4, 0, theme.spacing.unit * 2],
  },
  imageWrapper: {
    position: 'relative',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 4,
    boxShadow: `0 6px 24px ${theme.colors.blue[100]}`
  },
  image: {
    display: 'block',
    zIndex: -1,
    top: 0,
    left: 0,
  },
  [theme.breakpoints.up('sm')]: {
    imageCol: {
      margin: 0,
    },
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
});

export default styles;
