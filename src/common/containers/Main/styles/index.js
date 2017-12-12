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
  issuingTokens: {
    paddingBottom: theme.spacing.unit * 3,
    [theme.mixins.atMedia('sm')]: {
      paddingBottom: theme.spacing.unit * 28,
    },
    [theme.mixins.atMedia('md')]: {
      paddingBottom: theme.spacing.unit * 32,
    },
    [theme.mixins.atMedia('lg')]: {
      paddingBottom: theme.spacing.unit * 34,
    },
  },

  centered: {
    textAlign: 'center',
  },
  overflowHidden: {
    overflow: 'hidden'
  }
});
