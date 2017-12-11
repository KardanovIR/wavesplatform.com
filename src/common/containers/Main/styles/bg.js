import palette from "../../../theme/palette";

export default theme => ({
  desktopOnly: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  bg: {
    // composes: '$desktopOnly',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('lg')]: {
      minWidth: 2560,
    },
  },

  bgTokens: {},

  bgFeatures: {},

  bgWallet: {
    backgroundColor: theme.palette.blue[100]
  },

  bgJoinUs: {
    backgroundSize: 'cover',
    backgroundImage: `url(${require('../img/bgJoinUs.jpg')})`,
    backgroundPosition: 'center'
  },

  bgBlack: {
    backgroundColor: theme.palette.gray[1000],
    position: 'relative'
  },

  bgGray: {
    background: theme.palette.gray[50],
  },
});
