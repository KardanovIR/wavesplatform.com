const styles = theme => ({
  slide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    height: 650,
    width: `calc(100vw - ${theme.spacing.unit * 6}px)`,
    boxSizing: 'border-box',
    [theme.mixins.atMedia(375)]: {
      height: 560,
    }
  },
  quote: {
    marginTop: theme.spacing.unit * 1.5
  },
  title: {
    paddingRight: theme.spacing.unit * 4,
    lineHeight: 1.3
  },
  text: {
    paddingRight: theme.spacing.unit * 4
  },
  link: {
    fontWeight: 600,
  },
  image: {
    display: 'block',
    width: '100%'
  },
  popupContainer: {
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 4,
  },
  [theme.mixins.atMedia('md')]: {
    slide: {
      display: 'block',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      height: 690,
      boxSizing: 'border-box'
    },
  }
});

export default styles;
