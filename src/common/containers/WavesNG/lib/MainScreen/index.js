import { connect } from 'react-redux';

import { newClientClick, getClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
    getClientClick({ page: 'WavesNg', source: 'MainScreen' }),
  onNewClientClick: () =>
    newClientClick({ page: 'WavesNg', source: 'MainScreen' }),
})(View);
