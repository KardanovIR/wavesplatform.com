import { connect } from 'react-redux';

import { wavesNodeClick, wavesNodeInstallClick } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onWavesNodeClick: () => wavesNodeClick({ page: 'developers', source: 'waves_node' }),
    onWavesNodeInstallClick: () => wavesNodeInstallClick({ page: 'developers', source: 'waves_node' }),
})(View);