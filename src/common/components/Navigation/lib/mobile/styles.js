const hidden = {
  position: 'absolute',
  top: -9999,
  left: -9999,
};

export default theme => ({
  wrapper: {
    position: 'relative',
  },
  burger: {
    width: 40,
    height: 40,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 26,
    left: theme.spacing.unit * 3
  },
  linksWrapper: {
    padding: theme.spacing.getSpacing(14, 0, 7),
    height: '100%',
    backgroundColor: '#000',
    boxSizing: 'border-box',
  },
  link: {
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: 700,
    textDecoration: 'none',
    color: theme.palette.gray[0],
    display: 'block',
    padding: theme.spacing.getSpacing(1, 3),
    '&:active': {
      backgroundColor: theme.palette.grayBlue[300],
    },
    '& + $linkSecondary': {
      marginTop: theme.spacing.unit * 3
    }
  },
  linkSecondary: {
    ...theme.typography.body2,
    color: theme.palette.gray[0],
    fontWeight: 400,
    '& + &': {
      margin: theme.spacing.getSpacing(1, 0),
    },
  },
});
