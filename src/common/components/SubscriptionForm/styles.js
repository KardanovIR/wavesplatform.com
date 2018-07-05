export default theme => ({
  inputs: {
    display: 'flex',
    marginBottom: 4 * theme.spacing.unit,
  },
  inputWrapper: {
    flex: '1',
    marginRight: theme.spacing.unit,
  },
  input: {
    width: '100%',
  },

  textGray: {
    color: theme.palette.grayBlue[200],
  },
  checkboxesContainer: {
    [theme.breakpoints.up('tablet')]: {
      marginLeft: -16 * theme.spacing.unit,
      marginRight: -16 * theme.spacing.unit,
    },
  },
  buttonWrapper: {
    flex: '0 0',
    flexBasis: 'content',
  },
  buttonFull: {
    display: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    button: {
      padding: theme.spacing.getSpacing(0, 1.5, 0, 2),
    },
  },
  [theme.breakpoints.up('sm')]: {
    buttonIcon: {
      display: 'none',
    },
    buttonFull: {
      display: 'inline-block',
    },
  },
});
