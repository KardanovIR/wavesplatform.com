export default theme => ({
  bgFriendly: {
    backgroundImage: `url(${require('../lib/FriendlyAPI/img/bg.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  bgNg: {
    backgroundImage: `url(${require('../lib/WavesNgInfo/img/bg.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  bgDark: {
    backgroundColor: theme.palette.gray[800],
  },
  bgDarker: {
    backgroundColor: theme.palette.gray[1000],
  },
  bgBlack: {
    backgroundColor: '#000',
  },
  bgDEX: {
    position: 'relative',
  },
});
