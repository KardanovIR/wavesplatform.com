import spacing from './spacing';
import bg from './bg';

export default theme => ({
  ...bg(theme),
  ...spacing(theme),

  smartAssetTitle: {
    marginTop: '147px',
    fontWeight: 600,
  },

  smartAssetNotActiveTitle: {
    marginTop: '152px',
  },

  digest: {
    display: 'inline-block',
  },

  dots: {
    paddingLeft: '10px',
    marginRight: '10px',
    fontSize: '36px',
    verticalAlign: 'top',
    [theme.mixins.atMedia('md')]: {
      paddingLeft: '14px',
      marginRight: '14px',
      fontSize: '70px',
    },
  },



  desktopOnly: {
    display: 'none',
    [theme.mixins.atMedia('md')]: {
      display: 'block',
    },
  },
  centered: {
    textAlign: 'center',
  },
  titleStyle: {
    fontSize: 38,
    color: theme.palette.gray[0],
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
      width: 773,
      fontWeight: 700,
      lineHeight: 1.05,
    },
  },
});
