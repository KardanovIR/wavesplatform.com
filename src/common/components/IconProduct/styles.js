import shadow from 'src/common/styles/shadow';
import flexCentered from 'src/common/styles/flexCentered';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  centered: flexCentered,
  rootCustomSize: {
    width: props => props.size,
    height: props => props.size,
  },
  innerWrapper: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
