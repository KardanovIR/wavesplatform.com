import { connect } from 'react-redux';

import { getClientClick, newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
  getClientClick({ page: 'GetWaves', source: 'MainScreen' }),
  onNewClientClick: () =>
  newClientClick({ page: 'GetWaves', source: 'MainScreen' }),
})(View);
