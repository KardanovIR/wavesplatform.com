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

  inner: {
    paddingTop: theme.spacing.unit * 8,
    width: '100%',
  },

  title: {
    lineHeight: 1.05,
  },

  imageColMargin: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 2,
    textAlign: ({ alignMobile }) => alignMobile,

    [theme.breakpoints.up('md')]: {
      textAlign: ({ align }) => align,
    },
    color: ({ inverted }) => (inverted ? theme.palette.gray[0] : 'inherit'),
  },

  buttonsContainer: {
    margin: [0, -theme.spacing.unit * 0.5],
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: ({ align }) => {
        switch (align) {
          case 'left':
            return 'flex-start';
          case 'center':
            return 'center';
        }
      },
    },
  },

  buttonWrapper: {
    display: 'inline-block',
    width: '68%',
    margin: ({ align }) => {
      switch (align) {
        case 'left':
          return `0 ${theme.spacing.unit * 4}px 0 0`;
        case 'center':
          return `0 ${theme.spacing.unit * 0.5}px 0 0`;
      }
    },
    '&:last-child': {
      marginRight: 0,
    },
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
