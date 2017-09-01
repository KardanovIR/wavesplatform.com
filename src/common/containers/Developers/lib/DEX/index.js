import { connect } from 'react-redux';

import { dexApiClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onDexApiClick: () => dexApiClick({ page: 'developers', source: 'dex_api' }),
})(View);