import startMiningArrow from './img/start_mining_arrow.svg';

const styles = ({ breakpoints }) => ({
  col: {
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'relative',
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
    // padding: [0, '20%']
  },
  [breakpoints.up('lg')]: {
    arrow: {
      display: 'block',
    },
  },
});

export default styles;
