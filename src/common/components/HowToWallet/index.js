import { connect } from 'react-redux';

import { getClientClick } from 'src/public/actions';

import View from './View';

export default connect(null, {
  getClientClick,
})(View);
