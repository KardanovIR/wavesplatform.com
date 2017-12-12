import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  root: {
    padding: theme.spacing.getSpacing(0, 1.5)
  },
  col: {
    padding: 0,
    border: `1px solid ${theme.palette.gray[100]}`,
    margin: '-1px 0 0 -1px'
  },
  media: {
    ...flexCentered,
    height: 200,
    backgroundColor: theme.palette.gray[0],
  },
  logo: {
    maxWidth: '80%',
    height: 'auto',
  },
  link: {
    display: 'block',
    opacity: 0.6,
    transition: theme.transitions.create('opacity'),
    '&:hover': {
      opacity: 1,
    },
  },
});

export default styles;
