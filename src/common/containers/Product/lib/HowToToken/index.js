import { connect } from 'react-redux';

import { newClientClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
  onGetClientClick: () =>
    newClientClick({ page: 'Product', source: 'HowToToken' }),
})(View);
