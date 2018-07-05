const checkMark = theme => ({
  content: '""',
  bottom: theme.spacing.unit / 2,
  left: theme.spacing.unit / 2,
  width: theme.spacing.unit / 2,
  height: theme.spacing.unit,
  border: 'solid black',
  borderWidth: '0 2px 2px 0',
  '-webkit-transform': 'rotate(45deg)',
  '-ms-transform': 'rotate(45deg)',
  transform: 'rotate(45deg)',
  display: 'block',
  position: 'absolute',
});

const styles = theme => ({
  checkbox: {
    flex: 'none',
    '-webkit-appearance': 'none',
    display: 'inline-block',
    padding: 0,
    marginBottom: theme.spacing.unit / 2,
    height: theme.spacing.unit * 2,
    width: theme.spacing.unit * 2,
    background: 'transparent',
    position: 'relative',
    ['&:checked']: {
      background: 'white',
      ['&::after']: checkMark(theme),
    },
  },
});

export default styles;
