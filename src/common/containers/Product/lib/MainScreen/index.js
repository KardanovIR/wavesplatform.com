import { connect } from 'react-redux';

import { getClientClick, onlineClientClick, } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onGetClientClick: () => getClientClick({ page: 'product', source: 'main_screen' }),
    onOnlineClientClick: () => onlineClientClick({ page: 'product', source: 'main_screen' }),
})(View);