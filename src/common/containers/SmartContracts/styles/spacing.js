export default theme => ({
  paddedTop: theme.spacing.paddedTop,
  paddedBottom: theme.spacing.paddedBottom,
  section: theme.spacing.section,
  sectionNarrow: theme.spacing.sectionNarrow,
  sectionWide: theme.spacing.sectionWide,

  withBackground: {
    padding: theme.spacing.getSpacing(8, 0),
    [theme.mixins.atMedia('md')]: {
      padding: theme.spacing.getSpacing(12, 0),
    },
    [theme.mixins.atMedia('lg')]: {
      padding: theme.spacing.getSpacing(20, 0),
    },
  },

  marginSmall: {
    marginBottom: theme.spacing.unit,
  },
  additionalPadding: {
    padding: '10px 20px',
  },
  footerMarginCompensate: {
    marginBottom: -theme.spacing.unit * 8,
    [theme.mixins.atMedia('sm')]: {
      marginBottom: -theme.spacing.unit * 13,
    },
    [theme.mixins.atMedia('md')]: {
      marginBottom: -theme.spacing.unit * 15,
    },
    [theme.mixins.atMedia('lg')]: {
      marginBottom: -theme.spacing.unit * 25,
    },
  },
});
