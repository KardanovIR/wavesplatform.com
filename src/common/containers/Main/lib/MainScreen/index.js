import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

const logSettings = { page: 'Home', source: 'MainScreen' };

export default connect(() => ({ logSettings }), {
  onNewClientClick: () => newClientClick(logSettings),
})(View);
