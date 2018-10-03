import Facts from 'src/common/components/Facts';
import { connect } from 'react-redux';
import { path, compose, objOf } from 'ramda';

export default connect(
  compose(
    objOf('tokens'),
    path(['dexData', 'dexAssets'])
  )
)(Facts);
