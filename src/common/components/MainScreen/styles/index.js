import image from './image';
import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  ...image(theme),

  xsHidden: {
    display: 'none',
  },

  root: {
    ...flexCentered,
    textAlign: 'center',
    height: '100%',
  },

  imageColMargin: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 2
  },

  buttonsContainer: {
    margin: [0, -theme.spacing.unit * .5],
    display: 'flex',
  },

  buttonWrapper: {
    display: 'inline-block',
    margin: [0, theme.spacing.unit * .5],
    width: '50%',
  },

  button: {
    padding: `3px ${theme.spacing.unit}px 0`,
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
      lineHeight: 1.4
    },
    buttonsContainer: {
      margin: 0,
      display: 'block'
    },
    buttonWrapper: {
      margin: theme.spacing.getSpacing(0, 2),
      width: 'auto',
    },
    button: {
      padding: [3, theme.spacing.unit * 5, 0],
      width: 'auto',
    }
  },
});

export default styles;
