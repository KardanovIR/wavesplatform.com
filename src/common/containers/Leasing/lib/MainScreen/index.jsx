import { connect } from 'react-redux';

import { getClientClick, newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
  getClientClick({ page: 'leasing', source: 'main-screen' }),
  onNewClientClick: () =>
  newClientClick({ page: 'leasing', source: 'main-screen' }),
})(View);
