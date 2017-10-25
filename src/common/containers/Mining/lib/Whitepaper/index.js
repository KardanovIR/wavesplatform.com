import { connect } from 'react-redux';

import { whitepaperDownload } from 'src/public/actions';

import View from './View';

export default connect(s => s, {
    onWhitepaperClick: () => whitepaperDownload({ page: 'company', source: 'whitepaper' }),
})(View);