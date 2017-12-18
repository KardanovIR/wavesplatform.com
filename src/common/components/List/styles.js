import bullet from './img/bullet.svg';

export default theme => ({
  list: {
    margin: 0,
    padding: 0,
  },
  item: {
    marginBottom: theme.spacing.unit,
    listStyleType: 'none',
  },
  bulleted: {
    paddingLeft: '2rem',
    background: `url(${bullet}) no-repeat .6rem .5em`,
  },
  [theme.breakpoints.up('md')]: {
    item: {
      marginBottom: theme.spacing.unit * 1.5,
    },
  },
});
