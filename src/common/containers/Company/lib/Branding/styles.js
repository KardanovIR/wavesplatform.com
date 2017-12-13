import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  root: {},
  media: {
    ...flexCentered,
    //marginBottom: theme.spacing.unit * 3,
    height: 180,
  },
  logo: {
    maxWidth: '80%',
    height: 'auto',
  },
  link: {
    display: 'block',
    border: '1px solid #d6d6d6',
    marginRight: -1,
    marginBottom: -1,
    opacity: 0.6,
    transition: theme.transitions.create('opacity', 250),
    '&:hover': {
      opacity: 1,
    },
  },
  contactUs: {
    textAlign: 'left',
  },
  bgRow: {
    padding: theme.spacing.getSpacing(10, 0, 14, 0),
  },
});

export default styles;
