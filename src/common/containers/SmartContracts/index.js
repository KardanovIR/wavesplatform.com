import { connect } from 'react-redux';

import View from './View.jsx';
import { smartContractsWPDownload } from 'src/public/actions';

export default connect(
  undefined,
  {
    onDocumentationClick: () =>
      smartContractsWPDownload({
        page: 'SmartContracts',
        source: 'MainScreen',
      }),
  }
)(View);
