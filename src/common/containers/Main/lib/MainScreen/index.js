import { connect } from 'react-redux';

import { getClientClick, getWavesClick, } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onGetClientClick: () => getClientClick({ page: 'index', source: 'main_screen' }),
    onGetWavesClick: () => getWavesClick({ page: 'index', source: 'main_screen' }),
})(View);