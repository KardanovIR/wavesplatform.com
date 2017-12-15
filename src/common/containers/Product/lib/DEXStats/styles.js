export default function(theme) {
  return {
    number: {
      marginBottom: theme.spacing.unit * 1.5,
      fontSize: 30
    },
    [theme.mixins.atMedia('md')]: {
      number: {
        fontWeight: 400,
      },
    }
  };
}
