const styles = theme => ({
  root: {
    position: 'relative',
  },
  titleRow: {
    justifyContent: 'flex-end',
  },
  title: {
    position: 'relative',
    zIndex: 2,
  },
  article: {
    marginBottom: theme.spacing.unit * 4,
    position: 'relative',
    zIndex: 2,
  },
  imageWrapper: {
    position: 'relative',
    right: -20,
    margin: [theme.spacing.unit * 1, 0, theme.spacing.unit * 3],
  },
  image: {
    width: '100%',
  },
  [theme.mixins.atMedia('sm')]: {
    titleRow: {
      justifyContent: 'flex-start',
    },
    title: {
      marginBottom: theme.spacing.unit * 37,
    },
    imageWrapper: {
      position: 'absolute',
      top: 20,
      right: 80,
      width: '50%',
      zIndex: 1,
    },
    image: {
      width: '130%',
      height: '130%',
      top: -150,
      left: -10,
    },
  },
  [theme.mixins.atMedia('md')]: {
    imageWrapper: {
      right: -50,
      top: 40,
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
