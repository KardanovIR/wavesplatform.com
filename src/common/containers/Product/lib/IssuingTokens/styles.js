import token from './img/token.svg';

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit * 8,
    fontSize: 50
  },
  imageWrapper: {
    position: 'relative',
    paddingTop: '100%',
    overflow: 'visible',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,

    background: `url(${token}) no-repeat`,
    backgroundSize: '100%',
  },
  [theme.mixins.atMedia('md')]: {
    title: {
      marginBottom: theme.spacing.unit * 5,
      fontSize: 80
    },
    buttonWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    image: {
      width: '120%',
      height: '120%',
      top: -90,
      left: '10%'
    },
  },
});

export default styles;
