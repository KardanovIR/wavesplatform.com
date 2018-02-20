const styles = theme => ({
  root: {},
  noShadow: {
    boxShadow: 'none',
  },
  buttonRow: {
    margin: 0,
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
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
