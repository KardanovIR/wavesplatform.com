const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '600px',
  },
  textCentered: {
    textAlign: 'center',
  },
  formWrapper: {
    margin: `${theme.spacing.unit * 3}px auto 0`,
    maxWidth: 400,
  },
  [theme.mixins.atMedia('md')]: {
    formWrapper: {
      margin: `${theme.spacing.unit * 4}px auto 0`,
      maxWidth: 400,
    },
  },
});

export default styles;
