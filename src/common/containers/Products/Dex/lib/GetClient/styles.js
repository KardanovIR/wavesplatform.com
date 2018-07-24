const styles = theme => ({
  root: { margin: `0 ${theme.spacing.unit * 4}px` },
  noShadow: {
    boxShadow: 'none',
  },
  showMobileOnly: {
    display: 'none',
    [theme.breakpoints.down('tablet')]: {
      display: 'block',
    },
  },
  showNotMobile: {
    display: 'block',
    [theme.breakpoints.down('tablet')]: {
      display: 'none',
    },
  },
  buttonRow: {
    margin: 0,
    justifyContent: 'center',
    [theme.breakpoints.up('tablet')]: {
      justifyContent: 'flex-start',
    },
  },
  noPadding: { padding: 0 },
  buttonWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
});

export default styles;
