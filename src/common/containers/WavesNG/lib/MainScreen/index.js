import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onNewClientClick: () =>
    newClientClick({ page: 'waves-ng', source: 'main_screen' }),
})(View);
