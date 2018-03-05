import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

export default connect(null, {
  getClientClick: newClientClick,
})(View);
