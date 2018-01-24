import { connect } from 'react-redux';

import { newClientClick, getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onNewClientClick: () =>
    newClientClick({ page: 'Home', source: 'MainScreen' }),
  onGetClientClick: () =>
    getClientClick({ page: 'Home', source: 'MainScreen' }),
})(View);
