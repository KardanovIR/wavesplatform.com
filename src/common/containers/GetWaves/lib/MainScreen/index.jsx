import { connect } from 'react-redux';

import { getClientClick, newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
  getClientClick({ page: 'get-waves', source: 'main-screen' }),
  onNewClientClick: () =>
  newClientClick({ page: 'get-waves', source: 'main-screen' }),
})(View);
