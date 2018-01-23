import { connect } from 'react-redux';

import { newClientClick, getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
    getClientClick({ page: 'waves-ng', source: 'main_screen' }),
  onNewClientClick: () =>
    newClientClick({ page: 'waves-ng', source: 'main_screen' }),
})(View);
