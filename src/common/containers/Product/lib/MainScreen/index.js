import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

const logSettings = { page: 'Product', source: 'MainScreen' };

export default connect(() => ({ logSettings }), {
  onOnlineClientClick: () => newClientClick(logSettings),
})(View);
