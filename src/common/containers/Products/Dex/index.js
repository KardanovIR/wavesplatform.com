import { connect } from 'react-redux';

import View from './View.jsx';
import { newDexClick } from 'src/public/actions';
import { downloadClientChange } from 'src/common/containers/DownloadClientDropdown/lib/actions';
import { newClientClick } from 'src/public/actions';

const logSettings = {
  MainScreen: {
    page: 'ProductDex',
    source: 'MainScreen',
  },
  GetClient: { page: 'ProductDex', source: 'Footer' },
};

export default connect(
  undefined,
  {
    onNewDexClick: () => newDexClick(logSettings.MainScreen),
    onNewClientClick: () => newClientClick(logSettings.GetClient),
    onClientDownload: downloadClientChange(logSettings.GetClient),
  }
)(View);
