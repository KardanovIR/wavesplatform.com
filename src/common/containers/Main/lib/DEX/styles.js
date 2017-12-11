
const styles = theme => ({
  root: {
    position: 'relative'
  },
  titleRow: {
    justifyContent: 'flex-end'
  },
  title: {
    position: 'relative',
    zIndex: 2
  },
  article: {
    marginBottom: theme.spacing.unit * 4,
    position: 'relative',
    zIndex: 2
  },
  image: {
    width: '100%',
  },
  [theme.mixins.atMedia('md')]: {
    titleRow: {
      justifyContent: 'flex-start'
    },
    title: {
      marginBottom: theme.spacing.unit * 37,
    },
    imageWrapper: {
      position: 'absolute',
      top: -70,
      right: 40,
      width: '50%',
      zIndex: 1
    },
    image: {
      width: '150%',
      height: '150%',
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
