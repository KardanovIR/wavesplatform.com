const styles = theme => ({
  text: {
    fontWeight: 700,
  },
  [theme.mixins.atMedia('md')]: {
    text: {
      fontWeight: 500,
    },
  },
});

export default styles;
