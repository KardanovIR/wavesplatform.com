import { connect } from 'react-redux';

import { getClientClick, newClientClick } from 'src/public/actions';

import View from './View';

export default connect(
  s => s,
  dispatch => ({
    onGetClientClick: () =>
      dispatch(getClientClick({ page: 'Product', source: 'MainScreen' })),
    onOnlineClientClick: () =>
      dispatch(newClientClick({ page: 'Product', source: 'MainScreen' })),
  })
)(View);
