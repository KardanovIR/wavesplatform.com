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
  overflowHidden: {
    overflow: 'hidden',
  },
});
