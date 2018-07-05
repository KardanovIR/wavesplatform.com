const imgHeightDesktop = 560;
const imgHeightTablet = 520;
const imgHeightMobile = 0;

const styles = theme => ({
  titleRow: {
    justifyContent: 'flex-end',
  },
  title: {
    position: 'relative',
    zIndex: 2,
    minHeight: imgHeightMobile,
  },
  article: {
    marginBottom: theme.spacing.unit * 4,
    position: 'relative',
    zIndex: 2,
  },
  imageWrapper: {
    position: 'relative',
    right: -20,
  },
  image: {
    width: '100%',
  },
  [theme.breakpoints.up('tablet')]: {
    titleRow: {
      justifyContent: 'flex-start',
    },
    title: {
      minHeight: imgHeightTablet,
    },
    imageWrapper: {
      position: 'absolute',
      right: '0',
      width: '80%',
      top: `calc(${8 * theme.spacing.unit}px + 4em)`,
    },
  },
  [theme.breakpoints.up('md')]: {
    title: {
      minHeight: imgHeightDesktop,
    },
    imageWrapper: {
      position: 'absolute',
      width: '60%',
      right: '0',
      top: `calc(${16 * theme.spacing.unit}px + 4em)`,
    },
  },
  [theme.breakpoints.up('lg')]: {
    imageWrapper: {
      width: '55%',
    },
  },
});

export default styles;
