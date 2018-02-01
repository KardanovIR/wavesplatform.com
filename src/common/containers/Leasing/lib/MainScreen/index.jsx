import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

const logSettings = { page: 'Leasing', source: 'MainScreen' };

export default connect(() => ({ logSettings }), {
  onNewClientClick: () => newClientClick(logSettings),
})(View);