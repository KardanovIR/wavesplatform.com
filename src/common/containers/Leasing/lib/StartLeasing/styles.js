import startMiningArrow from './img/start_mining_arrow.svg';

const styles = ({ breakpoints, spacing }) => ({
  col: {
    textAlign: 'left',
  },
  imageWrapper: {
    position: 'relative',
    textAlign: 'right',
    '& > svg': {
      maxWidth: '80%',
    },
  },
  arrow: {
    background: `url(${startMiningArrow})`,
    transform: 'rotate(90deg)',
  },
  message: {
    width: 242,
    //margin: [0, 'auto']
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex',
    fontSize: 16,
    // padding: [0, '20%']
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
  },
  text: {
    fontSize: 23,
    fontWeight: 500,
  },
  flexRow: {
    flexDirection: 'row-reverse',
    display: 'flex',
  },
  flexCol: {
    flexDirection: 'column',
    display: 'flex',
  },
  colMargin: {
    marginBottom: spacing.unit * 4,
  },
  arrowDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: spacing.unit * 7,
    '& > svg': {
      transformOrigin: '0 0',
      transform: 'rotate(90deg) translateY(-100%)',
      width: 39,
    },
  },
  [breakpoints.up('md')]: {
    arrowDiv: {
      height: spacing.unit * 10,
      justifyContent: 'center',
      '& > svg': {
        position: 'relative',
        left: spacing.unit * 3
      }
    },
    imageWrapper: {
      textAlign: 'left',
      width: '168px',
      // height: '111px',
      marginRight: 10 * spacing.unit,
      '& > svg': {
        maxWidth: '100%',
      },
    },
    title: {
      fontSize: 23,
      fontWeight: 400,
    },
    text: {
      fontSize: 32,
    },
    flexer: {
      display: 'flex',
      flexDirection: 'row',
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    message: {
      fontSize: 17,
      fontWeight: 400,
    },
  },
  [breakpoints.up('lg')]: {
    arrow: {
      display: 'block',
      transform: 'rotate(90deg)',
      position: 'relative',
      top: spacing.unit * 3,
    },
  },
});

export default styles;
