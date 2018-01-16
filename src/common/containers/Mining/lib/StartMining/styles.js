import startMiningArrow from './img/start_mining_arrow.svg';

export default theme => ({
  col: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 4,
  },
  imageWrapper: {
    position: 'relative',
    flexBasis: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    width: 54,
    height: 12,
    background: `url(${startMiningArrow})`,
    right: 0,
    top: '50%',
    transform: 'translateX(32px)',
    display: 'none',
  },
  message: {
    maxWidth: 242,
    margin: [0, 'auto'],
    fontSize: 16,
    color: theme.palette.grayBlue[750],
    opacity: 0.8,
  },
  [theme.breakpoints.up('lg')]: {
    arrow: {
      display: 'block',
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  text: {
    fontSize: 23,
    fontWeight: 500,
  },
  [theme.breakpoints.down('tablet')]: {
    flexVers: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    scroll: {
      display: 'flex',
    },
    arrowRight: {
      transform: 'rotate(90deg)',
      width: '9%',
    },
    colArrow: {
      textAlign: 'left',
    },
    message: {
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: 120,
    },
  },
  [theme.breakpoints.up('tablet')]: {
    colBlock: {
      textAlign: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex',
      marginBottom: 0,
    },
    LastBlock: {
      justifyContent: 'flex-start',
    },
    image: {
      maxWidth: 120,
    },
    arrowRight: {
      position: 'relative',
      width: '60%',
      top: [theme.spacing.unit * 7],
    },
  },
  [theme.breakpoints.up('md')]: {
    title: {
      fontSize: 23,
      fontWeight: 500,
    },
    text: {
      fontSize: 32,
    },
    image: {
      maxWidth: 150,
    },

    arrowRight: {
      position: 'relative',
      width: '60%',
      top: [theme.spacing.unit * 7],
    },
  },
});
