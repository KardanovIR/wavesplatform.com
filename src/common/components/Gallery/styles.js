import flexCentered from 'src/common/styles/flexCentered';

export default function(theme) {
  return {
    bulletContainer: {
      ...flexCentered,
      position: 'relative',
      width: '100%',
      zIndex: 10,
      bottom: 'auto!important',
      margin: theme.spacing.getSpacing(5, 0, 2)
    },
    bullet: {
      width: theme.spacing.unit * 2,
      height: theme.spacing.unit * 2,
      border: '2px solid #000',
      transform: 'rotate(45deg)',
      transformOrigin: '50% 50%',
      background: 'transparent',
      boxSizing: 'border-box',
      padding: 0,
      appearance: 'none',
      borderRadius: 0,
      margin: [0, theme.spacing.unit * 1.25],
      cursor: 'pointer',
      outline: 'none'
    },
    bulletActive: {
      background: '#000'
    },
    [theme.mixins.atMedia('md')]: {
      bulletContainer: {
        position: 'absolute',
        top: 'auto',
        left: `0px!important`,
        bottom: `${theme.spacing.unit * 5}px!important`,
      },
      bullet: {
        borderColor: '#fff'
      },
      bulletActive: {
        background: '#fff'
      }
    }
  };
}
