import map from './img/map.svg';
import bgImage from 'src/common/styles/bgImage';

export default theme => ({
  numbersWrapper: {
    textAlign: 'center',
  },
  number: {
    display: 'inline-block',
    padding: [0, theme.spacing.unit * 4],
  },
  map: {
    ...bgImage,
    backgroundImage: `url(${map})`,
    width: '100%',
    paddingTop: '54%',
    height: 0,
  },
});
