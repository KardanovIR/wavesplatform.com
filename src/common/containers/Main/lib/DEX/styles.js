
const styles = theme => ({
  root: {
    flexDirection: 'row-reverse',
  },
  title: {
    marginBottom: theme.spacing.unit * 37,
  },
  article: {
    marginBottom: theme.spacing.unit * 4,
  },
  imageWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '45%',
  },
  image: {
    width: '100%',
  },
  [theme.mixins.atMedia('sm')]: {
    image: {
      width: '200%',
      height: '200%',
      top: -80,
    },
  },
  [theme.mixins.atMedia('md')]: {
    image: {
      width: '180%',
      height: '180%',
      top: -150,
      left: -10,
    },
  },
  [theme.mixins.atMedia('lg')]: {
    image: {
      top: -180,
      left: -30,
    },
  },
});

export default styles;
