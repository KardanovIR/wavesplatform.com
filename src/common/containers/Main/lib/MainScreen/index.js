import { connect } from 'react-redux';

import { newClientClick, getWavesClick, } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onGetClientClick: () => newClientClick({ page: 'index', source: 'main_screen' }),
    onGetWavesClick: () => getWavesClick({ page: 'index', source: 'main_screen' }),
})(View);