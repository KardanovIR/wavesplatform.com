import { connect } from 'react-redux';

import { wavesNodeClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onWavesNodeClick: () => wavesNodeClick({ page: 'mining', source: 'waves_node' }),
})(View);