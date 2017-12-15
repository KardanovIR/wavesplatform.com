export default theme => ({
  '@keyframes show-1': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  wrapper: {
    padding: '20px 0',

    '&:after': {
      content: '""',
      display: 'block',
      clear: 'both',
    },
  },
  wrapperAnimated: {
    animation: 'show-0 .65s ease 4.5s forwards',
    opacity: 0,
  },
  logo: {
    float: 'left',
    height: 40,
    width: 129,
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    float: 'right',
    position: 'relative',
    zIndex: 1,
  },
  mobileOnly: {
    display: 'block',
    [theme.mixins.atMedia('md')]: {
      display: 'none',
    },
  },
  desktopOnly: {
    display: 'none',
    [theme.mixins.atMedia('md')]: {
      display: 'block',
    },
  },
});
