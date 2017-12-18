import { connect } from 'react-redux';

import { getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
    getClientClick({ page: 'get-waves', source: 'main-screen' }),
})(View);
