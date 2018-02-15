export default theme => ({
  bgBlue: {
    background: theme.palette.blue[50],
  },
  bgGray: {
    background: theme.palette.gray[50],
  },
  bgBlack: {
    background: theme.palette.gray[1000],
  },
  bgMobileApp: {
    backgroundSize: 'cover',
    backgroundImage: `url(${require('../img/bgMobileApp.jpg')})`,
    backgroundPosition: 'top',
  },
});
