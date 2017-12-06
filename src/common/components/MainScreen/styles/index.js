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

  buttonWrapper: {
    display: 'inline-block',
    margin: [0, theme.spacing.unit * 2, theme.spacing.unit * 2, 0],
    '&:last-of-type': {
      marginRight: 0,
    },
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
  },
});

export default styles;
