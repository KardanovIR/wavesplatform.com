import spacing from './spacing';
import bg from './bg';

export default theme => ({
  ...bg(theme),
  ...spacing(theme),

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
