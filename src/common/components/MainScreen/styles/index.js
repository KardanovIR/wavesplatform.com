import image from './image';
import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  ...image(theme),

  '@keyframes show-0': {
    from: { opacity: 0, transform: 'translateY(5px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },

  xsHidden: {
    display: 'none',
  },

  root: {
    ...flexCentered,
    textAlign: 'center',
    height: '100%',
  },

  inner: {
    paddingTop: theme.spacing.unit * 4,
    width: '100%',
  },

  title: {
    lineHeight: 1.05,
    opacity: ({ animated }) => (animated ? 0 : 1),
    animation: ({ animated }) => animated && 'show-0 .65s ease 3s forwards',
  },

  imageColMargin: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 2,
    color: ({ inverted }) => (inverted ? theme.palette.gray[0] : 'inherit'),
    opacity: ({ animated }) => (animated ? 0 : 1),
    animation: ({ animated }) => animated && 'show-0 .65s ease 4.5s forwards',
  },

  buttonsContainer: {
    margin: [0, -theme.spacing.unit * 0.5],
    display: 'flex',
    opacity: ({ animated }) => (animated ? 0 : 1),
    animation: ({ animated }) => animated && 'show-0 .65s ease 4.5s forwards',
    justifyContent: 'center',
  },

  buttonWrapper: {
    display: 'inline-block',
    margin: [0, theme.spacing.unit * 0.5],
    width: '50%',
  },

  button: {
    padding: `0 ${theme.spacing.unit}px 0`,
    width: '100%',
    boxSizing: 'border-box',
  },

  [theme.mixins.atMedia('sm')]: {
    xsOnly: {
      display: 'none',
    },
    xsHidden: {
      display: 'block',
    },
    inner: {
      paddingTop: theme.spacing.unit * 8,
    },
    imageCol: {
      position: 'relative',
      height: 0,
      overflow: 'visible',
    },
    imageColMargin: {
      margin: 0,
    },
    ctaButton: {
      display: 'inline-block',
    },
    secondCtaButton: {
      margin: 0,
    },
    textCut: {
      paddingRight: '20%',
    },
    descriptionText: {
      fontSize: 23,
      lineHeight: 1.4,
    },
    buttonsContainer: {
      margin: 0,
      display: 'block',
    },
    buttonWrapper: {
      margin: theme.spacing.getSpacing(0, 2),
      width: 'auto',
    },
    button: {
      padding: [0, theme.spacing.unit * 5, 0],
      width: 'auto',
    },
  },
});

export default styles;
