const styles = theme => ({
  button: {
    // RESET default browser styles
    appearance: 'none',
    background: 'none',
    border: 0,
    outline: 'none',
    font: 'inherit',
    fontWeight: 500,
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    textDecoration: 'none',

    display: 'inline-block',
    position: 'relative',

    cursor: 'pointer',
    borderRadius: theme.spacing.radius,

    height: theme.spacing.inputHeight,
    lineHeight: `${theme.spacing.inputHeight}px`,

    padding: [0, theme.spacing.unit * 5],

    transition: theme.transitions.create(['transform']),
    willChange: 'transform',
    // transformOrigin: 'center bottom',

    '&:hover': {
      transform: 'scale(1.01) translateY(-1px)',
    },

    '&:disabled': {
      opacity: 0.6,
      pointerEvents: 'none',
    },
  },
  dark: {
    backgroundColor: theme.palette.gray[1000],
    border: `1px solid ${theme.palette.gray[1000]}`,
    color: '#fff',
  },
  light: {
    backgroundColor: theme.palette.blue[500],
    border: `1px solid ${theme.palette.blue[500]}`,
    transformOrigin: 'center bottom',
    color: '#fff',
  },

  bordered: {
    border: `1px solid ${theme.palette.opaque(theme.palette.gray[1000], .9)}`,
    backgroundColor: 'transparent',

    '& $content, & $spinner': {
      color: theme.palette.gray[1000],
    },
  },
  inverted: {
    borderColor: theme.palette.gray[0],
    color: theme.palette.gray[0],

    '& $content, & $spinner': {
      color: theme.palette.gray[0],
    },
  },
  invertedFill: {
    backgroundColor: theme.palette.gray[0],
    borderColor: theme.palette.gray[0],
    color: theme.palette.blue[500],
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  contentHidden: {
    opacity: 0,
  },
  icon: {
    marginRight: theme.spacing.unit * 1.5,
  },
  text: theme.typography.button,
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 24,
    width: 24,
  },
});

export default styles;
