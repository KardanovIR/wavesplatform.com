import { connect } from 'react-redux';

import { newClientClick, getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onNewClientClick: () =>
    newClientClick({ page: 'index', source: 'main_screen' }),
  onGetClientClick: () =>
    getClientClick({ page: 'index', source: 'main_screen' }),
})(View);
