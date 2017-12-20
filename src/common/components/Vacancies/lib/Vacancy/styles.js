import arrow from './img/arrow.svg';

export default theme => ({
  clickable: {
    margin: [-theme.spacing.unit * 3, -theme.spacing.unit * 2.5, 0],
    cursor: 'pointer',
  },
  titleWrapper: {
    padding: [
      theme.spacing.unit * 3,
      theme.spacing.unit * 6,
      theme.spacing.unit * 3,
      theme.spacing.unit * 2.5,
    ],
    position: 'relative',
  },
  title: {
    marginBottom: theme.spacing.unit / 2,
  },
  subtitle: {
    fontWeight: 500,
    marginBottom: theme.spacing.unit,
  },
  locationText: {
    verticalAlign: '-5%',
    marginLeft: '.3em',
    color: theme.palette.gray[800],
  },
  wrapper: {
    position: 'relative',
  },

  collapsed: {
    // shadow hover
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .08)',
      borderRadius: theme.spacing.radius,
      opacity: 0,
      willChange: 'opacity',
      transition: theme.transitions.create('opacity'),
    },
    '& $clickable': {
      marginBottom: -theme.spacing.unit * 3,
    },
    '& $content': {
      opacity: 0,
      transition: 'none',
      height: 0,
      overflow: 'hidden',
    },
    '& $arrow': {
      transform: 'none',
    },
  },

  arrow: {
    position: 'absolute',
    top: 'calc(50% - 11px)',
    width: 22,
    height: 22,
    borderRadius: '50%',
    background: `${
      theme.palette.primary[500]
    } url(${arrow}) no-repeat center 9px`,
    right: theme.spacing.unit * 2.5,
    transition: theme.transitions.create(
      'transform',
      theme.transitions.durationMedium
    ),
    transform: 'rotate(-180deg)',
  },

  content: {
    // opacity: 0,
    transition: theme.transitions.create(
      'opacity',
      theme.transitions.durationMedium
    ),
  },
  [theme.breakpoints.up('md')]: {
    clickable: {
      margin: [-theme.spacing.unit * 5, -theme.spacing.unit * 5, 0],
    },
    titleWrapper: {
      padding: [
        theme.spacing.unit * 5,
        theme.spacing.unit * 10,
        theme.spacing.unit * 5.5,
        theme.spacing.unit * 5,
      ],
    },
    collapsed: {
      '&:hover:before': {
        opacity: 1,
      },
      '& $clickable': {
        marginBottom: -theme.spacing.unit * 5.5,
      },
    },
    subtitle: {
      marginBottom: theme.spacing.unit * 1.5,
    },
    title: {
      fontSize: 24,
    },
    arrow: {
      right: theme.spacing.unit * 5,
    },
  },
});
