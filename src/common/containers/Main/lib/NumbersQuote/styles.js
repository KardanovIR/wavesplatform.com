import deloitteLogo from './img/deloitte_logo.svg';

const styles = theme => ({
  deloitte: {
    textAlign: 'right',
    borderRight: `6px solid ${theme.palette.grayBlue[500]}`,
    padding: theme.spacing.getSpacing(0.5, 5, 0, 0),
  },
  deloitteLogo: {
    display: 'inline-block',
    background: `url(${deloitteLogo}) no-repeat`,
    width: 136,
    height: 26,
    backgroundSize: '100%',
    marginBottom: theme.spacing.unit,
  },

  numbersContainer: {
  },

  investorsContainer: {
    position: 'relative',
  },

  investorsLabel: {
  },

  investorsText: {
    fontWeight: 600,
    margin: 0 + '!important'
  },

  [theme.mixins.atMedia('md')]: {
    numbersCol: {
      order: 3,
    },
    imageCol: {
      order: 2,
    },
    ctaButton: {
      display: 'inline-block',
    },
    secondCtaButton: {
      margin: 0,
    },
    investorsText: {
      fontWeight: 600,
      margin: 0
    },
  },
  [theme.breakpoints.up('md')]: {
    numbersContainer: {
      paddingTop: theme.spacing.unit * 2
    },
    investorsLabel: {
      position: 'absolute',
      top: -theme.spacing.unit * 1.5,
      left: theme.spacing.getSpacing(1.5),
      transform: 'translateY(-100%)',
      fontWeight: 400,
    },
  },
  [theme.breakpoints.up('lg')]: {
    numbersCol: {
      marginTop: theme.spacing.unit * 10,
    },
    titleTextCtaCol: {
      height: 560,
    },
  },
});

export default styles;
