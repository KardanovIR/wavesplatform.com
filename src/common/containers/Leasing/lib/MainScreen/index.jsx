import { connect } from 'react-redux';

import { getClientClick, newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
  getClientClick({ page: 'Leasing', source: 'MainScreen' }),
  onNewClientClick: () =>
  newClientClick({ page: 'Leasing', source: 'MainScreen' }),
})(View);
