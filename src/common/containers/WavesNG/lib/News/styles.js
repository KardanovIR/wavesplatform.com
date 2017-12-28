import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  root: {
    padding: theme.spacing.getSpacing(0, 1.5),
  },
  imageCol: {
    display: 'none',
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
  },
  image: {},
  col: {
    padding: 0,
    border: `1px solid ${theme.palette.gray[100]}`,
    margin: '-1px 0 0 -1px',
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
  [theme.mixins.atMedia('md')]: {
    imageCol: {
      display: 'flex',
      alignItems: 'flex-end'
    },
  },
});

export default styles;
