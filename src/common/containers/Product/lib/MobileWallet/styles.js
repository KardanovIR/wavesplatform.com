import mobileWallet from './img/mobile_wallet.svg';

const styles = theme => ({
  imageWrapper: {
    position: 'relative',
    paddingTop: '98%',
    overflow: 'visible',
  },
  imageCol: {
    display: 'none'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 0,

    background: `url(${mobileWallet}) no-repeat`,
    backgroundSize: '100%',
  },
  buttonWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  [theme.breakpoints.up('lg')]: {
    imageCol: {
      display: 'block',
      height: 0,
      overflow: 'visible',
    },
    image: {
      top: '-60%',
      // bottom: '80%'
    },
  },
});

export default styles;
